import React, { useState } from 'react';

const STEPS = { JEE: 'jee', NEET: 'neet', TEN: 'ten', TWELVE: 'twelve' };

const Success = () => {
  const [activeStep, setActiveStep] = useState(STEPS.JEE);

  return (
    <div className='relative py-16 bg-white sm:py-24 lg:py-32'>
      <div className='max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <p className='mt-2 text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl'>
          Student Success is all we work for!
        </p>
        <div className='mt-10'>
          <div className=''>
            <nav className='flex justify-center mx-auto space-x-4' aria-label='Tabs'>
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setActiveStep(STEPS.JEE);
                }}
                className={`${
                  activeStep === STEPS.JEE ? 'bg-gray-200' : ''
                } px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-800`}
              >
                JEE
              </a>

              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setActiveStep(STEPS.NEET);
                }}
                className={`${
                  activeStep === STEPS.NEET ? 'bg-gray-200' : ''
                } px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-800`}
              >
                NEET
              </a>

              <a
                href='#'
                className={`${
                  activeStep === STEPS.TEN ? 'bg-gray-200' : ''
                } px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-800`}
                aria-current='page'
                onClick={(e) => {
                  e.preventDefault();
                  setActiveStep(STEPS.TEN);
                }}
              >
                10th
              </a>

              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setActiveStep(STEPS.TWELVE);
                }}
                className={`${
                  activeStep === STEPS.TWELVE ? 'bg-gray-200' : ''
                } px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-800`}
              >
                12th
              </a>
            </nav>
          </div>
        </div>
        <div className='mt-12'>
          {activeStep === STEPS.JEE && (
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='relative px-6 py-5 bg-white border border-gray-200 shadow-2xl rounded-3xl hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex items-center space-x-5 md:flex-1'>
                  <div className='flex-shrink-0'>
                    <img className='w-24 h-24 rounded-full' src='/images/Arya.jpg' alt='' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p>Cracked IIT JEE</p>
                      <p className='text-sm font-medium text-gray-900'>Arya</p>
                      <p className='text-sm text-gray-500 truncate'>12th CBSE, Kendriya Vidyalaya</p>
                    </a>
                  </div>
                </div>
                <div className='mt-5'>
                  Excellent confidence coaches and amazing method of teaching with a 2:4:1 model of teaching. I am very
                  grateful to 7classes for providing me with the right platform to crack IIT.{' '}
                </div>
              </div>
              <div className='relative px-6 py-5 bg-white border border-gray-200 shadow-2xl rounded-3xl hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex items-center space-x-5'>
                  <div className='flex-shrink-0'>
                    <img className='w-24 h-24 rounded-full' src='/images/chinmay.jpg' alt='' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p>Cracked IIT JEE</p>
                      <p className='text-sm font-medium text-gray-900'>Chinmay</p>
                      <p className='text-sm text-gray-500 truncate'>12th CBSE, Kendriya Vidyalaya</p>
                    </a>
                  </div>
                </div>

                <div className='mt-5'>
                  It was a very nice experience to be part of 7Classes. The Confidence Coaches in 7classes taught me the
                  tricks and guided me toward success. They really help to be exam ready in every way possible.
                </div>
              </div>
            </div>
          )}

          {activeStep === STEPS.NEET && (
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='relative px-6 py-5 bg-white border border-gray-200 shadow-xl rounded-2xl hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex items-center space-x-5 md:flex-1'>
                  <div className='flex-shrink-0'>
                    <img className='w-24 h-24 rounded-full' src='/images/dummy-Profile.png' alt='' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p>Cracked NEET</p>
                      <p className='text-sm font-medium text-gray-900'>Simran</p>
                    </a>
                  </div>
                </div>
                <div className='mt-5'>
                  The atmosphere here is extremely motivating. The small batch strength helped me interact with my
                  coaches and clear my doubts. The extra efforts put in by the faculty members to cover the syllabus in
                  time helped me top in my school also.7Classes had a specific way with every student and that helped me
                  clear my basics and build confidence.
                </div>
              </div>
              <div className='relative px-6 py-5 bg-white border border-gray-200 shadow-xl rounded-2xl hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex items-center space-x-5'>
                  <div className='flex-shrink-0'>
                    <img className='w-24 h-24 rounded-full' src='/images/dummy-Profile.png' alt='' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p>Cracked NEET</p>
                      <p className='text-sm font-medium text-gray-900'>Raksha</p>
                      <p className='text-sm text-gray-500 truncate'>12th State Board</p>
                    </a>
                  </div>
                </div>

                <div className='mt-5'>
                  The kind of group I had to compete with inside the classroom in 7Classes was awesome. The consistent
                  doubt clearing sessions, confidence based assessment and 24X7 availability of faculty members are
                  unique, as compared to the institutes where my friends had enrolled. The 2:4:1 teaching methodology is
                  the best way I am taught till now.
                </div>
              </div>
            </div>
          )}

          {activeStep === STEPS.TEN && (
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='relative px-6 py-5 bg-white border border-gray-200 shadow-xl rounded-2xl hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex items-center space-x-5 md:flex-1'>
                  <div className='flex-shrink-0'>
                    <img className='w-24 h-24 rounded-full' src='/images/Dibyadyuti.jpg' alt='' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p>Scored 98% +</p>
                      <p className='text-sm font-medium text-gray-900'>Dibyadyuti</p>
                      <p className='text-xs italic font-medium text-gray-900'>10th CBSE, Poddar International School</p>
                    </a>
                  </div>
                </div>
                <div className='mt-5'>
                  7Classes helped me achieving this feet. It has some top notch confidence coaches from IIT. They
                  explain the difficult concepts in a different way which is very important to get a deeper
                  understanding of concepts. It's Daily Practice Problems and study materials give a clear vision of
                  real exam.
                </div>
              </div>
              <div className='relative px-6 py-5 bg-white border border-gray-200 rounded-lg shadow-xl hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex items-center space-x-5'>
                  <div className='flex-shrink-0'>
                    <img className='w-24 h-24 rounded-full' src='/images/Tina.jpg' alt='' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p>Scored 80% +</p>
                      <p className='text-sm font-medium text-gray-900'>Tina Lalchandani</p>
                      <p className='text-xs italic font-medium text-gray-900'>10th CBSE, Poddar International School</p>
                    </a>
                  </div>
                </div>

                <div className='mt-5'>
                  It was a very nice experience to be part of 7Classes.A big thanks to Arvind Sir. The way he taught us
                  Chemistry was really helpful for me. He teaches with such an ease and fun that even the complex
                  concepts becomes easy. Thank you 7Classes for helping me in my journey.
                </div>
              </div>{' '}
            </div>
          )}

          {activeStep === STEPS.TWELVE && (
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='relative px-6 py-5 bg-white border border-gray-200 rounded-lg shadow-xl hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex items-center space-x-5 md:flex-1'>
                  <div className='flex-shrink-0'>
                    <img className='w-24 h-24 rounded-full' src='/images/Anushka.jpg' alt='' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p>Scored 98% +</p>
                      <p className='text-sm font-medium text-gray-900'>Anushka</p>
                      <p className='text-xs italic font-medium text-gray-900'>12th CBSE, Kendriya Vidyalaya</p>
                    </a>
                  </div>
                </div>
                <div className='mt-5'>
                  It was a very nice experience to be part of 7Classes. A big thanks to Arvind Sir, the way he taught us
                  Chemistry was really helpful for me. He teaches with such an ease and fun that even the complex
                  concepts becomes easy. Thank you 7Classes for helping me in my journey.
                </div>
              </div>
              <div className='relative px-6 py-5 bg-white border border-gray-200 rounded-lg shadow-xl hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex items-center space-x-5'>
                  <div className='flex-shrink-0'>
                    <img className='w-24 h-24 rounded-full' src='/images/Arya.jpg' alt='' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p>Cracked IIT JEE</p>
                      <p className='text-sm font-medium text-gray-900'>Arya</p>
                      <p className='text-xs italic font-medium text-gray-900'>12th CBSE, Kendriya Vidyalaya</p>
                    </a>
                  </div>
                </div>

                <div className='mt-5'>
                  Excellent coaches and amazing method of teaching with a 2:4:1 model of teaching. I am very grateful to
                  7 classes to provide me with the right platform to crack IIT.
                </div>
              </div>{' '}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;
