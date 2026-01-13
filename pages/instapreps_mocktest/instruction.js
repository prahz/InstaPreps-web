import React, { useState } from 'react';

// --- ICONS (for a better visual experience) ---
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const QuestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const InstructionTest = ({ changeStartTest, marks, time, testName, questions }) => {
  // ACM / Camera is now enabled by default. The user can still opt-out.
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleStart = () => {
    if (testName?.test_name) {
      localStorage.setItem('currentTestSubject', testName.test_name);
    }
    changeStartTest(cameraEnabled);
  };

  // Defaulting to 5 minutes if not provided, just like in your original code
  const duration = testName?.duration || 5;

  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans'>
      <div className='max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 transform transition-all duration-300'>
        
        {/* --- Header --- */}
        <div className='text-center mb-6'>
            <h1 className='text-3xl md:text-4xl font-bold text-slate-800'>{testName?.test_name || 'Loading Test...'}</h1>
            <p className='text-slate-500 mt-2'>Please review the test instructions before you begin.</p>
        </div>

        {/* --- Test Details --- */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center my-8'>
            <div className='bg-green-50 p-4 rounded-lg'>
                <QuestionIcon />
                <p className='text-2xl font-bold text-green-600 mt-2'>{questions || 0}</p>
                <p className='text-sm text-slate-600'>Questions</p>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg'>
                <ClockIcon />
                <p className='text-2xl font-bold text-blue-600 mt-2'>{duration}</p>
                <p className='text-sm text-slate-600'>Minutes</p>
            </div>
            <div className='bg-yellow-50 p-4 rounded-lg'>
                <StarIcon />
                <p className='text-2xl font-bold text-yellow-600 mt-2'>{marks || 0}</p>
                <p className='text-sm text-slate-600'>Marks</p>
            </div>
        </div>
        
        {/* --- Instructions List --- */}
        <div className='bg-slate-50 p-6 rounded-lg mb-8'>
            <h2 className='text-lg font-semibold text-slate-700 mb-4'>Instructions:</h2>
            <ul className='space-y-3 text-slate-600'>
                <li className='flex items-start'><CheckIcon /><span>This is a Multiple Choice Question (MCQ) based test.</span></li>
                <li className='flex items-start'><CheckIcon /><span>The test will be automatically submitted when the timer runs out.</span></li>
                <li className='flex items-start'><AlertIcon /><span className='font-semibold text-red-600'>Negative marking will be applied for incorrect answers.</span></li>
            </ul>
        </div>

        {/* --- Actions --- */}
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center space-x-3 mb-2'>
                <label htmlFor="camera-toggle" className="text-sm font-medium text-gray-700">
                    Confidence Detection System
                </label>
                <label htmlFor="camera-toggle" className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        id="camera-toggle" 
                        className="sr-only peer" 
                        checked={cameraEnabled}
                        onChange={(e) => setCameraEnabled(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </div>
            <p className='text-xs text-slate-500 flex items-center mb-6'><InfoIcon /><span className='ml-1'>Enabled by default for better performance analysis.</span></p>

            <button
              onClick={handleStart}
              className='w-full max-w-sm bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105'
            >
              Start Test
            </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionTest;