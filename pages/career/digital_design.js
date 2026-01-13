import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const DigitalDesignIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Digital Design Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Digital Design Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Digital Design Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Digital Design Intern. Create UI/UX designs, dashboards, and interactive digital experiences for our AI-driven learning platform."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Digital Design Intern</h1>
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
                <strong>Position:</strong> Digital Design Intern <br/>
                <strong>Duration:</strong> 1 Month (Project-Based, Full-Time) <br/>
                <strong>Location:</strong> Mumbai (In-Office / Hybrid) <br/>
                <strong>Eligibility:</strong> Exclusively for students enrolled at IIM
              </p>
            </section>

            {/* ABOUT INSTAPREPS */}
            <section>
              <h2 className="text-2xl font-semibold">About InstaprepsAi</h2>
              <p className="mt-3 text-lg">
                InstaprepsAi is an EdTech company and the creator of the world’s first Confidence Learning Platform.
                Founded by alumni from IIT, NIT, and Super30, our mission is to help students preparing for competitive exams
                build confidence and excel through deep performance analytics, personalized learning, and mentorship —
                making quality education truly accessible.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are seeking a passionate and creative Digital Design Intern to help design intuitive, interactive,
                and visually compelling digital experiences for our platform. You will collaborate with product, tech,
                and marketing teams to craft UI/UX designs, dashboards, mobile screens, and digital assets that enhance
                user engagement and usability.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Design modern and user-centric UI layouts, dashboards, and mobile app screens using Figma or Adobe XD.</li>
                <li>Create wireframes, low/high-fidelity prototypes, and interactive user flows for product features.</li>
                <li>Develop visual assets, including icons, illustrations, banners, and branding elements.</li>
                <li>Collaborate with product teams to align designs with user needs, platform goals, and brand guidelines.</li>
                <li>Conduct basic usability testing, collect feedback, and iterate design solutions accordingly.</li>
                <li>Contribute to maintaining and evolving the design system, component library, and style guidelines.</li>
                <li>Design UI/UX for AI-driven features, performance analytics, and interactive learning tools.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing MBA or relevant discipline at IIM (Design/Interdisciplinary fields accepted).</li>
                <li>Proficiency in Figma, Adobe XD, Illustrator, or Photoshop.</li>
                <li>Strong understanding of UI/UX fundamentals, typography, layout, and color theory.</li>
                <li>Ability to translate ideas into clean, user-friendly interfaces and prototypes.</li>
                <li>Strong creativity, visual thinking, and attention to detail.</li>
                <li>Ability to work independently, meet deadlines, and adapt to design feedback.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Knowledge of design systems, motion graphics, or micro-interactions.</li>
                <li>Basic understanding of HTML/CSS for design handoff.</li>
                <li>Familiarity with designing for EdTech, dashboards, or mobile-first products.</li>
                <li>A portfolio (Figma/Behance/Dribbble) showcasing UI/UX or digital product design work.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Opportunity to work on real-world digital design projects that impact user experience.</li>
                <li>Collaboration with experienced product designers, engineers, and AI experts.</li>
                <li>Creative and high-autonomy environment for experimentation and innovation.</li>
                <li>Hands-on experience in designing for AI-based educational platforms.</li>
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

export default DigitalDesignIntern;
