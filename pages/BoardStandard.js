// // pages/BoardStandard.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BallTriangle } from "react-loader-spinner";

// export default function BoardStandard() {
//   const [boardId, setBoardId] = useState("");
//   const [stdId, setStdId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [okMsg, setOkMsg] = useState("");

//   // ✅ Student details saved temporarily by StudentDetails.js
//   const [studentDetails, setStudentDetails] = useState(null);

//   useEffect(() => {
//     const details = localStorage.getItem("signup_student_details");
//     if (details) {
//       setStudentDetails(JSON.parse(details));
//     } else {
//       setError("Missing student details. Please restart signup.");
//     }
//   }, []);

//   const handleContinue = async () => {
//     if (!boardId || !stdId) {
//       setError("Please select both board and standard.");
//       return;
//     }
//     setError("");
//     setOkMsg("");

//     const payload = {
//       ...studentDetails,
//       board_id: boardId,
//       std_id: stdId,
//     };

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://staging.instapreps.com/api/stud_detail",
//         payload,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("📩 Final Signup Response:", res.data);

//       if (res?.data?.success) {
//         setOkMsg(res?.data?.message || "Signup successful!");
//         localStorage.removeItem("signup_student_details");

//         // ✅ Save only safe user info (without password)
//         localStorage.setItem("user", JSON.stringify(res.data.data));

//         // Redirect to dashboard (index page)
//         setTimeout(() => (window.location.href = "/"), 1200);
//       } else {
//         setError(res?.data?.message || "Signup failed.");
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       setError("Signup failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex lg:flex-row flex-col w-full overflow-hidden">
//       {/* LEFT PANEL */}
//       <div className="satImagesMcc9 registration_preps">
//         <div className="mt-4 px-4">
//           <a href="/"><img className="w-16 h-16" src="/images/logo.webp" alt="logo" /></a>
//         </div>
//         <div className="flex justify-center items-center lg:h-[490px] lg:w-[440px] w-[380px] m-auto mt-16">
//           <img src="/images/loginimage.png" alt="illustration" />
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="mt-4 px-4 m-auto flex-1 flex items-center justify-center">
//         {loading && (
//           <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-75 flex justify-center items-center">
//             <BallTriangle color="#E93F36" height={160} width={160} />
//           </div>
//         )}

//         <div className="w-[530px] min-h-[450px] flex items-center justify-center">
//           <div className="w-[480px]">
//             <h1 className="text-3xl font-extralight">Almost done!</h1>
//             <p className="text-gray-600 mt-2">
//               Choose your <b>Board</b> and <b>Class</b>
//             </p>

//             <div className="mt-6 border-2 border-black p-6 bg-white rounded-md">
//               {/* Board */}
//               <div className="mb-4">
//                 <label className="text-sm text-gray-700">Board</label>
//                 <select
//                   value={boardId}
//                   onChange={(e) => setBoardId(e.target.value)}
//                   className="w-full h-12 border border-[#7666CA] rounded-md px-4 focus:border-[#7666CA]"
//                 >
//                   <option value="">-- Select Board --</option>
//                   <option value="1">CBSE</option>
//                   <option value="2">ICSE</option>
//                   <option value="3">State Board</option>
//                   <option value="4">IB</option>
//                 </select>
//               </div>

//               {/* Standard */}
//               <div className="mb-6">
//                 <label className="text-sm text-gray-700">Class / Standard</label>
//                 <select
//                   value={stdId}
//                   onChange={(e) => setStdId(e.target.value)}
//                   className="w-full h-12 border border-[#7666CA] rounded-md px-4 focus:border-[#7666CA]"
//                 >
//                   <option value="">-- Select Standard --</option>
//                   {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
//                     <option key={cls} value={cls}>{cls}th</option>
//                   ))}
//                 </select>
//               </div>

//               {error && <p className="text-red-600 mb-2">{error}</p>}
//               {okMsg && <p className="text-green-600 mb-2">{okMsg}</p>}

//               <button
//                 onClick={handleContinue}
//                 disabled={loading}
//                 className="w-full h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:opacity-95 transition"
//               >
//                 {loading ? "Saving..." : "Continue"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

























// pages/BoardStandard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

export default function BoardStandard() {
  const [boardId, setBoardId] = useState("");
  const [stdId, setStdId] = useState("");
  const [boards, setBoards] = useState([]);
const [standards, setStandards] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [okMsg, setOkMsg] = useState("");

  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    const details = localStorage.getItem("signup_student_details");
    if (details) {
      setStudentDetails(JSON.parse(details));
    } else {
      setError("Missing student details. Please restart signup.");
    }
  }, []);

  // Fetch boards on mount
