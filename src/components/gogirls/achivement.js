import React from 'react';

const Achievement = () => {
  return (
    <div className='w-[100%] m-auto overflow-hidden'>
      <div className='flex justify-center'>
        <h2 className='text-3xl satTextColorImage font-bold'>Achievements</h2>
      </div>
      <div className='mt-12'>
        <div className='lg:w-[60%] w-[95%] m-auto'>
          <div className='flex flex-wrap justify-center lg:gap-32 gap-4'>
            <div className='lg:w-[280px] lg:h-[220px] w-[160px] h-[220px] overflow-hidden'>
              <div className='flex justify-center'>
                <img className='lg:w-32 w-20 lg:h-32 h-20' src='/images/Application.png' alt='' />
              </div>
              <div className='flex justify-center'>
                <div className='px-2 text-center mt-4'>
                  <h2 className='satTextColorImage font-bold lg:text-lg text-md '>3000+</h2>
                  <h2 className='satTextColorImage font-bold lg:text-lg text-sm'>Applications Received</h2>
                </div>
              </div>
            </div>
            <div className='lg:w-[280px] lg:h-[220px] w-[160px] h-[220px] overflow-hidden'>
              <div className='flex justify-center'>
                <img className='lg:w-32 w-20 lg:h-32 h-20' src='/images/Funding.png' alt='' />
              </div>
              <div className='flex justify-center'>
                <div className='px-2 text-center mt-4'>
                  <h2 className='satTextColorImage font-bold lg:text-lg text-md'>31K+</h2>
                  <h2 className='satTextColorImage font-bold lg:text-lg text-sm'> Funding Raised</h2>
                </div>
              </div>
            </div>
            <div className='lg:w-[280px] lg:h-[220px] w-[160px] h-[220px] overflow-hidden'>
              <div className='flex justify-center'>
                <img className='lg:w-32 w-20 lg:h-32 h-20' src='/images/Exams.png' alt='' />
              </div>
              <div className='flex justify-center'>
                <div className='px-2 text-center mt-4'>
                  <h2 className='satTextColorImage font-bold lg:text-lg text-md'>200+</h2>
                  <h2 className='satTextColorImage font-bold lg:text-lg text-sm'> Application Selected</h2>
                </div>
              </div>
            </div>
            <div className='lg:w-[280px] lg:h-[220px] w-[160px] h-[220px] overflow-hidden'>
              <div className='flex justify-center'>
                <img className='lg:w-32 w-20 lg:h-32 h-20' src='/images/StuSelected.png' alt='' />
              </div>
              <div className='flex justify-center'>
                <div className='px-2 text-center mt-2'>
                  <h2 className='satTextColorImage font-bold lg:text-lg text-md'>7</h2>
                  <h2 className='satTextColorImage font-bold lg:text-lg text-sm'>Student Selected</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
