// import React from 'react';
// import Link from 'next/link';
// import { PRIVACY_POLICY_URL } from '../constants';

// const Footer = () => {
//   return (
//     <footer className='footer_bg ' aria-labelledby='footerHeading '>
//       <h2 id='footerHeading' className='sr-only'>
//         Footer
//       </h2>
//       <div className='lg:w-[85%] w-[90%] m-auto'>
//         <div className='lg:py-20 py-8 grid md:grid-cols-3 grid-cols-1 gap-6 w-full'>
//           <div className='mt-4'>
//             <h2 className='lg:text-4xl text-3xl font-semibold text-white'>Company</h2>

//             <h2 className='lg:text-xl text-md text-white font-medium mt-2'>
//               Contact Us: +91-8452869104
//               <br />
//               Email: hello@instaprepsai.com
//             </h2>
//             {/* <button onClick={() => window.open('Become-Coach', '_blasnk')}>
//               <a className='lg:text-xl text-md text-white font-normal mt-1'>Become a Coach</a>
//             </button>
//             <br /> */}
//             <button onClick={() => window.open('our-partners', '_blank')}>
//               <a className='lg:text-xl text-md text-white font-normal mt-1 block'>Our Partners</a>
//             </button>
//             <Link href='/deleteaccount' target='_blank'
//                className='lg:text-xl text-md text-white font-normal mt-1 block'>Delete Account
//             </Link>
//             {/* <Link href='/feed'>
//               <a className='lg:text-xl text-md text-white font-normal mt-1 block'>Feed</a>
//             </Link> */}
//           </div>

//           <div className='mt-4'>
//             <h2 className='text-4xl font-semibold text-white'>Legal</h2>
//             <Link href='/privacypolicy' target='_blank' className='lg:text-xl text-md text-white font-normal mt-1 block'>Privacy Policy
//             </Link>
//             <Link href='/termsconditions' target='_blank' className='lg:text-xl text-md text-white font-normal mt-1  block'>Terms & Conditions
//             </Link>


//             {/* <buttonx
//               onClick={() => window.open(`${process.env.NEXT_PUBLIC_BASE_API_URL}blog/`, '_blank')}
//               className='lg:text-xl text-md text-white font-normal mt-1'
//             >
//               Blog
//             </button> */}
//             {/* <br /> */}
//             <button onClick={() => window.open('/gogirls', '_blank')}>
//               <a className='lg:text-xl text-md text-white font-normal mt-1 '>Go Girls</a>
//             </button>
//             <br />

//             {/* // <Link href='/mock_test'className='lg:text-xl text-md text-white font-normal mt-1 block'>Mock Test
//             // </Link> */}
//             <Link href='/rewards ' className='lg:text-xl text-md text-white font-normal mt-1 block'>Rewards
//             </Link>
//           </div>

//           <div className='mt-4'>
//             <div className='flex justify-center gap-4'>
//               {/* // <a
//               //   href='https://www.facebook.com/7classes/'
//               //   className='text-gray-300 hover:text-white'
//               //   target='_blank'
//               //   rel='noreferrer'
//               // >
//               //   <span className='sr-only'>Facebook</span>
//               //   <svg className='w-10 h-10' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
//               //     <path
//               //       fillRule='evenodd'
//               //       d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
//               //       clipRule='evenodd'
//               //     />
//               //   </svg>
//               // </a> */}

//               <button
//                 onClick={() => window.open('https://www.instagram.com/instaprepsai?igsh=eGowcW52cmFuaXN1', '_blank')}
//                 className='text-gray-300 hover:text-white'

//               >
//                 <span className='sr-only'>Instagram</span>
//                 <svg className='w-10 h-10' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
//                   <path
//                     fillRule='evenodd'
//                     d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
//                     clipRule='evenodd'
//                   />
//                 </svg>
//               </button>

