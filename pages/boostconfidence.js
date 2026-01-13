import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MathJax from "react-mathjax";
import Footer from "src/components/footer";
import Header from "src/components/header";
import VerticalSidebar from "src/components/VerticalSidebar";



const BoostConfidence = (reportid) => {
  const [data, setdata] = useState([]); 
  const [error, setError] = useState(null);  
  const [showQuestions, setShowQuestions] = useState(null); // Use index instead of boolean
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [videoUrl, setVideoUrl] = useState("");  // 🔄 For dynamic video from API
 const storedUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "{}") : {};
  const [isPaidUser, setIsPaidUser] = useState(storedUser.hasSubscription || false); // false = unpaid
  // track ad views safely (SSR friendly)
  const [viewCount, setViewCount] = useState(0);

  // track ad views
// const [viewCount, setViewCount] = useState(() => {
//   return parseInt(localStorage.getItem("adViews") || "0", 10);
// });

  useEffect(() => {
    const checkSubscription = async () => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) return;

      const user = JSON.parse(storedUser);
      const student_id = user.id;

      const response = await fetch(
        `https://staging.instapreps.com/api/hasValidsubscription/${student_id}`
      );

      const data = await response.json();

      // const data = { hasSubscription: true };  // for testing

      if (data.hasSubscription) {
        setIsPaidUser(true);
      }
    };

    checkSubscription();
  }, []);

useEffect(() => {
  if (isPaidUser && selectedIndex !== null) {
    setShowQuestions(selectedIndex);
  }
}, [isPaidUser, selectedIndex]);

// ⏳ Start countdown when video is shown (ONLY for unpaid users)
useEffect(() => {
  if (showVideo && !isPaidUser) {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowPaymentPopup(false);
          setShowQuestions(selectedIndex);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }
}, [showVideo, isPaidUser, selectedIndex]);



 
  

  const fetchData = async () => {
    const userData = JSON.parse(localStorage.getItem("report id"));
    
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/report/${userData}/prepare_analysis`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const prescription = response.data?.data?.prescription || [];
      const questions = response.data?.data?.questions || {};

      // Robust mapping for API titles to question keys
    const titleToKey = {
        "Confident and correct (Mastery)": "mastery_question_id",
        "Not Confident and correct (Doubt)": "doubt_question_id",
        "Confident and wrong (Misinformed)": "misinformed_question_id",
        "Not Confident and wrong (Uninformed)": "uninformed_question_id",
      };

      const enrichedData = prescription.map((item) => {
        const key = titleToKey[item.title];
        const qs = questions[key] || [];
        console.log(`Category: ${item.title} | Key: ${key} | Questions:`, qs);
        return {
          ...item,
          questions: qs,
        };
      });

      setdata(enrichedData);
    } catch (err) {
      setError(err.message);
      console.error("Axios Error:", err);
    }
  };

//   const fetchAdVideo = async () => {
//   try {
//     const res = await axios.get("https://staging.instapreps.com/api/adurl");
//     const video = res.data?.vidurl_one || res.data?.vidurl_two || "";
//     console.log("Fetched video URL:", video); // ✅ log here
//     setVideoUrl(video);
//   } catch (err) {
//     console.error("Error fetching ad video:", err);
//   }
// };

const fetchAdVideo = async () => {
  try {
    // const res = await axios.get("https://staging.instapreps.com/api/adurl");
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/adurl`);
    const firstItem = Array.isArray(res.data) ? res.data[0] : res.data;

    const mp4 = firstItem?.vidurl_one || "";
    const youtube = firstItem?.vidurl_two || "";

    let video = "";

    if (!mp4 || mp4.includes("example.com")) {
      // fallback to YouTube
      video = youtube.replace("youtu.be/", "www.youtube.com/embed/");
      console.log("🎥 Using YouTube fallback:", video);
    } else {
      video = mp4;
      console.log("🎥 Using MP4 video:", video);
    }

    setVideoUrl(video);
  } catch (err) {
    console.error("❌ Failed to fetch ad video:", err);
  }
};



  // useEffect(() => {
  //   fetchData();
  // }, []);
 useEffect(() => {
  fetchData();
  fetchAdVideo();
}, []);

