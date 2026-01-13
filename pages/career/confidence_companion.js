import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const ConfidenceCompanionIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Confidence Companion Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Confidence Companion Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Confidence Companion Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Confidence Companion Intern. Mentor and motivate learners, track progress, and provide confidence-building support for JEE, NEET, and Olympiad students."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Confidence Companion Intern</h1>
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
                <strong>Position:</strong> Confidence Companion Intern <br/>
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
                like JEE, NEET, and Olympiads build confidence and excel. We use AI-driven insights, behavioral tracking,
                and personalized mentorship to help learners not just prepare — truly feel confident.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are looking for empathetic, communication-focused, and motivational Confidence Companion Interns
                for a 1-month intensive sprint to support students during their preparation journey. This role focuses
                on mentoring, confidence-building, structured guidance, and tracking learning progress.
              </p>
              <p className="mt-3 text-lg">
                You will work closely with students, monitor their progress, help manage learning routines, and emotionally
                support them through structured feedback, confidence-building sessions, and motivation tracking.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Learner Support & Motivation: Interact with students to address stress, exam anxiety, confidence gaps, and motivation issues.</li>
                <li>Progress Monitoring: Track learning behavior, progress patterns, and performance consistency using structured trackers.</li>
                <li>Weekly Check-ins: Conduct structured calls/messages to help students set study goals, weekly milestones, and deadlines.</li>
                <li>Confidence Feedback Sessions: Provide actionable feedback to help students identify strengths, weaknesses, and improvement paths.</li>
                <li>Build Trust & Accountability: Encourage routines, build exam discipline, and act as a motivational anchor for learners.</li>
                <li>Behavioral Insight Reporting: Share feedback with product and AI teams on learner psychological and motivational trends.</li>
                <li>Communication & Documentation: Maintain structured logs of student interactions, support patterns, and emotional progress.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing MBA, or related discipline at IIM.</li>
                <li>Strong communication, empathy, and guidance skills.</li>
                <li>Ability to hold meaningful, motivating conversations with learners.</li>
                <li>Organized and responsible mindset with good documentation habits.</li>
                <li>Interest in mentorship, psychology, learning behavior, or personal development.</li>
                <li>Ability to work independently with responsibility and maturity.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Experience in mentorship (clubs, hostel, peer tutoring, academic support, or counseling teams).</li>
                <li>Familiarity with EdTech, study planning, or exam preparation strategies.</li>
                <li>Ability to understand student stress, performance anxiety, or procrastination patterns.</li>
                <li>Prior experience handling student support, academics, or counseling.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Real-world mentorship experience with actual learners preparing for JEE/NEET/Olympiads.</li>
                <li>Exposure to behavioral psychology, confidence building, and learner motivation frameworks.</li>
                <li>Opportunity to work closely with design, AI, and product psychology teams.</li>
                <li>High-impact role where your guidance directly affects student success.</li>
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

export default ConfidenceCompanionIntern;
