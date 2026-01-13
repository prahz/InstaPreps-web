import React, { useState } from 'react';

const FirstBatch = () => {
  const [show, setShow] = useState(false);
  const [videoSrc, setVideoSrc] = useState();
  const [shows, setShows] = useState(false);
  return (
    <div className='w-[100%] m-auto overflow-hidden'>
      <div className='w-[100%] flex justify-center'>
        <h2 className='text-3xl font-bold satTextColorImage'>First Batch of Go Girls</h2>
      </div>
      {show && (
        <div
          className='fixed inset-0 z-10 overflow-y-auto'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='flex  justify-center lg:min-h-screen px-0 pt-4 pb-36 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' aria-hidden='true' />

            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>

            <div className='inline-block  pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle  sm:p-1'>
              <div className='absolute top-0 right-0  pt-0 pr-0 sm:block'>
                <button
                  type='button'
                  className='text-blue-500  rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={() => setShow(false)}
                >
                  <span className='sr-only'>Close</span>
                  <svg
                    className='w-8 h-8'
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
              <div className=' sm:flex sm:items-center'>
                <div className='sm:mt-0 sm:ml-0 '>
                  <div className='mt-0  Button11'>
                    <iframe
                      width='880'
                      height='420'
                      src='https://www.youtube.com/embed/hwBOMhoa25A?autoplay=1&mute=1&enablejsapi=1'
                      title='YouTube video player'
                      frameBorder='0'
                      // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  </div>
                  <div>
                    {/* <div className='mt-0  md:hidden sm:hidden '>
                      <iframe
                        width='320'
                        height='200'
                        src='https://www.youtube.com/embed/hwBOMhoa25A?autoplay=1&mute=1&enablejsapi=1'
                        title='YouTube video player'
                        frameBorder='2'
                        // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {shows && (
        <div
          className='fixed inset-0 z-10 overflow-y-auto'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='flex  justify-center lg:min-h-screen px-0 pt-4 pb-36 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' aria-hidden='true' />

            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>

            <div className='inline-block  pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle  sm:p-1'>
              <div className='absolute top-0 right-0  pt-0 pr-0 sm:block'>
                <button
                  type='button'
                  className='text-blue-500  rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={() => setShows(false)}
                >
                  <span className='sr-only'>Close</span>
                  <svg
                    className='w-8 h-8'
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
              <div className=' sm:flex sm:items-center'>
                <div className='sm:mt-0 sm:ml-0 '>
                  {/* <div className='mt-0  Button11'>
                    <iframe
                      width='880'
                      height='420'
                      src='https://www.youtube.com/embed/hwBOMhoa25A?autoplay=1&mute=1&enablejsapi=1'
                      title='YouTube video player'
                      frameBorder='0'
                      // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  </div> */}
                  <div>
                    <div className='mt-0  md:hidden sm:hidden '>
                      <iframe
                        width='320'
                        height='200'
                        src='https://www.youtube.com/embed/hwBOMhoa25A?autoplay=1&mute=1&enablejsapi=1'
                        title='YouTube video player'
                        frameBorder='0'
                        // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='mt-12'>
        <div className='grid lg:grid-cols-4 lg:space-x-8 space-y-4 justify-items-center lg:justify-items-start lg:w-[80%] w-[95%] m-auto'>
          <div className='grid-cols-1'>
            <div className='space-y-6 w-full'>
              <div className='w-[240px] h-[240px] overflow-hidden rounded-lg shadow-xl hover:shadow-secondary hover:-translate-y-2  transform duration-300'>
                <div className='hall_of_fame w-full h-24' />
                <div className='hall_of_fame1 w-full h-full '>
                  <div className='flex justify-center w-full'>
                    <img className='w-20 h-20 -mt-12' src='/images/Humera.png' alt='' />
                  </div>
                  <div className='flex justify-center mt-3'>
                    <div className='space-y-2 text-center'>
                      <h2 className='text-blue-600 font-medium text-xl'>Humera Saify</h2>
                      <h2 className='text-blue-400 font-medium text-xl'>NEET 590/720</h2>
                      <h2 className='text-blue-400 font-medium text-xl'>Bihar</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[240px] h-[240px] overflow-hidden rounded-lg shadow-xl hover:shadow-secondary hover:-translate-y-2  transform duration-300'>
              <div className='hall_of_fame10 w-full lg:h-24 h-16' />
              <div className='hall_of_fame11 w-full h-full'>
              <div className='flex justify-center w-full'>
                    <img className='w-20 h-20 -mt-12' src='/images/Raksha.png' alt='' />
                  </div>
                <div className='flex justify-center mt-3'>
                  <div className='space-y-2 text-center'>
                    <h2 className='text-blue-800 font-medium text-xl'>Raksha Jain</h2>
                    <h2 className='text-md font-medium  text-xl'>NEET 612/720</h2>
                    <h2 className='text-md font-medium  text-xl'>Uttar Pradesh</h2>
                  </div>
                </div>
              </div>
            </div>
    
              {/* <div className='w-[240px] h-[240px] overflow-hidden rounded-lg shadow-xl hover:shadow-secondary hover:-translate-y-2  transform duration-300'>
                <div className='hall_of_fame6 w-full h-24' />
                <div className='hall_of_fame7 w-full h-full '>
                  <div className='flex justify-center w-full'>
                    <img className='w-20 h-20 -mt-12' src='/images/Raksha.png' alt='' />
                  </div>
                  <div className='flex justify-center mt-3'>
                    <div className='space-y-2 text-center'>
                      <h2 className='text-red-500 font-medium text-xl'>Raksha Jain</h2>
                      <h2 className='text-md font-medium'>NEET 612/720</h2>
                      <h2 className='text-md font-medium'>Uttar Pradesh</h2>
                    </div>
                  </div>
                </div>
              </div> */}
              
            </div>
          </div>
          <div className='grid-cols-3 mt-8 lg:w-[780px] w-full lg:h-[460px] h-[260px] overflow-hidden '>
            <button
              className='Button11'
              onClick={() => {
                setShow(true);
                setVideoSrc('https://www.youtube.com/embed/hwBOMhoa25A');
              }}
            >
              <img
                className='lg:h-[460px] h-[230px] w-[780px] rounded-xl cursor-pointer'
                src='/images/Firstbatch.png'
                alt=''
              />
            </button>
            <button
              className='md:hidden sm:hidden'
              onClick={() => {
                setShows(true);
              }}
            >
              <img
                className='lg:h-[460px] h-[230px] w-[780px] rounded-xl cursor-pointer'
                src='/images/Firstbatch.png'
                alt=''
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBatch;
