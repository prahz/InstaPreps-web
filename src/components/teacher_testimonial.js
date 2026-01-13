import React from 'react';
import Slider from 'react-slick';

const TeacherTestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0px', // ✅ Set to 0 for cleaner alignment
    slidesToScroll: 1,
    nextArrow: <img src='/images/NextArr.png' />,
    prevArrow: <img src='/images/PrevArr.png' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '0px',
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  return (
    <div className='w-full m-auto'>
      <div className='flex justify-center'>
        <h2 className='h-12 lg:text-4xl text-3xl text-black font-bold'>Our Team</h2>
      </div>

      <div className='mt-12'>
        <div className='w-full px-4 md:px-6 lg:px-8'>
          <Slider {...settings}>
            {/* <div className=' flex '> */}
            {/* <div className='h-[540px] lg:w-[320px] w-[280px] bg-[#FFF7E0] overflow-hidden rounded-md shadow-md'>
                <div className='h-20 w-full bg-white' />
                <div className='flex justify-center -mt-20'>
                  <img className='w-[160px] h-[160px] rounded-full' src='/images/arvind.jpg' alt='' />
                </div>
                <div className='mt-4 px-4'>
                  <h2 className='text-xl font-normal text-yellow'>Tr. Arvind</h2>
                  <h2 className='text-sm text-gray-500 font-medium'>IIT Bombay</h2>
                  <h2 className='text-sm text-gray-500 font-medium'>6+ years of Teaching Experience</h2>
                  <div className='mt-8'>
                    <p className='text-sm text-gray-500 font-bold'>
                      Arvind being an alumni of IIT Bombay, is the best faculty for Chemistry for IIT JEE not from now
                      but from he is teaching chemistry from an early age. His unique teaching methods and expertise in
                      providing tricks and nicks for the exam makes him absoulte favourite among his students
                    </p>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
            {/* <div className=' flex '>
              <div className='h-[540px] lg:w-[320px] w-[280px] bg-[#FFF7E0] overflow-hidden rounded-md shadow-lg'>
                <div className='h-20 w-full bg-white'></div>
                <div className='flex justify-center -mt-20 '>
                  <img className='w-[160px] h-[160px] rounded-full' src='/images/Anupsir.png' alt='' />
                </div>
                <div className='mt-4 px-2'>
                  <h2 className='text-xl font-normal text-yellow'>Tr. Anup Raj</h2>
                  <h2 className='text-sm text-gray-500 font-medium'>IIT Bombay, Super 30 Alumni</h2>
                  <h2 className='text-sm text-gray-500 font-medium'>10+ years of Teaching Experience</h2>
                  <div className='mt-8'>
                    <p className='text-sm text-gray-500 font-bold'>
                      Anup being an IIT Bombay and Super 30 alumni has witnessed both best and the least faciliated
                      frameworks of Indian education system and hence he knows the best way to inculcate the learning
                      methods for students. His teaching methods are very unique that make the learning for students
                      faster and interesting.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className=' flex '>
              <div className='h-[540px] lg:w-[320px] w-[280px] bg-[#FFF7E0] overflow-hidden rounded-md shadow-lg'>
                <div className='h-20 w-full bg-white' />
                <div className='flex justify-center -mt-20'>
                  <img className='w-[160px] h-[160px] rounded-full' src='/images/Ranjansir.png' alt='' />
                </div>
                <div className='mt-4 px-4'>
                  <h2 className='text-xl font-normal text-yellow'>Tr. Ranjan</h2>
                  <h2 className='text-sm text-gray-500 font-medium'>NIT JSR</h2>
                  <h2 className='text-sm text-gray-500 font-medium'>6+ years of Teaching Experience</h2>
                  <div className='mt-8'>
                    <p className='text-sm text-gray-500 font-bold'>
                      Ranjan is an alumni of NIT JSR. His unbeatable unique techniques to solve mathematics problems
                      makes him student's favourite. He has an expertise in Olympiads as well. His out of the box
                      teaching techniques have proven very successful for weak students and they ought to perform
                      extremely well.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className='p-6'>
              <div className='relative group transition-transform duration-300 transform hover:scale-105 mx-auto'>
                {/* Glow on hover */}
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-40 blur-lg rounded-3xl transition-opacity duration-300 z-0'></div>

                {/* Card */}
                <div className='relative bg-white rounded-3xl shadow-2xl w-[320px] z-10 overflow-hidden mx-auto'>
                  <div className='h-20 w-full bg-gradient-to-r from-[#cceeff] to-[#e0f7ff] rounded-t-3xl'></div>
                  <div className='flex justify-center -mt-16'>
                    <img
                      src='/images/OurTeam/Anupraaj.jpg'
                      alt='Anup Raaj'
                      className='w-36 h-36 rounded-full border-[6px] border-white shadow-xl object-cover'
                    />
                  </div>
                  <div className='text-center px-6 py-4'>
                    <h2 className='text-2xl font-bold text-[#01579b] mb-1'>Anup Raaj</h2>
                    <p className='text-sm text-gray-700 font-semibold'>Founder & CEO</p>
                    <p className='text-sm text-gray-600'>IIT Bombay, Super 30 Alumni</p>
                    <p className='text-sm text-gray-600 mb-4'>Sold First Venture to Portea (IPO ready)</p>
                    {/* <p className="text-sm text-gray-800 leading-relaxed">
          Anup, an IIT Bombay and Super 30 alumni, brings a unique teaching style that simplifies complex concepts. Having experienced both the best and least privileged educational systems, his insights help students learn faster and retain better.
        </p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className='p-6'>
              <div className='relative group transition-transform duration-300 transform hover:scale-105 mx-auto'>
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-40 blur-lg rounded-3xl transition-opacity duration-300 z-0'></div>
                <div className='relative bg-white rounded-3xl shadow-2xl w-[320px] z-10 overflow-hidden mx-auto'>
                  <div className='h-20 w-full bg-gradient-to-r from-[#cceeff] to-[#e0f7ff] rounded-t-3xl'></div>
                  <div className='flex justify-center -mt-16'>
                    <img
                      src='/images/OurTeam/Arun.jpg'
                      alt='Tr. Arun'
                      className='w-36 h-36 rounded-full border-[6px] border-white shadow-xl object-cover'
                    />
                  </div>
                  <div className='text-center px-6 py-4'>
                    <h2 className='text-2xl font-bold text-[#01579b] mb-1'>Arun Kumar</h2>
                    <p className='text-sm text-gray-700 font-semibold'>Co-Founder</p>
                    <p className='text-sm text-gray-600'>NIT, PTU Gold Medalist</p>
                    <p className='text-sm text-gray-600 mb-4'>11+ years in Kids Care Entrepreneurship</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-6'>
              <div className='relative group transition-transform duration-300 transform hover:scale-105 mx-auto'>
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-40 blur-lg rounded-3xl transition-opacity duration-300 z-0'></div>
                <div className='relative bg-white rounded-3xl shadow-2xl w-[320px] z-10 overflow-hidden mx-auto'>
                  <div className='h-20 w-full bg-gradient-to-r from-[#cceeff] to-[#e0f7ff] rounded-t-3xl'></div>
                  <div className='flex justify-center -mt-16'>
                    <img
                      src='/images/OurTeam/Hemant.jpg'
                      alt='Tr. Arun'
                      className='w-36 h-36 rounded-full border-[6px] border-white shadow-xl object-cover'
                    />
                  </div>
                  <div className='text-center px-6 py-4'>
                    <h2 className='text-2xl font-bold text-[#01579b] mb-1'>Hemant Singh</h2>
                    <p className='text-sm text-gray-700 font-semibold'>Co-Founder</p>
                    <p className='text-sm text-gray-600'>Patna University</p>
                    <p className='text-sm text-gray-600 mb-4'>7+ years in Data Engineering</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-6'>
              <div className='relative group transition-transform duration-300 transform hover:scale-105 mx-auto'>
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-40 blur-lg rounded-3xl transition-opacity duration-300 z-0'></div>
                <div className='relative bg-white rounded-3xl shadow-2xl w-[320px] z-10 overflow-hidden mx-auto'>
                  <div className='h-20 w-full bg-gradient-to-r from-[#cceeff] to-[#e0f7ff] rounded-t-3xl'></div>
                  <div className='flex justify-center -mt-16'>
                    <img
                      src='/images/OurTeam/Krutika.jpg'
                      alt='Tr. Arun'
                      className='w-36 h-36 rounded-full border-[6px] border-white shadow-xl object-cover'
                    />
                  </div>
                  <div className='text-center px-6 py-4'>
                    <h2 className='text-2xl font-bold text-[#01579b] mb-1'>Krutika Solanki</h2>
                    <p className='text-sm text-gray-700 font-semibold'>Co-Founder</p>
                    <p className='text-sm text-gray-600'>NIT, GGV Chhattisgarh</p>
                    <p className='text-sm text-gray-600 mb-4'>AI & Semicondutor Researcher</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-6'>
              <div className='relative group transition-transform duration-300 transform hover:scale-105 mx-auto'>
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-40 blur-lg rounded-3xl transition-opacity duration-300 z-0'></div>
                <div className='relative bg-white rounded-3xl shadow-2xl w-[320px] z-10 overflow-hidden mx-auto'>
                  <div className='h-20 w-full bg-gradient-to-r from-[#cceeff] to-[#e0f7ff] rounded-t-3xl'></div>
                  <div className='flex justify-center -mt-16'>
                    <img
                      src='/images/OurTeam/Aman.jpg'
                      alt='Aman Deva'
                      className='w-36 h-36 rounded-full border-[6px] border-white shadow-xl object-cover'
                    />
                  </div>
                  <div className='text-center px-6 py-4'>
                    <h2 className='text-2xl font-bold text-[#01579b] mb-1'>Aman Deva</h2>
                    <p className='text-sm text-gray-700 font-semibold'>Ai Lead</p>
                    <p className='text-sm text-gray-600'>MNNIT Allahabad</p>
                    <p className='text-sm text-gray-600 mb-4'>3+ years in Ai Research </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-6'>
              <div className='relative group transition-transform duration-300 transform hover:scale-105 mx-auto'>
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-40 blur-lg rounded-3xl transition-opacity duration-300 z-0'></div>
                <div className='relative bg-white rounded-3xl shadow-2xl w-[320px] z-10 overflow-hidden mx-auto'>
                  <div className='h-20 w-full bg-gradient-to-r from-[#cceeff] to-[#e0f7ff] rounded-t-3xl'></div>
                  <div className='flex justify-center -mt-16'>
                    <img
                      src='/images/OurTeam/Anjulata.jpg'
                      alt='Anjulata Charan'
                      className='w-36 h-36 rounded-full border-[6px] border-white shadow-xl object-cover'
                    />
                  </div>
                  <div className='text-center px-6 py-4'>
                    <h2 className='text-2xl font-bold text-[#01579b] mb-1'>Anjulata Charan</h2>
                    <p className='text-sm text-gray-700 font-semibold'>Head of Product & Product Adoption </p>
                    <p className='text-sm text-gray-600'>IIT Bombay</p>
                    <p className='text-sm text-gray-600 mb-4'>5+ years in Product Engineering </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-6 '>
              <div className='relative group transition-transform duration-300 transform hover:scale-105 mx-auto'>
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-40 blur-lg rounded-3xl transition-opacity duration-300 z-0'></div>
                <div className='relative bg-white rounded-3xl shadow-2xl w-[320px] z-10 overflow-hidden mx-auto'>
                  <div className='h-20 w-full bg-gradient-to-r from-[#cceeff] to-[#e0f7ff] rounded-t-3xl'></div>
                  <div className='flex justify-center -mt-16'>
                    <img
                      src='/images/OurTeam/Ananya.jpg'
                      alt='Ananya Samadhiya'
                      className='w-36 h-36 rounded-full border-[6px] border-white shadow-xl object-cover'
                    />
                  </div>
                  <div className='text-center px-6 py-4'>
                    <h2 className='text-2xl font-bold text-[#01579b] mb-1'>Ananya Samadhiya</h2>
                    <p className='text-sm text-gray-700 font-semibold'>Platform Operations Head</p>
                    <p className='text-sm text-gray-600'>R.G.P.V. Bhopal</p>
                    <p className='text-sm text-gray-600 mb-4'> Technology & Team Leader </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TeacherTestimonial;
