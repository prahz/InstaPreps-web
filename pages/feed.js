import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { CircularProgressbar } from 'react-circular-progressbar';
import VerticalSidebar from 'src/components/VerticalSidebar';
import Head from 'next/head';
import Link from 'next/link';

const Feed = () => {
  const [feedId, setFeedId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedData = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          school_id: user.school_id,
          score_id: 'cba',
          filter_condition: 'more',
          score: '0',
          page: 1,
          page_size: 50
        })
      };

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/get_students_reports`,
          requestOptions
        );
        const result = await response.json();
        console.log(result.data);
        // localStorage.setItem( "report id" ,result.data.id)
        setFeedId(result.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Something went wrong!');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedData();
  }, []);

  if (loading) return <p className='text-center mt-6'>Loading feed...</p>;
  if (error) return <p className='text-center mt-6 text-red-500'>{error}</p>;

  return (
    <>
      <Head>
        <title>Read latest feeds on confidence scores of students at Instapreps</title>
        <meta
          name='description'
          content="Take a peek at the recent confidence analysis and scores of our students at Instapreps - World's Best Confidence building and Diagnosis app"
        />
      </Head>

      <div className='hidden md:block'>
        <VerticalSidebar />
      </div>

      <div
        className='transition-all duration-300 m-auto pt-2 lg:w-[95%] w-full p-2'
        style={{ marginLeft: 'var(--sidebar-width, 0px)' }}
      >
        {/* <h1 className='mt-2 font-light text-2xl'>Latest Feed</h1> */}
        <div className='mt-0'>
          {feedId.map((items) => {
            return (
              <div className='py-1'>
                <div
                  className='p-3 w-full max-w-[700px] mx-auto overflow-hidden bg-white shadow-md border border-gray-200 rounded-md'
                  key={items.id}
                >
                  {/* Test Name at the top */}
                  {items.test_name && (
                    <div className='mb-2 text-base font-semibold text-blue-700 text-center'>{items.test_name}</div>
                  )}
                  <div className='p-1'>
                    <div className='flex space-x-2'>
                      <div className='flex-shrink-0 w-[40px]'>
                        <img className='rounded-full ' src='images/logoprep.webp' alt='' />
                      </div>
                      <div className='mt-2'>
                        <h2 className='text-lg'>{items.first_name}</h2>

                        <h2 className='text-sm' />
                      </div>
                    </div>
                    <div className=' px-5'>
                      <div className='flex  flex-col  items-center justify-center w-full rounded-lg'>
                        {/* <div className='flex flex-col  w-full rounded-lg  bg-blue-100'> */}
                        <div className='flex justify-center  '>
                          <p className='font-normal text-gray-500 text-xl'>Confidence Diagnosis Report</p>
                        </div>
                        <div className=''>
                          <div className='w-[100%] m-auto'>
                            <div className='flex flex-col mt-2 justify-center'>
                              <div className='inline-flex gap-2 items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-6 text-green '
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1}
                                    d='M5 13l4 4L19 7'
                                  />
                                </svg>
                                <h2 className='text-xs'>Confident and correct</h2>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-16 text-gray-400'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1}
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                  />
                                </svg>
                                <h2 className='text-xs'>Mastery ({items?.mastery}%)</h2>
                              </div>

                              <div className='inline-flex gap-2 items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-6 text-red-500 '
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1}
                                    d='M6 18L18 6M6 6l12 12'
                                  />
                                </svg>
                                <h2 className='text-xs'>Confident and wrong</h2>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-16 text-gray-400'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1}
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                  />
                                </svg>
                                <h2 className='text-xs'>Misinformed ({items?.misinformed}%) </h2>
                              </div>
                              <div className='inline-flex gap-2 items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-6 text-yellow'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1}
                                    d='M6 18L18 6M6 6l12 12'
                                  />
                                </svg>
                                <h2 className='text-xs'>Not Confident and correct</h2>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-16 text-gray-400'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1}
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                  />
                                </svg>
                                <h2 className='text-xs'>Doubt ({items?.doubt}%)</h2>
                              </div>
                              <div className='inline-flex gap-2 items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-6 text-red-300'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                  />
                                </svg>
                                <h2 className='text-xs'>Not Confident and wrong</h2>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-16 text-gray-400'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1}
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                  />
                                </svg>
                                <h2 className='text-xs'>Uninformed ({items?.uninformed}%)</h2>
                              </div>
                            </div>

                            {/* PieChart */}

                            <div className='mt-8 flex flex-col items-center'>
                              <div className='w-[36%]'>
                                <PieChart
                                  data={[
                                    { title: 'Mastery', value: Number(items?.mastery), color: '#295110' },
                                    { title: 'Misinformed', value: Number(items?.misinformed), color: '#a52921' },
                                    { title: 'Doubt', value: Number(items?.doubt), color: '#ff9101' },
                                    { title: 'Uninformed', value: Number(items?.uninformed), color: '#be9623' }
                                  ]}
                                  animate
                                  lineWidth={75}
                                  label={({ dataEntry }) => (dataEntry.value > 0 ? `${dataEntry.value}%` : '')}
                                  labelStyle={{ fontSize: '5px', fontFamily: 'sans-serif', fill: 'white' }}
                                />
                              </div>
                            </div>

                            {/* Score Section */}
                            {/* <h1 className="mt-6 text-xl font-semibold text-center">Your Score</h1> */}
                            <div className='flex justify-center gap-6 '>
                              {/* Standard Score */}
                              <div className='w-40 sm:w-48 flex flex-col items-center'>
                                <p className='py-2 font-medium text-gray-600 text-xs text-center'>Standard Score</p>
                                <div style={{ width: 70, height: 70 }}>
                                  <CircularProgressbar
                                    value={items?.cba_score}
                                    text={`${items?.cba_score}%`}
                                    strokeWidth={10}
                                  />
                                </div>
                              </div>

                              {/* Confidence Score */}
                              <div className='w-40 sm:w-48 flex flex-col items-center'>
                                <p className='py-2 font-medium text-gray-600 text-xs text-center'>Confidence Score</p>
                                <div style={{ width: 70, height: 70 }}>
                                  <CircularProgressbar
                                    value={items?.standard_score}
                                    text={`${items?.standard_score}%`}
                                    strokeWidth={10}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}

                  <div className='flex justify-end  relative w-full'>
                    <div className='absolute top-0 right-0 lg:px-1 px-0 lg:mt-0 mt-8 '>
                      {/* <h3 className='lg:text-lg text-sm text-secondary '>InstaPrepsAi</h3> */}
                      {/* <h2 className='lg:text-sm text-xs lg:px-4 px-2 text-gray-400 font-semibold'>By 7Classes</h2> */}
                    </div>
                  </div>
                  <div className='flex justify-center mt-4'>
                    <Link
                      href='/boostconfidence'
                      onClick={() => {
                        localStorage.setItem('report id', items.id);
                        // Optional: Redirect or take some action after storing
                      }}
                      className=' prepFaqs  flex justify-center item-center py-1  lg:text-lg text-sm font-light text-white transition focus:outline-none  satTextColor5  border border-transparent rounded-xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
                    >
                      Detailed Confidence Analysis
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* {feedSec && (
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

            <div className='inline-block  pt-5 pb-0 overflow-hidden h-[330px]  transition-all transform bg-white rounded-lg shadow-xl  sm:align-middle sm:max-w-lg w-full sm:w-full'>
              <div className='absolute top-2 right-0  pt-0 px-2 sm:block'>
                <button
                  type='button'
                  className='text-black-300 bg-gray-300 rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={() => setFeedSec(false)}
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
              <div className='flex justify-center items-center  px-4'>
                <div className='mt-16'>Download the app to continue</div>
                <div className='mt-16 absolute bottom-0 w-full'>
                  <div className='overflow-hidden bg-blue-400 flex justify-center items-center lg:space-x-8 space-x-6   h-32'>
                    <a href='https://play.google.com/store/apps/details?id=com.instapreps' className='text-white '>
                      <img className='px-4' src='/images/android.webp' alt='' />
                      Android
                    </a>
                    <a href='https://apps.apple.com/in/app/instapreps/id1543607970' className='text-white '>
                      <img className='' src='/images/ios.webp' alt='' />
                      ios
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      </div>
    </>
  );
};

export default Feed;
