// import React from 'react';

// const WelcomeScreen = ({ onContinue }) => {
//   return (
//     <div className='flex lg:flex-row flex-col w-[100%] overflow-hidden'>
//       <div className='satImagesMcc9 registration_preps'>
//         <div className='mt-4 px-4'>
//           <a href='/'>
//             <img className='w-16 h-16' src='/images/logo.webp' alt='' />
//           </a>
//         </div>
//         <div className='flex justify-center items-center lg:h-[490px] lg:w-[440px] w-[380px] m-auto mt-16 overflow-hidden'>
//           <div className='flex-shrink'>
//             <img className='' src='/images/loginimage.png' alt='' />
//           </div>
//         </div>
//       </div>

//       <div className='mt-4 px-4 m-auto text-center'>
//         <h1 className='text-2xl font-semibold mb-8'>Test Your Confidence level for your Exams!</h1>
//         <button
//           onClick={onContinue}
//           className='bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-md text-xl'
//         >
//           Login
//         </button>
//         <div className='mt-4'>
//           <button
//             onClick={onContinue}
//             className='text-blue-500 underline'
//           >
//             Sign Up Instead
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeScreen;






// import React from "react";

// const WelcomeScreen = ({ onContinue }) => {
//   return (
//     <div className="flex lg:flex-row flex-col w-full min-h-screen overflow-hidden">
//       {/* LEFT PANEL (same look as your existing Register page) */}
//       <div className="satImagesMcc9 registration_preps">
//         <div className="mt-4 px-4">
//           <a href="/">
//             <img className="w-16 h-16" src="/images/logo.webp" alt="logo" />
//           </a>
//         </div>
//         <div className="flex justify-center items-center lg:h-[490px] lg:w-[440px] w-[380px] m-auto mt-16 overflow-hidden">
//           <div className="flex-shrink">
//             <img className="" src="/images/loginimage.png" alt="illustration" />
//           </div>
//         </div>
//       </div>

//       {/* RIGHT PANEL (center everything) */}
//       <div className="flex-1 flex items-center justify-center px-4">
//         {/* THE BOX WITH BLACK BORDER */}
//         <div className="w-full max-w-md border border-black rounded-xl p-8 text-center shadow">
//           <h1 className="text-2xl font-semibold leading-snug">
//             Test Your Confidence level for your Exams!
//           </h1>

//           <button
//             onClick={onContinue}
//             className="mt-6 w-full py-4 text-lg text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600"
//           >
//             Login
//           </button>

//           <button
//             onClick={onContinue}
//             className="mt-4 underline text-blue-600"
//           >
//             Sign Up Instead
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeScreen;



// import React from "react";

// const WelcomeScreen = ({ onLogin, onSignup, onContinue }) => {
//   // Fallback: if old prop names used, still work
//   const handleLogin = () => {
//     if (onLogin) onLogin();
//     else if (onContinue) onContinue();
//   };

//   const handleSignup = () => {
//     if (onSignup) onSignup();
//     else window.location.href = "/Signup";
//   };

//   return (
//     <div className="flex lg:flex-row flex-col w-full min-h-screen overflow-hidden">
//       {/* LEFT PANEL (same look as your existing Register page) */}
//       <div className="satImagesMcc9 registration_preps">
//         <div className="mt-4 px-4">
//           <a href="/">
//             <img className="w-16 h-16" src="/images/logo.webp" alt="logo" />
//           </a>
//         </div>
//         <div className="flex justify-center items-center lg:h-[490px] lg:w-[440px] w-[380px] m-auto mt-16 overflow-hidden">
//           <div className="flex-shrink">
//             <img className="" src="/images/loginimage.png" alt="illustration" />
//           </div>
//         </div>
//       </div>

//       {/* RIGHT PANEL (center everything) */}
//       <div className="flex-1 flex items-center justify-center px-4">
//         {/* THE BOX WITH BLACK BORDER */}
//         <div className="w-full max-w-md border border-black rounded-xl p-8 text-center shadow">
//           <h1 className="text-2xl font-semibold leading-snug">
//             Test Your Confidence level for your Exams!
//           </h1>

//           <button
//             onClick={handleLogin}
//             className="mt-6 w-full py-4 text-lg text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600"
//           >
//             Login
//           </button>

//           <button
//             onClick={handleSignup}
//             className="mt-4 underline text-blue-600"
//           >
//             Sign Up Instead
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeScreen;



import React from "react";
import AuthImagePanel from "src/components/AuthImagePanel"; 

const WelcomeScreen = ({ onLogin, onContinue }) => {
  // Fallback: if old prop names used, still work
  const handleLogin = () => {
    if (onLogin) onLogin();
    else if (onContinue) onContinue();
  };

  return (
    
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="satImagesMcc9 registration_preps">
        <div className="mt-4 px-4">
          <a href="/">
            <img className="w-16 h-16" src="/images/logo.webp" alt="logo" />
          </a>
        </div>
        <div className="flex justify-center items-center lg:h-[490px] lg:w-[440px] w-[380px] m-auto mt-16 overflow-hidden">
          <div className="flex-shrink">
            <img className="" src="/images/loginimage.png" alt="illustration" />
          </div>
        </div>
      </div> 
      
      {/* RIGHT PANEL (center everything) */}
      <div className="flex-1 flex items-center justify-center px-4">
        
        <div className="w-full max-w-md border border-black rounded-xl p-8 text-center shadow">
          <h1 className="text-2xl font-semibold leading-snug">
            Test Your Confidence level for your Exams!
          </h1>

          {/* Login button still calls login handler */}
          <button
            onClick={handleLogin}
            className="mt-6 w-full py-4 text-lg text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600"
          >
            Login
          </button>

          {/* Sign up button is now a real link */}
          <a
            href="/Signup"
            className="mt-4 block underline text-blue-600"
          >
            Sign Up Instead
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
