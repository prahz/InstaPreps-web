import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = ({ profile }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex justify-between '>
      <a href='/'>
        <img className=' h-14 sm:h-16' src='/images/instapreps.webp' alt='' />
      </a>
      <div className='flex gap-2 mt-2'>
        <h1 className='text-xl font-bold'>{profile}</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
      </div>
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

        <Link href='/home' className='font-extralight hover:text-secondary text-xl'>
          Post
        </Link>

        <Link href='/feed' className='font-extralight hover:text-secondary text-xl'>
          Feed
        </Link>

        {/* --- ADDED COMFY AI LINK HERE --- */}
        <Link href='/comfy' className='font-extralight hover:text-secondary text-xl'>
          Comfy AI
        </Link>

        <Link href='/mock_test' className='font-extralight hover:text-secondary text-xl'>
          Mock Test
        </Link>

        <Link href='https://staging.instapreps.com/blog/' className='font-extralight hover:text-secondary text-xl'>
          Blog
        </Link>

        <Link href='/insta-login'>
          <button className='items-center self-center px-6 py-1  text-lg md:text-xl font-medium text-white transition donationButton border border-transparent focus:outline-none rounded-4xl hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'>
            Register
          </button>
        </Link>
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
              <Link href='/posts' className='text-base font-medium hover:text-gray-300'>
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

              <Link href='/insta-login'>
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

export default NavBar;