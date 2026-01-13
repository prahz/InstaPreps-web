import React, { useState } from 'react';
import Head from 'next/head';
import Header from 'src/components/header';
import SevenGirls from 'src/components/gogirls/sevengirls';
import StudentInformation from 'src/components/gogirls/gogirlInformation';
import Achievement from 'src/components/gogirls/achivement';
import HallOfFame from 'src/components/gogirls/halloffame';
import FirstBatch from 'src/components/gogirls/firstbatch';
import Footer from 'src/components/footer';
import VerticalSidebar from 'src/components/VerticalSidebar';
// import { useState } from 'react';

const GoGirl = () => {
  const [show, setShow] = useState(false);
  const [videoSrc, setVideoSrc] = useState();
  const [pop, setPop] = useState(false);
  const [shows, setShows] = useState(false);
  return (
    <div className='overflow-hidden'>
      <div className='sm:w-[90%] m-auto mb-0 w-full p-2'>
        <Head>
          <title>Project Go Girls - Empowerment Initiative by Instapreps</title>
          <meta
            name='description'
            content='Join Project Go Girls Initiative - Take the selection test - 7 Girls will be selected for Free of Cost training for IIT-JEE - Girl Support Initiative by Instapreps'
          />
        </Head>
        {/* <Header /> */}
        <VerticalSidebar/>
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
        <div className='mt-16'>
          <div className='w-[95%] flex flex-wrap justify-center lg:gap-16 overflow-hidden m-auto'>
            <div className='max-w-xl'>
              <h2 className='lg:text-4xl text-5xl font-bold satTextColorImage'>About Go Girls</h2>
              <div className='px-2 overflow-hidden lg:mt-4 mt-6'>
                <p className='text-xl font-medium'>
                  The Government of India has made Girl Education a priority, and has implemented various schemes over
                  the years to improve access and educational outcomes for girls. India is one of the most prosperous
                  countries in Asia, but it lacks resources especially when it comes to underprivileged girls.
                </p>
                <p className='mt-4 text-xl font-medium'>
                  InstaPreps by 7 Classes platform is making it easier than ever for girls in underprivileged areas to
                  pursue education. They’ve announced the launch of ‘Go Girls,’ an initiative that provides free
                  coaching sessions aimed at preparing them for the Joint Entrance Examination (JEE) and National
                  Eligibility Entrance Test(NEET).
                </p>
              </div>
            </div>

            <div className='lg:mt-24 mt-10 Button11'>
              <button
                className='cursor-pointer'
                onClick={() => {
                  setShow(true);
                  setVideoSrc('https://www.youtube.com/embed/fEvqhJzXizs');
                }}
              >
                <img
                  className='lg:max-w-xl max-w-xs lg:h-[280px] rounded-md h-[200px]'
                  src='/images/gogirls.png'
                  alt=''
                />
              </button>
            </div>
            <div className='lg:mt-24 mt-10  md:hidden sm:hidden '>
              <button
                className='cursor-pointer'
                onClick={() => {
                  setShows(true);
                }}
              >
                <img
                  className='lg:max-w-xl max-w-xs lg:h-[280px] rounded-md h-[200px]'
                  src='/images/gogirls.png'
                  alt=''
                />
              </button>
            </div>
            {show && (
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

                  <div className='inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-2 sm:align-middle'>
                    <div className='absolute top-0 right-0  pt-0 pr-0 sm:block'>
                      <button
                        type='button'
                        className='text-gray-400  rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => setShow(false)}
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
                    <div className=' '>
                      <div className=''>
                        <div className=''>
                          <iframe
                            width='880'
                            height='420'
                            src={videoSrc}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          />
                        </div>
                        {/* <div className='mt-0  md:hidden sm:hidden '>
                          <iframe
                            width='320'
                            height='200'
                            src='https://question-adminpanel.s3.ap-south-1.amazonaws.com/go-girls/Go+Girls+video.mp4'
                            title='YouTube video player'
                            frameBorder='2'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          />
                        </div> */}
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
                <div className='flex items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                  <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' aria-hidden='true' />

                  <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                    &#8203;
                  </span>

                  <div className='inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg w-[390px] shadow-xl '>
                    <div className='absolute top-0 right-0  pt-0 pr-0 sm:block'>
                      <button
                        type='button'
                        className='text-blue-400  rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => setShows(false)}
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
                    <div className=' '>
                      <div className=''>
                        {/* <div className=''>
                          <iframe
                            width='880'
                            height='420'
                            src={videoSrc}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          />
                        </div> */}
                        <div className='my-4  md:hidden sm:hidden '>
                          <iframe
                            width='340'
                            height='180'
                            src='https://question-adminpanel.s3.ap-south-1.amazonaws.com/go-girls/Go+Girls+video.mp4'
                            title='YouTube video player'
                            frameBorder='2'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='w-[90%] m-auto lg:mt-16 mt-12 flex gap-4'>
            <button
              onClick={() => window.open('http://impactguru.com/s/aMw70a', '_blank')}
              className='items-center self-center w-[230px] py-2  text-xl font-medium text-white transition focus:outline-none  bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
            >
              Donate Now
            </button>
            <button
              onClick={() => setPop(true)}
              className='items-center self-center w-[230px] py-2  text-xl font-medium text-white transition focus:outline-none  bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
            >
              Take Test
            </button>
          </div>
        </div>
      </div>
      <SevenGirls />
      <div className='lg:mt-0 mt-12'>
        <StudentInformation />
      </div>
      <div className='lg:mt-24'>
        <Achievement />
      </div>
      <div className='mt-20'>
        <HallOfFame />
      </div>
      <div className='mt-24'>
        <FirstBatch />
      </div>
      <div className='mt-16'>
        <Footer />
      </div>
    </div>
  );
};

export default GoGirl;