useEffect(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("adViews");
    if (saved) {
      setViewCount(parseInt(saved, 10));
    }
  }
}, []);




  const getBgColor = (bgColor) => {
    const colors = {
      1: "bg-gradient-to-r from-red-700 to-red-300",
      2: "bg-gradient-to-r from-pink-500 to-pink-100",
      3: "bg-gradient-to-r from-yellow-500 to-yellow-100",
      4: "bg-gradient-to-r from-green-700 to-green-200",
    };
    return colors[bgColor] || "bg-yellow-300";
  };
 
  const cleanFormula = (formula) => {
    // Remove &nbsp;, <br>, <span> tags, and all other HTML tags
    return formula
      .replace(/&nbsp;/gi, ' ')        // Replaces &nbsp; with a normal space
      .replace(/<br\s*\/?>/gi, '')     // Removes <br> tags
      .replace(/<span[^>]*>/gi, '')    // Removes <span> tags and content inside
      .replace(/<\/span>/gi, '')       
      .replace(/&#160;/gi, '')          // Removes &#60; (less-than symbol)
      .replace(/<\/?[^>]+(>|$)/g, '');  // Removes all remaining HTML tags
  };
  // ✅ Utility function to extract YouTube video ID
const extractYouTubeId = (url) => {
  if (!url) return "";
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=))([^\?&]+)/;
  const match = url.match(regex);
  return match ? match[1] : "";
};
  
  return (
    <>
    {/* <Header/> */}
    <VerticalSidebar/>
     <MathJax.Provider>
      <div className="p-4 ">
        {/* <Link href="/home">
          <img src="./images/PrevArr.png" width={30} height={30} className="mt-5 " />
        </Link> */}

        <div className="flex justify-center mt-8">
          <h2 className="text-3xl font-bold text-gray-800">Plan to Boost Confidence</h2>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="mt-8 ml-6 flex justify-between items-center w-[95%] text-gray-600 font-semibold text-sm border-b pb-2">
          <div>Plan</div>
          <div>Topics</div>
          <div>Percentage</div>
          <div></div>
        </div>

        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className={`mt-3 ml-5 p-4 rounded-lg text-white flex flex-col w-[95%] ${getBgColor(item.bg_color)}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{item.title}</span>
                {item.topics.length > 0 ? (
                  <span className="bg-white text-red-500 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.topics.join(", ")}
                  </span>
                ) : (
                  <span className="text-gray-300">No Topics</span>
                )}
                <span className="font-semibold">{item.percentage}%</span>
                {/* <img
  src="/images/downarrow.jpeg"
  width={20}
  height={10}
  alt="Toggle question visibility"
  aria-expanded={showQuestions === index}
  className={`cursor-pointer transform transition-transform duration-300 ease-in-out ${
    showQuestions === index ? "rotate-180 scale-110" : "rotate-0 scale-100"
  }`}
  onClick={() => setShowQuestions(showQuestions === index ? null : index)}
/> */}
<div className="flex items-center space-x-2">
  <span className="text-sm text-black">
  {showQuestions === index ? "Close" : "Click to expand"}
</span>

  <img
    src="/images/downarrow.jpeg"
    width={20}
    height={10}
    alt="Toggle"
    aria-expanded={showQuestions === index}
    className={`cursor-pointer transform transition-transform duration-300 ease-in-out ${
      showQuestions === index ? "rotate-180 scale-110" : "rotate-0 scale-100"
    }`}
    onClick={() => {
  if (showQuestions === index) {
    setShowQuestions(null);       
    setShowVideo(false);          
    setCountdown(15);            
  } else {
    setSelectedIndex(index);
    setCountdown(15);             
    setShowVideo(false);          
    if (!isPaidUser) {
      setShowPaymentPopup(true);
    }    // Trigger popup

    // setViewCount(prev => prev + 1);
    // console.log("Ad Views so far:", viewCount + 1);

  //   if (!isPaidUser) {
  //   setViewCount(prev => {
  //     const newCount = prev + 1;
  //     localStorage.setItem("adViews", newCount);
  //     console.log("Ad Views so far:", newCount);
  //     return newCount;
  //   });
  // }
  if (!isPaidUser) {
  setViewCount(prev => {
    const newCount = prev + 1;
    if (typeof window !== "undefined") {
      localStorage.setItem("adViews", newCount);
    }
    console.log("Ad Views so far:", newCount);
    return newCount;
  });
}


  }
}}

  />
</div>


              </div>

              {showQuestions === index && (
  <div className="mt-2 p-2 bg-gray-100 rounded-md text-black">
    <h3 className="font-semibold">Questions (Total: {item.questions.length}):</h3>
    <ul className="list-none pl-5 text-black">
      {item.questions && item.questions.length > 0 ? (
        item.questions.map((q, i) => (
          <li key={i} className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <span className="mr-2">{i + 1}.</span>
              <MathJax.Node formula={`\\text{${cleanFormula(q.question_body)}}`} />
            </div>
            <div className="mt-1 flex items-center">
              <h3 className="font-semibold">Correct Answer: </h3>
              {q.answer === "1" && <MathJax.Node formula={`\\text{${q.option_one}}`} />}
              {q.answer === "2" && <MathJax.Node formula={`\\text{${q.option_two}}`} />}
              {q.answer === "3" && <MathJax.Node formula={`\\text{${q.option_three}}`} />}
              {q.answer === "4" && <MathJax.Node formula={`\\text{${q.option_four}}`} />}
            </div>
          </li>
        ))
      ) : (
        <li className="text-gray-500">No questions available</li>
      )}
    </ul>
  </div>
)}

            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">Loading...</p>
        )}
      </div>

      {/* <div className="mt-6 mb-5 bg-purple-600 text-white p-4 rounded-lg flex w-[30%] mx-auto">
        <div className="flex-1">
          <h3 className="text-lg font-bold">Refer and Earn</h3>
          <p className="text-sm">
            Refer the App to your friends & earn up to{" "}
            <span className="font-bold" style={{ color: "#FACC15" }}>₹500 weekly</span>
          </p>
        </div>
      </div> */}
      <div
        onClick={() => {
          window.open(
      "https://play.google.com/store/apps/details?id=com.instapreps", //  official Play Store link
      "_blank"
      );
    }}
        className="mt-6 mb-5 bg-purple-600 text-white p-4 rounded-lg flex cursor-pointer flex w-[30%] mx-auto"
      >
        <div className="flex-1">
          <h3 className="text-lg font-bold">Refer and Earn</h3>
          <p className="text-sm">
            Refer the App to your friends & earn up to{" "}
            <span className="font-bold text-yellow-400">₹500 weekly</span>
          </p>
        </div>
      </div>

      </MathJax.Provider>
      <Footer/>



{showPaymentPopup && (
  <>
    {!showVideo ? (
      // ✨ FULL POPUP BEFORE VIDEO
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 font-[Fredoka] overflow-hidden flex justify-center items-center px-2 py-6">
        <div className="flex flex-col items-center gap-4 w-full max-w-xl">

          {/* 💎 Main Popup Card */}
          <div className="relative bg-[url('/images/milky-texture.png')] bg-white bg-cover text-black p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] w-full transition-all duration-300">


            {/* 🧠 Popup Body */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-3">

              {/* 📸 Left Image */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src="/images/feedpopupsideimg.jpg"
                  alt="Popup Visual"
                  className="w-full max-w-[220px] rounded-2xl shadow-lg"
                  style={{ boxShadow: '0 0 20px rgba(200,100,255,0.3)' }}
                />
              </div>

              {/* ✨ Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-yellow-600">
                  🎓 You’re a <span className="text-orange-500">Silver Member!</span>
                </h2>
                {/* <p className="text-sm text-gray-800 font-semibold">
                  Pay just <span className="text-purple-700 font-bold">INR 1500/year</span> to unlock platinum!
                </p> */}
                <p className="text-sm text-gray-800 font-semibold">
  Pay just{" "}
  <span className="relative inline-block text-red-600 font-extrabold text-2xl mr-1">
  ₹3000
  <span
    className="absolute left-0 right-0 top-1/2 h-[3px] bg-black transform -translate-y-1/2"
    aria-hidden="true"
  ></span>
</span>

  <span className="text-purple-700 font-bold text-base">
    ₹1500/year
  </span>{" "}
  to unlock platinum!
</p>

                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray font-semibold py-2 px-2 rounded-full shadow-md w-full hover:scale-105 transition-all duration-200">
                  ✨ UPGRADE TO PLATINUM
                </button>
              </div>
            </div>

            {/* 🚪 Skip Button */}
            <div className="pt-3 border-t border-gray-300 mt-2">
              <button
                onClick={() => {
                      setCountdown(15);     // Reset countdown
                      setShowVideo(true);}}

                className="flex items-center justify-center w-full border border-black text-black font-semibold py-2.5 rounded-xl hover:border-yellow-500 hover:text-yellow-500 transition-all duration-200 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 4l12 6-12 6V4z" />
                </svg>
                Skip 
              </button>
              <p className="text-xs text-center mt-1 text-black">by watching a video 🎥</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      // 🎥 FULLSCREEN VIDEO AFTER skip
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        
        <div className="relative w-[700px] h-[400px]">
  {/* YouTube iframe */}
  {/* <iframe
    width="700"
    height="400"
    src="https://www.youtube.com/embed/biYboZZAtpc?autoplay=1&controls=0&rel=0&modestbranding=1&disablekb=1"
    title="Unlocking Video"
    className="rounded-xl shadow-xl w-full h-full pointer-events-none" // 👈 disables interaction
    allow="autoplay; encrypted-media"
    allowFullScreen
  /> */}
  {/* <video
        className="rounded-xl shadow-xl w-full h-full pointer-events-none"
        autoPlay
        muted
        controls={false}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    
      {
  videoUrl.includes("youtube.com") ? (
//     <iframe
//   width="700"
//   height="400"
//   src={`https://www.youtube.com/embed/${extractYouTubeId(videoUrl)}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&disablekb=1`}
//   title="Ad Video"
//   className="rounded-xl shadow-xl w-full h-full pointer-events-none"
//   allow="autoplay; encrypted-media"
//   allowFullScreen
// />

<iframe
  width="700"
  height="400"
  src={`https://www.youtube.com/embed/${extractYouTubeId(videoUrl)}?autoplay=1&controls=0&rel=0&modestbranding=1&disablekb=1`}
  title="Ad Video"
  className="rounded-xl shadow-xl w-full h-full pointer-events-none"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>

  ) : (
    <video
      className="rounded-xl shadow-xl w-full h-full pointer-events-none"
      autoPlay
   
      controls={false}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}



  {/* Countdown */}
  <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-yellow bg-black bg-opacity-50 px-4 py-1 rounded-full text-xl font-semibold z-10">
    Unlocking in {countdown}…
  </p>


</div>

      </div>
    )}
  </>
)}







    </>
  );
};

export default BoostConfidence;
