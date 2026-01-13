import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const PrepsDownload = () => {
  return (
    <div>
      <div className='w-full lg:-mt-0 -mt-8 relative overflow-hidden flex justify-center items-center h-[320px] sat-mainImage13 content_bg_screens_preps '>
        <div className='text-center lg:w-[100%] w-[80%] lg:-mt-0 -mt-12'>
          <ScrollAnimation animateIn='zoomIn' duration={1}>
            <h2 className='text-black lg:text-2xl text-xl font-normal'>We Don’t Say Anything,</h2>
            <h2 className='lg:text-4xl text-3xl text-black font-bold mt-2'>Our Numbers Speak For Us!</h2>
          </ScrollAnimation>
        </div>
      </div>
      <div className='lg:-mt-12 -mt-16'>
        <ScrollAnimation duration={1} animateOut='fadeOut' animateIn='fadeIn'>
          <div className='lg:w-[90%] w-[100%] m-auto flex flex-wrap justify-between gap-y-10'>
            <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
              <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
                <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/downloads.png' alt='' />
              </div>
              <div className='flex justify-center lg:mt-2 mt-0 px-12 text-center'>
                <h2 className='lg:text-xl text-xl satTextColorImage font-bold'> 500k+ Downloads</h2>
              </div>
            </div>
            <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
              <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
                <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/userslogo.png' alt='' />
              </div>
              <div className='flex justify-center lg:mt-2 -mt-0 lg:px-12 px-2 text-center'>
                <h2 className='lg:text-xl text-xl satTextColorImage font-bold'> 5.5K+ Monthly Users </h2>
              </div>
            </div>
            {/* <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
              <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
                <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/solutions.png' alt='' />
              </div>
              <div className='flex justify-center lg:mt-2 mt-0 lg:px-12 px-4 text-center'>
                <h2 className='lg:text-xl text-xl satTextColorImage font-bold'> 1.7M+ Doubts solved</h2>
              </div>
            </div> */}

            <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
              <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
                <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/prepslocation.png' alt='' />
              </div>
              <div className='flex justify-center lg:mt-2 mt-0 px-16 text-center'>
                <h2 className='lg:text-xl text-xl satTextColorImage font-bold'>InstaprepsAi Empowering Across Globe</h2>
              </div>
            </div>
            {/* <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
              <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
                <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/sessions.png' alt='' />
              </div>
              <div className='flex justify-center lg:mt-2 mt-0 lg:px-6 px-0 text-center'>
                <h2 className='lg:text-xl text-md satTextColorImage font-bold'>
                  333K+ Hours confidence boosting sessions
                </h2>
              </div>
            </div> */}
            <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
              <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
                <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/rating.png' alt='' />
              </div>
              <div className='flex justify-center lg:mt-0 mt-2 lg:px-16 px-4 text-center'>
                <h2 className='lg:text-xl text-xl satTextColorImage font-bold'>4.5/5 Rating on Playstore</h2>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default PrepsDownload;
