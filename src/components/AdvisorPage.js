import React from 'react';
import Slider from 'react-slick';

const advisors = [
  {
    name: 'Venkatesh Sarvasiddhi ',
    image: '/images/OurTeam/Venkatesh.jpg',
    role: 'CSR & Govt Partnership ',
    description:
      'Partnerships & CSR at NSDC, Ministry of Skill Development & Entrepreneurship Ex Head-Academic initiatives & Microsoft innovation centre/ Ex Country Director Deloitte'
  },
  {
    name: 'Sumit Chhazed',
    image: '/images/OurTeam/sumit.jpg',
    role: 'Business Operations & Fund Raise',
    description: 'CEO, OTO Capital raised $2 million IITB 2012, Ex-CEO CredR raised $20 million'
  },
  {
    name: 'Pramod Maheshwari',
    image: '/images/OurTeam/Pramod.jpg',
    role: 'Advisor of Education Business & Academic',
    description: 'Founder Career Point Ltd.'
  },
  {
    name: 'Sanjay Nawlakha',
    image: '/images/OurTeam/Sanjay.jpg',
    role: 'Global Finance & Women Empowerment',
    description: 'Chairperson of department of finance university of Massachusetts'
  },
  {
    name: 'Soumitra Dutta',
    image: '/images/OurTeam/Soumitra.jpg',
    role: 'Advisor of Innovation & AI',
    description:
      'Former Dean of Cornell University & founder of global innovation index & Board of Directors of the Global Business School Network, Washington DC'
  },
  {
    name: 'Sandiip Bhammer',
    image: '/images/OurTeam/Sandiip.jpg',
    role: 'Advisor of Emerging Markets',
    description:
      'Managing Partner Green Frontier Capital Board Member Emerging Markets Institute - Advisory Graduate school of management, Cornell University'
  },
  {
    name: 'Manish Bharti',
    image: '/images/OurTeam/Manish.jpeg',
    role: 'Revenue & Partnerships',
    description:
      'CRO | Ex-President @ UiPath | Scaling SaaS Revenue Across Cloud, AI, Data & Automation | Building High-Performance GTM Teams | Board Member & Investor in SaaS & AI'
  }
];

const Advisor = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '30px',
    slidesToScroll: 1,
    nextArrow: <img src='/images/NextArr.png' className='w-6' />,
    prevArrow: <img src='/images/PrevArr.png' className='w-6' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px'
        }
      }
    ]
  };

  return (
    <div className='w-full py-16 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-extrabold text-white'>Our Advisors</h2>
        <p className='text-gray-300 mt-2'>Meet the experts guiding our journey</p>
      </div>

      <div className='w-full px-4 md:px-6 lg:px-8'>
        <Slider {...settings}>
          {advisors.map((advisor, index) => (
            <div key={index} className='p-4'>
              <div className='relative group hover:scale-[1.02] transition-all duration-300'>
                {/* Glass card */}
                <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl text-white transition-all duration-300 hover:shadow-2xl hover:border-cyan-300/60'>
                  <div className='flex justify-center -mt-8 mb-6'>
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className='w-32 h-32 rounded-full border-4 border-white object-cover shadow-md'
                    />
                  </div>
                  <div className='text-center space-y-2'>
                    <h3 className='text-2xl font-bold'>{advisor.name}</h3>
                    <div className='text-sm font-semibold text-cyan-300'>{advisor.role}</div>
                    <p className='text-sm text-gray-200'>{advisor.qualification}</p>
                    <p className='text-sm text-gray-300'>{advisor.experience}</p>
                    <p className='text-sm text-gray-100 mt-2 leading-relaxed'>{advisor.description}</p>
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

export default Advisor;
