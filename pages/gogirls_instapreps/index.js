import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';
import PrepsNavBar from 'src/components/prepsNavBar';

const GoGirls = () => {
  const [show, setShow] = useState(false);
  const [videoSrc, setVideoSrc] = useState();
  return (
    <div className=''>
      <div className='sm:w-[90%] m-auto mb-0 w-full'>
        <Head>
          <title>Project Go Girls - Empowerment Initiative by Instapreps</title>
          <meta
            name='description'
            content='Join Project Go Girls Initiative - Take the selection test - 7 Girls will be selected for Free of Cost training for IIT-JEE - Girl Support Initiative by Instapreps'
          />
        </Head>
        <PrepsNavBar />
        <div className='grid grid-cols-5 mt-6'>
          <div className='col-span-4 relative m-1'>
            <p className='absolute sm:top-6 top-1 text-white sm:text-xl text-sm p-1'>
              Golden Opportunity For IIT JEE/NEET-Girls Aspirants
            </p>
            <img src='/images/header-rectangle.webp' className='h-10 sm:h-full w-full sm:w-[65%]' />
          </div>

          <div className='col-span-1 flex justify-end p-1 sm:p-3'>
            {/* <a href='/'>
            <img className='h-14 sm:h-16' src='/images/instapreps.webp' alt='' />
          </a> */}
          </div>
        </div>

        <div className='m-auto mt-8 w-[90%]'>
          <p className='text-gray-600 font-extrabold uppercase text-xl sm:text-2xl'>Introducing</p>
          <p className='text-indigo text-center sm:text-justify text-3xl sm:text-6xl m-2 sm:m-10  '>Project GO GIRLS</p>
          <div className='flex justify-end'>
            <p className='text-gray-600 text-xl sm:text-2xl font-semibold'> BY SUPER 30 ALUMNI</p>
          </div>
          <div className='flex justify-between mb-4 mt-4'>
            <button
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.instapreps&hl=en_US&gl=US')}
              className='rounded-4xl text-sm h-8 sm:h-full  sm:text-md  border border-indigo font-semibold px-1 py-0 sm:px-3 sm:py-2 text-indigo focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300'
            >
              TAKE TEST NOW
            </button>
            <button
              onClick={() => {
                setShow(true);
                setVideoSrc('https://question-adminpanel.s3.ap-south-1.amazonaws.com/go-girls/Go+Girls+video.mp4');
              }}
              className='rounded-4xl text-sm h-8 sm:h-full  sm:text-md border  border-gray-600 font-semibold px-1 py-0 sm:px-3 sm:py-2 text-gray-600   focus:outline-none active:outline-none  hover:shadow-secondary hover:-translate-y-1  transform duration-300'
            >
              Why GO Girls?
            </button>
            {show && (
              <div
                className='fixed inset-0 z-10 overflow-y-auto'
                aria-labelledby='modal-title'
                role='dialog'
                aria-modal='true'
              >
                <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                  <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' aria-hidden='true' />

                  <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                    &#8203;
                  </span>

                  <div className='inline-block  pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
                    <div className='absolute top-0 right-0  pt-2 pr-4 sm:block'>
                      <button
                        type='button'
                        className='text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
                    <div className=' sm:flex sm:items-start'>
                      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                        <div className='mt-2'>
                          <iframe
                            width='415'
                            height='315'
                            src={videoSrc}
                            title='YouTube video player'
                            frameBorder='0'
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
          <hr className='border-gray-700' />
        </div>
        <div className=' flex   relative mt-4 pt-4'>
          <p className='absolute  text-white text-xl font-semibold sm:text-2xl p-3'>TOTAL FREE!</p>

          <img src='/images/section-left.webp' className='w-[50%] sm:w-[20%]' />
        </div>
        <div className='relative p-2 flex flex-cols-3'>
          <div className='col-span-2 pl-0 sm:pl-10 space-y-10 '>
            <ul className='space-y-2 text-sm sm:text-xl px-2'>
              <li className='list-disc'>Take the Selection Test & Crack the IIT-JEE Free of Cost</li>
              <li className='list-disc'>
                Only Top <h className='sm:text-2xl text-xl sm:text-black'>7 Girls</h> will be Selected & Trained for IIT
                JEE and NEET
              </li>
              <li className='list-disc'>Selection Test will be open from 5th April-25th April</li>
              <li className='list-disc'>Result will be announced on 5th May</li>
              <li className='list-disc'>Classes will begin from 5th May</li>
            </ul>
            <img src='/images/list-img-svg.webp' className='w-[80%] sm:w-[40%] ' />

            <div className=''>
              <img src='/images/rectangleBttom.webp' className='w-[95%] absolute sm:relative' />
            </div>
          </div>
          <div className='relative flex flex-col justify-center '>
            <img id='aluminiImage' className='w-[12rem] self-center' src='/images/alumini-profile.webp' alt='' />

            <div className=' bg-[#6622f8] text-white text-xs sm:text-lg m-0 sm:m-auto w-full sm:w-[80%] p-2'>
              <p>
                Under the Supervision of{' '}
                <strong>
                  <a href='https://ceoanupraaj.wordpress.com'>
                    <span className='underline'>Anup Raaj</span>
                  </a>
                </strong>
              </p>
              <p>(Super30 Alumni, IIT BOMBAY Alumni, & MD-7CLASSES) </p>
            </div>
          </div>
        </div>

        <div className='mt-20 pt-10 mb-8'>
          <div className='container px-4 mx-auto sm:px-0'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
              <div className='order-first  mx-5 mt-10 md:mt-0 md:col-span-6'>
                <h3 className=' font-extrabold tracking-tight mt-8 text-heading-primary text-4xl'>Why Go Girls?</h3>
                <p className='my-10 text-xl text-gray-600'>
                  India is a country of immense talent but scarce resources. Due to lack of resources and proper
                  guidance to study, a lot of talented students fail to achieve their dreams.
                </p>
                <p className='text-xl text-gray-600'>
                  Go Girls is a small effort from our side to empower the bottom of the society. We will select & teach
                  7 JEE /NEET for free this year. They will be trained well to reach their JEE & NEET Dream.
                </p>
                <p className='text-xl my-10 text-gray-600'>
                  Share & ensure it reaches the every needy and underprivileged students of the society.
                </p>
                <div className='flex justify-start gap-5 mt-10 '>
                  <button
                    onClick={() =>
                      window.open('https://play.google.com/store/apps/details?id=com.instapreps&hl=en_US&gl=US')
                    }
                    className='  rounded-4xl border border-indigo font-semibold px-2 py-0  sm:px-3 sm:py-2 focus:outline-none text-indigo hover:shadow-secondary hover:-translate-y-1  transform duration-300'
                  >
                    GOOGLE PLAY
                  </button>
                  <button
                    onClick={() => window.open('https://apps.apple.com/in/app/instapreps/id1543607970')}
                    className='rounded-4xl border border-indigo font-extrabold px-3 py-2 focus:outline-none text-indigo hover:shadow-secondary hover:-translate-y-1  transform duration-300'
                  >
                    APP STORE
                  </button>
                </div>
              </div>

              <div className='mt-12 lg:mt-0 sm:mt-10 md:col-span-6 '>
                <div className='mt-4 space-y-3'>
                  <ScrollAnimation animateIn='zoomIn' duration={1} initiallyVisible={false}>
                    <div className='flex px-3 py-3 shadow-primary rounded-xl'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center'>
                          <img src='/images/why-choose-step-1.webp' alt='' className='w-16 h-16' />
                        </div>
                      </div>
                      <div className='ml-4'>
                        <dd className='mt-2 text-base text-secondary-base'>
                          <span className='font-extrabold '>
                            Top 7 Students will be selected & Trained for IIT JEE & NEET
                          </span>
                        </dd>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='zoomIn' duration={1} initiallyVisible={false}>
                    <div className='flex px-3 py-3 shadow-primary rounded-xl'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center'>
                          <img src='/images/why-choose-step-2.webp' alt='' className='w-16 h-16' />
                        </div>
                      </div>
                      <div className='ml-4'>
                        <dd className='mt-2 text-base text-secondary-base'>
                          <span className='font-extrabold'>
                            There will be 3 rounds of selection - Selection Test, Screening Test & Live Interview
                          </span>
                        </dd>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='zoomIn' duration={1} initiallyVisible={false}>
                    <div className='flex px-3 py-3 shadow-primary rounded-xl'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center'>
                          <img src='/images/why-choose-step-3.webp' alt='' className='w-16 h-16' />
                        </div>
                      </div>
                      <div className='ml-4'>
                        <dd className='mt-2 text-base text-secondary-base'>
                          <span className='font-extrabold'>Screening Test will be open from 5th April-25th April</span>
                        </dd>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='zoomIn' duration={1} initiallyVisible={false}>
                    <div className='flex px-3 py-3 shadow-primary rounded-xl'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center'>
                          <img src='/images/why-choose-step-4.webp' alt='' className='w-16 h-16' />
                        </div>
                      </div>
                      <div className='ml-4'>
                        <dd className='mt-2 text-base text-secondary-base'>
                          <span className='font-extrabold'>
                            Download the app - Signup - Select "Go Girls Selection Test" - Take the test & wait for call
                          </span>
                        </dd>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='zoomIn' duration={1} initiallyVisible={false}>
                    <div className='flex px-3 py-3 shadow-primary rounded-xl'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center'>
                          <img src='/images/why-choose-step-5.webp' alt='' className='w-16 h-16' />
                        </div>
                      </div>
                      <div className='ml-4'>
                        <dd className='mt-2 text-base text-secondary-base'>
                          <span className='font-extrabold'>Test is available in Hindi and English both</span>
                        </dd>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='zoomIn' duration={1} initiallyVisible={false}>
                    <div className='flex px-3 py-3 shadow-primary rounded-xl'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center'>
                          <img src='/images/why-choose-step-6.webp' alt='' className='w-16 h-16' />
                        </div>
                      </div>
                      <div className='ml-4'>
                        <dd className='mt-2 text-base text-secondary-base'>
                          <span className='font-extrabold'>
                            IIT JEE/NEET Preparation will be started from 5th May 2022
                          </span>
                        </dd>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='zoomIn' duration={1} initiallyVisible={false}>
                    <div className='flex px-3 py-3 shadow-primary rounded-xl'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center'>
                          <img src='/images/why-choose-step-7.webp' alt='' className='w-16 h-16' />
                        </div>
                      </div>
                      <div className='ml-4'>
                        <dd className='mt-2 text-base text-secondary-base'>
                          <span className='font-extrabold'>This program is totally free of cost</span>
                        </dd>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGirls;
