import React, { useEffect, useState } from 'react';
import PrepsNavBar from 'src/components/prepsNavBar';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Oval } from 'react-loader-spinner';
// import parse from 'html-react-parser';

const PrepsOfTheDay = () => {
  const [shorts, SetShorts] = useState({});
  const [error, SetError] = useState('');
  const router = useRouter();
  const { query } = router;
  const [loading, setLoading] = useState(false);

  const question = `<div className='text-xl'>
  ${shorts.content}</div>`;
  // const marks = question?.toString();

  useEffect(() => {
    const getShortsPreps = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/shots/${query?.id}`);
        SetShorts(response.data.data);
        setLoading(false);
        // console.log(response.data.data);
      } catch (err) {
        SetError(err.message);
      }
    };
    getShortsPreps();
  }, []);
  return (
    <div className='w-[95%] m-auto mt-4'>
      <PrepsNavBar />
      <div className='py-8'>
        <div className='w-full satTextColorPreps h-32 '>
          <div className='lg:w-[80%] w-[95%] m-auto h-32 relative'>
            <div className='absolute bottom-6 flex gap-4 '>
              <div className='mt-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                </svg>
              </div>
              <div>
                <h1 className='lg:text-2xl text-md satImagesPreps font-semibold'>{shorts.name}</h1>
              </div>
              <div className='mt-4'>
                <h1 className='text-sm text-blue-600 font-bold'>5 Minutes</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 lg:w-[80%] m-auto w-[95%] '>
          {/* <div className='lg:w-[80%] m-auto w-[95%] text-xl '>{parse(`${shorts.content}`)}</div> */}
          {loading && (
            <div className='flex justify-center w-full mt-24'>
              <Oval color='#4847B7' height={90} width={90} ariaLabel='loading' />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        <div className='flex justify-center mt-8'>
          <button className='w-[260px] h-12 satImagesMcc9 rounded-md text-white'>Marks As Complete</button>
        </div>
      </div>
    </div>
  );
};

export default PrepsOfTheDay;
