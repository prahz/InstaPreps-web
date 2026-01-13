import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const BusinessDevelopmentIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Business Development Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Business Development Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Business Development Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Business Development Intern. Work on partnerships, B2B/B2C growth, lead generation, and strategic market expansion."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Business Development Intern</h1>
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
                <strong>Position:</strong> Business Development Intern <br/>
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
                Founded by alumni from IIT, NIT, and Super30, our mission is to help students preparing for exams like
                JEE, NEET, and Olympiads build confidence and excel. We leverage AI-based analytics, personalized
                insights, and performance tracking to make high-quality mentorship accessible to all learners.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a highly dynamic and communication-driven Business Development Intern for a 1-month
                intensive sprint to help build strategic partnerships, explore B2B and B2C growth opportunities, and
                accelerate student reach. The product foundation is established — your mission is to drive expansion
                through networking, lead research, collaboration, and relationship building.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role focused on scaling reach, strengthening partnerships, and
                supporting strategic market entry.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li><strong>Lead Generation & Outreach:</strong> Identify potential partners such as schools, coaching institutes, educators, and student communities.</li>
                <li><strong>Partnership Development:</strong> Support in pitching InstaprepsAi’s value proposition to collaborators, mentors, and academic institutions.</li>
                <li><strong>Growth & Expansion Strategy:</strong> Work with the core team to plan outreach campaigns and student acquisition drives.</li>
                <li><strong>Market Mapping:</strong> Research competitive offerings, distribution channels, and collaboration opportunities across EdTech.</li>
                <li><strong>Relationship Management:</strong> Assist in managing partnerships, tracking progress, and maintaining communication.</li>
                <li><strong>Strategic Communication:</strong> Contribute to presentations, partnership decks, product demos, and collaboration proposals.</li>
                <li><strong>Cross-Team Collaboration:</strong> Coordinate with marketing, strategy, and product teams to align outreach with brand goals.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, MBA, or related field at IIM.</li>
                <li>Strong communication, networking, and presentation skills.</li>
                <li>Analytical mindset with ability to understand business expansion strategies.</li>
                <li>Basic understanding of BD processes, pipeline tracking, and outreach.</li>
                <li>Comfortable working with Sheets, Docs, or PowerPoint for tracking and reporting.</li>
                <li>Ability to work independently and adapt to fast-paced project timelines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Experience in event organization, campus marketing, or club leadership.</li>
                <li>Familiarity with LinkedIn, cold outreach, or email marketing tools.</li>
                <li>Exposure to business pitch decks, fundraising, or sales strategy (basic level acceptable).</li>
                <li>A portfolio or examples of previous BD initiatives (if available).</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Real-world exposure to startup growth, partnerships, and outreach strategy.</li>
                <li>Opportunity to work directly with founders and growth strategists.</li>
                <li>Hands-on experience in expansion strategy, communication, and lead engagement.</li>
                <li>Ownership of partnership-building initiatives with measurable outcomes.</li>
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

export default BusinessDevelopmentIntern;
