// import React from 'react';
// import Footer from 'src/components/footer';
// import Header from 'src/components/header';
// import Connect from 'src/components/instapreps/connect';
// import Head from 'next/head';
// import VerticalSidebar from 'src/components/VerticalSidebar';
// // use tailwind css to centre a div

// const CONNECT = () => {
//   return (
//     <>
//       <Head>
//         <title>Connect to confidence coaches in 45 Seconds</title>
//         <meta name='description' content='Solve your doubt from IIT, NIT & Super30 Alumni in 45 seconds' />
//         <meta name='keywords' content='Doubt clearing session ' />
//         <meta name='keywords' content='Doubt solving App' />
//       </Head>
//       <div className=''>
//         <div className='lg:w-[90%] w-[95%] m-auto lg:mt-4 mt-2'>
//           {/* <Header /> */}
//           <VerticalSidebar/>
//         </div>
//         <div className='w-[100%] connect_policy overflow-hidden mt-6'>
//           <div className='flex lg:justify-between lg:flex-row flex-col h-[560px] lg:h-[390px] lg:w-[90%] w-[95%] lg:gap-8 gap-10 gap-y-2 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
//             <div className='lg:w-max-md lg:px-0 px-4 '>
//               <p className='lg:text-5xl text-4xl text-indigo'>Connect one on one with our confidence coaches</p>
//               <br />
//               <p className='lg:text-2xl text-1xl text-grey'>Solve your doubts with our confidence coaches</p>
//               <p className='lg:text-2xl text-1xl text-grey mt-4'>
//                 <strong>From IIT, NIT & Super 30 Alumni in just 45 seconds</strong>
//               </p>
//             </div>

