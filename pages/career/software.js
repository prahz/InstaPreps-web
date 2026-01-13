import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const SoftwareDevelopmentIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Software Development Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Software Development Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Software Development Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Software Development Intern. Build scalable software features, APIs, and high-performance modules for our AI-driven platform."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Software Development Intern</h1>
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
                <strong>Position:</strong> Software Development Intern <br/>
                <strong>Duration:</strong> 1 Month (Project-Based, Full-Time) <br/>
                <strong>Location:</strong> Mumbai (In-Office / Hybrid) <br/>
                <strong>Target:</strong> Exclusively for students enrolled at IIM
              </p>
            </section>

            {/* ABOUT INSTAPREPS */}
            <section>
              <h2 className="text-2xl font-semibold">About InstaprepsAi</h2>
              <p className="mt-3 text-lg">
                InstaprepsAi is an EdTech company and the creator of the world’s first Confidence Learning Platform.
                Founded by alumni from IIT, NIT, and Super30, our mission is to help students preparing for competitive exams
                build confidence and excel. We use AI-driven insights, deep analytics, and innovative digital experiences
                to make high-quality mentorship accessible to all.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are looking for a highly skilled Software Development Intern for a 1-month intensive sprint to help
                build scalable, high-performance features for our AI-enabled platform. The research and product vision are set — 
                your mission is to translate them into robust and efficient software modules.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role. You will be responsible for designing, building, testing, and optimizing
                core software components that power the platform’s performance, analytics, and user experience.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Feature Development: Implement core software features using clean, efficient, and modular code.</li>
                <li>Backend / Full-Stack Engineering: Work with Node.js, Python, Java, or similar to build APIs and business logic.</li>
                <li>Database & Integration: Contribute to data models, optimize database queries, and integrate systems.</li>
                <li>Code Optimization: Analyze performance bottlenecks and enhance scalability and reliability.</li>
                <li>Testing & Debugging: Write and run unit tests, debug critical issues, and improve stability.</li>
                <li>Cross-Team Collaboration: Work with frontend, AI, and product teams to deliver end-to-end functionality.</li>
                <li>Documentation: Maintain clean documentation for features, modules, and architecture decisions.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, M.Tech, or related field at IIM.</li>
                <li>Strong programming skills in Python, Java, C++, or JavaScript.</li>
                <li>Understanding of OOP concepts, data structures, and algorithms.</li>
                <li>Basic knowledge of databases, APIs, and software architecture principles.</li>
                <li>Ability to write clean, modular, and well-documented code.</li>
                <li>Ability to work independently and meet tight timelines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Familiarity with React, Node.js, Django, Flask, or Spring.</li>
                <li>Experience with SQL/NoSQL databases and REST APIs.</li>
                <li>Exposure to Git, CI/CD, Docker, or microservices architecture.</li>
                <li>A portfolio or GitHub showing past development projects.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>A high-impact role where you build real product features for live users.</li>
                <li>Opportunity to work closely with engineers, product managers, and AI teams.</li>
                <li>Exposure to real-world system design, coding standards, and product development.</li>
                <li>Ownership of key software components from development to deployment.</li>
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

export default SoftwareDevelopmentIntern;

