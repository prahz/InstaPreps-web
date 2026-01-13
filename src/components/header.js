import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { useRouter } from 'next/router';
import { set } from 'nprogress';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import router from 'next/router';
// import { useRouter } from 'next/router';

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [data, setdata] = useState(null);
//   const [user , setuser] =useState();

//   useEffect(() => {
//     const data= fetchUser();
//     if (data) {
//       setdata(data);
//     }
//   }, []);
//   const fetchUser = () => {
//     const data = JSON.parse(localStorage.getItem('data'));
//     return data;
//   };

//   const router = useRouter();
//   const isHomePage = router.pathname === '/';

//   return (
//     <div className='lg:w-[95%] m-auto'>
//       <div className='flex justify-between '>
//         <div className='flex gap-4'>
//           <a href='/'>
//             <img className=' h-14 sm:h-16' src='/images/InstaPrepsLogo.png' alt='' />
//           </a>
//           <h1 className='text-xl mt-4 font-semibold'>
//             <span>InstaPrepsAi</span>
//           </h1>
//         </div>
//         <div className='flex items-center -mr-2 md:hidden'>
//           <button
//             type='button'
//             className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'
//             aria-expanded='false'
//             onClick={() => setOpen(true)}
//           >
//             <svg
//               className='w-6 h-6'
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               stroke='currentColor'
//               aria-hidden='true'
//             >
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
//             </svg>
//           </button>
//         </div>
//         <div className='hidden md:flex md:items-center md:space-x-6'>
//           {/* <button onClick={() => window.open('Become-Coach', '_blank')}>
//             <a className='text-lg font-extralight hover:text-secondary text-blue-600'>Become a Coach</a>
//           </button> */}

//           {user && (
//             <Link href='/home' className='text-lg font-extralight hover:text-secondary text-blue-600'>Home
//             </Link>
//           )}

//           {/* <Link href='/jeemains'className='text-lg font-extralight hover:text-secondary text-blue-600'>JEE Mains
//           </Link>
//           <Link href='/jeeadvance'
//             className='text-lg font-extralight hover:text-secondary text-blue-600'>JEE Advance
//           </Link> */}

//           {/* White when on main page & black when on home page */}
//           <Link href='confidencecheckup' className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}>
//           Confidence Test
//           </Link>
//           <Link href='startuppower' className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}>
//           Startup Power
//           </Link>
//           <Link href='/feed' className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}>
//           Feed
//           </Link>

//           {/* <Link href='Signup' className='text-lg font-extralight hover:text-secondary text-blue-600'>
//                 signup

//             </Link> */}
//            {/* <Link href='ourpartners'
//          className='text-lg font-extralight hover:text-secondary text-blue-600'>Our Partners
//            </Link> */}
//             {/* <a  href="https://partner.instapreps.com/" */}
//          {/* </a> */}

//           {/* <Link href='https://staging.instapreps.com/blog/'>
//             <a className='text-lg font-extralight hover:text-secondary text-blue-600'>Blog</a>
//           </Link> */}

// {data ? (
//             <div className='flex items-center space-x-4'>

//               {/* <Link href='/feed' className='text-lg font-extralight hover:text-secondary text-white'
//            >Feed</Link> */}
//               <Link href= '/useraccount'>
//               <span className='text-lg font-semibold text-grey-700'>{data.first_name}</span>
//               </Link>
//             </div>
//           ) : (
//             <Link href='/login'>
//               <button className='items-center self-center px-6 py-1 text-lg md:text-md font-medium text-white transition satImagesMcc border border-transparent focus:outline-none rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1 transform duration-300 hover:bg-gray-700'>
//                 Login
//               </button>
//             </Link>

//           )}
//           {/* <Link href='/insta_sinup'>
//            */}
//               {/* <button class="  items-center self-center px-6 py-1  text-lg md:text-xl font-medium text-white transition donationButton border border-transparent focus:outline-none rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700">Register</button> */}
//               {/* <button className='items-center self-center px-6 py-1  text-lg md:text-md font-medium text-white transition satImagesMcc border border-transparent focus:outline-none rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'>
//                 Login
//               </button>
//              */}
//           {/* </Link> */}
//         </div>
//         {/* for mobile views */}
//         <div
//           className={`${
//             open ? 'block' : 'hidden'
//           } z-20 absolute inset-x-0 top-0  transition origin-top transform md:hidden`}
//         >
//           <div className='overflow-hidden  bg-white rounded-lg ring-black ring-opacity-5'>
//             <div className='flex items-center justify-between  p-2'>
//               <div>
//                 <img className='w-auto h-14 sm:h-20' src='/images/instapreps.webp' alt='' />
//               </div>
//               <div className='-mr-2'>
//                 <button
//                   type='button'
//                   className='inline-flex items-center justify-center p-2 text-gray-400  rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'
//                   onClick={() => setOpen(false)}
//                 >
//                   <span className='sr-only'>Close menu</span>
//                   <svg
//                     className='w-6 h-6'
//                     xmlns='http://www.w3.org/2000/svg'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     stroke='currentColor'
//                     aria-hidden='true'
//                   >
//                     <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             <div className={`${open ? 'block' : 'hidden'} pt-5 pb-6 `}>
//               <div className='px-2 flex flex-col items-center space-y-1 '>

