import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const WatchSection = () => {
  const [watchSection, setWatchSection] = useState([]);
  const [show, setShow] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [error, SetError] = useState('');

  const settings = {
    dots: false,
    className: 'start',
    centerPadding: 0,
    LazyLoad: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
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
          initialSlide: 1
        }
      }
    ]
  };

  useEffect(() => {
    const getVideoWatch = async () => {
      try {
        const response = await axios.get(
          'https://cors-anywhere1223.herokuapp.com/https://staging.instapreps.com/api/video'
        );
        setWatchSection(response.data);
        console.log(response.data);
      } catch (err) {
        SetError(err.message);
      }
    };
    getVideoWatch();
  }, []);

  return (
    <div className='sat-mainImage'>
      <div className='relative lg:w-[90%]  m-auto h-[220px]'>
        <div className='absolute left-2 bottom-4'>
          <h1 className='satTextColor text-2xl font-semibold'>Your Watch Section</h1>
          <h1 className='text-md watch-text'>Specially curated for you</h1>
        </div>
        <div className='absolute lg:right-6 right-0 bottom-8'>
          <div className='flex gap-1'>
            <a href='/watch_section' className='satTextColor font-medium'>
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
      <div className='lg:mt-12 mt-8 '>
        <div className='w-[80%]  m-auto'>
          <Slider {...settings}>
            {watchSection.map((items) => {
              return (
                <div
                  className='cursor-pointer'
                  onClick={() => {
                    setShow(true);
                    setVideoSrc(items.location);
                  }}
                >
                  <div className='flex justify-center h-36 w-[310px] bg-secondary border border-gray-300 hover:border-gray-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 shadow-xl rounded-2xl'>
                    <div className='relative'>
                      <div id='vid' className='relative overflow-hidden'>
                        <img className='' src={items.thumbnail} />
                      </div>
                      <div
                        className='absolute content-center'
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-10 h-10 text-white'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {show && (
        <div
          className='fixed inset-0 z-10 overflow-y-auto'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='flex justify-center  px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' aria-hidden='true' />

            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>

            <div className='inline-block  pt-5 pb-4 overflow-hidden transition-all transform bg-gray-300 rounded-lg shadow-xl  sm:align-middle  sm:max-w-lg sm:w-full'>
              <div className='absolute top-0 right-0  pt-0 pr-0 sm:block'>
                <button
                  type='button'
                  className='text-black-300 bg-blue-300 rounded-md hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
              <div className='flex justify-center px-4'>
                <div className='mt-2'>
                  <a href={videoSrc}>
                    <video width='100%' height='100%' controls autoPlay muted poster={videoSrc} preload='metadata'>
                      <source src={videoSrc} type='video/mp4' />
                      Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchSection;
