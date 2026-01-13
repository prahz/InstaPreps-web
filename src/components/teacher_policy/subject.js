import React from 'react';

const Subject = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <div className='lg:w-[90%] w-[95%] m-auto'>
        <h2 className='text-3xl font-bold text-black lg:px-16 px-2'>Subjects for teaching</h2>
        <div className='lg:py-8 py-4'>
          <div className='w-full flex flex-wrap justify-center lg:gap-10 gap-4'>
            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/Mathematics.png' alt='' />
            </div>

            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/Physics.png' alt='' />
            </div>

            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/Chemistry.png' alt='' />
            </div>
            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/Biology.png' alt='' />
            </div>

            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/Science.png' alt='' />
            </div>

            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/English.png' alt='' />
            </div>
            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/Hindi.png' alt='' />
            </div>
            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/sst.png' alt='' />
            </div>
            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/jees.png' alt='' />
            </div>
            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/neets.png' alt='' />
            </div>
            <div className=''>
              <img className='lg:w-[260px] w-[160px]' src='images/Counsellings.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <div className='flex justify-center rounded-4xl items-center bg-gray-400 w-full m-auto policy_payment overflow-hidden'>
          <div className='lg:py-4 py-2 lg:px-0 px-4'>
            <p className='lg:text-2xl text-sm font-medium text-black'>
              We Only Select Top 5% Of The coaches From The Pool For Quality
            </p>
          </div>
        </div>
        <div className='w-[100%] flex justify-center mt-8'>
          <button
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.instapreps', '_blank')}
            className='items-center self-center w-[230px] py-2  text-xl font-medium text-white transition focus:outline-none  bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
          >
            Download The App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subject;
