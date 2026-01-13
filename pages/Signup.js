
// // pages/Signup.js
// import React, { useState } from "react";
// import { BallTriangle } from "react-loader-spinner";
// import axios from "axios";
// import CountryPicker from "src/components/CountryPicker";

// const Signup = () => {
//   const Steps = { Phone: "phone", Otp: "otp" };
//   const [activeStep, setActiveStep] = useState(Steps.Phone);

//   const [countryCode, setCountryCode] = useState("+91");
//   const [mobile, setMobile] = useState("");
//   const [otpToken, setOtpToken] = useState(null);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // --- Step 1: Send OTP ---
// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);

// //     try {
// //       const res = await axios.post("/api/proxy/signup", {
// //         mobile_no: mobile,
// //         countrycode: countryCode,
// //       });

// //       console.log("📩 Send OTP Response:", res.data);

// //       if (res?.data?.success) {
// //         // ✅ Move to OTP step
// //         setOtpToken(res?.data?.data?.token || null);
// //         setActiveStep(Steps.Otp);
// //       } else {
// //         setError(res?.data?.message || "OTP not generated, please try again.");
// //       }
// //     } catch (err) {
// //   console.error("Send OTP Error Response:", err.response?.data || err.message);
// //   setError(err.response?.data?.message || "Signup failed. Please try again.");
// // }
// //  finally {
// //       setLoading(false);
// //     }
// //   };
// // --- Step 1: Send OTP ---
// // --- Step 1: Send OTP ---
// // const handleSignup = async (e) => {
// //   e.preventDefault();
// //   setError("");
// //   setLoading(true);

// //   try {
// //     // Adjust field names exactly as backend expects
// //     // const res = await axios.post("/api/proxy/signup", {
// //     //   mobile_no: mobile.trim(),
// //     //   countrycode: countryCode, // keep backend field name correct
// //     //   first_name: firstName,       // hardcoded placeholder
// //     //   last_name: "",         // optional placeholder
// //     //   std_id: 1,                 // if required by backend
// //     //   board_id: 1,               // if required by backend
// //     //   password: "password123",   // hardcoded password
// //     // });
// //     const res = await axios.post(
// //   "https://staging.instapreps.com/api/stud_detail",
// //   { 
// //     mobile_no: mobile.trim(),
// //     countrycode: countryCode,
// //     first_name: "",   // should come from input
// //     last_name: "",      // should come from input
// //     std_id: 1,
// //     board_id: 1,
// //     password: "password123",  // you can generate or ask user
// //     email_address: "userEmail"
// //   },
// //   { headers: { "Content-Type": "application/json" } }
// // );
// // ;

// //     console.log("📩 Send OTP Response:", res.data);

// //     if (res?.data?.success) {
// //       // ✅ Move to OTP step
// //       setOtpToken("123456"); // hardcoded OTP
// //       setActiveStep(Steps.Otp);
// //     } else {
// //       setError(res?.data?.message || "OTP not generated, please try again.");
// //     }
// //   } catch (err) {
// //     console.error("Send OTP Error Response:", err.response?.data || err.message);
// //     setError(err.response?.data?.message || "Signup failed. Please try again.");
// //   } finally {
// //     setLoading(false);
// //   }
// // };
// // inside handleSignup
// const handleSignup = async (e) => {
//   e.preventDefault();
//   setError("");
//   setLoading(true);

//   try {
//     // 🔹 ONLY request OTP here — not stud_detail
//     const res = await axios.post("/api/proxy/signup", {
//       mobile_no: mobile.trim(),
//       countrycode: countryCode,
//     });

//     console.log("📩 Send OTP Response:", res.data);

//     if (res?.data?.success) {
//       setOtpToken("123456"); // demo OTP
//       setActiveStep(Steps.Otp);
//     } else {
//       setError(res?.data?.message || "OTP not generated, please try again.");
//     }
//   } catch (err) {
//     console.error("Send OTP Error Response:", err.response?.data || err.message);
//     setError(err.response?.data?.message || "Signup failed. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };




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

