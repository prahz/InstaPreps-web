import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import imageCompression from 'browser-image-compression';
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from 'react-katex';
import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

// --- ICONS ---
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </svg>
);
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);
const ErrorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

const ActionType = {
    FIRST_STEP: 'first_step',
    SECOND_STEP: 'second_step'
};

const TestScore = dynamic(() => import('pages/scoreByUser'), { ssr: false });
const InstructionTest = dynamic(() => import('./instruction'), { ssr: false });

const Test = () => {
    const [startTest, setStartTest] = useState(false);
    const [isCdsEnabled, setIsCdsEnabled] = useState(false);
    const [reportTest, setReportTest] = useState(null);
    const router = useRouter();
    const { query } = router;
    const [mockQuestion, setMockQuestion] = useState([]);
    const [testName, setTestName] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });
    const [myAnswer, setMyAnswer] = useState(-1);
    const [active, setActive] = useState(ActionType.FIRST_STEP);
    const [user] = useState('7942');
    const [currentQuestionId, setCurrentQuestionId] = useState(-1);
    const [totalMarks, setTotalmarks] = useState(0);
    const videoRef = useRef(null);
    const timerRef = useRef(null);
    const [confidenceState, setConfidenceState] = useState('analyzing');
    const [timerColor, setTimerColor] = useState('text-slate-700');
    const [analyzingDotIndex, setAnalyzingDotIndex] = useState(0);
    const analysisIntervalRef = useRef(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [notification, setNotification] = useState({ type: '', message: '' });
    const wrapperRef = useRef(null);
    const [scale, setScale] = useState(1);
    const canvasRef = useRef(null);
    const faceLandmarkerRef = useRef(null);
    const lastVideoTimeRef = useRef(-1);
    const animationFrameIdRef = useRef(null);
    const predictRef = useRef(() => {});
    // scan animation
    const scanLineRef = useRef(0);
    const scanDirectionRef = useRef(1);
    const scanAnimRef = useRef(null);
    const [faceVisible, setFaceVisible] = useState(false);

    const currentQues = mockQuestion[currentQuestion] || {};

    const options = [
        { id: 1, text: currentQues.option_one || '' },
        { id: 2, text: currentQues.option_two || '' },
        { id: 3, text: currentQues.option_three || '' },
        { id: 4, text: currentQues.option_four || '' },
    ].filter(option => option.text);

    const renderContent = (text) => {
        if (!text && text !== 0) return null;
        const str = String(text);
        const re = /(\\\((([\s\S]*?)?)\\\))|(\\\[((.*?)?)\\\])|(\$\$([\s\S]*?)\$\$)|(\$([^$]*?)\$)/g;
        let lastIndex = 0;
        const parts = [];
        let match;
        while ((match = re.exec(str)) !== null) {
            if (match.index > lastIndex) {
                parts.push({ type: 'text', content: str.slice(lastIndex, match.index) });
            }
            const math = match[3] || match[6] || match[8] || match[10] || '';
            const isBlock = !!(match[2] || match[5] || match[7]);
            parts.push({ type: 'math', content: (math || '').trim(), block: isBlock });
            lastIndex = re.lastIndex;
        }
        if (lastIndex < str.length) {
            parts.push({ type: 'text', content: str.slice(lastIndex) });
        }
        if (parts.length === 1 && parts[0].type === 'text') {
            return parts[0].content;
        }
        return parts.map((p, idx) => {
            if (p.type === 'text') return <span key={`t-${idx}`}>{p.content}</span>;
            return p.block ? <BlockMath key={`m-${idx}`} math={p.content} /> : <InlineMath key={`m-${idx}`} math={p.content} />;
        });
    };

    // prediction function assigned into predictRef.current
    predictRef.current = useCallback(() => {
    const video = videoRef.current;
    const landmarker = faceLandmarkerRef.current;
    const canvas = canvasRef.current;

    if (!video || !landmarker || !canvas) {
        animationFrameIdRef.current = requestAnimationFrame(predictRef.current);
        return;
    }

    if (video.readyState < 2) {
        animationFrameIdRef.current = requestAnimationFrame(predictRef.current);
        return;
    }

    try {
        const videoTime = video.currentTime;

        if (videoTime !== lastVideoTimeRef.current) {
            lastVideoTimeRef.current = videoTime;

            const results = landmarker.detectForVideo(video, Date.now());
            const ctx = canvas.getContext("2d");

            if (!ctx) {
                animationFrameIdRef.current = requestAnimationFrame(predictRef.current);
                return;
            }

            // Clear frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (results?.faceLandmarks && results.faceLandmarks.length > 0) {
                setFaceVisible(true);

                const landmarks = results.faceLandmarks[0];
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;

                // FACE BOUNDING AREA
                const xs = landmarks.map(p => p.x * canvasWidth);
                const ys = landmarks.map(p => p.y * canvasHeight);

                const minX = Math.min(...xs);
                const maxX = Math.max(...xs);
                const minY = Math.min(...ys);
                const maxY = Math.max(...ys);

                const faceWidth = maxX - minX;
                const faceHeight = maxY - minY;

                // SCAN LINE POSITION
                const scanY = minY + faceHeight * scanLineRef.current;

                // === CLEAN TURQUOISE SCAN BAR ===
                ctx.strokeStyle = "#13d0c5";
                ctx.lineWidth = 2;

                ctx.beginPath();
                ctx.moveTo(minX, scanY);
                ctx.lineTo(maxX, scanY);
                ctx.stroke();

                // === CORNER FRAME (same as icon) ===
                ctx.strokeStyle = "";
                ctx.lineWidth = 2;
                const corner = 20;

                // Top-left
                ctx.beginPath();
                ctx.moveTo(minX, minY + corner);
                ctx.lineTo(minX, minY);
                ctx.lineTo(minX + corner, minY);
                ctx.stroke();

                // Top-right
                ctx.beginPath();
                ctx.moveTo(maxX - corner, minY);
                ctx.lineTo(maxX, minY);
                ctx.lineTo(maxX, minY + corner);
                ctx.stroke();

                // Bottom-left
                ctx.beginPath();
                ctx.moveTo(minX, maxY - corner);
                ctx.lineTo(minX, maxY);
                ctx.lineTo(minX + corner, maxY);
                ctx.stroke();

                // Bottom-right
                ctx.beginPath();
                ctx.moveTo(maxX - corner, maxY);
                ctx.lineTo(maxX, maxY);
                ctx.lineTo(maxX, maxY - corner);
                ctx.stroke();

            } else {
                setFaceVisible(false);
            }
        }

    } catch (err) {
        console.error("Error in face loop:", err);
    }

    animationFrameIdRef.current = requestAnimationFrame(predictRef.current);
}, []);
    useEffect(() => {
        if (isCdsEnabled) {
            setConfidenceState('analyzing');
            if (analysisIntervalRef.current) clearInterval(analysisIntervalRef.current);
            analysisIntervalRef.current = setInterval(() => {
                setAnalyzingDotIndex(prevIndex => (prevIndex + 1) % 3);
            }, 300);
            return () => { if (analysisIntervalRef.current) clearInterval(analysisIntervalRef.current); };
        }
    }, [isCdsEnabled, currentQuestion]);

    // --- UPDATED to restore old behavior ---
    const checkAnswer = async (answer) => {
        setMyAnswer(answer);
        setNotification({ type: '', message: '' });

        if (!isCdsEnabled) {
            setConfidenceState('not-applicable');
            return;
        }

        setIsProcessing(true);
        try {
            const videoNode = videoRef.current;
            if (!videoNode) {
                console.warn("Video element not available.");
                setConfidenceState('not-sure');
                return;
            }

            const stream = videoNode.srcObject;
            const hasActiveTrack = !!(stream && typeof stream.getTracks === 'function' && stream.getTracks().some(t => t && t.readyState === 'live'));
            if (!stream || !hasActiveTrack || videoNode.readyState < 3) {
                console.warn("Video stream not available or not active for analysis.");
                setConfidenceState('not-sure');
                return;
            }

            // capture current frame into canvas
            const canvas = document.createElement('canvas');
            canvas.width = videoNode.videoWidth || 640;
            canvas.height = videoNode.videoHeight || 480;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                console.warn("Could not get canvas context for capture.");
                setConfidenceState('not-sure');
                return;
            }
            ctx.drawImage(videoNode, 0, 0, canvas.width, canvas.height);

            const imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            if (!imageBlob || imageBlob.size === 0) {
                console.warn("Captured image blob is empty. Skipping analysis.");
                setConfidenceState('not-sure');
                return;
            }

            // convert Blob -> File for imageCompression
            const captureFile = new File([imageBlob], 'capture.png', { type: imageBlob.type || 'image/png' });
            const options = { maxSizeMB: 1, maxWidthOrHeight: 1024, useWebWorker: true };
            const compressedFile = await imageCompression(captureFile, options);

            const formData = new FormData();
            formData.append('file', compressedFile, compressedFile.name || 'capture.png');

            const response = await axios.post('https://acm.instapreps.com/predict', formData);
            if (response?.data?.predictions?.length > 0) {
                const { is_confident } = response.data.predictions[0];
                setConfidenceState(is_confident ? 'confident' : 'not-confident');
            } else {
                setConfidenceState('not-sure');
            }
        } catch (error) {
            console.error("Failed to analyze confidence:", error);
            setConfidenceState('not-sure');
        } finally {
            setIsProcessing(false);
        }
    };

    const getReport = useCallback(async () => {
        if (timerRef.current) clearInterval(timerRef.current);

        try {
            setActive(ActionType.SECOND_STEP);

            const report = {
            student_id: Number(user),
            test_id: Number(query?.id),
            cds: isCdsEnabled,
            };

            const response = await axios.post(`/api/report`, report);

            if (typeof window !== 'undefined') {
            localStorage.setItem("report id", response.data.data.id);
            }

            setReportTest(response.data.data);}
        catch (e) {
            console.error("Failed to get report:", e);
            setNotification({
            type: 'error',
            message: "Could not generate the report.",
            });
    }
}, [user, query?.id, isCdsEnabled]);


    const handleNextOrSubmit = async () => {
        if (myAnswer === -1) {
            setNotification({
            type: 'error',
            message: "Please select an answer to continue.",
            });
            return;
        }

        setIsProcessing(true);
        setNotification({ type: '', message: '' });

        const isLastQuestion =
            currentQuestion === mockQuestion.length - 1;

        try {
            const body = {
            test_id: query?.id?.toString(),
            question_id: currentQuestionId?.toString(),
            student_id: user,
            answer_id: myAnswer?.toString(),
            answer_by_user: myAnswer?.toString(),
            confidence_status: isCdsEnabled ? '1' : 'disabled',
            };

            await axios.post(`/api/answerbystudent`, body);

            if (isLastQuestion) {
            await getReport();
            } else {
            const next = currentQuestion + 1;
            setCurrentQuestion(next);
            setCurrentQuestionId(mockQuestion[next].id);
            setMyAnswer(-1);
            }
        } catch (e) {
            console.error("Failed to submit answer:", e);
            setNotification({
            type: 'error',
            message: "Error submitting answer.",
            });
        } finally {
            setIsProcessing(false);
        }
        };


    const previousQuestion = () => {
        const prevQuestionIndex = currentQuestion - 1;
        if (prevQuestionIndex >= 0 && mockQuestion[prevQuestionIndex]) {
            setMyAnswer(-1);
            setCurrentQuestion(prevQuestionIndex);
            setCurrentQuestionId(mockQuestion[prevQuestionIndex].id);
            setNotification({ type: '', message: '' });
        }
    };

    const changeStartTest = (isCameraEnabled) => {
        setIsCdsEnabled(isCameraEnabled);
        setStartTest(true);
    };

    useEffect(() => {
        const getQuestion = async () => {
            if (!query?.id) return;

            try {
            const response = await axios.get(
                `/api/testpaper/forstudent/${query.id}`
            );

            const { questions, ...testData } = response.data.data;

            if (!questions?.length) {
                setNotification({
                type: 'error',
                message: "No questions found for this test.",
                });
                return;
            }

            setMockQuestion(questions);
            setTestName(testData);
            setCurrentQuestionId(questions[0].id);
            setTotalmarks(
                questions.reduce((t, q) => t + Number(q.marks), 0)
            );
            } catch (error) {
            console.error("Failed to fetch questions:", error);
            setNotification({
                type: 'error',
                message: "Failed to load test.",
            });
            }
        };

        getQuestion();
        }, [query?.id]);


    useEffect(() => {
        let mounted = true;
        const createFaceLandmarker = async () => {
            try {
                const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm");
                const landmarker = await FaceLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
                        delegate: "GPU"
                    },
                    runningMode: "VIDEO",
                    numFaces: 1
                });
                if (mounted) {
                    faceLandmarkerRef.current = landmarker;
                }
            } catch (error) {
                console.error("Error initializing FaceLandmarker:", error);
                setNotification({ type: 'error', message: "Could not load face analysis feature." });
            }
        };
        createFaceLandmarker();
        return () => { mounted = false; };
    }, []);

    useEffect(() => {
        if (!startTest || !isCdsEnabled) return;
        let stream = null;
        const setupCameraAndCanvas = async () => {
            if (!navigator.mediaDevices?.getUserMedia) {
                setNotification({ type: 'error', message: "Camera not supported on this browser." });
                return;
            }
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    // ensure canvas matches video dim when metadata loads
                    videoRef.current.onloadedmetadata = () => {
                        const video = videoRef.current;
                        const canvas = canvasRef.current;
                        if (video && canvas) {
                            // set logical canvas pixel size to video dims
                            canvas.width = video.videoWidth || canvas.width || 640;
                            canvas.height = video.videoHeight || canvas.height || 480;
                        }
                        // start prediction loop
                        if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
                        animationFrameIdRef.current = requestAnimationFrame(predictRef.current);
                    };
                    // try to play (some browsers require play call)
                    try { videoRef.current.play().catch(() => {}); } catch (e) { /* ignore */ }
                }
            } catch (err) {
                console.error("Error accessing camera: ", err);
                const message = (err.name === "NotAllowedError" || err.name === "PermissionDeniedError")
                    ? "Camera access was denied. Confidence analysis will be disabled."
                    : "Could not access camera. Please ensure it is not in use by another application.";
                setNotification({ type: 'error', message });
            }
        };
        setupCameraAndCanvas();
        return () => {
            if (stream) {
                try { stream.getTracks().forEach(track => track.stop()); } catch (e) { /* ignore */ }
            }
            if (videoRef.current?.srcObject) {
                try { videoRef.current.srcObject.getTracks().forEach(track => track.stop()); } catch (e) { /* ignore */ }
                try { videoRef.current.srcObject = null; } catch (e) { /* ignore */ }
            }
            if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
        };
    }, [startTest, isCdsEnabled, predictRef]);

    useEffect(() => {
        if (!startTest || !isCdsEnabled) return;
        function step() {
            const next = scanLineRef.current + 0.015 * scanDirectionRef.current;
            if (next > 1) { scanLineRef.current = 1; scanDirectionRef.current = -1; }
            else if (next < 0) { scanLineRef.current = 0; scanDirectionRef.current = 1; }
            else { scanLineRef.current = next; }
            scanAnimRef.current = requestAnimationFrame(step);
        }
        scanAnimRef.current = requestAnimationFrame(step);
        return () => { if (scanAnimRef.current) cancelAnimationFrame(scanAnimRef.current); };
    }, [startTest, isCdsEnabled]);

    const startTimer = useCallback(() => {
        const duration = testName.duration || 5;
        const countDownTime = Date.now() + 60000 * duration;
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            const distance = countDownTime - Date.now();
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                setTime({ minutes: 0, seconds: 0 });
                setNotification({ type: 'info', message: "Time is up! Submitting your test." });
                getReport();
            } else {
                setTime({ minutes, seconds });
            }
        }, 1000);
    }, [testName.duration, getReport]);

    useEffect(() => {
        if (startTest && (testName.duration > 0)) startTimer();
    }, [startTest, testName.duration, startTimer]);

    useEffect(() => {
        if (testName.duration) {
            const totalSeconds = testName.duration * 60;
            const remainingSeconds = time.minutes * 60 + time.seconds;
            if (remainingSeconds <= totalSeconds / 4 && remainingSeconds > 0) {
                setTimerColor('text-red-500 animate-pulse');
            } else {
                setTimerColor('text-slate-700');
            }
        }
    }, [time, testName.duration]);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (analysisIntervalRef.current) clearInterval(analysisIntervalRef.current);
            if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
            if (scanAnimRef.current) cancelAnimationFrame(scanAnimRef.current);
        };
    }, []);

    useLayoutEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        if (active === ActionType.SECOND_STEP) {
            el.style.transform = 'none';
            el.style.width = '100%';
            el.style.transformOrigin = 'center center';
            return;
        }
        const updateScale = () => {
            el.style.transform = 'none';
            el.style.width = '100%';
            const contentHeight = el.scrollHeight;
            const viewportHeight = window.innerHeight;
            let newScale = 1;
            if (contentHeight > viewportHeight) {
                newScale = Math.max(0.65, viewportHeight / contentHeight);
            }
            setScale(newScale);
            el.style.transform = `scale(${newScale})`;
            el.style.transformOrigin = 'top center';
            el.style.width = `${100 / newScale}%`;
        };
        updateScale();
        let ro = null;
        try {
            ro = new ResizeObserver(updateScale);
            ro.observe(el);
        } catch (e) {
            window.addEventListener('resize', updateScale);
        }
        return () => {
            if (ro) ro.disconnect();
            window.removeEventListener('resize', updateScale);
        };
    }, [startTest, active, currentQuestion]);

    const progressPercentage = mockQuestion.length > 0 ? ((currentQuestion + 1) / mockQuestion.length) * 100 : 0;
    const displayTime = `${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
    const isLastQuestion = mockQuestion.length > 0 && currentQuestion === mockQuestion.length - 1;

    if (notification.type === 'error' && !startTest) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-50 text-red-600 font-semibold text-sm p-4 text-center">
                <ErrorIcon />
                <span className="ml-2">{notification.message}</span>
            </div>
        );
    }

    return (
        <div className={`w-full bg-slate-100 ${active === ActionType.SECOND_STEP ? 'min-h-screen' : 'h-screen overflow-hidden'}`}>
            <div ref={wrapperRef} className="max-w-screen-xl mx-auto" style={{ transition: 'transform 200ms ease' }}>
                {startTest ? (
                    <div className="font-sans">
                        {active === ActionType.FIRST_STEP && (
                            <>
                                <header className="bg-white shadow-sm sticky top-0 z-10">
                                    <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6">
                                        <div className="flex justify-between items-center py-2">
                                            <div className="flex items-center gap-2">
                                                <Image src="/images/InstaPrepsLogo.png" alt="InstaPrepsAI Logo" width={28} height={28} className="rounded-md" />
                                                <div>
                                                    <h1 className="text-sm font-bold text-slate-800 hidden sm:block">InstaPrepsAI</h1>
                                                    <p className="text-xs font-semibold text-blue-700">{testName.test_name || 'Loading...'}</p>
                                                </div>
                                            </div>
                                            <div className={`flex items-center gap-2 p-1 rounded-lg ${timerColor}`}>
                                                <ClockIcon />
                                                <span className="font-bold text-sm tracking-wider">{displayTime}</span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-1">
                                            <div className="bg-green-500 h-1 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                                        </div>
                                    </div>
                                </header>
                                <main className="max-w-screen-xl mx-auto p-3 sm:p-4 lg:p-6">
                                    <div className={`grid grid-cols-1 ${isCdsEnabled ? 'lg:grid-cols-3' : ''} gap-3`}>
                                        <div className={`${isCdsEnabled ? 'lg:col-span-2' : ''} bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-slate-200`}>
                                            <div className="mb-4">
                                                <p className="text-xs font-medium text-slate-500 mb-1">Question {currentQuestion + 1} of {mockQuestion.length}</p>
                                                <p className="text-slate-800 font-semibold text-lg sm:text-xl leading-tight">
                                                    <span>{renderContent(currentQues.question_body)}</span>
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                {options.map((option, index) => (
                                                    <button key={option.id} onClick={() => checkAnswer(option.id)}
                                                        className={`w-full text-left p-3 sm:p-3 border rounded-lg transition-all duration-200 flex items-center text-sm font-medium ${myAnswer === option.id ? 'bg-green-50 border-2 border-green-500' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
                                                        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 transition-colors ${myAnswer === option.id ? 'bg-green-500 text-white text-xs' : 'bg-slate-200 text-slate-600 text-xs'}`}>
                                                            {String.fromCharCode(65 + index)}
                                                        </div>
                                                        <span className="text-slate-800 text-sm">{renderContent(option.text)}</span>
                                                    </button>
                                                ))}
                                            </div>
                                            {myAnswer !== -1 && (<div className="mt-4 flex items-center text-green-600 font-medium text-sm"><CheckIcon /><span className="ml-2">Your response has been recorded.</span></div>)}
                                            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
                                                <button onClick={previousQuestion} className="bg-slate-100 text-slate-700 font-bold px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm" disabled={currentQuestion === 0 || isProcessing}>Back</button>
                                                <button onClick={handleNextOrSubmit} className="font-bold px-4 py-2 rounded-lg transition-all shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-wait text-sm" disabled={myAnswer === -1 || isProcessing}>
                                                    {isProcessing ? 'Processing...' : (isLastQuestion ? 'Submit Test' : 'Next')}
                                                </button>
                                            </div>
                                            {notification.message && (<div className={`mt-3 p-2 rounded-md flex items-center text-xs font-medium ${notification.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{notification.type === 'error' && <ErrorIcon />}<span className="ml-2">{notification.message}</span></div>)}
                                        </div>
                                        {isCdsEnabled && (
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                                                    <h2 className="font-bold text-sm text-blue-700 text-center">Confidence Analysis</h2>
                                                    <p className="text-[10px] text-slate-500 text-center mb-3">(Powered by ACM Confidence Model)</p>
                                                    <div className="flex justify-around items-center pt-1">
                                                        {[{ result: 'confident', color: 'bg-green-500 border-green-600' }, { result: 'not-confident', color: 'bg-red-500 border-red-600' }, { result: 'not-sure', color: 'bg-gray-500 border-gray-600' }].map((dot, index) => (<div key={index} className={`w-10 h-10 border-2 rounded-full transition-all duration-300 ${confidenceState === 'analyzing' && analyzingDotIndex === index ? `${dot.color} scale-105 shadow-md` : confidenceState === dot.result ? `${dot.color} scale-105 shadow-md` : 'bg-slate-200 border-slate-300'}`}></div>))}
                                                    </div>
                                                </div>
                                                <div className="relative bg-black aspect-video rounded-xl shadow-sm overflow-hidden">
                                                    <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover rounded-xl" id="userVideo"></video>
                                                    <canvas ref={canvasRef} id="faceOverlay" className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl"></canvas>
                                                    <div className="absolute top-2 right-2">
                                                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><div className="w-2 h-2 bg-white rounded-full"></div>LIVE</span>
                                                    </div>
                                                    <div className="absolute left-2 bottom-2 text-xs text-white/80 bg-black/25 px-2 py-1 rounded">{faceVisible ? 'Face Detected' : 'No Face Detected'}</div>
                                                </div>
                                                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                                                    <h2 className="font-bold text-sm text-blue-700 mb-2 text-center">Test Progress</h2>
                                                    <div className="flex justify-around text-center text-xs">
                                                        <div><p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Total Time</p><p className="font-bold text-xl text-slate-800">{testName.duration || 'N/A'}<span className="text-[10px] ml-1">mins</span></p></div>
                                                        <div><p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Questions</p><p className="font-bold text-xl text-slate-800">{mockQuestion.length}</p></div>
                                                        <div><p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Remaining</p><p className="font-bold text-xl text-slate-800">{mockQuestion.length > 0 ? mockQuestion.length - (currentQuestion + 1) : 0}</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </main>
                            </>
                        )}
                        {active === ActionType.SECOND_STEP && <TestScore reportTest={reportTest} />}
                    </div>
                ) : (
                    <InstructionTest changeStartTest={changeStartTest} marks={totalMarks} time={time} testName={testName} questions={mockQuestion ? mockQuestion.length : 0} />
                )}
            </div>
        </div>
    );
};

export default Test;
