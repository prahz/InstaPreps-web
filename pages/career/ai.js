import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const AIIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: AI Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the AI Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>AI Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as an AI Intern. Work on NLP, recommendation systems, ML models, and data-driven intelligent learning experiences."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">AI Intern</h1>
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
                <strong>Position:</strong> AI Intern <br/>
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
                JEE, NEET, and Olympiads build confidence and excel. We leverage AI-driven insights, personalized
                analytics, and behavior-based learning models to make world-class mentorship accessible to every learner.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are looking for a highly skilled and research-driven AI Intern for a 1-month intensive sprint to help
                develop the next generation of AI-powered features for our platform. The core concept and product data are
                ready. Your mission is to apply AI techniques such as NLP, recommendation systems, or behavioral analytics
                to create intelligent user experiences.
              </p>
              <p className="mt-3 text-lg">
                This is a high-impact, high-ownership role where you will help implement, fine-tune, and validate AI
                systems that enhance learning outcomes and boost user engagement.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li><strong>AI Feature Development:</strong> Design and prototype AI models for personalization, recommendations, insights, or content analytics.</li>
                <li><strong>Data Handling & Pipelines:</strong> Clean, preprocess, and structure user behavior data for modeling.</li>
                <li><strong>Model Training & Optimization:</strong> Implement baseline ML models and tune for accuracy and performance.</li>
                <li><strong>NLP & Text Analytics:</strong> Work on question analysis, doubt-solving systems, or feedback engines.</li>
                <li><strong>AI Integration:</strong> Collaborate with engineers to package ML models into user-facing features.</li>
                <li><strong>Evaluation & Testing:</strong> Conduct validation, benchmarking, and error analysis.</li>
                <li><strong>Research & Documentation:</strong> Explore new AI techniques and maintain technical documentation.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech, M.Tech, or related field at IIM.</li>
                <li>Strong programming skills in Python (NumPy, Pandas, Scikit-learn).</li>
                <li>Understanding of ML concepts such as classification, regression, metrics, and preprocessing.</li>
                <li>Basic familiarity with NLP, recommender systems, or AI applications.</li>
                <li>Ability to learn quickly, experiment, and deliver under tight deadlines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Experience with TensorFlow, PyTorch, Hugging Face, or Firebase ML.</li>
                <li>Knowledge of MLOps, model deployment, or API integrations.</li>
                <li>Familiarity with EdTech, behavioral analytics, or personalized learning.</li>
                <li>GitHub or portfolio showing past ML or AI projects.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Opportunity to build real-world AI features impacting learners.</li>
                <li>Collaboration with product, engineering, and AI strategy teams.</li>
                <li>Exposure to behavioral AI, analytics, and scalable ML architectures.</li>
                <li>Ownership of an AI-driven feature from prototype to implementation.</li>
              </ul>
            </section>

          </div>

          {/* APPLY BUTTON AGAIN AT BOTTOM */}
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

export default AIIntern;
