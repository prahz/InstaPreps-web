import React, { useRef } from 'react';
import Header from 'src/components/header';
import OurMission from './ourmission';
import ProgramBenefits from './programbenifits';
import Footer from 'src/components/footer';
import VerticalSidebar from 'src/components/VerticalSidebar';

function Startup() {
  const missionRef = useRef(null);

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">

      <div className='hidden md:block'>
        <VerticalSidebar />
      </div>


      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">

        <div className="max-w-lg text-center lg:text-left px-8">
          <h1 className="text-3xl lg:text-7xl font-luckiest text-yelloish">
            STARTUP POWER BY{' '}
            <span className="text-purple-800">INSTAPREPSAI</span>
          </h1>

          <p className="lg:text-xl mt-4 text-gray-500">
            This comprehensive program by InstaPrepsAi is designed to equipt
            college students and budding entrepreneurs with essential skills
            and resources needed to navigate the startup ecosystem and
            successfully launch.
          </p>

          <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
            <button
              onClick={scrollToMission}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center relative mt-8 lg:mt-0 px-6">
          <img
            src="./images/mainimage.jpg"
            alt=""
            className="w-full max-w-md lg:max-w-xl h-auto"
          />
        </div>

      </div>

      <div ref={missionRef}>
        <OurMission />
      </div>

      <ProgramBenefits />
      <Footer />

    </div>
  );
}

export default Startup;
