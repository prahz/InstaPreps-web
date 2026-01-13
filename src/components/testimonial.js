// import React from 'react';
// import Slider from 'react-slick';

// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     centerMode: true,
//     slidesToShow: 2,
//     centerPadding: '50px',
//     slidesToScroll: 1,
//     nextArrow: <img className='' src='/images/NextArr.png' />,
//     prevArrow: <img src='/images/PrevArr.png' />,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           centerMode: true,
//           slidesToShow: 1,
//           centerPadding: '25px',
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div className='w-full overflow-hidden'>
//       <div className='w-full h-16 flex justify-center'>
//         <h2 className='text-4xl font-bold text-black'>Testimonials</h2>
//       </div>

//       <div className='mt-8'>
//         <div className='lg:w-[80%] w-[100%]  m-auto'>
//           <Slider {...settings}>
//             {/* <div className=' flex '>
//               <div className='lg:h-[560px] lg:w-[360px] w-[290px] bg-[#EBFDFF] overflow-hidden'>
//                 <div>
//                   <div className='w-full h-2 bg-[#4FE8F8]'></div>
//                   <img className='w-full h-[240px]' src='/images/picturess2.png' alt='' />
//                 </div>
//                 <div className='mt-4 px-4'>
//                   <p className='text-xl text-gray-500 font-normal'>
//                     <svg width='32px' height='32px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//                       <rect x='0' fill='none' width='24' height='24' />
//                       <g>
//                         <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z' />
//                       </g>
//                     </svg>
//                     Doubt solving class was very good,teacher solved my all doubts.
//                   </p>
//                   <div className='mt-16'>
//                     <p className='text-xl'>Shubhi Soni </p>
//                     <p className='text-md font-normal'>9th, CBSE </p>
//                     <p className='text-md font-normal'>Baburi, Chandauli, UP </p>
//                     <p className='text-md font-normal'>JS public School</p>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//             <div className=' flex '>
//               <div className='h-[540px] lg:w-[320px] w-[280px] bg-[#fbeaae] overflow-hidden rounded-md shadow-lg'>
//                 <div className='h-20 w-full bg-white' />
//                 <div className='flex justify-center -mt-20'>
//                   <img className='w-[160px] h-[160px] rounded-full' src='/images/pictures.png' alt='' />
//                 </div>
//                 <div className='mt-4 px-4'>
//                   <p className='text-lg text-gray-500 font-normal'>
//                     <svg width='32px' height='32px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//                       <rect x='0' fill='none' width='24' height='24' />
//                       <g>
//                         <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z' />
//                       </g>
//                     </svg>
//                     It was a wonderful session with Anup Bhaiya. His words encouraged me a lot and reassured me that I can ask my doubts regarding any topic to the faculty .
//                   </p>
//                   <div className='lg:mt-8 mt-4'>
//                     <p className='text-xl text-red-600'>Praveen Kumar</p>
//                     <p className='lg:text-md text-sm font-normal'>12th, Bihar Board</p>
//                     <p className='lg:text-md text-sm font-normal'>Gaya, Bihar </p>
//                     <p className='lg:text-sm text-sm font-normal'>Gaya College</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className=' flex '>
//               <div className='h-[540px] lg:w-[320px] w-[280px] bg-[#FFF7E0] overflow-hidden rounded-md shadow-lg'>
//                 <div className='h-20 w-full bg-white' />
//                 <div className='flex justify-center -mt-20'>
//                   <img className='w-[160px] h-[160px] rounded-full' src='/images/figma.png' alt='' />
//                 </div>
//                 <div className='mt-4 px-4'>
//                   <p className='text-lg text-gray-500 font-normal'>
//                     <svg width='32px' height='32px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//                       <rect x='0' fill='none' width='24' height='24' />
//                       <g>
//                         <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z' />
//                       </g>
//                     </svg>
//                     The Confidence Coaches helped me clear all my doubts, and now I feel confident about that topic. I will continue using InstaPrepsAi in the future to solve my doubts.
//                   </p>
//                   <div className='lg:mt-8 mt-4'>
//                     <p className='text-xl text-red-600'>Anwesha Tiwari </p>
//                     <p className='lg:text-md text-sm font-normal'>8th, CBSE </p>
//                     <p className='lg:text-md text-sm font-normal'>Navi Mumbai </p>
//                     <p className='lg:text-sm text-sm font-normal'>Kendriya Vidyalaya, O.N.G.C Panvel</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className=' flex '>
//               <div className='h-[540px] lg:w-[320px] w-[280px] bg-[#EDEBFF] overflow-hidden rounded-md shadow-lg'>
//                 <div className='h-20 w-full bg-white' />
//                 <div className='flex justify-center -mt-20'>
//                   <img className='w-[160px] h-[160px] rounded-full' src='/images/Students7.png' alt='' />
//                 </div>
//                 <div className='mt-4 px-4'>
//                   <p className='text-lg text-gray-500 font-normal'>
//                     <svg width='32px' height='32px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//                       <rect x='0' fill='none' width='24' height='24' />
//                       <g>
//                         <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z' />
//                       </g>
//                     </svg>
//                     The InstaprepsAI app is very easy to use for solving doubts. The Confidence Coaches help me solve all my doubts through the app. I study math and biology on InstaprepsAI.
//                   </p>
//                   <div className='lg:mt-8 mt-4'>
//                     <p className='text-xl text-red-600'>Siddharth Shukla</p>
//                     <p className='lg:text-md text-sm font-normal'>7th, CBSE </p>
//                     <p className='lg:text-md text-sm font-normal'>Prayagraj</p>
//                     <p className='lg:text-sm text-sm font-normal'>Jeevan Jyoti Public school</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className=' flex '>
//               <div className='h-[540px] lg:w-[320px] w-[280px] bg-[#EBFDFF] overflow-hidden rounded-md shadow-lg'>
//                 <div className='h-20 w-full bg-white' />
//                 <div className='flex justify-center -mt-20'>
//                   <img className='w-[160px] h-[160px] rounded-full' src='/images/picturess2.png' alt='' />
//                 </div>
//                 <div className='mt-4 px-4'>
//                   <p className='text-lg text-gray-500 font-normal'>
//                     <svg width='32px' height='32px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//                       <rect x='0' fill='none' width='24' height='24' />
//                       <g>
//                         <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z' />
//                       </g>
//                     </svg>
//                     The doubt-solving class was excellent, and the Confidence Coaches resolved all my doubts. With InstaprepsAi, I can boost my confidence whenever I want.
//                   </p>
//                   <div className='lg:mt-8 mt-4'>
//                     <p className='text-xl text-red-600'>Shubhi Soni</p>
//                     <p className='lg:text-md text-sm font-normal'>9th, CBSE </p>
//                     <p className='lg:text-md text-sm font-normal'>Baburi, Chandauli, UP</p>
//                     <p className='lg:text-sm text-sm font-normal'>JS public School</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

