import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const ConsultingIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Consulting Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Consulting Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Consulting Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Consulting Intern. Drive research, strategy, and structured insights to improve product, business, and operational efficiency in a fast-paced EdTech startup."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Consulting Intern</h1>
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
                <strong>Position:</strong> Consulting Intern <br/>
                <strong>Duration:</strong> 1 Month (Project-Based, Full-Time) <br/>
                <strong>Location:</strong> Mumbai (In-Office / Hybrid) <br/>
                <strong>Target:</strong> Exclusively for students enrolled at IIM
              </p>
            </section>

            {/* ABOUT INSTAPREPS */}
            <section>
              <h2 className="text-2xl font-semibold">About InstaprepsAi</h2>
              <p className="mt-3 text-lg">
                InstaprepsAi is the creator of the world’s first Confidence Learning Platform, designed to help students
                preparing for exams like JEE, NEET, and Olympiads build academic confidence using AI-driven behavioral
                analysis, personalized feedback, and strategic preparation guidance. Founded by alumni from IIT, NIT, and
                Super30, InstaprepsAi transforms learning through analytics, mentorship, and emotional readiness.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are hiring a Consulting Intern for a 1-month intensive sprint to help analyze strategic problems,
                structure insights, and design solutions that improve product, business, and operational efficiency. This
                role sits at the intersection of problem-solving, data analysis, product thinking, and business strategy.
              </p>
              <p className="mt-3 text-lg">
                You will work closely with founding members to define problem statements, gather insights, create frameworks,
                and propose actionable recommendations that inform decision-making across product, partnerships, operations,
                and growth.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role focused on thinking deeply, communicating clearly, and solving structurally.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Break down ambiguous problems into structured frameworks, hypotheses, and analytical insights.</li>
                <li>Conduct research on industry, competition, customer needs, pricing models, and market opportunities.</li>
                <li>Analyze data to derive actionable recommendations related to product, growth, or operations.</li>
                <li>Design strategic reports, decision frameworks, and process improvements for key business areas.</li>
                <li>Support cross-functional teams by aligning stakeholders on strategy, execution, and expected outcomes.</li>
                <li>Prepare research decks, insight reports, and structured presentations for leadership discussions.</li>
                <li>Translate consulting-style insights into product-level or business-level actionable solutions.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, MBA, or related discipline at IIM.</li>
                <li>Strong analytical, problem-structuring, and logical reasoning skills.</li>
                <li>Familiarity with research methods, market analysis, or strategic frameworks (basic acceptable).</li>
                <li>Proficiency in PowerPoint/Google Slides and Excel/Sheets.</li>
                <li>Excellent communication and presentation abilities.</li>
                <li>Ability to work independently in fast-moving, insight-driven environments.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Exposure to consulting clubs, case competitions, strategy internships, or entrepreneurship.</li>
                <li>Familiarity with frameworks like SWOT, Porter’s Five Forces, TAM-SAM-SOM, or growth levers.</li>
                <li>Experience building structured decks, insight reports, or process improvement models.</li>
                <li>Ability to convert research findings into actionable steps.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Real-world consulting exposure in a fast-paced EdTech startup environment.</li>
                <li>Opportunity to work directly with leadership on strategic and product-impact decisions.</li>
                <li>Experience in transforming analysis into execution-focused insights.</li>
                <li>Ownership of structured recommendations that directly impact product and business strategy.</li>
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

export default ConsultingIntern;
