import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import React, { useEffect, useState } from 'react';

function SelectBoard() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [boarddata, setBoarddata] = useState([]); // Fix 1: initialize as []

  const fetchBoards = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/board`);
      setBoarddata(response.data); // Fix 2: set data properly
      console.log(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoards(); // Fix 3: function name updated
  }, []);

  return (
    <div className='flex lg:flex-row flex-col w-full overflow-hidden'>
      <div className='satImagesMcc9 registration_preps'>
        <div className='mt-4 px-4'>
          <a href='/'>
            <img className='w-16 h-16' src='/images/logo.webp' alt='Logo' />
          </a>
        </div>
        <div className='flex justify-center items-center lg:h-[490px] lg:w-[440px] w-[380px] m-auto mt-16 overflow-hidden'>
          <div className='flex-shrink'>
            <img src='/images/loginimage.png' alt='Login Illustration' />
          </div>
        </div>
      </div>

      <div className='mt-4 px-4 m-auto'>
        {loading && (
          <div className='fixed inset-0 z-10 overflow-y-auto' role='dialog' aria-modal='true'>
            <div className='fixed inset-0 transition-opacity bg-gray-800 bg-opacity-75' />
            <div className='flex justify-center w-full h-screen items-center'>
              <BallTriangle color='#E93F36' height={160} width={160} ariaLabel='loading' />
            </div>
          </div>
        )}

        <div className='w-[530px] h-23  m-auto flex flex-col justify-center items-start'>
          <div className='w-[530px] m-auto mt-10'>
            <h3 className='text-xl font-semibold mb-4'>Select your Board</h3>

            {error && <p className='text-red-600'>{error}</p>}

            <div className='h-[450px]  overflow-y-auto space-y-2 pr-2'>
              {boarddata.map((item, index) => (
                <h3 key={index} className='border p-2 rounded-md cursor-pointer hover:bg-gray-100 transition'
                onClick={() => { 
                    window.location.href = '/selectstandard'; 
                    localStorage.setItem('selectedBoardId', item.id); 
                    console.log("Board  id stored:", item.id);
                  }}
                >
                  {item.board}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectBoard;
