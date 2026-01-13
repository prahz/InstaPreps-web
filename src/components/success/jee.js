import React from 'react';

const JEE = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <div className='relative px-6 py-5 border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 bg-gray-50'>
        <div className='flex items-center space-x-5 md:flex-1'>
          <div className='flex-shrink-0'>
            <img
              className='w-24 h-24 rounded-full'
              src='https://7classes.com/assets/img/students/70.%20Arya%20K.jpg'
              alt=''
            />
          </div>
          <div className='flex-1 min-w-0'>
            <a href='#' className='focus:outline-none'>
              <span className='absolute inset-0' aria-hidden='true' />
              <p>Cracked IIT JEE</p>
              <p className='text-sm font-medium text-gray-900'>Arya</p>
              <p className='text-sm text-gray-500 truncate'>12th CBSE, Kendriya Vidyalaya</p>
            </a>
          </div>
        </div>
        <div className='mt-5'>
          Excellent coaches and amazing method of teaching with 2:4:1 model of teaching. I am very grateful to 7classes
          for providing me the right platform to crack IIT.{' '}
        </div>
      </div>
      <div className='relative px-6 py-5 border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 bg-gray-50'>
        <div className='flex items-center space-x-5'>
          <div className='flex-shrink-0'>
            <img
              className='w-24 h-24 rounded-full'
              src='https://7classes.com//assets/img/students/chinmay.jpg'
              alt=''
            />
          </div>
          <div className='flex-1 min-w-0'>
            <a href='#' className='focus:outline-none'>
              <span className='absolute inset-0' aria-hidden='true' />
              <p>Cracked IIT JEE</p>
              <p className='text-sm font-medium text-gray-900'>Chinmay</p>
              <p className='text-sm text-gray-500 truncate'>12th CBSE, Kendriya Vidyalaya</p>
            </a>
          </div>
        </div>

        <div className='mt-5'>
          It was a very nice experience to be part of 7Classes. The confidence coaches in 7classes taught me the tricks
          and guided me toward success. They really help to be exam ready in every way possible.
        </div>
      </div>
    </div>
  );
};

export default JEE;
