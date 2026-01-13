import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TestScore = ({ reportTest }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    // ✅ Helper function to capitalize first letter
    const capitalizeFirst = (str) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // ✅ NEW: Subject Name from localStorage
    const subjectName =
        typeof window !== "undefined"
            ? localStorage.getItem("currentTestSubject")
            : "";

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userDataString = localStorage.getItem("user");
            if (!userDataString) {
                router.push("/login");
            } else {
                try {
                    const userData = JSON.parse(userDataString);
                    setUser(userData);
                } catch (error) {
                    console.error("Failed to parse user data from localStorage", error);
                    router.push("/login");
                }
            }
        }
    }, [router]);

    // --- LOADING / ANALYZING SCREEN ---
    if (!reportTest) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen w-full bg-blue-50">
                <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow-xl">
                    <svg className="animate-spin h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h2 className="text-3xl font-bold text-gray-800 mt-6">Analyzing Your Results</h2>
                    <p className="text-gray-500 mt-2 text-lg">Please wait while we generate your detailed performance report...</p>
                </div>
            </div>
        );
    }

    if (!user) return null;

    // --- DYNAMIC DATA FOR PIE CHART ---
    const pieChartData = [
        { title: "Mastery", value: Number(reportTest?.mastery) || 0, color: "#22c55e" },
        { title: "Misinformed", value: Number(reportTest?.misinformed) || 0, color: "#ef4444" },
        { title: "Doubt", value: Number(reportTest?.doubt) || 0, color: "#f59e0b" },
        { title: "Uninformed", value: Number(reportTest?.uninformed) || 0, color: "#be9623" },
    ].filter(entry => entry.value > 0);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-50 p-4">
            <div className="flex flex-col justify-center items-center gap-4 w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">

                {/* User's Name and Assessment Title Section */}
                <div className="w-full bg-blue-100 flex justify-center items-center rounded-lg p-4">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {user?.name && capitalizeFirst(user.name)}
                        </h1>
                        <p className="text-lg text-blue-600 font-semibold mt-1">Assessment Report</p>

                        {/* ✅ NEW: subject name displayed here */}
                        <p className="text-sm text-gray-700 mt-1">
                            {subjectName || reportTest?.test_name || 'Test'}
                        </p>
                    </div>
                </div>

                {/* Score Message */}
                <div className="text-center mt-6 w-[90%] max-w-lg">
                    <p className="font-medium text-lg">
                        Hi {capitalizeFirst(user?.first_name)}, Thank you for taking this Confidence Diagnosis Test. 
                        You have scored {reportTest?.cba_score}%.
                    </p>
                    <p className="font-medium text-lg mt-4">
                        However, based on our confidence-based algorithm, you are most likely to score {`${reportTest?.standard_score}%`} in such tests.
                    </p>
                </div>

                {/* Share Message Section */}
                <div className="mt-8 p-4 w-full bg-blue-500 rounded-lg flex flex-col justify-center items-center text-center text-white py-4">
                    <p className="text-lg font-normal">
                        You can share this report with your teacher and friends.
                    </p>
                    <div className="mt-4 rounded-full flex justify-center items-center bg-white overflow-hidden" style={{ width: '58px', height: '58px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                    </div>
                </div>

                {/* Confidence Diagnosis Report Section */}
                <div className='flex flex-col items-center justify-center w-full mt-8 p-6'>
                    <h2 className='font-semibold text-gray-800 text-3xl mb-6'>Confidence Diagnosis Report</h2>

                    <div className="w-full max-w-md flex flex-col gap-y-3 mb-8 text-lg">
                        <p className='flex items-center'><span className="text-green-500 text-2xl w-8">✓</span> Confident and correct → Mastery ({reportTest?.mastery || 0}%)</p>
                        <p className='flex items-center'><span className="text-red-500 text-2xl w-8">✗</span> Confident and wrong → Misinformed ({reportTest?.misinformed || 0}%)</p>
                        <p className='flex items-center'><span className="text-yellow-400 text-2xl w-8">✗</span> Not Confident and correct → Doubt ({reportTest?.doubt || 0}%)</p>
                        <p className='flex items-center'><span className="text-red-500 text-2xl w-8">✗</span> Not Confident and wrong → Uninformed ({reportTest?.uninformed || 0}%)</p>
                    </div>

                    {/* Doughnut Chart */}
                    <div className="mt-4 flex flex-col items-center">
                        <div className="w-full max-w-[250px]">
                            <PieChart
                                data={pieChartData}
                                lineWidth={65}
                                label={({ dataEntry }) => `${dataEntry.value}%`}
                                labelStyle={{
                                    fontSize: '10px',
                                    fill: '#fff',
                                    fontWeight: 'bold',
                                }}
                                labelPosition={75}
                            />
                        </div>
                    </div>

                    {/* Score Section */}
                    <h2 className="mt-8 text-2xl font-semibold text-center text-gray-700">Your Score</h2>
                    <div className="flex flex-wrap justify-center gap-8 mt-4 mb-4 w-full">
                        <div className="w-40 flex flex-col items-center">
                            <p className="py-2 font-medium text-gray-600 text-lg text-center">Standard Score</p>
                            <div style={{ width: 130, height: 130 }}>
                                <CircularProgressbar value={reportTest?.standard_score || 0} text={`${reportTest?.standard_score || 0}%`} strokeWidth={10} />
                            </div>
                        </div>
                        <div className="w-40 flex flex-col items-center">
                            <p className="py-2 font-medium text-gray-600 text-lg text-center">Your Score</p>
                            <div style={{ width: 130, height: 130 }}>
                                <CircularProgressbar value={reportTest?.cba_score || 0} text={`${reportTest?.cba_score || 0}%`} strokeWidth={10} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='mt-8 w-full max-w-sm flex flex-col gap-4'>
                    <Link href='/boostconfidence' className='w-full text-center bg-blue-400 text-white py-3 rounded-full text-lg font-semibold hover:bg-blue-500 transition-colors'>
                        Plan to boost Confidence
                    </Link>
                    <Link href='/home' className='w-full text-center bg-blue-600 text-white py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors'>
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TestScore;