useEffect(() => {
  const fetchBoards = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/board`);
      setBoards(res.data || []);
    } catch (err) {
      console.error("Error fetching boards:", err);
      setError("Failed to load boards. Please refresh.");
    }
  };
  fetchBoards();
}, []);

// Fetch standards when board changes
useEffect(() => {
  if (!boardId) {
    setStandards([]);
    return;
  }
  const fetchStandards = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/board/${boardId}/standards`);
      setStandards(res.data || []);
    } catch (err) {
      console.error("Error fetching standards:", err);
      setError("Failed to load standards. Please refresh.");
    }
  };
  fetchStandards();
}, [boardId]);



  const handleContinue = async () => {
    setError("");
    if (!boardId || !stdId) {
      setError("Please select both board and standard.");
      return;
    }
    if (!studentDetails) {
      setError("Missing student details. Please restart signup.");
      return;
    }

    const payload = {
      ...studentDetails,
      board_id: Number(boardId),
      std_id: Number(stdId),
    };

    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/stud_detail`, 
        payload, 
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("📩 Final Signup Response:", res.data);
      console.log("📩 Final Signup User Object:", res.data.data);


      if (res?.data?.success) {
        setOkMsg("Signup successful! Redirecting...");
        
        // Cleanup all temporary signup data
        localStorage.removeItem("signup_student_details");
        localStorage.removeItem("signup_phone");
        localStorage.removeItem("signup_countrycode");
        
        // Save the final user object from the backend
        localStorage.setItem("user", JSON.stringify(res.data.data));

        setTimeout(() => (window.location.href = "/"), 1000);
      } else {
        setError(res?.data?.message || "An unknown error occurred during signup.");
      }
    } catch (err) {
      console.error("Signup API Error:", err.response || err);
      const apiErrorMessage = err.response?.data?.message;
      setError(apiErrorMessage || "Signup failed. The server could not be reached.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex lg:flex-row flex-col w-full overflow-hidden">
      <div className="satImagesMcc9 registration_preps">
        <div className="mt-4 px-4">
          <a href="/"><img className="w-16 h-16" src="/images/logo.webp" alt="logo" /></a>
        </div>
        <div className="flex justify-center items-center lg:h-[490px] lg:w-[440px] w-[380px] m-auto mt-16">
          <img src="/images/loginimage.png" alt="illustration" />
        </div>
      </div>

      <div className="mt-4 px-4 m-auto flex-1 flex items-center justify-center">
        {loading && (
          <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <BallTriangle color="#E93F36" height={160} width={160} />
          </div>
        )}

        <div className="w-[530px] min-h-[450px] flex items-center justify-center">
          <div className="w-[480px]">
            <h1 className="text-3xl font-extralight">Almost done!</h1>
            <p className="text-gray-600 mt-2">Choose your <b>Board</b> and <b>Class</b></p>

            <div className="mt-6 border-2 border-black p-6 bg-white rounded-md">
              <div className="mb-4">
                <label className="text-sm text-gray-700">Board</label>
                <select value={boardId} onChange={(e) => setBoardId(e.target.value)} className="w-full h-12 border rounded-md px-4">
                  {/* <option value="">-- Select Board --</option>
                  <option value="1">CBSE</option>
                  <option value="2">ICSE</option>
                  <option value="3">State Board</option>
                  <option value="4">IB</option> */}
                  <option value="">-- Select Board --</option>
{boards.map((b) => (
  <option key={b.id} value={b.id}>{b.board}</option>
))}

                </select>
              </div>
              <div className="mb-6">
                <label className="text-sm text-gray-700">Class / Standard</label>
                <select value={stdId} onChange={(e) => setStdId(e.target.value)} className="w-full h-12 border rounded-md px-4">
                  {/* <option value="">-- Select Standard --</option>
                  {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
                    <option key={cls} value={cls}>{cls}th</option>
                  ))} */}
                  <option value="">-- Select Standard --</option>
{standards.map((s) => (
  <option key={s.id} value={s.id}>{s.std}</option>
))}

                </select>
              </div>

              {error && <p className="text-red-600 mb-2">{error}</p>}
              {okMsg && <p className="text-green-600 mb-2">{okMsg}</p>}

              <button onClick={handleContinue} disabled={loading} className="w-full h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600">
                {loading ? "Saving..." : "Finish Signup"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}