//               <Link href=' confidencecheckup '
//             className='text-lg font-extralight hover:text-secondary text-blue-600'>Confidence Checkup
//           </Link>
//           <Link href='startuppower'
//             className='text-lg font-extralight hover:text-secondary text-blue-600'>Startup Power
//           </Link>

//           {data ? (
//             <div className='flex items-center space-x-4'>
//               <Link href= '/useraccount'>
//               <span className='text-lg font-semibold text-grey-700'>{data.first_name}</span>
//               </Link>
//             </div>
//           ) : (
//             <Link href='/login'>
//               <button className='items-center self-center px-6 py-1 text-lg md:text-md font-medium text-white transition satImagesMcc border border-transparent focus:outline-none rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1 transform duration-300 hover:bg-gray-700'>
//                 Login
//               </button>
//             </Link>

//           )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [data, setdata] = useState(null);
  const [user, setuser] = useState();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // useEffect(() =>
  //    {
  //   const data= fetchUser();
  //   if (data) {
  //     setdata(data);
  //   }
  // }, []);
  useEffect(() => {
    const handleStorage = () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      setdata(userData);
    };

    const data = JSON.parse(localStorage.getItem('user') || '{}');

    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = localStorage.getItem('token') || data.id;

    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }

    // setuser(fetchUser());
    handleStorage(); // Load once on mount

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) setUserData(storedData);
  }, []);

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "/comfy", label: "Comfy AI" },
    { href: '/premiumpage', label: 'Premium' },
    { href: '/confidencetest', label: 'Confidence Test' },
    { href: '/startuppower', label: 'Startup Power' },
    { href: '/feed', label: 'Feed' }
  ];

  console.log("HEADER data:", data);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-700 transform ${
        hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      } ${isHomePage ? 'bg-transparent' : 'backdrop-blur-md bg-white/70 shadow-lg'} `}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <Link href='/'>
            <img
              src='/images/InstaPrepsLogo.png'
              alt='InstaPreps Logo'
              className='h-12 sm:h-14 cursor-pointer transition-transform duration-300 hover:scale-110'
            />
          </Link>
          <h1
            className={`text-xl font-bold tracking-wide transition-colors duration-500 ${
              isHomePage ? 'text-white drop-shadow' : 'text-gray-800'
            }`}
          >
            InstaPrepsAI
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-lg font-medium transition-colors duration-300 ${
                isHomePage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-blue-600'
              } group`}
            >
              {link.label}
              {/* underline hover animation */}
              <span className='absolute left-1/2 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
            </Link>
          ))}

          {/* <Link href='/jeemains'className='text-lg font-extralight hover:text-secondary text-blue-600'>JEE Mains
          </Link>
          <Link href='/jeeadvance'
            className='text-lg font-extralight hover:text-secondary text-blue-600'>JEE Advance
          </Link> */}

          {/* White when on main page & black when on home page */}

           {isLoggedIn && (    <Link href='/shots' className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}>
          Shots
          </Link>)}

          {isLoggedIn && (     <Link href='/home' className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`} >
          Posts
          </Link>)}
          
          {/* <Link href='confidencetest' className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}>
          Confidence Test</Link> */}
          {/* <Link
            href='/home'
            className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}
          >
            Home
          </Link> */}

          {/* <Link
            href='confidencetest'
            className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}
          >
            Confidence Test
          </Link>
          <Link
            href='startuppower'
            className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}
          >
            Startup Power
          </Link> */}
          {/* <Link
            href='/feed'
            className={`text-lg font-extralight hover:text-secondary ${isHomePage ? 'text-white' : 'text-black'}`}
          >
            Feed
          </Link> */}

          {/* <Link href='Signup' className='text-lg font-extralight hover:text-secondary text-blue-600'>
                signup
              
            </Link> */}
          {/* <Link href='ourpartners'
         className='text-lg font-extralight hover:text-secondary text-blue-600'>Our Partners
           </Link> */}
          {/* <a  href="https://partner.instapreps.com/" */}
          {/* </a> */}

          {/* <Link href='https://staging.instapreps.com/blog/'>
            <a className='text-lg font-extralight hover:text-secondary text-blue-600'>Blog</a>
          </Link> */}

          {data ? (
  <div className="relative group">
    {/* Profile Circle */}
    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer">
      {(data.first_name || data.name || "U")[0]}
    </div>

    {/* Dropdown */}
    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-md hidden group-hover:block z-50">
      <Link
        href="/useraccount"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Profile
      </Link>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  </div>
) : (

            <Link href="/login">
              <button className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Login
              </button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isHomePage ? 'text-white' : 'text-gray-700'
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className='md:hidden bg-white/90 backdrop-blur-md shadow-lg px-6 py-4 space-y-4 animate-[slideDown_0.5s_ease-in-out]'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='block text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300'
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {userData ? (
  <div className="relative group">

    {/* Profile Icon */}
    {userData.first_name?.[0] || "U"}

    {/* Dropdown */}
    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-md hidden group-hover:block z-50">
      <Link
        href="/useraccount"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={() => setOpen(false)}
      >
        Profile
      </Link>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  </div>
) : (
  <Link href="/login">
    <button className="w-full py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
      Login
    </button>
  </Link>
)}
        </div>
      )}
    </header>
  );
};

export default Header;
