import { BallTriangle } from 'react-loader-spinner';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { json } from 'd3';

function SelectStandard() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [standarddata, setStandarddata] = useState([]);
  const [boardId, setBoardId] = useState('');


  const handleProceed = async () => {
    const std_id = localStorage.getItem('selectedStandardId');
  const board_id = localStorage.getItem('selectedBoardId');
  const user_data = JSON.parse(localStorage.userData)
 const Name = user_data["Name"]
  const Email = user_data["Email"]
  
 const mobile_no = sessionStorage.getItem('phone')
  if (!std_id || !board_id) {
    alert("Please select both board and standard.");
    return;
  }

    const payload = {
    mobile_no: mobile_no,
    email_address: Email,
    first_name: Name,
    last_name: "",
    std_id: std_id,       
    board_id: board_id,    
    countrycode: "+91"
  };
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/stud_detail`, payload)

      if (response.data.success) {
        console.log('Student updated:', response.data.data);
       localStorage.setItem( "data", JSON.stringify( response.data.data))
        window.location.href = '/home'
      } else {
        console.error('API returned error:', response.data.message);
      }
    } catch (error) {
      console.error('Network/API error:', error);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem('selectedBoardId');
    setBoardId(id);

    const fetchStandard = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/board/${id}/standards`);
        setStandarddata(response.data);
        console.log(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Something went wrong!');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchStandard();
    } else {
      setError('Board ID not found!');
    }
  },
   []);

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

        <div className='w-[520px] h-auto m-auto flex flex-col justify-center items-start'>
          <div className='w-[520px] m-auto mt-10'>
            <h3 className='text-xl font-semibold mb-4'>Select your Standard</h3>

            {error && <p className='text-red-600'>{error}</p>}

            <div className=' overflow-y-auto space-y-2 pr-2 border rounded-md shadow-sm'>
              {standarddata.map((item, index) => (
                <h3
                  key={index}
                  className='border p-2 rounded-md cursor-pointer hover:bg-gray-100 transition'
                  onClick={() => {
                    localStorage.setItem('selectedStandardId', item.id);
                    console.log("Standard ID stored:", item.id);

                  }}
                >
                  {item.std}
                </h3>
               
              ))}
             
            </div>
          </div>
          <div className=" mt-7">
  
    <button onClick={handleProceed} className="bg-purple-500 px-2 font-medium py-2 rounded-md text-white mt-0 text-xl lg:w-full">
      Proceed
    </button>
  
</div>

        </div>
      </div>
    </div>
  );
}

export default SelectStandard;
