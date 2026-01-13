import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import Link from 'next/link';

const PrepsDay = () => {
  const [watchSection, setWatchSection] = useState([]);
  const [error, SetError] = useState('');

  const settings = {
    dots: false,
    className: '',
    centerPadding: '0px',
    LazyLoad: true,
    infinite: true,
    centerMode: false,
    rows: 2,
    slidesPerRow: 2,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <img src='/images/next.png' />,
    prevArrow: <img src='/images/next.png' />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
          initialSlide: 1
        }
      }
    ]
  };

  useEffect(() => {
    const getVideoWatch = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/all_shots_for_student/20476`);
        setWatchSection(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        SetError(err.message);
      }
    };
    getVideoWatch();
  }, []);

  return (
    <div className='w-[90%] m-auto'>
      <div className='relative h-16 '>
        <h1 className='absolute top-4 text-2xl satImagesPreps font-semibold'>Preps of The Day</h1>
        <div className='absolute lg:right-6 right-0 lg:top-4 top-5'>
          <div className='flex gap-1'>
            <a href='/all-preps' className='satTextColor font-medium'>
              View all
            </a>
            <svg
              className='w-5 h-5 satTextColor '
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <div className='flex lg:flex-row flex-col gap-8'>
          <div className='lg:w-[520px] lg:h-[520px] w-[355px] h-[360px]'>
            <img className='' src='/images/prepsday.png' alt='' />
          </div>
          <div className='lg:mt-16 mt-2 lg:w-[520px]'>
            <Slider {...settings}>
              {watchSection.map((items) => {
                return (
                  // <Link className='' href={{ pathname: '/preps-of-Day', query: { id: items.id } }}>
                  <div className='cursor-pointer flex py-4 gap-8'>
                    <Link className='' href={{ pathname: '/preps-of-Day', query: { id: items.id } }}>
                      <div className='h-24 lg:w-[245px] w-full satTextColorPrepsAll border-gray-300 hover:border-gray-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 shadow-xl rounded-xl'>
                        <div className='relative h-16 w-full'>
                          <div className='absolute top-2 px-2'>
                            <h1 className='text-white'>{items.name}</h1>
                          </div>
                          <div className='right-0 absolute top-2 px-2'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-4 w-4 text-white '
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                              />
                            </svg>
                          </div>
                        </div>
                        <div className='mt-2 px-2 '>
                          <h1 className='text-white'>5mins Duration</h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                  //   </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepsDay;
