// import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
// import Slider from 'react-slick';

// const PrepsCards = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     centerMode: true,
//     slidesToShow: 4,
//     centerPadding: '0px',
//     slidesToScroll: 1,
//     nextArrow: <img className='w-16 h-16' src='/images/NextArr.png' />,
//     prevArrow: <img src='/images/PrevArr.png' />,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           centerMode: true,
//           slidesToShow: 1,
//           centerPadding: '0px',
//           slidesToScroll: 1,
//           initialSlide: 1,
//           rows: 2,
//           slidesPerRow: 2
//         }
//       }
//     ]
//   };
//   return (
//     <div className='w-[95%] m-auto'>
//       <div className='flex justify-center h-24 lg:w-full w-[80%] m-auto text-center'>
//         <ScrollAnimation animateIn='zoomIn' duration={1}>
//           <h2 className='lg:text-5xl text-4xl font-bold text-black'>Why choose InstaPrepsAi?</h2>
//         </ScrollAnimation>
//       </div>
//       <div className='lg:mt-20 mt-4'>
//         <div className='lg:w-[95%] w-[100%] m-auto px-4'>
//           <Slider {...settings}>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px]  rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full  ' />
//                 <div className='w-full h-full sat_card rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card1.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         Confidence Diagnosis in less than 5 mins
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full ' />
//                 <div className='w-full h-full sat_card_image rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20  rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card2.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         Coaches from IIT, NIT, Super30 Alumni
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full' />
//                 <div className='w-full h-full sat_card_image1 rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card3.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         24*7 live personalized doubt solving
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full ' />
//                 <div className='w-full h-full sat_card_image2 rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20  rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card4.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         Track & rectify your confidence issues
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full' />
//                 <div className='w-full h-full sat_card_image2 rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card5.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>Daily tests and detailed analysis</h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full' />
//                 <div className='w-full h-full sat_card_image1 rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card6.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         Preparation with personal attention
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full' />
//                 <div className='w-full h-full sat_card_image rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card7.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         “Preps” for quick Revision at a glance
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full' />
//                 <div className='w-full h-full sat_card rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card8.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>Get recorded video sessions</h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full' />
//                 <div className='w-full h-full sat_card rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card9.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         Free webinar sessions from top coaches of India.
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full' />
//                 <div className='w-full h-full sat_card_image rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card10.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         Special tips and tricks sessions to beat exam stress
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px]  rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full ' />
//                 <div className='w-full h-full sat_card_image1 rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card11.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         Motivational and doubt solving online classes
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex lg:py-0 py-8'>
//               <div className='lg:w-[280px] w-[140px] h-[160px] lg:h-[260px] rounded-lg '>
//                 <div className='lg:h-12 h-8 w-full' />
//                 <div className='w-full h-full sat_card_image2 rounded-lg'>
//                   <div className='relative flex justify-center w-full lg:h-28 h-16'>
//                     <div className='absolute lg:-top-16 -top-8 bg-white lg:h-28 lg:w-28 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center'>
//                       <img className='lg:w-16 lg:h-16 w-10 h-10' src='/images/card12.png' alt='' />
//                     </div>
//                   </div>
//                   <div className='lg:px-6 px-2'>
//                     <div className='w-full h-full flex text-center'>
//                       <h2 className='text-white font-semibold lg:text-xl text-sm'>
//                         Curated guidance, tips & support before exams
//                       </h2>
//                     </div>
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

// export default PrepsCards;



import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from 'react-slick';

const PrepsCards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,                 // smooth continuous motion
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: true,
    nextArrow: <img className="w-16 h-16 cursor-pointer" src="/images/NextArr.png" />,
    prevArrow: <img className="cursor-pointer" src="/images/PrevArr.png" />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-[95%] m-auto">
      <div className="flex justify-center h-24 lg:w-full w-[80%] m-auto text-center">
        <ScrollAnimation animateIn="zoomIn" duration={1}>
          <h2 className="lg:text-5xl text-4xl font-bold text-black">
            Why choose InstaPrepsAi?
          </h2>
        </ScrollAnimation>
      </div>

      <div className="lg:mt-20 mt-4">
        <div className="lg:w-[95%] w-full m-auto px-4">
          <Slider {...settings}>

            {[
              {
                img: "card1.png",
                title: "Confidence Boosting Shots",
                desc: "Short, focused micro-tests designed to strengthen weak areas and track confidence growth.",
                cls: "sat_card"
              },
              {
                img: "card2.png",
                title: "On-Demand Practice Tests",
                desc: "Attempt topic-wise or full-length tests anytime, anywhere — at your own pace.",
                cls: "sat_card_image"
              },
              {
                img: "card3.png",
                title: "Personalized Study Recommender",
                desc: "Intelligent recommendations based on performance and confidence patterns.",
                cls: "sat_card_image1"
              },
              {
                img: "card4.png",
                title: "AI-Powered Academic Chatbot",
                desc: "24×7 academic support with accurate, personalized guidance.",
                cls: "sat_card_image2"
              },
              {
                img: "card5.png",
                title: "Smart Insights Dashboard",
                desc: "Track progress, accuracy, strengths, weaknesses, and confidence trends.",
                cls: "sat_card"
              },
              {
                img: "card6.png",
                title: "Teacher-Like AI Guidance",
                desc: "AI that identifies self-doubt and keeps you on track.",
                cls: "sat_card_image"
              },
              {
                img: "card7.png",
                title: "7-Minute Confidence Diagnosis Tests",
                desc: "Quick diagnostics for fast revision and instant clarity.",
                cls: "sat_card_image1"
              },
              {
                img: "card8.png",
                title: "Expert Tips & Exam Strategies",
                desc: "Curated shortcuts and proven methods to reduce exam stress.",
                cls: "sat_card_image2"
              },
              {
                img: "card9.png",
                title: "Recorded Learning Sessions",
                desc: "Revisit sessions anytime for flexible revision.",
                cls: "sat_card_image"
              }
            ].map((card, index) => (
              <div key={index} className="flex py-8">
                <div className="lg:w-[280px] w-[160px] h-[260px] rounded-lg">
                  <div className="h-12 w-full" />
                  <div className={`w-full h-full ${card.cls} rounded-lg`}>
                    <div className="relative flex justify-center w-full h-28">
                      <div className="absolute -top-16 bg-white h-28 w-28 rounded-full flex justify-center items-center shadow-lg">
                        <img
                          className="w-16 h-16"
                          src={`/images/${card.img}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="px-6 text-center">
                      <h2 className="text-white font-semibold text-lg">
                        {card.title}
                        <span className="card-subtext">
                          {card.desc}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </Slider>
        </div>
      </div>

      {/* ✅ CSS POLISH */}
      <style jsx global>{`
        .slick-track {
          display: flex !important;
          align-items: stretch;
        }

        .slick-center {
          transform: scale(1.06);
          transition: transform 0.6s ease;
        }

        .card-subtext {
          display: block;
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.4;
          opacity: 0.9;
          font-weight: 400;
        }

        .sat_card,
        .sat_card_image,
        .sat_card_image1,
        .sat_card_image2 {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .sat_card:hover,
        .sat_card_image:hover,
        .sat_card_image1:hover,
        .sat_card_image2:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }
      `}</style>
    </div>
  );
};

export default PrepsCards;
