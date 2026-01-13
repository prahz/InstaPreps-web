import React, { useEffect, useState } from 'react';
import PrepsNavBar from 'src/components/prepsNavBar';
import axios from 'axios';
import Link from 'next/link';
import { Oval } from 'react-loader-spinner';

const AllPreps = () => {
  const [watchSection, setWatchSection] = useState([]);
  const [error, SetError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getVideoWatch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/all_shots_for_student/20476`);
        setWatchSection(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      } catch (err) {
        SetError(err.message);
      }
    };
    getVideoWatch();
  }, []);
  return (
    <div className='w-[95%] m-auto mt-2'>
      <PrepsNavBar />
      <div className='mt-4'>
        <div className='w-full satTextColorPreps h-32 border-b-2 shadow-sm border-gray-300 '>
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
                <h1 className='lg:text-2xl text-md satImagesPreps font-semibold'>Preps Of The Day</h1>
              </div>
              {/* <div className='mt-4'>
                <h1 className='text-sm text-blue-600 font-bold'>5 Minutes</h1>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-8 overflow-hidden w-full'>
        <div className='w-[220px] h-screen border-r-2 border-gray-400 '>
          <div className='mt-24 w-full'>
            <div className='flex flex-col space-y-4'>
              <div className='w-full satImagesMcc9 rounded-sm h-12 cursor-pointer'>
                <h1 className='py-2 px-2 text-xl text-white font-bold'>All</h1>
              </div>
              <div className='w-full h-12'>
                <h1 className='py-2 px-2 text-xl font-bold'>Math</h1>
              </div>
              <div className='w-full h-12'>
                <h1 className='py-2 px-2 text-xl font-bold'>Physics</h1>
              </div>
              <div className='w-full h-12'>
                <h1 className='py-2 px-2 text-xl font-bold'>Chemistry</h1>
              </div>
              <div className='w-full h-12'>
                <h1 className='py-2 px-2 text-xl font-bold'>Biology</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[75%] mt-8 m-auto '>
          {loading && (
            <div className='flex justify-center w-full mt-24'>
              <Oval color='#4847B7' height={90} width={90} ariaLabel='loading' />
            </div>
          )}

          <div className='flex flex-wrap gap-4 w-full'>
            {watchSection.map((items) => {
              return (
                <Link className='' href={{ pathname: '/preps-of-Day', query: { id: items.id } }}>
                  <div className='w-[420px] h-32 satTextColorPrepsAll cursor-pointer rounded-lg border-gray-400 border-2'>
                    <div className='py-2 px-2 relative h-24'>
                      <h1 className='text-white text-xl font-bold'>{items.name}</h1>
                      <div className='right-0 absolute top-2 px-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-white '
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='px-2'>
                      <h1 className='text-md text-white font-title'>5Mins Duration</h1>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPreps;
