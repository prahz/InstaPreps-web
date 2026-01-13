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
        const response = await axios.get(
          `https://cors-anywhere1223.herokuapp.com/https://staging.instapreps.com/api/video`
        );
        setWatchSection(response.data);
        console.log(response.data);
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
                <h1 className='lg:text-2xl text-md satImagesPreps font-semibold'>Watch Section</h1>
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
                <Link href='#'>
                  <div className='w-[420px] h-56 bg-blue-400 cursor-pointer rounded-lg border-gray-400 border-2'>
                    <div className=' relative h-36'>
                      <img className='h-36 w-full' src={items.thumbnail} />
                    </div>
                    <div className='px-2 py-2'>
                      <h1 className='text-md  font-bold'>{items.topic}</h1>
                      <h1 className='text-sm'>{items.description}</h1>
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
