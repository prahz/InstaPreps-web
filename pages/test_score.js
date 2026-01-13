import React, { useEffect, useState } from 'react';
// import GaugeChart from 'react-gauge-chart';
import dynamic from 'next/dynamic';

import axios from 'axios';
import { useRouter } from 'next/router';
import WatchSection from 'src/components/instapreps/watch';
import MonthlyUser from 'src/components/instapreps/monthlyUser';
import Footer from 'src/components/footer';
import NavBar from 'src/components/instapreps/navBar';
import PrepsDay from 'src/components/preps';

const TestScore = () => {
  const [score, setScore] = useState([]);
  const router = useRouter();
  const { query } = router;
  const [data, SetData] = useState(null);
  const [moods, setMoods] = useState(true);

  const [error, SetError] = useState('');
  // const [watchSection, setWatchSection] = useState([]);
  const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });
  // const avg = score.data?.avg_score / 100;

  useEffect(() => {
    const getScore = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/comparison/${query?.id}/overall_confidence_score`
        );
        //   console.log(response.data);
        setScore(response.data);
        console.log(response.data);
      } catch (err) {
        SetError(err.message);
        SetData(0);
      }
    };

    getScore();
  }, []);
  // useEffect(() => {
  //   const getVideoWatch = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/all_shots_for_student/${query?.id}`);
  //       setWatchSection(response.data.data);
  //       console.log(response.data.data);
  //     } catch (err) {
  //       SetError(err.message);
  //     }
  //   };
  //   getVideoWatch();
  // }, []);

  return (
    <div className='w-[100%] m-auto p-2'>
      <NavBar profile={query?.scored} />
      <div className='mt-8'>
        {moods && (
          <div className=' lg:w-[90%] w-full overflow-hidden m-auto  h-32 rounded-md'>
            <div className='flex justify-center overflow-hidden relative h-16 emoji-bg-col'>
              <div className='text-center'>
                <h1 className='text-xl text-white font-title'>{`Good Morning ${query?.scored},`}</h1>
                <h1 className='text-xl text-white font-title'>How are you Feeling today?</h1>
              </div>
              <div className='absolute lg:right-2 right-2 top-1'>
                <button className='' type='button' onClick={() => setMoods(false)}>
                  <span className='sr-only'>Close</span>
                  <svg
                    className='w-5 h-5 text-gray-50'
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
            </div>
            <div className='mt-2'>
              <div className='flex justify-center lg:gap-6 gap-2'>
                <img className='lg:h-16 lg:w-16 w-12 h-12' src='/images/good_face.gif' alt='' />
                <img className='lg:h-16 lg:w-16 w-12 h-12' src='/images/bad_face.gif' alt='' />
                <img className='lg:h-16 lg:w-16 w-12 h-12' src='/images/neutral_face.gif' alt='' />
                <img className='lg:h-16 lg:w-16 w-12 h-12' src='/images/confident_face.gif' alt='' />
                <img className='lg:h-16 lg:w-16 w-12 h-12' src='/images/awesome_face.gif' alt='' />
                <img className='lg:h-16 lg:w-16 w-12 h-12' src='/images/frowning_face.gif' alt='' />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* {error && <div>{`No report found - ${error}`}</div>} */}
      {/* {error && <div className='mt-4 flex justify-center font-bold text-2xl'>No report found </div>} */}
      {/* <h1>{query?.scored}</h1> */}
      <div className='mt-16 '>
        <div className='flex md:flex-row flex-col satTextColor8 justify-center md:w-[95%] w-full h-[320px] m-auto overflow-hidden relative'>
          <div className='md:w-[490px] flex justify-between w-full lg:mt-24 mt-16 md:px-0 px-8'>
            <h1 className='lg:text-4xl text-2xl font-bold'>Overall Confidence Meter</h1>
          </div>
          <div className='md:w-[495px] mt-8'>
            <GaugeChart
              id='gauge-chart5'
              nrOfLevels={4}
              arcsLength={[0.4, 0.4, 0.4, 0.4]}
              colors={['#EA4228', '#fd7e14', '#F5CD19', '#5BE12C']}
              percent={0}
              arcPadding={0.02}
              arcWidth={0.2}
              animateDuration={20000}
              needleBaseColor='#5BE12C'
              marginInPercent={0.02}
            />
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <WatchSection />
      </div>
      <div className='mt-16'>
        <PrepsDay />
      </div>
      <div className='mt-8'>
        <MonthlyUser />
      </div>
      <div className='mt-16 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default TestScore;
