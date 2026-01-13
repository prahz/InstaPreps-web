import React from 'react';

function OurMission() {
  return (<>
    <div className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 py-10 px-5">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-Monofett text-black mb-4">
          OUR MISSION
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center w-[75%] mx-auto">
        <p className="text-lg text-gray-700 text-center">
          At StartupPower, our mission is to empower young innovators by
          providing them with the tools and knowledge they need to turn their
          ideas into reality. We aim to bridge the gap between innovative ideas
          and the resources required to make them a success.
        </p>
        </div>
      </div>
</div>


<div className="py-10 px-5">
      {/* Cards Section */}
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20  lg: w-[800px] m-20 ">
        {/* Card 1 */}
        <div className="bg-sky text-white rounded-2xl p-6 shadow-lg">
          <img
            src="./images/Training.png"
            alt="Training Icon"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 text-center text-white">
            $100,000 credits for Training and Sessions upto 400 Hours
          </h2>
          <p className="text-center text-m">
Provides Upto 400 hours of Training and Sessions, valued at $100,000 credits by Anup Raaj. Aimed at providing deep insights and practical skills
            needed to build and scale a startup effectively.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-yelloish text-white rounded-2xl p-6 shadow-lg">
          <img
            src="./images/Backend Development.png"
            alt="Product Development Icon"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 text-center text-white">
            Technology Training for Product Development
          </h2>
          <p className="text-center text-m">
            Specialized training for founders to help them build their
            startup’s product prototype. Focus on essential technical skills
            such as Web Development and Android Development.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-carrot text-white rounded-2xl p-6 shadow-lg">
          <img
            src="./images/Money Bag Franc.png"
            alt="Funding Icon"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 text-center text-white">
            Training on Funding and Fundraising
          </h2>
          <p className="text-center text-m">
            Detailed sessions on understanding the funding landscape and
            strategies to secure investments. The goal is to equip founders
            with the skills to secure initial funding of up to $100,000.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-purple-500 text-white rounded-2xl p-6 shadow-lg">
          <img
            src="./images/Classmates Sitting.png"
            alt="College Students Icon"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 text-center text-white">
            Tailored for College Students and Aspiring Entrepreneurs
          </h2>
          <p className="text-center text-m">
            Specialized training for college students and aspiring
            entrepreneurs to turn their innovative ideas into reality with
            hands-on mentorship and development.
          </p>
        </div>
      </div>
      </div>
    </div></>
  );
}

export default OurMission;
