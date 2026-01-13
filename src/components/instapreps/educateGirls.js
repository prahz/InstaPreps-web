// import React from 'react';
// import { useRouter } from 'next/router';

// const EducateGirls = () => {
//   const router = useRouter();
//   return (
//     <div className='m-auto mt-8 lg:py-6  sm:w-[90%] w-[100%]'>
//       <div className='w-full rounded-2xl h-16 overflow-hidden donationButton1 flex justify-center items-center'>
//         <h2 className='lg:text-3xl text-md lg:px-0 px-2 tracking-widest font-bold'>Help Us Educate Girls Together For A Brighter Tomorrow!!</h2>
//       </div>
//       <div className='lg:mt-8 mt-6'>
//         <div className='lg:flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:py-0 justify-center'>
//           <div className='lg:max-w-3xl flex-shrink-0 w-full lg:px-0 pl-4'>
//             <img className='w-full' src='/images/brighterG.png' alt='' />
//           </div>

//           <div className='border-solid border border-gray-300 shadow-2xl  overflow-hidden rounded-2xl'>
//             <div className='p-2'>
//               <div className='h-8 flex justify-center py-2 divide-y divide-gray-200'>
//                 <h2 className='lg:text-xl sm:text-sm text-sm  tracking-wider font-semibold text-opacity-5 '>
//                   Donate via Paytm/Google Pay/Phonepe
//                 </h2>
//               </div>
//               <div className='flex flex-row lg:space-x-8 space-x-6  mt-6'>
//                 <div className='flex flex-col lg:space-y-6 space-y-8'>
//                   <div className='flex space-x-1'>
//                     <img className='lg:w-10 lg:h-10 w-8 h-8 ' src='images/phonepay.png' alt='' />
//                     <img className='lg:w-10 lg:h-10 w-8 h-8' src='images/googlepay.png' alt='' />
//                     <img className='lg:w-10 lg:h-10 w-8 h-8' src='images/deepapp.png' alt='' />
//                     <img className='lg:w-10 lg:h-10 w-8 h-8' src='images/paytm.png' alt='' />
//                   </div>
//                   <div className='flex justify-center'>
//                     <img className='' src='/images/scanner.png' alt='' />
//                   </div>
//                 </div>
//                 <div className='flex flex-col  space-y-8'>
//                   <div className='flex flex-col px-2 justify-around'>
//                     <img className='lg:w-16 w-32' src='/images/upipay.png' alt='' />
//                     <p>assist.7classes@icici</p>
//                   </div>
//                   <div className='flex lg:px-0 px-2'>
//                     <button className='rounded-2xl bg-white border border-blue-400 lg:w-full w-full'>COPY</button>
//                   </div>
//                 </div>
//               </div>
//               <div className='mt-8 flex justify-center'>
//                 <p className='text-blue-500'>Scan the QR code from the app and make payment</p>
//               </div>
//               <img className='w-full' src='images/Line.png' alt='' />
//               <div className='mt-4 flex justify-center flex-col lg:py-0 py-4 lg:pl-6 pl-4'>
//                 <a href='https://www.impactguru.com/fundraiser/help-7classes'>
//                   <p className='lg:tracking-widest text-blue-500 underline lg:text-md text-sm '>Claim your donation acknowledgment now!</p>
//                   <p className='lg:tracking-widest flex justify-center text-blue-500 lg:text-md text-sm underline'>
//                     {' '}
//                     For Payment done via UPI
//                   </p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='mt-8'>
//         <div className='flex flex-col justify-center space-y-4'>
//           <div className='lg:px-16 px-4'>
//             <button
//               onClick={() => router.push('https://www.impactguru.com/fundraiser/help-7classes')}
//               className='mt-0  items-center self-center lg:w-[480px] w-[340px] m-auto py-1  text-lg font-medium text-white transition focus:outline-none  donationButton   border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
//             >
//               DONATE NOW
//               <p className='text-sm italic'>(Indian Tax Benefits Available)</p>
//             </button>
//           </div>
//           <div className='lg:px-16 px-4'>
//             <button
//               onClick={() =>
//                 router.push(
//                   'https://www.facebook.com/login.php?skip_api_login=1&api_key=1000563233479492&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv12.0%2Fdialog%2Fshare%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df3e89d560cfa4f%2526domain%253Dwww.impactguru.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.impactguru.com%25252Ff2de9314cbcc0f8%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df3c92ca68d8584%2526domain%253Dwww.impactguru.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.impactguru.com%25252Ff2de9314cbcc0f8%2526relation%253Dopener%2526frame%253Dfd272cc85406c8%2526result%253D%252522xxRESULTTOKENxx%252522%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.impactguru.com%252Ffundraiser%252Fhelp-7classes%253Futm_source%253Dfacebook%2526utm_campaign%253Dhelp-7classes%2526utm_medium%253Dlg-r-top%26client_id%3D1000563233479492%26ret%3Dlogin%26sdk%3Djoey%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.impactguru.com%252Ffundraiser%252Fhelp-7classes&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3c92ca68d8584%26domain%3Dwww.impactguru.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.impactguru.com%252Ff2de9314cbcc0f8%26relation%3Dopener%26frame%3Dfd272cc85406c8%26result%3D%257B%2522error_code%2522%253A4201%252C%2522error_message%2522%253A%2522User%2Bcanceled%2Bthe%2BDialog%2Bflow%2522%257D%26error_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%26e2e%3D%257B%257D&display=popup&locale=en_GB'
//                 )
//               }
//               className='mt-0  items-center self-center lg:w-[480px] w-[340px] m-auto py-3  text-lg font-medium text-white transition focus:outline-none  bg-blue-700   border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
//             >
//               <div className='flex justify-center space-x-1'>
//                 <p>SHARE NOW</p>
//                 <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
//                   <path
//                     fillRule='evenodd'
//                     d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
//                     clipRule='evenodd'
//                   />
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducateGirls;
