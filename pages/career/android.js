import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const AndroidDeveloperIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Android Developer Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Android Developer Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Android Developer Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as an Android Developer Intern. Build and optimize Android apps for AI-driven learning platforms."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Android Developer Intern</h1>
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
                <strong>Position:</strong> Android Developer Intern <br/>
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
                (like JEE, NEET, and Olympiads) build confidence and excel. We use AI-driven insights, performance feedback,
                and interactive digital learning experiences to make quality mentorship accessible to all.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a highly skilled Android Developer Intern for a 1-month intensive sprint to help build
                and optimize the Android version of our AI-enabled learning platform. The backend and product concept
                are ready — your mission is to convert these into a fully functioning, responsive, and user-friendly Android application.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role responsible for implementing key app features, integrating APIs,
                optimizing performance, and delivering smooth user experiences across Android devices.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li><strong>Android App Development:</strong> Build and maintain core app features using Kotlin or Java.</li>
                <li><strong>API Integration:</strong> Connect app interfaces with backend services using REST APIs and WebSockets.</li>
                <li><strong>UI/UX Implementation:</strong> Convert Figma/Adobe XD mockups into interactive, responsive, and material design-compliant layouts.</li>
                <li><strong>App Performance Optimization:</strong> Improve app speed, memory usage, and responsiveness across devices.</li>
                <li><strong>State & Data Management:</strong> Implement local storage using Room, SharedPreferences, or SQLite.</li>
                <li><strong>Debugging & Testing:</strong> Identify bugs, write basic unit/UI tests, and ensure app reliability.</li>
                <li><strong>Deployment Support:</strong> Assist in preparing key features for Play Store readiness, analytics, and beta testing.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, M.Tech, or related field at IIM.</li>
                <li>Strong programming skills in Kotlin or Java.</li>
                <li>Hands-on experience with Android Studio, XML layouts, and Material Design guidelines.</li>
                <li>Basic understanding of REST APIs, JSON, Firebase, or MVVM/MVC design patterns.</li>
                <li>Ability to write clean, modular, and maintainable code.</li>
                <li>Ability to learn fast and deliver high-quality work under tight deadlines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Familiarity with Jetpack Compose, Coroutines, LiveData, or Retrofit.</li>
                <li>Experience with Firebase, push notifications, or in-app analytics.</li>
                <li>Knowledge of animations, gestures, and interactive UI elements.</li>
                <li>A portfolio or GitHub showcasing Android projects.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>High-impact opportunity to build a real-world Android application.</li>
                <li>Ownership of core app modules and product features.</li>
                <li>Collaboration with engineers, designers, and AI experts.</li>
                <li>Experience working on scalable, AI-driven EdTech platforms.</li>
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

export default AndroidDeveloperIntern;
