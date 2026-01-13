import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const SocialMediaIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Social Media Manager Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Social Media Manager Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Social Media Manager Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Social Media Manager Intern. Build brand visibility, engagement, and community through creative digital storytelling across platforms."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Social Media Manager Intern</h1>
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
                <strong>Position:</strong> Social Media Manager Intern <br/>
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
                like JEE, NEET, and Olympiads build confidence and excel. We use AI-driven insights, personalized learning paths,
                and digital engagement tools to make quality mentorship accessible to all.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a highly creative Social Media Manager Intern for a 1-month intensive sprint to build our social media presence,
                improve brand visibility, and increase engagement with learners. The product and brand positioning are ready — your mission
                is to communicate them creatively through compelling digital content and community engagement.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role where you will manage content strategy, audience engagement, and digital brand storytelling
                across multiple platforms.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Content Planning & Strategy: Develop platform-specific strategies for LinkedIn, Instagram, YouTube, and Twitter (X).</li>
                <li>Content Creation Support: Ideate and help create social media posts, reels, carousels, infographics, and video scripts.</li>
                <li>Community Engagement: Respond to comments, interact with student communities, and boost engagement organically.</li>
                <li>Trend & Hashtag Research: Identify trending formats, educational niches, and social media opportunities.</li>
                <li>Analytics & Performance Tracking: Track post reach, impressions, engagement rates, and share insights for improvement.</li>
                <li>Brand Storytelling: Transform product features into compelling stories, testimonials, and user-value narratives.</li>
                <li>Cross-Team Collaboration: Coordinate with design, marketing, and product teams for content alignment and campaigns.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing MBA, or relevant discipline at IIM.</li>
                <li>Strong communication and creative storytelling skills.</li>
                <li>Basic understanding of social media platforms and content trends.</li>
                <li>Familiarity with Canva, Figma, or basic content editing tools.</li>
                <li>Ability to think analytically, track data, and optimize content.</li>
                <li>Ability to work independently and deliver under time-bound projects.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Experience with campus clubs, event promotions, or Instagram/LinkedIn page handling.</li>
                <li>Understanding of post scheduling, engagement tracking, or content performance analysis.</li>
                <li>Interest in EdTech, branding, or community building.</li>
                <li>A portfolio or examples of past content (if available).</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Real-world exposure to social media strategy and brand building.</li>
                <li>Opportunity to manage digital campaigns and build community engagement.</li>
                <li>Collaboration with product, design, and growth strategy teams.</li>
                <li>Experience in storytelling, analytics, and digital marketing execution.</li>
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

export default SocialMediaIntern;