//         <div className="w-[530px] h-[630px] flex items-center justify-center">
//           <div className="w-[480px]">
//             {activeStep === Steps.Phone && (
//               <>
//                 <h1 className="text-4xl font-extralight">Sign Up</h1>
//                 <h2 className="text-xl mt-4">Start your journey with us!</h2>
//                 <div className="mt-6 border-2 border-black p-6 bg-white rounded-md">
//                   <form onSubmit={handleSignup} className="flex flex-col gap-6">
//                     <label className="text-sm font-medium text-gray-700">Phone Number</label>
//                     <div className="flex items-center gap-3">
//                       <CountryPicker
//                         value={countryCode}
//                         onChange={setCountryCode}
//                         className="h-12 border border-[#7666CA] rounded-md px-3 bg-white"
//                       />
//                       <input
//                         type="tel"
//                         required
//                         value={mobile}
//                         onChange={(e) => setMobile(e.target.value)}
//                         placeholder="9999999999"
//                         className="flex-1 h-11 border border-[#7666CA] rounded-md px-4 text-gray-700 bg-[#fafafa]"
//                       />
//                     </div>

//                     {error && <p className="text-red-600">{error}</p>}

//                     <button
//                       type="submit"
//                       className="w-full h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:opacity-95 transition"
//                     >
//                       Continue
//                     </button>
//                   </form>
//                 </div>
//               </>
//             )}

//             {activeStep === Steps.Otp && (
//               <div className="mt-6 border-2 border-black p-6 bg-white rounded-md">
//                 <h2 className="text-xl mb-4">Enter OTP</h2>
//                 <input
//                   type="text"
//                   maxLength={6}
//                   value={otpToken || ""}
//                   onChange={(e) => setOtpToken(e.target.value)}
//                   placeholder="Enter 6-digit OTP"
//                   className="w-full border border-[#7666CA] rounded-md h-12 px-4 text-gray-700"
//                 />

//                 {error && <p className="text-red-600">{error}</p>}

//                 {/* <button
//                   type="button"
//                   onClick={() => {
//                     if (otpToken === "123456") {
//                       localStorage.setItem("signup_phone", mobile.trim());
//                       localStorage.setItem("signup_countrycode", countryCode);
//                       window.location.href = "/StudentDetails";
//                     } else {
//                       setError("Invalid OTP. Try 123456 for demo.");
//                     }
//                   }}
//                   className="w-full h-12 mt-4 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:opacity-95 transition"
//                 >
//                   Verify OTP
//                 </button> */}
//                 {/* <button
//   type="button"
//   onClick={async () => {

// if (otpToken === "123456") {
//   try {
//     const res = await axios.post(
//       "https://staging.instapreps.com/api/stud_detail",
//       { 
//         mobile_no: mobile.trim(),
//         countrycode: countryCode,
//         first_name: "userName",
//         last_name: "",
//         std_id: 1,
//         board_id: 1,
//         password: "password123",
//         email_address: "userEmail"
//       },
//       { headers: { "Content-Type": "application/json" } }
//     );

//     const newUser = res.data.data;

//     // ✅ Save the phone and countrycode so StudentDetails can read it
//     localStorage.setItem("signup_phone", mobile.trim());
//     localStorage.setItem("signup_countrycode", countryCode);

//     // Save user data too
//     localStorage.setItem("user", JSON.stringify(newUser));

//     window.dispatchEvent(
//       new CustomEvent("user-updated", { detail: newUser })
//     );

//     window.location.href = "/StudentDetails";
//   } catch (err) {
//     setError(
//       err.response?.data?.message || 
//       "Signup failed. Please check the backend or endpoint."
//     );
//     console.error("OTP Verification Error:", err);
//   }
// } else {
//   setError("Invalid OTP. Try 123456 for demo.");
// }

//   }}
//   className="w-full h-12 mt-4 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:opacity-95 transition"
// >
//   Verify OTP
// </button> */}

// <button
//   type="button"
//   onClick={() => {
//     if (otpToken === "123456") {
//       // ✅ Save phone & country code for next page
//       localStorage.setItem("signup_phone", mobile.trim());
//       localStorage.setItem("signup_countrycode", countryCode);

//        // make sure no stale user survives from earlier attempts
//    localStorage.removeItem("user");


