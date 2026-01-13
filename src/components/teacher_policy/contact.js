import React from 'react';

const Contact = () => {
  return (
    <div className='lg:w-[85%] w-[95%] m-auto'>
      <div className='flex justify-start w-full lg:px-0 px-2'>
        <h2 className='lg:text-3xl text-2xl text-black font-bold'>
          For any queries or grievance procedure, contact us at:
          <strong className='text-blue-400'>support@7classes.com</strong>
        </h2>
      </div>
      <div className='py-12'>
        <div className='w-full rounded-md shadow-2xl overflow-hidden ' style={{ border: '1px solid #E6E3FF' }}>
          <div className='py-2'>
            <div className='w-full flex flex-wrap justify-center items-center gap-14'>
              <div>
                <img className='w-[490px]' src='/images/Teacher_job.png' alt='' />
              </div>

              <div>
                <h2 className='text-4xl text-black font-bold'>Start getting coaching jobs today. </h2>
                <p className='text-xl mt-2 text-gray-500 font-medium'>
                  Set up profile and start getting new students requests today.
                </p>
                <button
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.instapreps', '_blank')}
                  className='items-center self-center w-[230px] py-2 mt-6 text-xl font-medium text-white transition bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
                >
                  Become a Coach
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