//               {/* // <a
//               //   href='https://twitter.com/7_classes_'
//               //   className='text-gray-300 hover:text-white'
//               //   target='_blank'
//               //   rel='noreferrer'
//               // >
//               //   <span className='sr-only'>Twitter</span>
//               //   <svg className='w-10 h-10' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
//               //     <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
//               //   </svg>
//               // </a> */}
//               <a
//                 href='https://www.linkedin.com/company/instaprepsby7classes/'
//                 className='text-gray-300 hover:text-white'
//                 target='_blank'
//                 rel='noreferrer'
//               >
//                 <img className='w-8 h-8' src='/images/linkedin.png' alt='' />
//               </a>
//               {/* // <a
//               //   href='https://wa.me/918092069862'
//               //   className='text-gray-300 hover:text-white'
//               //   target='_blank'
//               //   rel='noreferrer'
//               // >
//               //   <img className='w-10 h-10' src='/images/whatsapp.png' alt='' />
//               // </a> */}
//               <a
//                 href='https://www.youtube.com/channel/UCEUiVCvz3XqX_MsIHAUC2JA'
//                 className='text-gray-300 hover:text-white'
//                 target='_blank'
//                 rel='noreferrer'
//               >
//                 <img className='w-10 h-10' src='/images/youtube.png' alt='' />
//               </a>
//               {/* // <a
//               //   href='https://t.me/SevenClassesOnlineLearning/67'
//               //   className='text-gray-300 hover:text-white'
//               //   target='_blank'
//               //   rel='noreferrer'
//               // >
//               //   <img className='w-10 h-10' src='/icons/telegram.svg' alt='' />
//               // </a> */}
//             </div>
//             <div className='mt-3 lg:px-7 px-2'>
//               <h2 className='text-xl text-white'>©️ copyright Confidence App InstaPrepsAI, 2025</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>

      <div className="lg:w-[85%] w-[90%] m-auto">
        {/* Footer Grid */}
        <div className="lg:py-16 py-10 grid md:grid-cols-2 grid-cols-1 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Company</h2>
            <p className="mt-3 text-lg text-gray-300 leading-relaxed">
              Contact Us: <a href="tel:+918452869104" className="hover:text-blue-400">+91-8452869104</a>
              <br />
              Email:{" "}
              <a href="mailto:hello@instaprepsai.com" className="hover:text-blue-400">
                hello@instaprepsai.com
              </a>
            </p>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => window.open("ourpartners", "_blank")}
                className="block text-lg text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Our Partners
              </button>
              {/* 
                * DELETE ACCOUNT BUTTON - REMOVED
                * Removed on: 2024-12-14
                * Reason: Task assignment to remove Delete Account button from footer
                * Original code preserved as comment for potential future restoration
                *
                * <Link
                *   href="/deleteaccount"
                *   target="_blank"
                *   className="block text-lg text-gray-300 hover:text-red-400 transition-colors duration-200"
                * >
                *   Delete Account
                * </Link>
                */}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Legal</h2>
            <div className="mt-3 space-y-2">
              <Link
                href="/privacypolicy"
                target="_blank"
                className="block text-lg text-gray-300 font-medium relative transition-all duration-300 ease-in-out hover:scale-[1.03] hover:text-white
before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[1.5px] before:bg-gradient-to-r before:from-white/80 before:to-white before:rounded-full before:transition-all before:duration-300 before:ease-in-out hover:before:w-[19%]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/termsconditions"
                target="_blank"
                className="block text-lg text-gray-300 font-medium relative transition-all duration-300 ease-in-out hover:scale-[1.03] hover:text-white
before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[1.5px] before:bg-gradient-to-r before:from-white/80 before:to-white before:rounded-full before:transition-all before:duration-300 before:ease-in-out hover:before:w-[26%]"

              >
                Terms & Conditions
              </Link>
              <button
                onClick={() => window.open("/gogirls", "_blank")}
                className="block text-lg text-gray-300 font-medium relative transition-all duration-300 ease-in-out hover:scale-[1.03] hover:text-white
before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[1.5px] before:bg-gradient-to-r before:from-white/80 before:to-white before:rounded-full before:transition-all before:duration-300 before:ease-in-out hover:before:w-[100%]"
              >
                Go Girls
              </button>
              <Link
                href="/rewards"
                className="block text-lg text-gray-300 font-medium relative transition-all duration-300 ease-in-out hover:scale-[1.03] hover:text-white
before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[1.5px] before:bg-gradient-to-r before:from-white/80 before:to-white before:rounded-full before:transition-all before:duration-300 before:ease-in-out hover:before:w-[12%]"
              >
                Rewards
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media - Centered */}
        <div className="flex justify-center gap-5 mt-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/instaprepsai?igsh=eGowcW52cmFuaXN1"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/instaprepsby7classes/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <img className="w-6 h-6" src="/images/linkedin.png" alt="LinkedIn" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCEUiVCvz3XqX_MsIHAUC2JA"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-all duration-300 hover:scale-110"
          >
            <img className="w-6 h-6" src="/images/youtube.png" alt="YouTube" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-5 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm md:text-base font-medium tracking-wider">
            © {new Date().getFullYear()} Confidence App InstaPrepsAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
