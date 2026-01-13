import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import Head from 'next/head';
import Link from 'next/link';
import { BallTriangle } from 'react-loader-spinner';
import Connect from 'src/components/instapreps/connect';
import TestseriesWorks from 'src/components/testseriesWorks';
import axios from 'axios';


const test = () => {
  const [data, setdata] =useState([]);
   const [error, setError] = useState(null);
   const[testdata,settestdata] =useState();
   const [loading, setLoading] = useState(true);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const[ BoardId,setBoardId] =useState();
   const[standardId, setstandardId] =useState()




  const router = useRouter();
  const colors = ["#d92a27", "#4682b4", "#47c068", "#b0c4de "]; // 4 alternating colors
  // const colors = ["", "#", ""]; // Define three alternating colors
   const testlist = async()=>{
    setLoading(true);
    const response = await axios.get (`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testlist/scheduled/3017` )
    const list = response.data.data
    settestdata(list)
     console.log (list)
   }

   const fetchData =async(BoardId,standardId) =>{
    setLoading(true);
    try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testlist_by_subjects/1/1`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            })
            const subjectdata= response.data.data
            console.log(subjectdata)
            setdata(subjectdata)
            


            // const data = subjectdata.map((subject) => subject.id,subject.name); 
            localStorage.setItem("subject_ids", JSON.stringify(subjectdata));
          
    }
      catch (err) {
        setError(err.message);
        console.error("Axios Error:", err);
      }finally{
        setLoading(false);
      }
    
   }
  useEffect(() => {
  const token = localStorage.getItem("token");
  const BoardId =localStorage.getItem("selectedBoardId");
  const standardid =localStorage.getItem("selectedStandardId")

  console.log(BoardId)
  if (token) {
    setIsLoggedIn(true);
    setLoading(true)
    setBoardId(BoardId)
    setstandardId(standardid)
    fetchData(BoardId,standardid);
    testlist();
  } else {
    setIsLoggedIn(false);
    setLoading(false)
  }
}, []);

  return (
    <div className='h-screen relative '>
      {/* <Header /> */}
      <VerticalSidebar/>
      {loading && (
                <div
                  className='fixed inset-0 z-10 overflow-y-auto'
                  aria-labelledby='modal-title'
                  role='dialog'
                  aria-modal='true'
                >
                  <div className=''>
                    <div className='fixed inset-0 transition-opacity bg-gray-800 bg-opacity-75' aria-hidden='true' />
      
                    <div className='flex justify-center w-full h-screen items-center'>
                      <BallTriangle color='#E93F36' height={160} width={160} ariaLabel='loading' />
                    </div>
                  </div>
                </div>
              )}
      <Head>
        
        <title> Confidence Checkup  Subscription in just Rs/- 1500</title>
        <meta name='description' content='Diagnosis Series Subscription in just Rs/- 5' />
        <meta name='keywords' content='JEE Diagnosis Series Subscription ' />
        <meta name='keywords' content='NEET Diagnosis Series Subscription' />
      </Head>

      {isLoggedIn && (
  <div>
    
   {/* Subjects Section */}
{data.length > 0 ? (
  <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-10 mx-4 justify-center">
    {data.map((subject, index) => (
      <div
        key={subject.id}
        className="p-4 ml-5 border border-gray-300 rounded-md text-white text-center flex items-center justify-center w-full sm:w-[48%] md:w-[30%] lg:w-[20%] min-h-[150px]"
        style={{ backgroundColor: colors[index % 4] }}
        onClick={() => router.push(`/subjecttest?subject_id=${subject.id}`)}
      >

        <span className="font-semibold text-lg">{subject.name}</span>
      </div>
    ))}
  </div>
) : (
  <p className="text-center mt-5 text-gray-600">No subjects available.</p>
)}

    {/* Tests Section */}
    <div className="flex justify-center">
      <div className="mt-8 flex flex-col">
        {testdata && testdata.length > 0 ? (
          testdata.map((test, index) => (
            <Link
              key={test.id}
              href={{
                pathname: "/instapreps_mocktest/test",
                query: { id: test.id, name: test.name },
              }}
              className=""
            >
              <div className="flex flex-col w-[350px] h-[170px] border-[2px] border-gray-300 shadow-xl p-2 rounded-md mt-6 cursor-pointer">
                <div className="w-full h-24 overflow-hidden relative">
                  <strong className="text-md font-bold">{test.test_name}</strong>
                  <br />
                  <strong className="text-sm text-gray-600 font-bold">
                    Duration: {test.duration} minutes
                  </strong>
                  <p className="text-sm text-gray-500">{test.description}</p>
                </div>

                <div className="flex w-full justify-end h-12 mt-2">
                  <button className="w-24 h-10 border-[1px] border-gray-200 shadow-md rounded-lg text-white bg-blue-400">
                    Take Test
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center mt-5 text-gray-600"></p>
        )}
      </div>
    </div>
  </div>
)}
 

        <div className='w-[100%] connect_policy overflow-hidden mt-6'>
            {/* START TEST BUTTON */}
  <div className="flex justify-center mb-6">
    <button
      onClick={() => {
        const testId = test?.id; // add null check
        if (testId) {
          localStorage.setItem('selectedTestId', testId);
          window.location.href = '/subjecttest';
        } else {
          alert("Test ID not available!");
        }
      }}
      className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all duration-300"
    >
      Start Test
    </button>
  </div>



          <div className='flex lg:justify-between lg:flex-row flex-col h-[550px] lg:h-[400px] lg:w-[90%] w-[95%] lg:gap-8 gap-10 gap-y-2 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
            <div className='lg:w-max-md lg:px-0 px-4 '>
              <p className='lg:text-5xl text-4xl text-indigo'> Confidence Checkup  in just Rs/-1500.</p>
              <br />
              <p className='lg:text-2xl text-1xl text-grey'>
                Questions Created by Experts from IIT, NIT, AIIMs & Super30 Alumni
              </p>
              <p className='lg:text-2xl text-1xl text-indigo mt-4'>
                <strong>For JEE | NEET | SAT | Olympiads | 10th & 12th Board Exam </strong>
              </p>
            </div>

            <div className='lg:mt-16 mt-8 flex-shrink lg:px-0 px-8 '>
              <button
                className='cursor-pointer'
                onClick={() => {
                  window.open('https://www.youtube.com/embed/GyI71SxNn7g');
                }}
              >
                <img className='md:w-[600px] w-[400px] w' src='/images/Policy.png' alt='' />
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: '20px',
            paddingTop: '60px',
            paddingLeft: '24px',
            paddingBottom: '60px',
            paddingRight: '24px',
            background: '#fff',
            display: 'block',
            fontFamily: 'sans-serif',
            fontWeight: '400',
            display: 'block',
            fontSize: '100%'
          }}
        >
          <h2 className='text-3xl font-bold text-black' style={{ padding: '20px' }}>
            Benefits of  Confidence Checkup ?
          </h2>
          <div className='flex lg:justify-between lg:flex-row flex-col  lg:w-[90%] w-[95%] lg:gap-8 gap-10 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
            <div className='FiloWorkSection_step-card-content__w_Hz1'>
              <div className='flex gap-4' style={{ marginBottom: '20px' }}>
                <h2 className='text-2xl text-black font-bold'>01</h2>
                <h2 className='text-2xl text-blue-600 font-bold'>Are you Confident in your Syllabus?</h2>
              </div>
              <div>
                <p className='lg:text-3xl text-2xl'>
                  If your syllabus or chapters are completed then you can check your confidence by purchasing this
                  Confidence Checkup  in just Rs/- 1500
                </p>
              </div>
            </div>
            <img
              style={{ margin: '10px' }}
              autoPlay=''
              loop=''
              muted=''
              playsinline=''
              width='302'
              height='180'
              src='\images\First.jpg'
            />
          </div>

          <div className='flex lg:justify-between lg:flex-row-reverse flex-col  lg:w-[90%] w-[95%] lg:gap-8 gap-10 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
            <div className='FiloWorkSection_step-card-content__w_Hz1'>
              <div className='flex gap-4' style={{ marginBottom: '20px' }}>
                <h2 className='text-2xl text-black font-bold'>02</h2>
                <h2 className='text-2xl text-blue-600 font-bold'>Are you giving test daily?</h2>
              </div>
              <div>
                <p className='lg:text-3xl text-2xl'>
                  Confidence centric questions created by IIT, NIT & Super30 Alumni.
                </p>
              </div>
            </div>
            <img style={{ margin: '10px' }} width='302' height='180' src='\images\ConnectUI.jpg' />
          </div>

          <div className='flex lg:justify-between lg:flex-row flex-col  lg:w-[90%] w-[95%] lg:gap-8 gap-10 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
            <div>
              <div className='flex gap-4' style={{ marginBottom: '20px' }}>
                <h2 className='text-2xl text-black font-bold'>03</h2>
                <h2 className='text-2xl text-blue-600 font-bold'>Are you ready for your exams?</h2>
              </div>
              <div>
                <p className='lg:text-3xl text-2xl'>
                  Previous year questions, 20+ scheduled test, 10+ full Syllabus test for 10th & 12th Board Exam,
                  JEE, NEET, SAT & Olympiads
                </p>
              </div>
            </div>
            <img
              style={{ margin: '10px' }}
              autoPlay=''
              loop=''
              muted=''
              playsinline=''
              width='302'
              height='180'
              src='\images\Third.jpg'
            />
          </div>

          <div className='flex lg:justify-between lg:flex-row-reverse flex-col  lg:w-[90%] w-[95%] lg:gap-8 gap-10 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
            <div className='FiloWorkSection_step-card-content__w_Hz1'>
              <div className='flex gap-4' style={{ marginBottom: '20px' }}>
                <h2 className='text-2xl text-black font-bold'>04</h2>
                <h2 className='text-2xl text-blue-600 font-bold'>Are you getting the Personalised test?</h2>
              </div>
              <div>
                <p className='lg:text-3xl text-2xl'>
                  It covers daily one personalized scheduled test  to boost your confidence by 100% .
                </p>
              </div>
            </div>
            <img style={{ margin: '10px' }} width='302' height='180' src='\images\ConnectUI.jpg' />
          </div>
        </div>

        {/* <div>
          <div class='Unlock_grid__vWDP9'>
            <div>
              <div style={{ padding: '40px' }}>
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    position: 'relative',
                    maxWidth: '100%'
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      maxWidth: '100%'
                    }}
                  >
                    <img
                      alt=''
                      aria-hidden='true'
                      src='/images/Policy.png'
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: '1',
                        border: '0px',
                        margin: '0px',
                        padding: '0px'
                      }}
                    />
                  </span>
                  <img
                    srcset='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUnlock1111.20ce2b2b.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUnlock1111.20ce2b2b.png&amp;w=1080&amp;q=75 2x'
                    src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUnlock1111.20ce2b2b.png&amp;w=1080&amp;q=75'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={{
                      position: 'absolute',
                      inset: '0px',
                      boxSizing: 'border-box',
                      padding: '0px',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0px',
                      height: '0px',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div> */}

        <div className='lg:w-[70%] w-[100%] m-auto flex flex-wrap lg:flex-nowrap justify-evenly lg:gap-12 gap-8'>
          <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
            <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
              <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/userslogo.png' alt='' />
            </div>
            <div className='flex justify-center lg:mt-2 -mt-0 lg:px-12 px-2 text-center'>
              <h2 className='lg:text-xl text-xl satTextColorImage font-bold'> 6 Lacs+ Students</h2>
            </div>
          </div>

          <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
            <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
              <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/solutions.png' alt='' />
            </div>
            <div className='flex justify-center lg:mt-2 mt-0 lg:px-12 px-4 text-center'>
              <h2 className='lg:text-xl text-xl satTextColorImage font-bold'> 6 Lacs+ Tests </h2>
            </div>
          </div>

          <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
            <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
              <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/sessions.png' alt='' />
            </div>
            <div className='flex justify-center lg:mt-2 mt-0 lg:px-6 px-0 text-center'>
              <h2 className='lg:text-xl text-md satTextColorImage font-bold'> 1M+ Tests Given by Students</h2>
            </div>
          </div>

          <div className='lg:w-[260px] lg:h-[260px] w-[160px] h-[200px] overflow-hidden'>
            <div className='lg:h-[130px] h-[120px] w-full flex justify-center'>
              <img className='lg:h-[110px] lg:w-[110px] w-[100px] h-[100px]' src='/images/rating.png' alt='' />
            </div>
            <div className='flex justify-center lg:mt-0  lg:px-16 px-4 text-center'>
              <h2 className='lg:text-xl text-xl satTextColorImage font-bold'>
                4.5/5 <br />
                Ratings
              </h2>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <TestseriesWorks />
        </div>

        <div className='mt-24'>
          <Connect />
        </div>

        <div className='mt-4'>
          <Footer />
        </div>
      </div>
  
  );
};

// export default test;






// // import React from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';

import Image from 'next/image';

// import Footer from 'src/components/footer';
// import Header from 'src/components/header';
// import Connect from 'src/components/instapreps/connect';
// import TestseriesWorks from 'src/components/testseriesWorks';
import AnimatedCounter from 'src/components/AnimatedCounter';
import VerticalSidebar from 'src/components/VerticalSidebar';

const TestPage = () => {
  return (
    <div className="relative font-[Outfit] bg-gradient-to-br from-[#bae6fd] via-[#e0f2fe] to-[#f0f9ff] min-h-screen">
      <Header />
      <Head>
        <title>Confidence Checkup Subscription in just Rs/- 1500</title>
        <meta name='description' content='Diagnosis Series Subscription in just Rs/- 5' />
        <meta name='keywords' content='JEE Diagnosis Series Subscription, NEET Diagnosis Series Subscription' />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <div className="w-full flex justify-center mt-6 font-sans bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 py-10">
        <div className="w-[95%] lg:w-[90%] max-w-7xl p-8 rounded-3xl bg-white/90 backdrop-blur-lg border border-gray-200 shadow-xl flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="flex-1 px-4 lg:px-8"> 
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Confidence Checkup in just{' '}
              <span className="relative">
                <span className="line-through text-red-500 mr-2">₹3000</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 font-bold text-4xl animate-gradient">
                  ₹1500
                </span>
              </span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-800 font-medium">
              Questions Created by Experts from IIT, NIT, AIIMs & Super30 Alumni
            </p>
            <p className="mt-3 text-md md:text-lg text-indigo-800 font-semibold">
              For JEE | NEET | SAT | Olympiads | 10th & 12th Board Exams
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 px-4 lg:px-0">
            <button onClick={() => window.open('https://www.youtube.com/embed/GyI71SxNn7g')}>
              <Image
                src="/images/Policy.png"
                alt="Confidence Checkup Visual"
                className="rounded-xl"
                width={600}
                height={350}
              />
            </button>
          </div>
        </div>

        <style jsx>{`
          .animate-gradient {
            background-size: 200% auto;
            animation: moveGradient 4s ease infinite;
          }

          @keyframes moveGradient {
            0% {
              background-position: 0% center;
            }
            50% {
              background-position: 100% center;
            }
            100% {
              background-position: 0% center;
            }
          }
        `}</style>
      </div>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Confidence Checkup
          </h2>

          {[{
            id: '01',
            title: 'Are you Confident in your Syllabus?',
            desc: 'If your syllabus or chapters are completed, then you can check your confidence by purchasing this Confidence Checkup in just ₹1500.',
            img: '/images/First.jpg',
            reverse: false
          }, {
            id: '02',
            title: 'Are you giving tests daily?',
            desc: 'Confidence-centric questions created by IIT, NIT & Super30 Alumni.',
            img: '/images/ConnectUI.jpg',
            reverse: true
          }, {
            id: '03',
            title: 'Are you ready for your exams?',
            desc: 'Previous year questions, 20+ scheduled tests, and 10+ full syllabus tests for 10th & 12th Board Exam, JEE, NEET, SAT & Olympiads.',
            img: '/images/Third.jpg',
            reverse: false
          }, {
            id: '04',
            title: 'Are you getting Personalized Tests?',
            desc: 'Covers one personalized scheduled test daily to boost your confidence by 100%.',
            img: '/images/ConnectUI.jpg',
            reverse: true
          }].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${item.reverse ? 'lg:flex-row-reverse' : ''} items-center gap-8 mb-12`}
            >
              <div className="flex-1 bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200">
                <div className="flex gap-4 mb-4 items-center">
                  <h2 className="text-2xl text-gray-800 font-bold">{item.id}</h2>
                  <h3 className="text-2xl text-blue-600 font-semibold">{item.title}</h3>
                </div>
                <p className="text-lg md:text-xl text-gray-700">{item.desc}</p>
              </div>

              <div className="flex-1">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl shadow-md w-full max-w-md mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
<div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-20 px-4">
  {[
    { img: '/images/userslogo.png', target: 600000, label: 'Students' },
    { img: '/images/solutions.png', target: 600000, label: 'Tests' },
    { img: '/images/sessions.png', target: 1000000, label: 'Tests Given' },
    { img: '/images/rating.png', target: 4.5, label: 'Ratings', suffix: '/5' }
  ].map(({ img, target, label, suffix }, idx) => (
    <div
      key={idx}
      className="backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-2xl p-6 w-[160px] lg:w-[240px] flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-white/40"
    >
      <div className="mb-4">
        <Image src={img} alt={`stat-${idx}`} width={80} height={80} />
      </div>
      <h2 className="text-lg lg:text-xl font-bold text-center text-[#4F46E5]">
        <AnimatedCounter target={target} />
        {suffix || '+ '}
        <br />
        <span className="text-[#111827]">{label}</span>
      </h2>
    </div>
  ))}
</div>


      <div className='mt-24'>
        <TestseriesWorks />
      </div>

      <div className='mt-24'>
        <Connect />
      </div>

      <div className='mt-4'>
        <Footer />
      </div>
    </div>
  );
};

export default TestPage;
