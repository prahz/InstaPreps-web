import React from 'react';

const MicroConfidenceCourse = () => {
  return (
    <div className='w-[95%] m-auto '>
      <h2 className='text-4xl satTextColorImage font-semibold md:hidden sm:hidden  py-4'>
        Instant Doubt Solving Session with Expert Coaches
      </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 lg:space-x-8 space-y-8 justify-items-center'>
        <div className='registration_preps_image_session lg:mt-0 mt-4'>
          <img className='lg:max-w-xl' src='/images/instamccimg.png' />
        </div>

        <div className='mt-16'>
          <div className='max-w-xl '>
            <h2 className='text-4xl satTextColorImage font-semibold Button11'>
              Instant Doubt Solving Session with Expert Coaches
            </h2>
            <div className='lg:mt-4 mt-2 lg:px-0 px-2'>
              <h2 className='lg:text-3xl text-2xl text-gray-500 font-medium'>
                <span>Connect with the confidence coaches from IIT, NIT,</span>
                <span> Super30 Alumni </span>
              </h2>
            </div>
            <div className='lg:mt-4 mt-6 lg:px-0 px-2'>
              <h2 className='lg:text-3xl text-2xl text-gray-500 font-medium'>
                Choose your subject and topic to get started with Live doubt solving Classes within{' '}
                <strong className='satTextColorImage'>45 Seconds</strong>
              </h2>
            </div>
            <div className='mt-10'>
              <button
                onClick={() => window.open('connect-to-coach', '_blank')}
                className='items-center self-center lg:w-[40%] w-full m-auto py-3  text-xl font-medium text-white transition focus:outline-none  bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroConfidenceCourse;
