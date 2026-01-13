import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const IOSDeveloperIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: iOS Developer Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the iOS Developer Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>iOS Developer Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as an iOS Developer Intern. Build a performant and user-friendly iOS application for our AI-driven learning platform."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">iOS Developer Intern</h1>
          <p className="text-gray-600 mt-2 mb-8">1 Month · Project-Based · Mumbai / Hybrid</p>

          <button
            onClick={handleApply}
            className="px-6 py-3 bg-[#6554e1] text-white text-lg rounded-4xl hover:bg-gray-700 transition"
          >
            Apply Now
          </button>

          <hr className="my-12" />

          <div className="space-y-10 leading-relaxed">

            {/* JOB DETAILS */}
            <section>
              <h2 className="text-2xl font-semibold">Job Description</h2>
              <p className="mt-3 text-lg">
                <strong>Company:</strong> InstaprepsAi <br/>
                <strong>Position:</strong> iOS Developer Intern <br/>
                <strong>Duration:</strong> 1 Month (Project-Based, Full-Time) <br/>
                <strong>Location:</strong> Mumbai (In-Office / Hybrid) <br/>
                <strong>Target:</strong> Exclusively for students enrolled at IIM
              </p>
            </section>

            {/* ABOUT INSTAPREPS */}
            <section>
              <h2 className="text-2xl font-semibold">About InstaprepsAi</h2>
              <p className="mt-3 text-lg">
                InstaprepsAi is an EdTech company and the creator of the world's first Confidence Learning Platform.
                Founded by alumni from IIT, NIT, and Super30, our mission is to help students preparing for competitive exams
                (like JEE, NEET, and Olympiads) build confidence and excel. We use AI-driven analytics, interactive performance
                feedback, and personalized mentoring to make high-quality education accessible to all.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a highly skilled iOS Developer Intern for a 1-month intensive sprint to build and refine
                the iOS version of our next-generation learning platform. The backend infrastructure and product concept
                are ready—your mission is to develop a functional, performant, and user-friendly iOS application.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role. You will implement core app features, integrate APIs,
                optimize performance, and ensure seamless usability on iOS devices.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li><strong>iOS App Development:</strong> Build, test, and deploy core mobile features using Swift or SwiftUI.</li>
                <li><strong>API Integration:</strong> Connect the app to backend services using RESTful APIs and handle data rendering efficiently.</li>
                <li><strong>UI Implementation:</strong> Convert Figma/UI mockups into pixel-perfect, responsive, and interactive iOS screens.</li>
                <li><strong>App Performance:</strong> Optimize app loading time, responsiveness, and memory management for smooth functionality.</li>
                <li><strong>State & Storage Management:</strong> Implement local data storage using CoreData/UserDefaults and manage app state.</li>
                <li><strong>Debugging & Testing:</strong> Identify bugs, run crash diagnostics, and write unit/UI tests to ensure reliability.</li>
                <li><strong>App Publishing Support:</strong> Assist in preparing the app for App Store guidelines, QA, and beta testing (TestFlight).</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, M.Tech, or related field at IIM.</li>
                <li>Strong programming skills in Swift or SwiftUI.</li>
                <li>Hands-on experience with Xcode, UIKit, SwiftUI, or Combine.</li>
                <li>Basic understanding of REST APIs, JSON, and app architecture (MVC/MVVM).</li>
                <li>Ability to write clean, structured, and optimized code.</li>
                <li>Ability to work independently and deliver under tight deadlines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Experience with Firebase, CoreMotion, or push notifications.</li>
                <li>Familiarity with App Store deployment, TestFlight, or app analytics.</li>
                <li>Knowledge of animations, gestures, or interactive UI components.</li>
                <li>A portfolio or GitHub showcasing previous iOS projects.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>High-impact project experience in building a real-world iOS application.</li>
                <li>Ownership of a complete app module from development to deployment.</li>
                <li>Collaboration with engineers, product designers, and AI teams.</li>
                <li>Opportunity to influence core app features for a widely used EdTech platform.</li>
              </ul>
            </section>

          </div>

          {/* APPLY BUTTON AT BOTTOM */}
          <div className="mt-12">
            <button
              onClick={handleApply}
              className="px-6 py-3 bg-[#6554e1] text-white text-lg rounded-4xl hover:bg-gray-700 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default IOSDeveloperIntern;