//       // Navigate to StudentDetails
//       window.location.href = "/StudentDetails";
//     } else {
//       setError("Invalid OTP. Try 123456 for demo.");
//     }
//   }}
//   className="w-full h-12 mt-4 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:opacity-95 transition"
// >
//   Verify OTP
// </button>

//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;










// pages/Signup.js
import React, { useState } from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import CountryPicker from "src/components/CountryPicker";

const Signup = () => {
  const Steps = { Phone: "phone", Otp: "otp" };
  const [activeStep, setActiveStep] = useState(Steps.Phone);

  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [otpToken, setOtpToken] = useState("");
  
  const [sessionDetails, setSessionDetails] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (!mobile) {
      setError("Please enter mobile number");
      return;
    }
  const digitOnly = /^\d+$/;
if (!digitOnly.test(mobile.trim())) {
  setError("Mobile number must contain only digits");
  return;
}

    setLoading(true);
    try {
      const payload = {
        mobile: mobile.trim(),
        country_code: countryCode,
      };
      
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/otp`, payload);

      console.log("📩 OTP API Response:", res.data);

      if (res?.data?.success) {
        //  server sends the session ID in a field named 'token'.
        const sessionToken = res.data?.data?.token;

        if (sessionToken) {
          setSessionDetails(sessionToken); // i am saving the token value here.
          setActiveStep(Steps.Otp);
        } else {
          setError("Session token not found in API response.");
        }
      } else {
        setError(res?.data?.message || "OTP not generated, please try again.");
      }
    } catch (err) {
      console.error("OTP API Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpToken) {
      setError("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      // The next API requires the key to be 'sdetails' so i will use the saved session token value here.
      const payload = {
        sdetails: sessionDetails, 
        otp_input: otpToken,
        mobile: mobile.trim(),
        country_code: countryCode,
      };

      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/verifyotp`, payload);

      if (res?.data?.success) {
        localStorage.setItem("signup_phone", mobile.trim());
        localStorage.setItem("signup_countrycode", countryCode);
        
        // ---------------------------------------------------------
        // 👇 UPDATED SECTION FOR CHATBOT
        // ---------------------------------------------------------
        // Instead of removing the user, we create a temporary session
        // This allows the Chatbot to work immediately with the phone number
        const tempUser = {
            username: "Student",      // Placeholder until they fill details
            contact: mobile.trim(),   // Critical for Chatbot ID
            email: ""
        };
        localStorage.setItem("user", JSON.stringify(tempUser));
        // ---------------------------------------------------------

        window.location.href = "/StudentDetails";
      } else {
        setError(res?.data?.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error("OTP Verification Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to verify OTP.");
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
  <img src="/images/gemini_photo.png" alt="Gemini Photo" />
  </div>
 </div>

      <div className="mt-4 px-4 m-auto flex-1 flex items-center justify-center">
        {loading && (
          <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <BallTriangle color="#E93F36" height={160} width={160} />
          </div>
        )}

        <div className="w-[530px] h-[630px] flex items-center justify-center">
          <div className="w-[480px]">
            {activeStep === Steps.Phone && (
              <form onSubmit={handleSendOtp} className="flex flex-col gap-6">
                <h1 className="text-4xl font-extralight">Sign Up</h1>
                <h2 className="text-xl mt-4">Start your journey with us!</h2>

                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex items-center gap-3">
                  <CountryPicker value={countryCode} onChange={setCountryCode} />
                  <input
                    type="tel"
                    required
                    value={mobile}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="9999999999"
                    className="flex-1 h-11 border rounded-md px-4"
                  />
                </div>
                {error && <p className="text-red-600">{error}</p>}
                <button type="submit" disabled={loading} className="w-full h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600">
                  {loading ? "Sending OTP..." : "Continue"}
                </button>
              </form>
            )}

            {activeStep === Steps.Otp && (
              <div>
                <h2 className="text-xl mb-4">Enter OTP</h2>
                <input
                  type="text"
                  maxLength={6}
                  value={otpToken}
                  onChange={(e) => setOtpToken(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  className="w-full border rounded-md h-12 px-4"
                />
                {error && <p className="text-red-600 mt-2">{error}</p>}
                <button onClick={handleVerifyOtp} className="w-full h-12 mt-4 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600">
                  Verify OTP
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;