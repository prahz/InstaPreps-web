import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const MarketingIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Marketing Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Marketing Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Marketing Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Marketing Intern. Drive brand visibility, engagement, and growth for our AI-driven learning platform through campaigns, content, and strategy."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Marketing Intern</h1>
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
                <strong>Position:</strong> Marketing Intern <br/>
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
                like JEE, NEET, and Olympiads build confidence and excel. We leverage AI insights, personalized learning experiences,
                and interactive digital tools to make high-quality mentorship accessible to all.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a dynamic and creative Marketing Intern for a 1-month intensive sprint to help drive brand visibility,
                engagement, and digital growth for our learning platform. The product is built and active—your mission is to communicate
                its value through strategic content, campaigns, and user engagement initiatives.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role, where you will help shape campaigns, design messaging, analyze performance,
                and contribute to lead generation and brand positioning.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Content Ideation & Creation: Develop engaging content (posts, stories, videos, infographics, blogs) aligned with brand tone.</li>
                <li>Social Media Strategy: Assist in planning and executing campaigns on LinkedIn, Instagram, YouTube, and other platforms.</li>
                <li>Market & Competitor Research: Analyze trends, user needs, and competitor positioning to help fine-tune marketing strategies.</li>
                <li>Growth & Engagement Tracking: Monitor engagement metrics, reach, impressions, and campaign performance.</li>
                <li>Brand Messaging & Communication: Support in creating marketing collateral, pitch decks, and brand storytelling assets.</li>
                <li>Collaborate Across Teams: Work with design, product, and content teams to align messaging with product features.</li>
                <li>Experiment & Iterate: Run small growth experiments and gather insights to help optimize reach and engagement.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, MBA, B.Des, or related field at IIM.</li>
                <li>Strong communication and creative thinking skills.</li>
                <li>Basic experience or interest in digital marketing, branding, or content creation.</li>
                <li>Ability to understand user psychology, engagement patterns, and social media behavior.</li>
                <li>Comfortable working with tools like Canva, Excel, Google Sheets, or basic analytics dashboards.</li>
                <li>Ability to take ownership, learn quickly, and work under tight deadlines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Familiarity with digital marketing platforms (LinkedIn, Instagram, YouTube).</li>
                <li>Basic knowledge of SEO, email marketing, or performance analytics.</li>
                <li>Prior experience in campus marketing, clubs, startups, events, or promotions.</li>
                <li>A portfolio, blog, or examples of past content (if available).</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Hands-on exposure to real-world digital marketing and EdTech brand building.</li>
                <li>Opportunity to work on live campaigns and shape communication strategies.</li>
                <li>Collaboration with product, design, and strategic growth teams.</li>
                <li>Experience in data-driven marketing and user engagement strategies.</li>
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

export default MarketingIntern;
