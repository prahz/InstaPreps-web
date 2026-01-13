import React from 'react';

const Connect = () => {
  return (
    <div className='w-full bg-[#EBF6FF]'>
      <div className='w-[100%] m-auto grid md:grid-cols-2 grid-cols-1 justify-items-center'>
        <div className='mt-16 lg:px-16 px-8 max-w-xl'>
          <h2 className='lg:text-5xl text-3xl font-bold satTextColorImage '>Are you confident for your exams and Placement?</h2>
          <div className='mt-4 max-w-sm mr-4'>
            <h2 className='lg:text-xl text-md font-normal text-gray-500 text-slate-500'>
            Download InstaPrepsAI for Confidence Diagnosis built by experts from IITs, NITs, and Super 30 to boost your confidence!
            </h2>
          </div>
          <div className='py-8 Button11'>
            <div className='flex gap-8'>
              <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.instapreps', '_blank')}
              >
                <img className='w-[180px]' src='images/googleplay.png' alt='' />
              </button>
              <button onClick={() => window.open('https://apps.apple.com/in/app/instapreps/id1543607970', '_blank')}>
                <img className='w-[180px]' src='images/appleios.png' alt='' />
              </button>
            </div>
          </div>
        </div>

        <div className='px-2'>
          <img className='lg:max-w-xl md:max-w-sm' src='/images/teamwork.png' alt='' />
          <div className='py-8 md:hidden sm:hidden px-2 '>
            <div className='flex lg:gap-8 gap-4'>
              <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.instapreps', '_blank')}
              >
                <img className='w-[180px]' src='images/googleplay.png' alt='' />
              </button>
              <button onClick={() => window.open('https://apps.apple.com/in/app/instapreps/id1543607970', '_blank')}>
                <img className='w-[180px]' src='images/appleios.png' alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
