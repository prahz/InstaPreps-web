import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const BusinessAnalystIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Business Analyst Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Business Analyst Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Business Analyst Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Business Analyst Intern. Analyze data, build dashboards, research user behavior, and drive strategic product insights."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Business Analyst Intern</h1>
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
                <strong>Position:</strong> Business Analyst Intern <br/>
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
                Founded by alumni from IIT, NIT, and Super30, our mission is to help students preparing for competitive
                exams (like JEE, NEET, and Olympiads) build confidence and excel. We use AI-driven insights, deep
                performance analytics, and personalized learning strategies to make quality mentorship accessible to all.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a highly analytical Business Analyst Intern for a 1-month intensive sprint to support
                data-driven product decision-making. The core product and backend systems are live — your mission is
                to analyze user behavior, identify growth opportunities, build dashboards, and drive strategic insights.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role. You will act as the bridge between product, data, engineering,
                and business teams — helping us understand user engagement, feature effectiveness, and market opportunities.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li><strong>Data Analysis & Insights:</strong> Analyze platform data to extract trends on user engagement, retention, and performance.</li>
                <li><strong>Dashboards & Reporting:</strong> Create dashboards using tools like Excel, Sheets, or Power BI to track product KPIs.</li>
                <li><strong>Business Research:</strong> Conduct market research and competitor benchmarking to identify product and growth strategies.</li>
                <li><strong>User Behavior Analysis:</strong> Study student learning patterns, usage journeys, and drop-off points to improve product experience.</li>
                <li><strong>Feature Impact Assessment:</strong> Evaluate how new feature launches impact user behavior, satisfaction, and adoption.</li>
                <li><strong>Cross-Functional Collaboration:</strong> Work with product, marketing, and engineering teams to convert insights into actionable improvements.</li>
                <li><strong>Documentation & Presentations:</strong> Prepare structured reports, business briefs, and insights decks for leadership discussions.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, MBA, or related field at IIM.</li>
                <li>Strong analytical and problem-solving mindset.</li>
                <li>Proficiency in Excel/Google Sheets (data filtering, pivot tables, basic formulas).</li>
                <li>Ability to interpret numbers, trends, and user behavior logically.</li>
                <li>Good communication and documentation skills.</li>
                <li>Ability to work independently and deliver under tight timelines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Basic exposure to SQL, Power BI, Tableau, or Google Analytics.</li>
                <li>Interest in EdTech, product strategy, or digital growth analytics.</li>
                <li>Prior experience in data-driven roles (business clubs, projects, competitions, etc.).</li>
                <li>A structured approach to documenting and presenting insights.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Real-world exposure to business, product, and data strategy in a fast-growing startup.</li>
                <li>Opportunity to work directly with founders, product managers, and business leaders.</li>
                <li>Hands-on experience in turning insights into measurable product outcomes.</li>
                <li>Ownership of research, dashboards, and strategic impact experiments.</li>
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

export default BusinessAnalystIntern;
