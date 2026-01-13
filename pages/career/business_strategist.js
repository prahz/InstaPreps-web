import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const BusinessStrategistIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Business Strategist Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Business Strategist Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Business Strategist Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Business Strategist Intern. Drive market research, strategy planning, and data-driven insights for our AI-enabled learning platform."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Business Strategist Intern</h1>
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
                <strong>Position:</strong> Business Strategist Intern <br/>
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
                Founded by alumni from IIT, NIT, and Super30, we help students preparing for exams like JEE, NEET, and Olympiads
                build confidence and excel. We leverage AI-driven analytics, personalized insights, and mentorship to make
                quality learning accessible to every learner.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a highly analytical and strategic Business Strategist Intern for a 1-month intensive sprint to
                support decision-making across product, market, and growth initiatives. The product and foundational research
                are completed — your mission is to analyze market dynamics, identify business opportunities, and propose
                strategic models that enhance product adoption and business scalability.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role, where you will work closely with founders and product teams to
                drive structured, insight-based decisions.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Market & Competitor Analysis: Research EdTech trends, competitor positioning, and identify whitespace opportunities.</li>
                <li>Strategy & Planning: Assist in shaping go-to-market strategies, pricing structures, and user acquisition models.</li>
                <li>User Segmentation & Insights: Analyze different learner categories, behavior clusters, and retention opportunities.</li>
                <li>Business Model Evaluation: Support in evaluating product monetization, scalability, and growth frameworks.</li>
                <li>Data-Driven Decision Support: Work on metrics such as CAC, retention, engagement, and LTV to support strategic planning.</li>
                <li>Presentation & Reporting: Prepare strategy briefs, business insight reports, and structured recommendation decks.</li>
                <li>Cross-Functional Collaboration: Work with marketing, product, and management teams to align strategy with business goals.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing a B.Tech, MBA, or related field at IIM.</li>
                <li>Strong analytical abilities with structured thinking and problem-solving skills.</li>
                <li>Basic understanding of business models, market analysis, or financial frameworks.</li>
                <li>Proficiency in Excel/Sheets for analysis (pivot tables, charts, basic modeling).</li>
                <li>Strong documentation and presentation skills.</li>
                <li>Ability to learn fast, think critically, and deliver under tight timelines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Exposure to consulting, entrepreneurship, or case competitions.</li>
                <li>Familiarity with business strategy frameworks like SWOT, Porter’s Five Forces, TAM-SAM-SOM.</li>
                <li>Experience in analytical tools (Power BI, Google Analytics, Notion) — basic level acceptable.</li>
                <li>A portfolio of strategy projects, research reports, or business case studies.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Exposure to strategic decision-making in a real-world EdTech startup environment.</li>
                <li>Opportunity to work directly with founders and product leaders.</li>
                <li>Hands-on experience in market research, business planning, and product strategy.</li>
                <li>Ownership of strategic deliverables influencing product direction.</li>
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

export default BusinessStrategistIntern;
