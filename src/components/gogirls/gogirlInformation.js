import React, { useState } from 'react';

const StudentInformation = () => {
  const [pop, setPop] = useState(false);
  return (
    <div className='w-[100%] m-auto overflow-hidden -mt-16 '>
      <div className='flex justify-center'>
        <h1 className='text-3xl satTextColorImage font-bold'>Relevent Information</h1>
      </div>
      {pop && (
        <div
          className='fixed inset-0 z-10 overflow-y-auto'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='flex items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' aria-hidden='true' />

            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>

            <div className='inline-block pt-0 p-0 lg:px-0 px-0 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-2 sm:align-middle go_girls'>
              <div className='absolute top-0 right-0  pt-0 pr-0 sm:block'>
                <button
                  type='button'
                  className='text-gray-400  rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={() => setPop(false)}
                >
                  <span className='sr-only'>Close</span>
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
              <div className='flex justify-center lg:w-[100%] w-[80%] m-auto'>
                <div className='space-y-8 mt-16'>
                  <div className='flex space-x-8 items-center'>
                    <div>
                      <img className='lg:w-12 lg:h-12 w-8 h-8' src='/images/Appdownload.png' alt='' />
                    </div>
                    <h2 className='lg:text-xl text-md font-bold'>Download the app</h2>
                  </div>
                  <div className='flex space-x-8 items-center'>
                    <div>
                      <img className='lg:w-12 lg:h-12 w-8 h-8' src='/images/sinup.png' alt='' />
                    </div>
                    <h2 className='lg:text-xl text-md font-bold'>Signup</h2>
                  </div>
                  <div className='flex space-x-8 items-center'>
                    <div>
                      <img className='lg:w-12 lg:h-12 w-8 h-8' src='/images/selection.png' alt='' />
                    </div>
                    <h2 className='lg:text-xl text-md font-bold'>Select “Go Girls Selection Test”</h2>
                  </div>
                  <div className='flex space-x-8 items-center'>
                    <div>
                      <img className='lg:w-12 lg:h-12 w-8 h-8' src='/images/call.png' alt='' />
                    </div>
                    <h2 className='lg:text-xl text-md font-bold'>Take the test & wait for call</h2>
                  </div>
                  <div className='flex justify-center'>
                    <button
                      onClick={() =>
                        window.open('https://play.google.com/store/apps/details?id=com.instapreps', '_blank')
                      }
                      className='items-center self-center lg:w-[230px] w-[160px] lg:py-3 py-2  lg:text-md text-sm font-medium text-white transition focus:outline-none  bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
                    >
                      Download The App
                    </button>
                  </div>
                </div>
              </div>
              <div className='p_one w-full m-auto lg:mt-4 mt-8 ' />
            </div>
          </div>
        </div>
      )}
      <div className='lg:mt-16 mt-12'>
        <div className='lg:w-[80%] w-[95%] m-auto'>
          <div className='lg:grid lg:grid-cols-6 grid-cols-2 justify-items-center '>
            <div className='lg:col-span-3 '>
              <div className='space-y-6 px-4'>
                <div className='flex gap-4'>
                  <div className='w-8 h-8 mt-2'>
                    <img className='w-6 h-6' src='/images/Stroke.png' alt='' />
                  </div>
                  <div>
                    <h2 className='lg:text-xl text-lg font-medium text-gray-500'>
                      Top 7 Students will be selected & Trained for IIT JEE & NEET
                    </h2>
                  </div>
                </div>

                <div className='flex gap-6 '>
                  <div className='lg:w-8 w-10 h-8 mt-3'>
                    <img className='lg:w-8 w-10 h-6' src='/images/Stroke.png' alt='' />
                  </div>
                  <div>
                    <h2 className='lg:text-xl text-lg font-medium text-gray-500'>
                      There will be 3 rounds of selection - Selection Test, Screening Test & Live Interview
                    </h2>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='w-8 h-8 mt-2'>
                    <img className='w-6 h-6' src='/images/Stroke.png' alt='' />
                  </div>
                  <div>
                    <h2 className='lg:text-xl text-lg font-medium text-gray-500'>
                      Screening Test will be open from 10th Dec-20th Jan
                    </h2>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='w-12 h-8 mt-3'>
                    <img className='w-6 h-6' src='/images/Stroke.png' alt='' />
                  </div>
                  <div>
                    <h2 className='lg:text-xl text-lg font-medium text-gray-500'>
                      Download the app - Signup - Select "Go Girls Selection Test" - Take the test & wait for call
                    </h2>
                  </div>
                </div>
                <div className='flex lg:gap-4 gap-2'>
                  <div className='w-8 h-8 mt-2'>
                    <img className='lg:w-6  h-6' src='/images/Stroke.png' alt='' />
                  </div>
                  <div>
                    <h2 className='lg:text-xl text-lg font-medium text-gray-500'>
                      Test is available in both Hindi and English
                    </h2>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='w-8 h-8 mt-2'>
                    <img className='w-6 h-6' src='/images/Stroke.png' alt='' />
                  </div>
                  <div>
                    <h2 className='lg:text-xl text-lg font-medium text-gray-500'>
                      IIT JEE/NEET Preparation will commence from 5th Feb 2023
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:col-span-3 lg:px-0 px-6'>
              <img className='w-[280px] h-[420px]' src='/images/Selected.png' alt='' />
            </div>
          </div>
          <div className='mt-12'>
            <button
              onClick={() => setPop(true)}
              className='items-center self-center lg:w-[360px] w-[340px] py-2  text-xl font-medium text-white transition focus:outline-none  bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
            >
              Take Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInformation;