/*import React from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  centerMode: true,
  slidesToShow: 3, // Changed to show 3 cards on large screens
  centerPadding: '40px', // Optional: tweak as needed
  slidesToScroll: 1,
  nextArrow: <img src='/images/NextArr.png' alt='Next' className='w-6 h-6' />,
  prevArrow: <img src='/images/PrevArr.png' alt='Prev' className='w-6 h-6' />,
  responsive: [
    {
      breakpoint: 1280, // Desktop to tablet
      settings: {
        slidesToShow: 2,
        centerPadding: '30px',
      },
    },
    {
      breakpoint: 768, // Tablets and smaller
      settings: {
        slidesToShow: 1,
        centerPadding: '20px',
      },
    },
  ],
};


  return (
    <div className='w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50 py-16 px-4'>
      <div className='w-full flex justify-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-800 font-sans'>Testimonials</h2>
      </div>

      <div className='w-full mx-auto px-4 md:px-6 lg:px-8'>
        <Slider {...settings}>
          {[1, 2, 3, 4].map((item, index) => (
            <div className='flex justify-center py-6' key={index}>
              <div className='h-auto max-w-[320px] bg-white rounded-3xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105 duration-300'>
                <div className='h-20 w-full bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 rounded-t-3xl' />
                <div className='flex justify-center -mt-16'>
                  <img
                    className='w-[120px] h-[120px] rounded-full border-4 border-white shadow-md object-cover'
                    src={`/images/${index === 0 ? 'Student' : index === 1 ? 'Student' : index === 2 ? 'Student' : 'Student'}.png`}
                    alt='student-img'
                  />
                </div>
                <div className='mt-4 px-6 pb-6 text-center'>
                  <p className='text-base leading-relaxed text-gray-700 font-light italic'>
                    <svg className='inline-block text-indigo-400 mr-2' width='24' height='24' viewBox='0 0 24 24'>
                      <path fill='currentColor' d='M9 11.75c0-2.65 1.5-5.1 3.8-6.43L12 4.5C9.79 5.72 8.25 8.07 8.25 10.75H6c-.69 0-1.25.56-1.25 1.25S5.31 13.25 6 13.25h3c.41 0 .75-.34.75-.75zM18 11.75c0-2.65 1.5-5.1 3.8-6.43L21 4.5c-2.21 1.22-3.75 3.57-3.75 6.25H15c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h3c.41 0 .75-.34.75-.75z' />
                    </svg>
                    {
                      index === 0 ? 'It was a wonderful session with Anup Bhaiya. His words encouraged me a lot and reassured me that I can ask my doubts regarding any topic to the faculty.' :
                      index === 1 ? 'The Confidence Coaches helped me clear all my doubts, and now I feel confident about that topic. I will continue using InstaPrepsAi in the future to solve my doubts.' :
                      index === 2 ? 'The InstaprepsAI app is very easy to use for solving doubts. The Confidence Coaches help me solve all my doubts through the app. I study math and biology on InstaprepsAI.' :
                      'The doubt-solving class was excellent, and the Confidence Coaches resolved all my doubts. With InstaprepsAi, I can boost my confidence whenever I want.'
                    }
                  </p>
                  <div className='mt-6'>
                    <p className='text-lg font-semibold text-indigo-700'>
                      {index === 0 ? 'Praveen Kumar' : index === 1 ? 'Anwesha Tiwari' : index === 2 ? 'Siddharth Shukla' : 'Shubhi Soni'}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {index === 0 ? '12th, Bihar Board' : index === 1 ? '8th, CBSE' : index === 2 ? '7th, CBSE' : '9th, CBSE'}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {index === 0 ? 'Gaya, Bihar' : index === 1 ? 'Navi Mumbai' : index === 2 ? 'Prayagraj' : 'Baburi, Chandauli, UP'}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {index === 0 ? 'Gaya College' : index === 1 ? 'Kendriya Vidyalaya, O.N.G.C Panvel' : index === 2 ? 'Jeevan Jyoti Public School' : 'JS Public School'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial; */

