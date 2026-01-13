import React from 'react';
// import { Slide } from 'react-slideshow-image';
import Slider from 'react-slick';

const UniqueCard = () => {
  const settings = {
    dots: true,
    // initialSlide: 1,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '10px',
    slidesToScroll: 1,
    nextArrow: <img className='' src='/images/NextArr.png' />,
    prevArrow: <img src='/images/PrevArr.png' />
  };

  const setting = {
    dots: true,
    // initialSlide: 1,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0px',
    slidesToScroll: 1,
    nextArrow: <img className='' src='/images/NextArr.png' />,
    prevArrow: <img src='/images/PrevArr.png' />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '25px',
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='lg:w-[80%] w-full m-auto'>
      <div className='lg:w-full h-16 flex w-[80%] m-auto justify-center'>
        <h4 className='lg:text-4xl text-3xl font-bold text-black'>What Makes InstaPrepsAi Unique?</h4>
      </div>

      {/* for mobile view */}
      <div className='mt-16 md:hidden sm:hidden w-[90%]'>
        <Slider {...settings}>
          <div className='  px-2 overflow-hidden sat_card_image_unique h-[320px]'>
            <div className='mt-4 px-4'>
              <div>
                <h2 className='lg:text-2xl text-xl font-bold text-yellow'>World’s first Confidence Diagnosis App</h2>
              </div>
              <div className='mt-2'>
                <h2 className='text-lg font-medium'>
                  InstaPrepsAi: The confidence App helps you in building your confidence
                </h2>
              </div>
              <div className='flex justify-center mt-4'>
                <img className='w-[180px] h-[140px]' src='/images/unique.png' alt='' />
              </div>
            </div>
          </div>
          <div className='  sat_card_image_unique1 h-[320px] overflow-hidden'>
            <div className='mt-4 px-3'>
              <div>
                <h2 className='lg:text-2xl text-xl font-bold text-blue-700'>
                  Provides detailed confidence analysis just in 5min
                </h2>
              </div>
              <div className=' mt-2'>
                <h2 className='text-lg font-medium'>
                  A detailed analysis report of your performance just in 7min from our Confidence App
                </h2>
              </div>
              <div className='flex justify-center mt-2'>
                <img className='w-[200px] h-[140px]' src='/images/analysis.png' alt='' />
              </div>
            </div>
          </div>
          <div className='sat_card_image_unique2 h-[320px]'>
            <div className='sat_card_image_unique2'>
              <div className='flex justify-center justify-items-center w-full mt-28 '>
                <img className='h-[210px]' src='/images/analysis1.png' alt='' />
              </div>
            </div>
          </div>
          <div className=' sat_card_image_unique3 h-[320px] overflow-hidden '>
            <div className='px-4 mt-8'>
              <div className='max-w-sm'>
                <h2 className='text-xl font-bold text-blue-400'>
                  Online learning platform curated by IIT, NIT Super30 Alumni
                </h2>
              </div>
              <div className='flex gap-8 justify-center'>
                <div className='mt-2 max-w-sm'>
                  <h2 className='text-sm font-medium'>
                    InstaPrepsAi is a Confidence learning platform for students preparing for JEE Advanced, NEET,
                    Olympiad, and who want to build their confidence
                  </h2>
                </div>
                <div className='mt-8'>
                  <img className='h-[160px] w-[430px]' src='/images/achive.png' alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='sat_card_image_unique1 h-[320px]'>
            <div className='mt-4 px-4'>
              <div>
                <h2 className='text-xl font-bold text-blue-700'>Learn anywhere, anytime with InstaPreps</h2>
              </div>
              <div className='mt-2'>
                <h1 className='text-md font-medium'>
                  Learn and solve your doubts anytime whether you are at home or at coaching institute
                </h1>
              </div>
              <div className='flex justify-center mt-4'>
                <img className='w-[190px] h-[140px]' src='/images/screen.png' alt='' />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className='mt-16 Button11'>
        <Slider {...setting}>
          <div className='sat_card_image_unique overflow-hidden w-[360px] h-[360px]'>
            <div className='mt-4 px-8'>
              <div>
                <h2 className='text-2xl font-bold text-yellow '>World’s first Confidence Diagnosis App</h2>
              </div>
              <div className='mt-4 '>
                <h2 className='text-xl font-medium'>
                  InstaPrepsAi: The Confidence App helps you in building your confidence Learning
                </h2>
              </div>
              <div className='flex justify-center mt-8'>
                <img className='w-[190px] h-[170px]' src='/images/unique.png' alt='' />
              </div>
            </div>
          </div>
          <div className='sat_card_image_unique1 overflow-hidden w-[320px] h-[360px]'>
            <div className='mt-4 px-6'>
              <div>
                <h2 className='lg:text-2xl text-xl font-bold text-blue-600'>Learn anywhere, anytime with InstaPrepsAi</h2>
              </div>
              <div className=' mt-2'>
                <h2 className='text-xl font-medium'>
                  Learn and solve your doubts anytime whether you are at home or at coaching institute
                </h2>
              </div>
              <div className='flex justify-center mt-6'>
                <img className='w-[220px] h-[160px]' src='/images/screen.png' alt='' />
              </div>
            </div>
          </div>
          <div className='sat_card_image_unique overflow-hidden w-[320px] h-[360px]'>
            <div className='mt-4 px-6'>
              <div>
                <h2 className='text-2xl font-bold text-blue-600'>Provides detailed confidence analysis just in 7min</h2>
              </div>
              <div className='mt-4'>
                <h2 className='text-xl font-medium'>
                  A detailed analysis report of your performance just in 7min from our Confidence App
                </h2>
              </div>
              <div className='flex justify-center'>
                <img className='w-[200px] h-[180px]' src='/images/analysis.png' alt='' />
              </div>
            </div>
          </div>

          <div className=' sat_card_image_unique3 w-[320px] h-[360px] '>
            <div className='px-4 mt-4'>
              <div className='flex gap-4'>
                <div className='space-y-4'>
                  <h2 className='text-xl font-bold text-blue-400'>
                    Online learning platform curated by IIT, NIT, Super30 Alumni
                  </h2>
                  <h2 className='text-lg font-medium'>
                    InstaPrepsAi is a confidence learning platform for students preparing for JEE Advanced, NEET,
                    Olympiad, and who want to build their confidence
                  </h2>
                </div>

                <div className='w-[380px] mt-32'>
                  <img className=' h-[180px]' src='/images/achive.png' alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='overflow-hidden w-[320px] h-[360px] '>
            <div className=''>
              <div className='flex justify-center justify-items-center w-full mt-20 '>
                <img className='h-[280px]' src='/images/analysis1.png' alt='' />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default UniqueCard;
