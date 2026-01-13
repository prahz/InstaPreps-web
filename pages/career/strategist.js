import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const StrategyOperationsIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Strategy and Operations Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Strategy and Operations Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Strategy and Operations Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Strategy and Operations Intern. Work on business optimization, process design, execution planning, and operational efficiency."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Strategy and Operations Intern</h1>
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
                <strong>Position:</strong> Strategy and Operations Intern <br/>
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
                Founded by alumni from IIT, NIT, and Super30, our mission is to help students preparing for JEE, NEET,
                and Olympiads build confidence and excel. We leverage AI-based behavioral insights, personalized analytics,
                and structured mentorship to make high-quality learning and guidance accessible for everyone.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a highly analytical and organized Strategy and Operations Intern for a 1-month intensive
                sprint to support business optimization, process design, execution planning, and operational efficiency.
                The infrastructure and product model are ready — your mission is to streamline execution, drive strategic
                insights, and support key operational initiatives.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role. You will work closely with founders and core teams to help shape
                business decisions, optimize workflows, and support execution strategies.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li><strong>Strategic Planning Support:</strong> Assist in designing operational plans, execution roadmaps, and cross-team coordination frameworks.</li>
                <li><strong>Process Analysis & Optimization:</strong> Evaluate existing workflows, identify inefficiencies, and suggest process improvements.</li>
                <li><strong>Operational Metrics Tracking:</strong> Monitor KPIs like efficiency, cost, productivity, and turnaround time.</li>
                <li><strong>Internal Coordination:</strong> Collaborate with product, marketing, AI, and sales teams to ensure operational alignment and timely execution.</li>
                <li><strong>Structured Documentation:</strong> Build project trackers, process flow documents, dashboards, and reporting templates.</li>
                <li><strong>Market & Growth Insight Analysis:</strong> Research business models, EdTech trends, and propose operational strategies for scale.</li>
                <li><strong>Presentation & Reporting:</strong> Prepare clear and structured insight decks for strategy meetings and leadership reviews.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing MBA or related discipline at IIM.</li>
                <li>Strong analytical skills with structured problem-solving abilities.</li>
                <li>Proficiency in Excel/Sheets (pivot tables, formulas, basic tracking).</li>
                <li>Strong organizational and documentation capabilities.</li>
                <li>Ability to work independently, handle complexity, and maintain clarity under deadlines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Basic exposure to business operations, consulting, or project management.</li>
                <li>Familiarity with tools like Notion, Trello, Power BI, or Google Analytics.</li>
                <li>Prior experience in campus initiatives, operations teams, events, or clubs.</li>
                <li>Knowledge of frameworks like OKRs, SWOT, or process flow mapping (basic acceptable).</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Real-world exposure to business operations, strategy execution, and workflow management.</li>
                <li>Opportunity to work directly with leadership teams across functions.</li>
                <li>Experience in scaling operational structures in a fast-growing EdTech startup.</li>
                <li>High ownership in process optimization and strategic planning initiatives.</li>
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

export default StrategyOperationsIntern;