import React from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
  const settings = {
    dots: false, // no small dots
    arrows: false, // no side arrows
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '40px',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerPadding: '30px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px'
        }
      }
    ]
  };

  return (
    <div className='relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50 py-16 px-4'>
      {/* Top Heading */}
      <div className='w-full flex justify-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-800 font-sans'>Testimonials</h2>
      </div>

      {/* Left and Right blur overlays */}
      <div className='absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white via-white/70 to-transparent z-10 pointer-events-none' />
      <div className='absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white via-white/70 to-transparent z-10 pointer-events-none' />

      {/* Slider Section */}
      <div className='lg:w-[80%] w-full mx-auto'>
        <Slider {...settings}>
          {[1, 2, 3, 4].map((item, index) => (
            <div className='flex justify-center py-6' key={index}>
              <div className='h-auto max-w-[320px] bg-white rounded-3xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105 duration-300'>
                <div className='h-20 w-full bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 rounded-t-3xl' />
                <div className='flex justify-center -mt-16'>
                  <img
                    className='w-[120px] h-[120px] rounded-full border-4 border-white shadow-md object-cover'
                    src={`/images/${
                      index === 0 ? 'Student' : index === 1 ? 'Student' : index === 2 ? 'Student' : 'Student'
                    }.png`}
                    alt='student-img'
                  />
                </div>
                <div className='mt-4 px-6 pb-6 text-center'>
                  <p className='text-base leading-relaxed text-gray-700 font-light italic'>
                    <svg className='inline-block text-indigo-400 mr-2' width='24' height='24' viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M9 11.75c0-2.65 1.5-5.1 3.8-6.43L12 4.5C9.79 5.72 8.25 8.07 8.25 10.75H6c-.69 0-1.25.56-1.25 1.25S5.31 13.25 6 13.25h3c.41 0 .75-.34.75-.75zM18 11.75c0-2.65 1.5-5.1 3.8-6.43L21 4.5c-2.21 1.22-3.75 3.57-3.75 6.25H15c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h3c.41 0 .75-.34.75-.75z'
                      />
                    </svg>
                    {index === 0
                      ? 'It was a wonderful session with Anup Bhaiya. His words encouraged me a lot and reassured me that I can ask my doubts regarding any topic to the faculty.'
                      : index === 1
                      ? 'The Confidence Coaches helped me clear all my doubts, and now I feel confident about that topic. I will continue using InstaPrepsAi in the future to solve my doubts.'
                      : index === 2
                      ? 'The InstaprepsAI app is very easy to use for solving doubts. The Confidence Coaches help me solve all my doubts through the app. I study math and biology on InstaprepsAI.'
                      : 'The doubt-solving class was excellent, and the Confidence Coaches resolved all my doubts. With InstaprepsAi, I can boost my confidence whenever I want.'}
                  </p>
                  <div className='mt-6'>
                    <p className='text-lg font-semibold text-indigo-700'>
                      {index === 0
                        ? 'Praveen Kumar'
                        : index === 1
                        ? 'Anwesha Tiwari'
                        : index === 2
                        ? 'Siddharth Shukla'
                        : 'Shubhi Soni'}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {index === 0
                        ? '12th, Bihar Board'
                        : index === 1
                        ? '8th, CBSE'
                        : index === 2
                        ? '7th, CBSE'
                        : '9th, CBSE'}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {index === 0
                        ? 'Gaya, Bihar'
                        : index === 1
                        ? 'Navi Mumbai'
                        : index === 2
                        ? 'Prayagraj'
                        : 'Baburi, Chandauli, UP'}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {index === 0
                        ? 'Gaya College'
                        : index === 1
                        ? 'Kendriya Vidyalaya, O.N.G.C Panvel'
                        : index === 2
                        ? 'Jeevan Jyoti Public School'
                        : 'JS Public School'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
