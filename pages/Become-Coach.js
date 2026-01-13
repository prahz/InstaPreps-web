import React from 'react';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import Contact from 'src/components/teacher_policy/contact';
import Faq from 'src/components/teacher_policy/faq';
import Subject from 'src/components/teacher_policy/subject';
import VerticalSidebar from 'src/components/VerticalSidebar';

const TeacherPolicy = () => {
  return (
    <div className=''>
      <div className='lg:w-[90%] w-[95%] m-auto lg:mt-4 mt-2'>
        {/* <Header /> */}
        <VerticalSidebar/>
      </div>
      <div className='w-[100%] teacher_policy overflow-hidden mt-6'>
        <div className='flex lg:justify-between lg:flex-row flex-col h-[390px] lg:w-[90%] w-[95%] lg:gap-8 gap-10 lg:mt-0 mt-12 m-auto overflow-hidden items-center'>
          <div className='lg:w-max-md lg:px-0 px-4 '>
            <p className='lg:text-6xl text-4xl text-white'>Become a Coach at Instapreps</p>
          </div>
          <div className='lg:mt-16 mt-12 flex-shrink lg:px-0 px-8'>
            <img className='md:w-[490px] w-[360px] w' src='/images/Policy.png' alt='' />
          </div>
        </div>
      </div>
      <div className='lg:w-[85%] w-[90%] m-auto mt-16 '>
        <div className='px-2 overflow-hidden space-y-6'>
          <h2 className='text-3xl text-blue-600 font-bold'>How To Register, Earnings And More</h2>
          <p className='text-xl font-extralight text-gray-500'>
            Whether you are just starting out as a coach, or just want to fill the gaps in your schedule by helping
            students, the InstaPreps App will help you in connecting with students 24*7. InstaPreps is a coach on-demand
            app that students use to solve their doubts, learn concepts and boost their confidence.
          </p>
          <p className='text-xl font-normal text-gray-500'>
            InstaPreps has grown a lot since the commencement and has become a go to app for students from class 4th -
            12th and also for competitive exams like JEE/NEET.
          </p>
        </div>
        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-black'>Three Steps To Become A coach</h2>
          <div className='px-2 overflow-hidden space-y-12 mt-10'>
            <div className='space-y-4'>
              <div className='flex gap-4'>
                <h2 className='text-2xl text-black font-bold'>01</h2>
                <h2 className='text-2xl text-blue-600 font-bold'>Download app and setup profile</h2>
              </div>
              <p className='text-gray-500 text-xl'>
                Once you are screened, download the InstaPreps app from the play store for free. Enter your name, email
                id, number and upload a profile pic to set up your profile. After signing up, go to Account (option in
                hamburger menu) -&gt Switch to Teacher and enter the passcode provided correctly.
              </p>
            </div>

            <div>
              <div className='space-y-4'>
                <div className='flex gap-4'>
                  <h2 className='text-2xl text-black font-bold'>02</h2>
                  <h2 className='text-2xl text-blue-600 font-bold'>Fill in profile details to finish the setup</h2>
                </div>
                <p className='text-gray-500 text-xl'>
                  Your profile is essentially your portfolio to attract the right students according to your expertise.
                  Make sure you are keeping it up to date based on what you know by selecting the correct board, class
                  and subject. Make sure the details being provided by you are latest and authentic. Your profile
                  details have an impact on the type of students you will attract to solve doubts.
                </p>
              </div>
            </div>

            <div>
              <div className='space-y-4'>
                <div className='flex gap-4'>
                  <h2 className='text-2xl text-black font-bold'>03</h2>
                  <h2 className='text-2xl text-blue-600 font-bold'>Start getting calls from students</h2>
                </div>
                <p className='text-gray-500 text-xl'>
                  All you need to do is make your status online and now you are all set to receive calls from students.
                  Treat your calls as a platform to market yourselves to the students. Introduce yourself, greet your
                  students with politeness, address their needs and concerns and ask them questions for better
                  understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-24'>
        <Subject />
      </div>
      <div className='lg:mt-24 mt-16'>
        <Faq />
      </div>
      <div className='mt-20'>
        <Contact />
      </div>
      <div className='mt-4'>
        <Footer />
      </div>
    </div>
  );
};

export default TeacherPolicy;
