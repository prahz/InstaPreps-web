import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const PrepsWork = () => {
  return (
    <div className='line_backgrounds bg_line3'>
      <div className='w-full relative overflow-hidden flex justify-center items-center lg:h-[320px] h-[210px] sat-mainImage1 content_bg_screen'>
        <div className='lg:mt-0 -mt-8'>
          <ScrollAnimation animateIn='zoomIn' duration={1}>
            <h2 className='lg:text-5xl text-4xl text-black font-bold'>How does it work?</h2>
          </ScrollAnimation>
        </div>
      </div>
      <div className='h-[620px] sat-mainImage3 content_bg lg:-mt-8 -mt-12 w-full'>
        <div className='lg:w-[80%] w-full m-auto h-[310px] grid grid-cols-2 justify-items-center'>
          <div className='lg:px-12 px-2 lg:max-w-lg max-w-md mt-8'>
            <ScrollAnimation animateIn='zoomIn' duration={1}>
              <h2 className='lg:text-4xl text-xl satTextColorImage font-bold'>Sign up in the InstaprepsAi app</h2>
              <h2 className='lg:text-2xl text-xl text-gray-500 mt-4'>Download the App and signup</h2>
            </ScrollAnimation>
          </div>
          <div className='flex lg:-mt-24 -mt-8 py-4 lg:py-0'>
            <ScrollAnimation animateIn='zoomIn' duration={1}>
              <img className='lg:w-[340px] w-[260px] lg:h-[390px] h-[240px]' src='/images/worklogo.png' />
            </ScrollAnimation>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:w-[95%] w-[100%] lg:-mt-2 -mt-8 m-auto justify-items-center'>
          <div className='mt-0'>
            <ScrollAnimation animateIn='zoomIn' duration={1}>
              <img className='lg:w-[240px] w-[220px]' src='/images/sinuplogo.png' alt='' />
            </ScrollAnimation>
          </div>
          <div className='lg:max-w-md max-w-sm lg:mt-6 mt-2 px-2 lg:px-8'>
            <ScrollAnimation animateIn='zoomIn' duration={1}>
              <h2 className='lg:text-4xl text-xl font-bold satTextColorImage'>5 minutes confidence diagnosis</h2>
              <h2 className='lg:text-2xl text-md text-gray-500 mt-4'>Take a 5 minutes confidence diagnosis in app</h2>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className='lg:mt-2 mt-0'>
        <div className='lg:h-[660px] h-[580px] sat-mainImage5 content_bg_screens w-full'>
          <div className='lg:w-[80%] w-[100%] m-auto  h-[340px] grid grid-cols-2 justify-items-center'>
            <div className='lg:px-12 px-2 lg:max-w-xl max-w-sm mt-8'>
              <ScrollAnimation animateIn='zoomIn' duration={1}>
                <h2 className='lg:text-4xl text-xl satTextColorImage font-bold'>Get A detailed analysis</h2>
                <div className=''>
                  <h2 className='lg:text-2xl text-md text-gray-500 mt-4'>Get a detailed confidence report</h2>
                </div>
              </ScrollAnimation>
            </div>
            <div className='flex  lg:px-0 px-4'>
              <ScrollAnimation animateIn='zoomIn' duration={1}>
                <img className='lg:h-[220px] h-[180px] ' src='/images/teacherlogo.png' />
              </ScrollAnimation>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:w-[95%] w-[100%] m-auto lg:-mt-0 -mt-8 justify-items-center'>
            <div className='lg:-mt-4'>
              <ScrollAnimation animateIn='zoomIn' duration={1}>
                <img className='lg:w-[280px] w-[160px]' src='/images/studentlogo.png' alt='' />
              </ScrollAnimation>
            </div>
            <div className='lg:max-w-lg max-w-xs lg:mt-12 mt-0'>
              <ScrollAnimation animateIn='zoomIn' duration={1}>
                <h2 className='lg:text-4xl text-xl font-bold satTextColorImage'>
                  Note down all the Underconfident and Overconfident questions and solve with your friends
                </h2>
                <h2 className='lg:text-2xl text-md text-gray-500 mt-4'>
                  
                </h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepsWork;
