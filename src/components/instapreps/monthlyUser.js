import React from 'react';

const MonthlyUser = () => {
  return (
    <div className='overflow-hidden w-[100%]'>
      <div className='flex flex-col text-center justify-center space-y-4'>
        <h1 className='satTextColor font-semibold text-4xl'>Students And Parents Trust Us.</h1>
        <h1 className='text-md text-gray-600 font-semibold'>We help them study the confidence way. </h1>
      </div>
      <div className='mt-16'>
        <div className='w-[95%] overflow-hidden m-auto flex lg:flex-row flex-wrap justify-center gap-8'>
          <div className='watch_section overflow-hidden rounded-xl shadow-lg border-gray-400 border-2 relative flex justify-center items-center'>
            <div className='p-2'>
              <div className='px-3'>
                <img className='h-12 w-12 ' src='/images/location.png' alt='' />
                <h1 className='mt-2 text-lg font-bold text-blue-700'>2.3K+</h1>
              </div>
              <div className='mt-1 text-center'>
                <h1 className=''>Instapreps</h1>
                <h1 className=''>Location</h1>
              </div>
            </div>
          </div>

          <div className='watch_section overflow-hidden rounded-xl shadow-lg border-gray-400 border-2 relative flex justify-center items-center'>
            <div className='p-2'>
              <div className='px-3'>
                <img className='h-12 w-12 ' src='/images/users.png' alt='' />
                <h1 className='mt-2 text-lg font-bold text-blue-700'>337K+</h1>
              </div>
              <div className='mt-1 text-center'>
                <h1 className=''>Monthly</h1>
                <h1 className=''>Active Users</h1>
              </div>
            </div>
          </div>
          <div className='watch_section  overflow-hidden rounded-xl shadow-lg border-gray-400 border-2 relative flex justify-center items-center'>
            <div className='p-2'>
              <div className='px-4'>
                <img className='h-12 w-12' src='/images/download.png' alt='' />
                <h1 className='mt-2 text-lg font-bold text-blue-700'>2.3 Lacs+</h1>
              </div>
              <div className='mt-1 text-center'>
                <h1 className=''>Total</h1>
                <h1 className=''>Downloads</h1>
              </div>
            </div>
          </div>
          <div className='watch_section  overflow-hidden rounded-xl shadow-lg border-gray-400 border-2 relative flex justify-center items-center'>
            <div className='p-2'>
              <div className='px-3'>
                <img className='h-12 w-12 ' src='/images/confidence.png' alt='' />
                <h1 className='mt-2 text-lg font-bold text-blue-700'>1.2 Lacs+</h1>
              </div>
              <div className='mt-1 text-center'>
                <h1 className='text-lg'>Confidence</h1>
                <h1 className='text-lg'>Diagnosed</h1>
              </div>
            </div>
          </div>
          <div className='watch_section overflow-hidden rounded-xl shadow-lg border-gray-400 border-2 relative flex justify-center items-center'>
            <div className='p-2'>
              <div className='px-6'>
                <img className='h-12 w-12 ' src='/images/questionsolved.png' alt='' />
                <h1 className='mt-2 text-lg font-bold text-blue-700'>6 Lacs+</h1>
              </div>
              <div className='mt-1 text-center'>
                <h1 className='text-sm'>Total No. of</h1>
                <h1 className='text-sm'>Questions Solved</h1>
              </div>
            </div>
          </div>
          <div className='watch_section  overflow-hidden rounded-xl shadow-lg border-gray-400 border-2 relative flex justify-center items-center'>
            <div className='p-2'>
              <div className='px-1'>
                <img className='h-w- ' src='/images/star.png' alt='' />
                <h1 className='mt-2 text-lg font-bold text-blue-700 px-4'>4.5 Star</h1>
              </div>
              <div className='mt-1 text-center'>
                <h1 className=''>Playstore</h1>
                <h1 className=''>Rating</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyUser;
