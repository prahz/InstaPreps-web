


// // pages/StudentDetails.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BallTriangle } from "react-loader-spinner";
// const USE_SPLIT_SIGNUP_FLOW = true; // routes to Board+Class step before creating account


// export default function StudentDetails() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");

//   const [phone, setPhone] = useState("");
//   const [countrycode, setCountrycode] = useState("+91");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [okMsg, setOkMsg] = useState("");

//   // ✅ Load phone & country code saved in Signup.js
//   useEffect(() => {
//     setPhone(localStorage.getItem("signup_phone") || "");
//     setCountrycode(localStorage.getItem("signup_countrycode") || "+91");
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setOkMsg("");

//     if (!phone) {
//       setError("Missing phone number from previous step.");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }
//     if (password !== confirm) {
//       setError("Passwords do not match.");
//       return;
//     }

//     const payload = {
//       mobile_no: phone,
//       email_address: email,
//       first_name: name,  // ✅ using single name as first_name
//       last_name: "",     // ✅ send empty last_name to backend
//       password,
//       countrycode,       // keep with + as in PDF
//     };
//     if (USE_SPLIT_SIGNUP_FLOW) {
//   const tempDetails = {
//     mobile_no: phone,
//     email_address: email,
//     first_name: name,  // single name goes as first_name
//     last_name: "",     // empty string is fine
//     password,
//     countrycode,       // "+91" with plus sign (as in PDF)
//   };
//   localStorage.setItem("signup_student_details", JSON.stringify(tempDetails));

//   // Clear sensitive fields in the UI
//   setPassword("");
//   setConfirm("");

//   // Go to Board + Class selection
//   setOkMsg("Details saved. Next: choose your Board & Class.");
//   setTimeout(() => (window.location.href = "/BoardStandard"), 800);
//   return; // 🔑 Important: prevents the old axios call from running
// }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://staging.instapreps.com/api/stud_detail",
//         payload,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("📩 Signup Response:", res.data);

//       if (res?.data?.success) {
//         setOkMsg(res?.data?.message || "Signup successful!");
//         // clear sensitive data
//         setPassword("");
//         setConfirm("");
//         localStorage.removeItem("signup_phone");
//         localStorage.removeItem("signup_countrycode");
//         // ✅ Redirect to login
//         // setTimeout(() => (window.location.href = "/login"), 1200);
//         // ✅ Save details temporarily & go to BoardStandard page
// const tempDetails = {
//   mobile_no: phone,
//   email_address: email,
//   first_name: name,
//   last_name: "",
//   password,
//   countrycode,
// };
// localStorage.setItem("signup_student_details", JSON.stringify(tempDetails));

// setTimeout(() => (window.location.href = "/BoardStandard"), 800);

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

//         <div className="w-[530px] min-h-[630px] flex items-center justify-center">
//           <div className="w-[480px]">
//             <h1 className="text-3xl font-extralight">Create your account</h1>
//             <p className="text-gray-600 mt-2">
//               Phone: <b>{countrycode} {phone}</b>
//             </p>

//             <div className="mt-6 border-2 border-black p-6 bg-white rounded-md">
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 {/* Name */}
//                 <div>
//                   <label className="text-sm text-gray-700">Name</label>
//                   <input
//                     className="w-full h-12 border border-[#7666CA] rounded-md px-4 
//                                focus:outline-none focus:border-[#7666CA] focus:ring-0"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="text-sm text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     className="w-full h-12 border border-[#7666CA] rounded-md px-4 
//                                focus:border-[#7666CA] focus:ring-0"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 {/* Passwords */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm text-gray-700">Password</label>
//                     <input
//                       type="password"
//                       className="w-full h-12 border border-[#7666CA] rounded-md px-4 
//                                  focus:border-[#7666CA] focus:ring-0"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="text-sm text-gray-700">Confirm Password</label>
//                     <input
//                       type="password"
//                       className="w-full h-12 border border-[#7666CA] rounded-md px-4 
//                                  focus:border-[#7666CA] focus:ring-0"
//                       value={confirm}
//                       onChange={(e) => setConfirm(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Messages */}
//                 {error && <p className="text-red-600">{error}</p>}
//                 {okMsg && <p className="text-green-600">{okMsg}</p>}

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="w-full h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:opacity-95 transition"
//                 >
//                   Create Account
//                 </button>
//               </form>
//             </div>

