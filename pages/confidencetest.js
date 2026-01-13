import React from 'react';
// https://staging.instapreps.com/api/all_shots_for_student/58416
import { useRouter } from 'next/router';
import Footer from 'src/components/footer';
import VerticalSidebar from 'src/components/VerticalSidebar';
import Head from 'next/head';
import Link from 'next/link';
import { BallTriangle } from 'react-loader-spinner';
import Connect from 'src/components/instapreps/connect';
import TestseriesWorks from 'src/components/testseriesWorks';

import axios from 'axios';
import { BookOpen, ClipboardList, Clock, CheckCircle, Hourglass } from 'lucide-react';
import Image from 'next/image';
import AnimatedCounter from 'src/components/AnimatedCounter';

export default function ConfidenceTest() {
  const [subjects, setSubjects] = React.useState([]);
  const [tests, setTests] = React.useState([]);
  const [recommendedTests, setRecommendedTests] = React.useState([]); // ✅ new state
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [BoardId, setBoardId] = React.useState();
  const [standardId, setStandardId] = React.useState();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    setLoading(true);

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = localStorage.getItem('token') || user.id;
    const boardId = localStorage.getItem('selectedBoardId') || user.board_id || 2;
    const standardId = localStorage.getItem('selectedStandardId') || user.std_id || 2;

    if (!token) {
      setIsLoggedIn(false);
      setLoading(false);
      return;
    }

    setIsLoggedIn(true);
    setBoardId(boardId);
    setStandardId(standardId);

    // ✅ Fetch scheduled tests
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testlist/scheduled/${user.id}`)
      .then((response) => {
        setTests(response.data.data || []);

        // ✅ Fetch subjects
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testlist_by_subjects/${boardId}/${standardId}`);
      })
      .then((response) => {
        setSubjects(response.data.data || []);
        localStorage.setItem('subject_ids', JSON.stringify(response.data.data));

        // ✅ Fetch recommended tests
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testlist/recommended/${user.id}`);
      })
      .then((response) => {
        setRecommendedTests(response.data.data || []);
      })
      .catch((err) => {
        console.error('Axios Error:', err);
        setError('Failed to load data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className='hidden md:block'>
        <VerticalSidebar />
      </div>

      <div className='transition-all duration-300' style={{ marginLeft: 'var(--sidebar-width, 0px)' }}>
        {loading && (
          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='fixed inset-0 transition-opacity bg-gray-800 bg-opacity-75' aria-hidden='true' />
            <div className='flex justify-center w-full h-screen items-center'>
              <BallTriangle color='#E93F36' height={120} width={120} ariaLabel='loading' />
            </div>
          </div>
        )}

        <div className='w-full max-w-8xl mx-auto px-8 py-8'>
          {isLoggedIn ? (
            <>
              <div className='w-full min-h-screen bg-[#f9fbff] px-6 py-10'>
                {/* Recommended Section */}

                {/* ✅ Recommended Section */}
                <h1 className='text-2xl font-bold text-gray-800 mb-6'>Confidence Test Recommended for You</h1>

                {recommendedTests.length > 0 ? (
                  <div className='flex flex-wrap gap-6'>
                    {recommendedTests.map((test) => (
                      <div
                        key={test.id}
                        className='flex-1 min-w-[320px] max-w-[360px] rounded-xl shadow-md border border-gray-200 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition'
                      >
                        {/* Title & Subject */}
                        <div>
                          <h2 className='text-lg font-bold text-gray-800'>{test.test_name}</h2>
                          <p className='text-sm text-blue-600'>{test.subject}</p>
                        </div>

                        {/* Description */}
                        {test.description && (
                          <p className='mt-2 text-sm text-gray-600 line-clamp-3'>{test.description}</p>
                        )}

                        {/* Stats */}
                        <div className='mt-4 text-sm text-gray-700 space-y-1'>
                          <p className='flex items-center'>
                            <ClipboardList size={16} className='mr-2 text-green-500' />
                            {test.number_of_questions} Questions
                          </p>
                          <p className='flex items-center'>
                            <Clock size={16} className='mr-2 text-purple-500' />
                            {test.duration} min
                          </p>
                        </div>

                        {/* CTA */}
                        <button
                          className='mt-4 w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition'
                          onClick={() => router.push(`/instapreps_mocktest/test?id=${test.id}`)}
                        >
                          Take Test
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className='text-center text-gray-600 mb-12'>No recommended tests available.</p>
                )}

                <div className='mt-10 mx-4 mb-12'>
                  <h2 className='text-2xl font-bold text-gray-800 mb-6'>Subjects wise Confidence Test</h2>
                  <div className='flex overflow-x-auto overflow-y-hidden gap-6 mt-10 mx-4 mb-12 pb-2 hide-scrollbar'>
                    {subjects.map((subject, index) => {
                      const colors = [
                        'bg-yellow-400',
                        'bg-green-400',
                        'bg-pink-400',
                        'bg-purple-400',
                        'bg-blue-400',
                        'bg-red-400'
                      ];
                      const bgColor = colors[index % colors.length];

                      return (
                        <div
                          key={subject.id}
                          className={`min-w-[260px] max-w-[260px] h-[160px] rounded-xl shadow-lg border border-gray-200 flex flex-col justify-center items-center relative hover:scale-105 transition-transform cursor-pointer ${bgColor}`}
                          onClick={() => router.push(`/subjecttest?subject_id=${subject.id}`)}
                        >
                          {/* 📚 Book icon top-right */}
                          <BookOpen size={22} className='absolute top-3 right-3 text-white/90' />

                          {/* Subject name (centered) */}
                          <h2 className='text-lg font-bold text-white text-center px-2'>{subject.name}</h2>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* All Tests Section */}
                <h1 className='text-2xl font-bold text-gray-800 mt-12 mb-6'>Scheduled Confidence for You</h1>
                <div className='flex flex-wrap gap-6'>
                  {tests.map((test) => (
                    <div
                      key={test.id}
                      className='flex-1 min-w-[320px] max-w-[360px] rounded-xl shadow-md border border-gray-200 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition'
                    >
                      <h2 className='text-lg font-bold text-gray-800'>{test.test_name}</h2>
                      <p className='text-sm text-gray-500'>{test.subject}</p>
                      <p className='mt-3 flex items-center text-sm text-gray-700'>
                        <Clock size={16} className='mr-2 text-blue-500' />
                        Duration: {test.duration} min
                      </p>
                      <button
                        className='mt-4 w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition'
                        onClick={() => router.push(`/instapreps_mocktest/test?id=${test.id}`)}
                      >
                        Take Test
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            // ✅ Not logged in → Subscription promo
            <div className='w-full relative font-[Outfit] '>
              <Head>
                <title>Confidence Checkup Subscription in just Rs/- 1500</title>
                <meta name='description' content='Diagnosis Series Subscription in just Rs/- 5' />
                <meta name='keywords' content='JEE Diagnosis Series Subscription, NEET Diagnosis Series Subscription' />
                <link
                  href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap'
                  rel='stylesheet'
                />
              </Head>

              <div className='w-full flex justify-center mt-7 font-sans bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 py-10 rounded-3xl'>
                <div className='w-[95%] lg:w-[90%] max-w-9xl p-8 rounded-3xl bg-white/90 backdrop-blur-lg border border-gray-200 shadow-xl flex flex-col lg:flex-row items-center gap-10'>
                  <div className='flex-1 px-4 lg:px-8'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'>
                      Confidence Checkup in just{' '}
                      <span className='relative'>
                        <span className='line-through text-red-500 mr-2'>₹3000</span>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 font-bold text-4xl animate-gradient'>
                          ₹1500
                        </span>
                      </span>
                    </h1>
                    <p className='mt-5 text-lg md:text-xl text-gray-800 font-medium'>
                      Questions Created by Experts from IIT, NIT, AIIMs & Super30 Alumni
                    </p>
                    <p className='mt-3 text-md md:text-lg text-indigo-800 font-semibold'>
                      For JEE | NEET | SAT | Olympiads | 10th & 12th Board Exams
                    </p>
                  </div>

                  <div className='flex-1 px-4 lg:px-0'>
                    <button onClick={() => window.open('https://www.youtube.com/embed/GyI71SxNn7g')}>
                      <Image
                        src='/images/Policy.png'
                        alt='Confidence Checkup Visual'
                        className='rounded-xl'
                        width={600}
                        height={350}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {error && <p className='text-red-500 text-center mt-6'>{error}</p>}
        </div>

        {/* Benefits Section */}
        <section className='w-full py-16 bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#f8fafc]'>
          <div className='max-w-7xl mx-auto px-6 lg:px-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center'>Benefits of Confidence Checkup</h2>

            {[
              {
                id: '01',
                title: 'Are you Confident in your Syllabus?',
                desc: 'If your syllabus or chapters are completed, then you can check your confidence by purchasing this Confidence Checkup in just ₹1500.',
                img: '/images/First.jpg',
                reverse: false
              },
              {
                id: '02',
                title: 'Are you giving tests daily?',
                desc: 'Confidence-centric questions created by IIT, NIT & Super30 Alumni.',
                img: '/images/ConnectUI.jpg',
                reverse: true
              },
              {
                id: '03',
                title: 'Are you ready for your exams?',
                desc: 'Previous year questions, 20+ scheduled tests, and 10+ full syllabus tests for 10th & 12th Board Exam, JEE, NEET, SAT & Olympiads.',
                img: '/images/Third.jpg',
                reverse: false
              },
              {
                id: '04',
                title: 'Are you getting Personalized Tests?',
                desc: 'Covers one personalized scheduled test daily to boost your confidence by 100%.',
                img: '/images/ConnectUI.jpg',
                reverse: true
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row ${
                  item.reverse ? 'lg:flex-row-reverse' : ''
                } items-center gap-8 mb-12`}
              >
                <div className='flex-1 bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200'>
                  <div className='flex gap-4 mb-4 items-center'>
                    <h2 className='text-2xl text-gray-800 font-bold'>{item.id}</h2>
                    <h3 className='text-2xl text-blue-600 font-semibold'>{item.title}</h3>
                  </div>
                  <p className='text-lg md:text-xl text-gray-700'>{item.desc}</p>
                </div>

                <div className='flex-1'>
                  <img src={item.img} alt={item.title} className='rounded-xl shadow-md w-full max-w-md mx-auto' />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <div className='w-full flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-20 px-4'>
          {[
            { img: '/images/userslogo.png', target: 600000, label: 'Students' },
            { img: '/images/solutions.png', target: 600000, label: 'Tests' },
            { img: '/images/sessions.png', target: 1000000, label: 'Tests Given' },
            { img: '/images/rating.png', target: 4.5, label: 'Ratings', suffix: '/5' }
          ].map(({ img, target, label, suffix }, idx) => (
            <div
              key={idx}
              className='backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-2xl p-6 w-[160px] lg:w-[240px] flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-white/40'
            >
              <div className='mb-4'>
                <Image src={img} alt={`stat-${idx}`} width={80} height={80} />
              </div>
              <h2 className='text-lg lg:text-xl font-bold text-center text-[#4F46E5]'>
                <AnimatedCounter target={target} />
                {suffix || ' '}
                <br />
                <span className='text-[#111827]'>{label}</span>
              </h2>
            </div>
          ))}
        </div>

        <div className='mt-12'>
          <TestseriesWorks />
        </div>
        <div className='mt-12'>
          <Connect />
        </div>
        <div className='mt-4'>
          <Footer />
        </div>
      </div>
    </>
  );
}
