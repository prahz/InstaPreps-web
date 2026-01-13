import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MockInstructions from 'src/components/mock_tests/mockInstructions';
import Link from 'next/link';
import Header from 'src/components/header';
import VerticalSidebar from 'src/components/VerticalSidebar';

const ConfidenceTest = () => {
  const ActionType = {
    FIRST_STEP: 'first_name',
    SECOND_STEP: 'second_step',
    LAST_STEP: 'last_step'
  };
  const [error, setError] = useState('');
  const [boards, setBoards] = useState([]);
  const [changeBoard, setChangeBoard] = useState(null);
  const [classes, setClasses] = useState([]);
  const [changeClass, setChangeClass] = useState(null);
  const [testList, setTestList] = useState([]);
  const [changeTest, setChangeTest] = useState(null);
  const [chapterTest, setChapterTest] = useState([]);
  const [alerts, setAlerts] = useState(false);

  useEffect(() => {
    const getBoard = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/board`);
        console.log(response.data);
        setBoards(response.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    getBoard();
  }, []);

  const onChangeBoard = async (b) => {
    try {
      setChangeBoard(b);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/board/${b}/standards`);
      console.log(response.data);
      setClasses(response.data);
    } catch (err) {
      setError(true);
    }
  };

  const onChangeClass = async (a) => {
    try {
      setChangeClass(a);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testlist_by_subjects/${+changeBoard}/${a}`);
      console.log(response.data.data);
      setTestList(response.data.data);
    } catch (err) {
      setError(true);
    }
  };
  const onChangeTest = async (subject) => {
    try {
      // setChangeTest( e.target.value );
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testlist_by_subject/${subject}`);
      console.log(response.data.data);
      setChapterTest(response.data.data);
    } catch (err) {
      setError(true);
    }
  };

  function onTabClass() {
    if (classes.length === 0) {
      setAlerts(true);
    } else {
      setAlerts(false);
    }
  }

  return (
    <div className='w-[90%] h-screen m-auto'>
      <div className='mt-2'>
        {/* <Header /> */}
        <VerticalSidebar/>
      </div>
      <div className='mt-8'>
        <div className='flex flex-col mock_test m-auto justify-center items-center overflow-hidden relative lg:py-4 py-4'>
          <div className='flex lg:flex-row flex-col justify-center gap-4 lg:py-0'>
            <div className='lg:py-0 py-4'>
              <label className='sr-only'>Boards</label>
              <div className='select'>
                <select name='slct' id='slct' onChange={(e) => onChangeBoard(e.target.value)} value={changeBoard}>
                  <option className=''>Boards</option>
                  {boards.map((items) => {
                    return (
                      <option className='' key={items.id} value={items.id}>
                        {items.board}
                      </option>
                    );
                  })}
                </select>
              </div>
              {alerts && <h1 className='text-gray-600'>Please select Board First</h1>}
            </div>

            <div>
              <label className='sr-only'>Class</label>
              <div className='select'>
                <select
                  name='slct'
                  id='slct'
                  onChange={(e) => onChangeClass(e.target.value)}
                  onClick={onTabClass}
                  value={changeClass}
                >
                  <option className=''>Class</option>
                  {classes.map((e) => {
                    return (
                      <option className='' key={e.id} value={e.id}>
                        {e.std}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <div className='flex flex-wrap gap-4 justify-center'>
              {testList.map((test) => {
                return (
                  <button
                    href='#'
                    // change below code to change colors of subject card
                    className='w-32 overflow-hidden text-sm relative text-white h-24 bg-gray-500 flex items-center justify-center rounded-md'
                    onClick={() => onChangeTest(test.id)}
                  >
                    {test.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className='mt-4'>
          {error && (
            <div className='flex justify-center items-center h-[360px]'>
              <h1 className='text-xl'> Please check your Internet connection!</h1>
            </div>
          )}

          <div className='grid lg:grid-cols-3 grid-cols-1 w-[90%] justify-items-center m-auto gap-8 '>
            {chapterTest.map((chapter) => {
              return (
                <div>
                  <Link className='' href={{ pathname: '/instapreps_mocktest/test', query: { id: chapter.id } }}>
                    <div
                      // change this code to change chapter cards of test
                      className='flex flex-col w-[280px] h-[320px] border-[2px] border-gray-300 shadow-xl bg-gray-300 p-2 rounded-md cursor-pointer'
                      key={chapter.id}
                    >
                      <div className='w-full h-24 overflow-hidden relative'>
                        <h1 className='text-md font-bold'>{chapter.test_name}</h1>
                        <h1 className='text-sm text-gray-600 font-medium'>Duration: 5minutes</h1>
                      </div>
                      <div className='w-full h-[180px] overflow-hidden relative'>
                        <h1 className='text-sm text-gray-600 font-medium'>{chapter.description}</h1>
                      </div>
                      <div className='flex w-full justify-end h-12 mt-2'>
                        <button className='w-24 h-10 border-[1px] border-gray-200 shadow-md rounded-lg text-white bg-blue-400'>
                          Take Test
                        </button>
                      </div>
                      <div className='flex justify-end'>
                        <h1 className='text-gray-700 text-sm font-medium'>Created by 7classes</h1>
                      </div>
                    </div>
                  </Link>
                  <div />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceTest;