//             <div className="text-center mt-3">
//               <a href="/login" className="text-sm text-blue-500 underline">
//                 Back to Login
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// pages/StudentDetails.js
import React, { useEffect, useState } from "react";

export default function StudentDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [phone, setPhone] = useState("");
  const [countrycode, setCountrycode] = useState("+91");

  const [error, setError] = useState("");
  const [okMsg, setOkMsg] = useState("");

  useEffect(() => {
    setPhone(localStorage.getItem("signup_phone") || "");
    setCountrycode(localStorage.getItem("signup_countrycode") || "+91");
  }, []);

  // Robust email validator: blocks things like "xyz.@.com", "come@.xyz", "a..b@x.com", "a@-x.com", etc.
const validateEmail = (value) => {
  const v = (value || "").trim();
  if (!v) return "Email is required.";

  // Basic structure: local@domain.tld (tld at least 2 letters)
  const basic = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!basic.test(v)) return "Enter a valid email address.";

  const [local, domain] = v.split("@");
  if (!local || !domain) return "Enter a valid email address.";

  // Local part cannot start/end with dot or have consecutive dots
  if (local.startsWith(".") || local.endsWith(".")) return "Local part cannot start or end with a dot.";
  if (local.includes("..")) return "Local part cannot contain consecutive dots.";

  // Domain cannot start/end with dot or have consecutive dots
  if (domain.startsWith(".") || domain.endsWith(".")) return "Domain cannot start or end with a dot.";
  if (domain.includes("..")) return "Domain cannot contain consecutive dots.";

  // Each domain label: letters/digits/hyphens only, not start/end with hyphen, max 63 chars
  const labels = domain.split(".");
  for (const label of labels) {
    if (!/^[A-Za-z0-9-]+$/.test(label)) return "Domain contains invalid characters.";
    if (label.startsWith("-") || label.endsWith("-")) return "Domain labels cannot start or end with a hyphen.";
    if (label.length === 0) return "Domain labels cannot be empty.";
    if (label.length > 63) return "A domain label is too long.";
  }

  // Block repeated TLDs like ".com.com", ".net.net", etc.
const tldRepeat = /\.(com|net|org|edu|gov|in)\.\1$/i;
if (tldRepeat.test(domain)) return "Domain looks invalid (repeated TLD).";


  return ""; // ✅ valid
};



  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setOkMsg("");

    if (!phone) {
      setError("Missing phone number from previous step. Please go back.");
      return;
    }
    const emailErr = validateEmail(email);
if (emailErr) {
  setError(emailErr);
  return;
}

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const tempDetails = {
      first_name: firstName,
      last_name: lastName,
      email_address: email,
      password,
      mobile_no: phone,
      countrycode,
    };

    // Save all details together for the final step
    localStorage.setItem("signup_student_details", JSON.stringify(tempDetails));

    setPassword("");
    setConfirm("");
    setOkMsg("Details saved. Next: choose your Board & Class.");
    setTimeout(() => (window.location.href = "/BoardStandard"), 800);
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
        <div className="w-[530px] min-h-[630px] flex items-center justify-center">
          <div className="w-[480px]">
            <h1 className="text-3xl font-extralight">Create your account</h1>
            <p className="text-gray-600 mt-2">Phone: <b>{countrycode} {phone}</b></p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 border-2 border-black p-6 bg-white rounded-md">
              <div>
                <label className="text-sm text-gray-700">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full h-12 border rounded-md px-4" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full h-12 border rounded-md px-4" /> */}
                <input
  type="email"
  value={email}
  onChange={(e) => {
    const val = e.target.value;
    setEmail(val);
    setError(validateEmail(val));
  }}
  required
  className="w-full h-12 border rounded-md px-4"
/>



              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full h-12 border rounded-md px-4" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Confirm Password</label>
                  <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required className="w-full h-12 border rounded-md px-4" />
                </div>
              </div>

              {error && <p className="text-red-600">{error}</p>}
              {okMsg && <p className="text-green-600">{okMsg}</p>}

              <button type="submit" className="w-full h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-600">
                Continue
              </button>
            </form>

            <div className="text-center mt-3">
              <a href="/login" className="text-sm text-blue-500 underline">Back to Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