//             <div className='lg:mt-16 mt-4 flex-shrink lg:px-0 px-8 '>
//               <button
//                 className='cursor-pointer '
//                 onClick={() => {
//                   window.open('https://www.youtube.com/embed/GyI71SxNn7g');
//                 }}
//               >
//                 <img
//                   className='md:w-[750px] w-[450px] md:h-[250px] h-[200px]'
//                   src='images\Resize_CONNECT.webp'
//                   alt='Image'
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{
//             marginTop: '20px',
//             paddingTop: '60px',
//             paddingLeft: '24px',
//             paddingBottom: '60px',
//             paddingRight: '24px',
//             background: '#fff',
//             display: 'block',
//             fontFamily: 'sans-serif',
//             fontWeight: '400',
//             display: 'block',
//             fontSize: '100%'
//           }}
//         >
//           <h2 className='text-3xl font-bold text-black' style={{ padding: '20px' }}>
//             How does it work?
//           </h2>
//           <div className='flex lg:justify-between lg:flex-row flex-col  lg:w-[90%] w-[95%] lg:gap-8 gap-10 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
//             <div className='FiloWorkSection_step-card-content__w_Hz1'>
//               <div className='flex gap-4' style={{ marginBottom: '20px' }}>
//                 <h2 className='text-2xl text-black font-bold'>01</h2>
//                 <h2 className='text-2xl text-blue-600 font-bold'>Stuck While Studying?</h2>
//               </div>
//               <div>
//                 <p className='lg:text-3xl text-2xl'>
//                   Unanswered questions can lead to misunderstandings & can lower your confidence
//                 </p>
//               </div>
//             </div>
//             <img
//               style={{ margin: '10px' }}
//               autoPlay=''
//               loop=''
//               muted=''
//               playsinline=''
//               width='302'
//               height='180'
//               src='\images\First.jpg'
//             />
//           </div>
//           <div className='flex lg:justify-between lg:flex-row-reverse flex-col  lg:w-[90%] w-[95%] lg:gap-8 gap-10 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
//             <div className='FiloWorkSection_step-card-content__w_Hz1'>
//               <div className='flex gap-4' style={{ marginBottom: '20px' }}>
//                 <h2 className='text-2xl text-black font-bold'>02</h2>
//                 <h2 className='text-2xl text-blue-600 font-bold'>Ask a question</h2>
//               </div>
//               <div>
//                 <p className='lg:text-3xl text-2xl'>Questions, concepts, formulas, ask anything that you want.</p>
//               </div>
//             </div>
//             <img style={{ margin: '10px' }} width='302' height='180' src='\images\ConnectUI.jpg' />
//           </div>
//           <div className='flex lg:justify-between lg:flex-row flex-col  lg:w-[90%] w-[95%] lg:gap-8 gap-10 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
//             <div>
//               <div className='flex gap-4' style={{ marginBottom: '20px' }}>
//                 <h2 className='text-2xl text-black font-bold'>03</h2>
//                 <h2 className='text-2xl text-blue-600 font-bold'>Connect to a confidence coach in 45 seconds</h2>
//               </div>
//               <div>
//                 <p className='lg:text-3xl text-2xl'>
//                   A professional confidence coach is ready to provide clarity on any challenging topics and boost your
//                   confidence
//                 </p>
//               </div>
//             </div>
//             <img
//               style={{ margin: '10px' }}
//               autoPlay=''
//               loop=''
//               muted=''
//               playsinline=''
//               width='302'
//               height='180'
//               src='\images\Third.jpg'
//             />
//           </div>
//         </div>
//         {/* <div>
//           <div class='Unlock_grid__vWDP9'>
//             <div>
//               <div style={{ padding: '40px' }}>
//                 <span
//                   style={{
//                     boxSizing: 'border-box',
//                     display: 'inline-block',
//                     overflow: 'hidden',
//                     width: 'initial',
//                     height: 'initial',
//                     background: 'none',
//                     opacity: '1',
//                     border: '0px',
//                     margin: '0px',
//                     padding: '0px',
//                     position: 'relative',
//                     maxWidth: '100%'
//                   }}
//                 >
//                   <span
//                     style={{
//                       boxSizing: 'border-box',
//                       display: 'block',
//                       width: 'initial',
//                       height: 'initial',
//                       background: 'none',
//                       opacity: '1',
//                       border: '0px',
//                       margin: '0px',
//                       padding: '0px',
//                       maxWidth: '100%'
//                     }}
//                   >
//                     <img
//                       alt=''
//                       aria-hidden='true'
//                       src='/images/Policy.png'
//                       style={{
//                         display: 'block',
//                         maxWidth: '100%',
//                         width: 'initial',
//                         height: 'initial',
//                         background: 'none',
//                         opacity: '1',
//                         border: '0px',
//                         margin: '0px',
//                         padding: '0px'
//                       }}
//                     />
//                   </span>
//                   <img
//                     srcset='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUnlock1111.20ce2b2b.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUnlock1111.20ce2b2b.png&amp;w=1080&amp;q=75 2x'
//                     src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUnlock1111.20ce2b2b.png&amp;w=1080&amp;q=75'
//                     decoding='async'
//                     data-nimg='intrinsic'
//                     style={{
//                       position: 'absolute',
//                       inset: '0px',
//                       boxSizing: 'border-box',
//                       padding: '0px',
//                       border: 'none',
//                       margin: 'auto',
//                       display: 'block',
//                       width: '0px',
//                       height: '0px',
//                       minWidth: '100%',
//                       maxWidth: '100%',
//                       minHeight: '100%',
//                       maxHeight: '100%',
//                       objectFit: 'contain'
//                     }}
//                   />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         <div className='lg:w-[70%] w-[100%] m-auto flex flex-wrap lg:flex-nowrap justify-evenly lg:gap-12 gap-8'>
//           <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
//             <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
//               <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/userslogo.png' alt='' />
//             </div>
//             <div className='flex justify-center lg:mt-2 -mt-0 lg:px-12 px-2 text-center'>
//               <h2 className='lg:text-xl text-xl satTextColorImage font-bold'> 17k+ Connect Calls</h2>
//             </div>
//           </div>
//           <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
//             <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
//               <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/solutions.png' alt='' />
//             </div>
//             <div className='flex justify-center lg:mt-2 mt-0 lg:px-12 px-4 text-center'>
//               <h2 className='lg:text-xl text-xl satTextColorImage font-bold'> 50K+ Mins Doubt solved</h2>
//             </div>
//           </div>

//           <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
//             <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
//               <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/sessions.png' alt='' />
//             </div>
//             <div className='flex justify-center lg:mt-2 mt-0 lg:px-6 px-0 text-center'>
//               <h2 className='lg:text-xl text-md satTextColorImage font-bold'>500+ Confidence Coaches</h2>
//             </div>
//           </div>
//           <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
//             <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
//               <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/rating.png' alt='' />
//             </div>
//             <div className='flex justify-center lg:mt-0  lg:px-16 px-4 text-center'>
//               <h2 className='lg:text-xl text-xl satTextColorImage font-bold'>
//                 4.5/5 <br />
//                 Ratings
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className='mt-24'>
//           <Connect />
//         </div>
//       </div>
//       <div className='mt-4'>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default CONNECT;
