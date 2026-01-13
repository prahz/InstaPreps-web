import React from 'react';
import { useRouter } from 'next/router';
import Footer from 'src/components/footer';
import VerticalSidebar from 'src/components/VerticalSidebar';
import Head from 'next/head';
import Link from 'next/link';
import MicroConfidenceCourse from 'src/components/instapreps/mcc';
import UniqueCard from 'src/components/uniqueCard';
import PrepsCards from 'src/components/instaCard';
import PrepsWork from 'src/components/instaWork';
import PrepsDownload from 'src/components/prepsDownload';
import Testimonial from 'src/components/testimonial';
import TeacherTestimonial from 'src/components/teacher_testimonial';
import Associations from 'src/components/associations';
import PrepsUse from 'src/components/instaprepsuse';
import Connect from 'src/components/instapreps/connect';
import Popup from './Popup';
import { useEffect, useState } from 'react';
import Advisor from 'src/components/AdvisorPage';
import WhyChooseInstaPreps from 'src/components/WhyChooseInstaPreps';

const Instapreps = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
      // router.push('/home'); // Redirect logged-in users to post page
    }
  }, []);

  return (
    <div className='h-screen relative bg-gradient-to-b from-[#1e1b3a] via-[#302e4d] to-[#6554e1] text-white'>
      <Head>
        <title>InstaPreps AI: Confident India ka Confidence App</title>
        <meta
          name='description'
          content='AI-powered Test series for class 4-12th, IIT JEE, NEET, SAT & Olympiads. Connect with our confidence coaches at any time for one-on-one doubts, study plans & career counseling in only 45 secs'
        />
      </Head>

      <div className='p-2 lg:p-0 '>
        <div className='pt-2 sm:w-[100%] w-full lg:m-auto '>
          <div className='hidden md:block'>
            <VerticalSidebar variant='dark' />
          </div>
          <Popup />
          <div
            className='md:mt-12 -mt-4 lg:overflow-hidden transition-all duration-300'
            style={{ marginLeft: 'var(--sidebar-width, 0px)' }}
          >
            <div className='w-[95%] m-auto '>
              <div className='flex md:flex-row flex-col gap-2 justify-evenly '>
                <div className='lg:w-[480px] w-full'>
                  <div className='mt-12'>
                    <div>
                      <h1 className='md:text-6xl text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'>
                        Confidence App: InstaPrepsAi
                      </h1>
                    </div>
                    <div className='mt-12'>
                      <h1 className='lg:text-4xl text-3xl font-semibold satTextColorImage1'>
                        World's 1st Confidence Diagnosis AI Technology
                      </h1>
                    </div>
                    <div className='mt-12'>
                      <h2 className='lg:text-2xl text-xl font-medium text-white'>
                        Check your confidence in just 7 mins, An Initiative by IIT, NIT and Super30 Alumni
                      </h2>
                    </div>
                    <div className='mt-12 Button11'>
                      <button
                        onClick={() =>
                          window.open('https://play.google.com/store/apps/details?id=com.instapreps', '_blank')
                        }
                        className='items-center self-center  lg:w-[65%] w-full m-auto py-3  text-xl font-medium text-white transition focus:outline-none  bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
                      >
                        Download The App
                      </button>
                    </div>
                  </div>
                </div>

                <div className='registration_preps_image lg:mt-0 mt-6'>
                  {/* <img src='/images/instaimage.png'/> */}
                  <video autoPlay loop muted playsInline className='w-full h-auto rounded-lg'>
                    <source src='/videos/main_picture.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>

                  <div className='mt-12 md:hidden sm:hidden '>
                    <button
                      onClick={() =>
                        window.open('https://play.google.com/store/apps/details?id=com.instapreps', '_blank')
                      }
                      className='items-center self-center  lg:w-[65%] w-full m-auto py-3  text-xl font-medium text-white transition focus:outline-none  bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1  transform duration-300 hover:bg-gray-700'
                    >
                      Download The App
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <MicroConfidenceCourse /> */}
      {/* <div className='lg:mt-16 mt-28 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <PrepsCards />
      </div> */}
      <div
        className='lg:mt-32 mt-12 py-16 transition-all duration-300'
        style={{ marginLeft: 'var(--sidebar-width, 0px)' }}
      >
        <UniqueCard />
      </div>
      <div className='lg:mt-32 mt-28 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <WhyChooseInstaPreps />
      </div>
      <div className='mt-4 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <PrepsWork />
      </div>
      <div className='mt-2 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <PrepsDownload />
      </div>
      <div className='mt-32 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <Testimonial />
      </div>
      <div className='lg:mt-32 mt-28 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <TeacherTestimonial />
      </div>
      <div className='lg:mt-32 mt-28 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <Advisor />
      </div>
      <div className='mt-24 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <Associations />
      </div>
      {/* <div className='mt-32'>
        <PrepsUse />
      </div> */}
      <div className='mt-24 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <Connect />
      </div>
      <div className='mt-0 transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Instapreps;
