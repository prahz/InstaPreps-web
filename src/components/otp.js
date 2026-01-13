import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import axios from 'axios';

const Verification = ({ skipOtp, otpToken, mobiles }) => {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const skipVerification = () => {
    skipOtp();
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/login/otp/verify`,
        {
          mobile: mobiles,
          otp: otp,
          token: otpToken,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      if (response.status === 200 && response.data && response.data.data) {
        // sessionStorage.setItem('token', response.data.data.token);
        // sessionStorage.setItem('user', JSON.stringify(response.data.data.user));
      
         console.log(response.data)
        // localStorage.setItem("token", response.data.data.token);
        // localStorage.setItem("user", JSON.stringify( response.data.data.user))

        // new update
        localStorage.setItem("token", response.data.data.token);
localStorage.setItem("data", JSON.stringify({
  ...response.data.data.user,
  token: response.data.data.token
}));

        // console.log("user", response.data.data)
        toast.success('Otp Successfully Verified');



        router.push({
          pathname: '/Signup',
        });
      } else {
        toast.error('Invalid Otp');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Failed to verify OTP. Please try again.');
    }
  };

  const changeOtp = (event) => {
    setOtp(event.target.value);
  };

  return (
    <div>
      <div className='flex flex-col gap-8'>
        <div>
          <h1 className='text-md text-gray-dark'>Enter OTP</h1>
          <input
            type='text'
            value={otp}
            onChange={changeOtp}
            placeholder='Enter your OTP'
            className='rounded-md mt-2 lg:w-full w-[345px] p-6'
            style={{ border: '2px solid #7666CA' }}
          />
        </div>
        <div className='mt-2 flex justify-between flex-row '>
          {/* Uncomment this if you want the Skip button */}
          {/* 
          <button
            className='border px-2 font-medium py-2 rounded-md mt-0 text-xl text-gray-500 lg:w-full w-[345px]'
            style={{ border: '2px solid #7666CA' }}
            onClick={skipVerification}
          >
            Skip
          </button> 
          */}
          <button
            className='bg-purple-500 px-2 font-medium py-2 rounded-md text-white mt-0 text-xl lg:w-full w-[345px]'
            onClick={verifyOtp}
          >
            Verify
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Verification;
