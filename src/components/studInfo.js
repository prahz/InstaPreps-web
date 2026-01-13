import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const StudentDetails = ({ otpToken, mobileData }) => {
  const [boards, setBoards] = useState([]);
  const [classes, setClasses] = useState([]);
  const [changeBoard, setChangeBoard] = useState(null);
  const [avgScore, setAvgScore] = useState({});
  const [changeClasses, setChangeClasses] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const getBoard = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/board`);
      //   console.log(response.data);
      setBoards(response.data);
    };
    getBoard();
  }, []);

  const onChangeBoard = async (b) => {
    setChangeBoard(b);
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/board/${b}/standards`);
    // console.log(response.data);
    setClasses(response.data);
  };

  const onChangeClass = async (c) => {
    setChangeClasses(c);
  };
  const onChangeName = (event) => {
    setFirstName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: firstName,
        email_address: email,
        mobile_no: mobileData,
        sdetails: otpToken,
        std_id: changeClasses,
        board_id: changeBoard,
        fcm_token: '',
        version_details: 'xyz'
      })
    };
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/stud_detail`, requestOptions)
      .then((response) => response.json())
      .then((data) => setAvgScore(data.data));
    if (avgScore.id) {
      router.push({
        pathname: '/test_score',

        query: { id: avgScore.id, scored: avgScore.first_name }
      });
    }
  };

  return (
    <div className='-mt-6'>
      <form action='' method='POST' onSubmit={submitHandler}>
        <div className='flex flex-col overflow-hidden relative gap-4'>
          <div>
            <h1 className='text-md text-gray-dark'>First name</h1>
            <input
              type='text'
              required
              value={firstName}
              onChange={onChangeName}
              placeholder='Enter your name'
              className='rounded-md mt-2 lg:w-full w-[345px]  p-6'
              style={{ border: '1px solid #7666CA' }}
            />
          </div>
          <div>
            <h1 className='text-md text-gray-dark'>Email</h1>
            <input
              type='text'
              value={email}
              onChange={onEmailChange}
              required
              placeholder='Enter your email'
              className='rounded-md mt-2 lg:w-full w-[345px]  p-6'
              style={{ border: '1px solid #7666CA' }}
            />
          </div>
          <div>
            <h1 className='text-md text-gray-dark'>Board</h1>
            <select
              className='rounded-md p-3 mt-2 lg:w-full w-[345px] '
              style={{ border: '1px solid #7666CA' }}
              onChange={(e) => onChangeBoard(e.target.value)}
              value={changeBoard}
            >
              <option>select Board</option>
              {boards.map((items) => {
                return (
                  <option className='' key={items.id} value={items.id}>
                    {items.board}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h1 className='text-md text-gray-dark'>Class</h1>
            <select
              className='rounded-md p-3 mt-2 lg:w-full w-[345px] '
              style={{ border: '1px solid #7666CA' }}
              value={changeClasses}
              onChange={(e) => onChangeClass(e.target.value)}
            >
              <option>select Class</option>
              {classes.map((e) => {
                return (
                  <option className='' key={e.id} value={e.id}>
                    {e.std}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='mt-2'>
            <button
              type='submit'
              value='Submit'
              className='bg-purple-500 px-2 font-medium py-2 rounded-md text-white mt-0 text-xl lg:w-full w-[345px] '
              // onClick={() => SetActiveStep(ActionType.Verifications)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentDetails;
