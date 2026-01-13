import React from "react";

const ProgramBenefits = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen p-6">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        {/* Grouping Entrepreneur and Networking Sections */}
        <div className="flex flex-col gap-6 w-full max-w-[600px]">
          {/* Entrepreneur Section */}
          <div className="bg-sky p-6 rounded-2xl shadow-lg">
            <h2 className="text-4xl  text-white font-bold mb-4 mt-3">Entrepreneur</h2>
            <div className="flex">
              <div className="p-4 mt-6">
                <p className="text-2xl text-blue-800 font-semibold text-Akihabara-Arcade-400">
                  Sharpen your skills
                </p>
                <p className="mt-2">
                  Attend our engaging workshops covering topics like market analysis, financial planning.
                </p>
                <button className="mt-4 bg-yelloish text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300">
                  <a 
                    href="https://forms.gle/cv3H8UBSKcnnQJ549" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    Join Now
                  </a>
                </button>
              </div>
              <div className="bg-white text-black p-4 mt-6 shadow-md">
                <h3 className=" text-2xl font-bold">Mentorship Program</h3>
                <p className="mt-2 text-m">
                  Benefit from the expertise and guidance of experienced entrepreneurs and industry professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Networking Section */}
          <div className="bg-goldish text-black p-6 rounded-2xl shadow-lg flex ">
            <div className=" mt-10">
              <img
                src="./images/man-wearing-t-shirt-gesturing_23-2149393667 1.png"
                alt="Training Icon"
                className="mx-auto mb-4"
              />
            </div>
            <div>
              <h2 className="text-4xl  mt-4 px-7 text-black font-bold mb-4">Networking</h2>
              <p className="mt-4 px-7">
                Connect with like-minded individuals, potential partners.
                <br />
                <br />
                <a
                  href="https://www.linkedin.com/company/confidenceappinstaprepsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile in new tab"
                  className="flex items-center gap-2 no-underline"
                >
                  <svg role="img" viewBox="0 0 24 24" width={15} height={15}>
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452H17.21V14.83c0-1.333-.026-3.049-1.858-3.049-1.86 0-2.144 1.45-2.144 2.949v5.722H9.01V9h3.071v1.56h.044c.427-.806 1.471-1.659 3.028-1.659 3.24 0 3.839 2.134 3.839 4.91v6.682zM5.337 7.433a1.78 1.78 0 1 1 0-3.56 1.78 1.78 0 0 1 0 3.56zM6.96 20.452H3.708V9H6.96v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.544C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.272V1.728C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                  <u>InstaPrepsAi</u>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Program Benefits Section */}
        <div className="bg-carrot text-white p-6 rounded-2xl shadow-lg w-full max-w-[350px]">
          <h2 className="text-3xl  text-white font-bold mb-4">Program Benefits</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-yellow-300 text-xl mr-2 mt-6">⭐</span>
              <span className="mt-6">
                <strong>Prototype Development:</strong> Training in technical skills to build a functional prototype, a critical step for pitching to investors.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 text-xl mr-2 mt-6">⭐</span>
              <span className="mt-6">
                <strong>Initial Funding Guidance:</strong> Comprehensive knowledge on how to secure up to 15 lakhs in funding.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 text-xl mr-2 mt-6">⭐</span>
              <span className="mt-6">
                <strong>No Equity Sacrifice:</strong> Founders retain full ownership while gaining access to high-value training.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 text-xl mr-2 mt-6">⭐</span>
              <span className="mt-6">
                <strong>Startup Readiness: </strong>Holistic preparation for launching a startup, from product
                development to funding.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramBenefits;
