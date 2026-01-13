import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SevenGirls = () => {
  return (
    <div className='lg:mt-24 mt-16 '>
      <div className='line_bg_girls bg_line_girls'>
        <div className='h-[660px] sat-mainImage3 content_bg lg:-mt-0 -mt-8 w-full '>
          <div className='lg:w-[75%] w-full m-auto h-[340px] grid grid-cols-2 justify-items-center '>
            <div className='flex justify-center mt-4 py-4 lg:py-0'>
              <ScrollAnimation animateIn='zoomIn' duration={1}>
                <img className='lg:w-[210px] w-[180px] lg:h-[210px] h-[180px]' src='/images/girls.png' />
              </ScrollAnimation>
            </div>

            <div className='lg:px-12 px-2 lg:max-w-md text-center max-w-md mt-16'>
              <ScrollAnimation animateIn='zoomIn' duration={1}>
                <h2 className='lg:text-3xl text-2xl satTextColorImage font-bold'>7 Girls</h2>
                <h2 className='lg:text-xl text-md text-black font-bold mt-4'>
                  Only Top 7 Girls will be Selected & Trained for IIT JEE and NEET{' '}
                </h2>
              </ScrollAnimation>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:w-[80%] w-[100%] justify-items-center lg:-mt-2 -mt-8 m-auto'>
            <div className='lg:max-w-xl lg:mt-12 mt-2 px-0 lg:px-0 m-auto text-center'>
              <ScrollAnimation animateIn='zoomIn' duration={1}>
                <h2 className='lg:text-3xl text-xl font-bold satTextColorImage'>Get 100% Scholorship</h2>
                <div className='max-w-sm lg:px-16 px-4'>
                  <h2 className='lg:text-xl text-md text-black font-bold mt-4'>Crack the IIT-JEE/NEET Free of Cost</h2>
                </div>
              </ScrollAnimation>
            </div>
            <div className='lg:-mt-8 -mt-8'>
              <ScrollAnimation animateIn='zoomIn' duration={1}>
                <img className='lg:w-[240px] w-[220px]' src='/images/scholorship.png' alt='' />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className='lg:-mt-20 -mt-24'>
          <div className='lg:h-[660px] h-[580px] sat-mainImage5 content_bg_screens w-full'>
            <div className='lg:w-[80%] w-[100%]  h-[340px] grid grid-cols-2 m-auto'>
              <div className='flex justify-center lg:px-0 px-4'>
                <ScrollAnimation animateIn='zoomIn' duration={1}>
                  <img className='lg:h-[200px] h-[160px] w-[160px]' src='/images/calender.png' />
                </ScrollAnimation>
              </div>
              <div className='lg:px-12 px-2 lg:max-w-xl max-w-sm lg:mt-8 mt-4 text-center m-auto'>
                <ScrollAnimation animateIn='zoomIn' duration={1}>
                  <h2 className='lg:text-3xl text-2xl satTextColorImage font-bold'>Exam Date</h2>
                  <div className='lg:px-12 px-0'>
                    <h2 className='lg:text-xl text-md text-black font-bold mt-4'>
                      Selection Test will be open from 10th Dec-20th jan
                    </h2>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className='grid grid-cols-2 justify-items-center lg:w-[80%] w-[100%] m-auto lg:-mt-16 -mt-20'>
              <div className='lg:max-w-xl max-w-xs lg:mt-8 mt-0 text-center'>
                <ScrollAnimation animateIn='zoomIn' duration={1}>
                  <h2 className='lg:text-3xl text-2xl font-bold satTextColorImage'>Result</h2>
                  <div className='max-w-xs'>
                    <h2 className='lg:text-xl text-md text-black font-bold lg:mt-4 mt-2'>
                      Result will be announced on 30th Jan & Classes will begin from 5th Feb
                    </h2>
                  </div>
                </ScrollAnimation>
              </div>
              <div className='lg:mt-2'>
                <ScrollAnimation animateIn='zoomIn' duration={1}>
                  <img className='lg:w-[210px] w-[160px] h-[160px]' src='/images/Rename.png' alt='' />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevenGirls;
