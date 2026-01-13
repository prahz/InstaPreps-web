import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PrepsNavBar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = fetchUser();
    if (user) {
      setUser(user);
    }
  }, []);

  const fetchUser = () => {
    // Note: Using localStorage here as per your login logic, or sessionStorage if that's where you changed it to.
    // The original file used sessionStorage, so I'll keep it as is.
    if (typeof window !== 'undefined') {
        const userStr = sessionStorage.getItem('user') || localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  };

  const logout = () => {
    sessionStorage.clear();
    localStorage.removeItem('user'); // Clear both to be safe
    router.push({
      pathname: '/'
    });
  };

  return (
    <div className='flex justify-between '>
      <a href='/'>
        <img className=' h-14 sm:h-16' src='/images/instapreps.webp' alt='' />
      </a>
      
      <div className='flex items-center -mr-2 md:hidden'>
        <button
          type='button'
          className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'
          aria-expanded='false'
          onClick={() => setOpen(true)}
        >
          <svg
            className='w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>

      {/* DESKTOP MENU */}
      <div className='hidden md:flex md:items-center md:space-x-6'>
        <Link href='/' className='font-extralight hover:text-secondary text-xl'>
          Home
        </Link>

        <Link href='/gogirls' className='font-extralight hover:text-secondary text-xl'>
          Go Girls
        </Link>

        <Link href='/rewards' className='font-extralight hover:text-secondary text-xl'>
          Rewards
        </Link>

        {user && (
          <Link href='/home' className='font-extralight hover:text-secondary text-xl'>
            Post
          </Link>
        )}

        <Link href='/feed' className='font-extralight hover:text-secondary text-xl'>
          Feed
        </Link>

        {/* --- ADDED COMFY AI LINK HERE (DESKTOP) --- */}
        <Link href='/comfy' className='font-extralight hover:text-secondary text-xl'>
          Comfy AI
        </Link>

        {user && (
          <Link href='/mock_test' className='font-extralight hover:text-secondary text-xl'>
            Mock Test
          </Link>
        )}

        {!user && (
          <Link href='/insta_sinup'>
            <button className='items-center self-center px-6 py-1  text-lg md:text-xl font-medium text-white transition donationButton border border-transparent focus:outline-none rounded-4xl hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'>
              Login
            </button>
          </Link>
        )}

        {user && (
          <button 
            onClick={logout} 
            className='items-center self-center px-6 py-1  text-lg md:text-xl font-medium text-white transition donationButton border border-transparent focus:outline-none rounded-4xl hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
          >
            Logout
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          open ? 'block' : 'hidden'
        } z-20 absolute inset-x-0 top-0  transition origin-top transform md:hidden`}
      >
        <div className='overflow-hidden  bg-white rounded-lg ring-black ring-opacity-5'>
          <div className='flex items-center justify-between  p-2'>
            <div>
              <img className='w-auto h-14 sm:h-20' src='/images/instapreps.webp' alt='' />
            </div>
            <div className='-mr-2'>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 text-gray-400  rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <svg
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>

          <div className={`${open ? 'block' : 'hidden'} pt-5 pb-6 `}>
            <div className='px-2 flex flex-col items-center space-y-1 '>
              <Link href='/' className='block px-3 py-2 text-base font-medium text-gray-900 text-xl rounded-md hover:bg-gray-50'>
                Home
              </Link>

              <Link href='/gogirls' className='text-base font-medium hover:text-gray-300'>
                Go Girls
              </Link>
              <Link href='/rewards' className='text-base font-medium hover:text-gray-300'>
                Rewards
              </Link>
              <Link href='/home' className='text-base font-medium hover:text-gray-300'>
                Post
              </Link>
              <Link href='/feed' className='text-base font-medium hover:text-gray-300'>
                Feed
              </Link>

              {/* --- ADDED COMFY AI LINK HERE (MOBILE) --- */}
              <Link href='/ragcomfy' className='text-base font-medium hover:text-gray-300'>
                Comfy AI
              </Link>

              <Link href='/mock_test' className='text-base font-medium hover:text-gray-300'>
                Mock Test
              </Link>

              <Link href='/insta_sinup'>
                <button className='items-center self-center px-6 py-1  text-lg md:text-xl font-medium text-white transition donationButton border border-transparent focus:outline-none rounded-4xl hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'>
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepsNavBar;