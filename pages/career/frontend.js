import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const FrontendEngineerIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Frontend Engineer Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Frontend Engineer Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Frontend Engineer Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Frontend Engineer Intern. Build responsive and interactive UI components for AI-driven learning platforms."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Frontend Engineer Intern</h1>
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
                <strong>Position:</strong> Frontend Engineer Intern <br/>
                <strong>Duration:</strong> 1 Month (Project-Based, Full-Time) <br/>
                <strong>Location:</strong> Mumbai (In-Office / Hybrid) <br/>
                <strong>Target:</strong> Exclusively for students enrolled at IIM
              </p>
            </section>

            {/* ABOUT INSTAPREPS */}
            <section>
              <h2 className="text-2xl font-semibold">About InstaprepsAi</h2>
              <p className="mt-3 text-lg">
                InstaprepsAi is an EdTech company and the creator of the world's first "Confidence Learning Platform."
                Founded by alumni from IIT, NIT, and Super30, our mission is to help students preparing for competitive exams
                (like JEE, NEET, and Olympiads) build confidence and excel. We use AI to provide detailed analytics,
                personalized learning interfaces, and interactive experiences, making quality education and mentorship accessible to all.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are looking for a highly skilled Frontend Engineer Intern for a 1-month intensive sprint to help build
                a next-generation interactive learning platform. The product concept and backend foundation are ready—your
                mission is to take these components and build a fully functional frontend experience.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role where you will be the primary engineer responsible for implementing
                responsive UI components, integrating APIs, optimizing performance, and delivering a smooth user experience
                across web and mobile.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li><strong>Build UI Components:</strong> Develop clean, modern, responsive interfaces using React.js, Next.js, or similar frameworks.</li>
                <li><strong>API Integration:</strong> Connect frontend applications to backend services using RESTful APIs and WebSockets.</li>
                <li><strong>Performance Optimization:</strong> Improve loading speed, interactivity, accessibility, and overall frontend performance.</li>
                <li><strong>State Management:</strong> Implement effective state handling using Redux, Zustand, or Context API.</li>
                <li><strong>Design Collaboration:</strong> Convert Figma or UI/UX mockups into functional, pixel-perfect live interfaces.</li>
                <li><strong>Cross-Browser and Mobile Compatibility:</strong> Ensure seamless functionality across devices and browsers.</li>
                <li><strong>Testing & Debugging:</strong> Implement basic unit/UI testing and fix frontend issues for a stable product release.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, M.Tech, or related field at IIM.</li>
                <li>Strong programming skills in JavaScript and TypeScript.</li>
                <li>Proficient in modern frontend frameworks (React.js, Next.js, Vue.js).</li>
                <li>Hands-on experience working with TailwindCSS, Bootstrap, or styled-components.</li>
                <li>Understanding of REST APIs, JSON, and basic UI testing.</li>
                <li>Ability to learn fast, work independently, and deliver high-quality code under tight deadlines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Familiarity with performance optimization, animations, or advanced UI interactions.</li>
                <li>Experience with Figma or Adobe XD for design-to-code alignment.</li>
                <li>Basic understanding of deployment using Vercel, Netlify, or Firebase.</li>
                <li>A portfolio (e.g., GitHub, personal website) showcasing frontend projects.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>A high-impact, intensive project where you will own a complete frontend product journey—from UI to deployment.</li>
                <li>Direct experience working on real-world, AI-driven EdTech frontend systems.</li>
                <li>Exposure to scalable architecture, real-user behavior, and design implementation.</li>
                <li>Opportunity to collaborate directly with our core team in Mumbai.</li>
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

export default FrontendEngineerIntern;
