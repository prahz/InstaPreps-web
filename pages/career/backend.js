import React from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";

const BackendEngineerIntern = () => {

  const handleApply = () => {
    const to = "hr@instaprepsai.com";
    const subject = encodeURIComponent("Application: Backend Engineer Intern");
    const body = encodeURIComponent("Hi Team,\n\nI would like to apply for the Backend Engineer Intern role.\n\nRegards,");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <div className="sm:w-[90%] m-auto w-full p-2">
        <Head>
          <title>Backend Engineer Intern | Instapreps AI</title>
          <meta
            name="description"
            content="Join InstaprepsAi as a Backend Engineer Intern. Work on scalable APIs, databases, microservices, and cloud infrastructure for AI-driven learning."
          />
        </Head>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h1 className="text-4xl font-bold">Backend Engineer Intern</h1>
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
                <strong>Position:</strong> Backend Engineer Intern <br/>
                <strong>Duration:</strong> 1 Month (Project-Based, Full-Time) <br/>
                <strong>Location:</strong> Mumbai (In-Office / Hybrid) <br/>
                <strong>Target:</strong> Exclusively for students enrolled at IIM
              </p>
            </section>

            {/* ABOUT INSTAPREPS */}
            <section>
              <h2 className="text-2xl font-semibold">About InstaprepsAi</h2>
              <p className="mt-3 text-lg">
                InstaprepsAi is an EdTech company and the creator of the world’s first “Confidence Learning Platform.”
                Founded by alumni from IIT, NIT, and Super30, we help students preparing for competitive exams
                (like JEE, NEET, and Olympiads) build confidence and excel. We use AI to provide deep analytics,
                personalized learning paths, and mentorship to make quality education accessible to all.
              </p>
            </section>

            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-3 text-lg">
                We are looking for a highly-skilled Backend Engineer Intern for a 1-month intensive sprint to help
                build and optimize a scalable and reliable backend infrastructure. Your mission is to convert existing
                product requirements into performant backend systems, APIs, and microservices.
              </p>
              <p className="mt-3 text-lg">
                You will handle database design, API development, performance optimization, and deployment.
                This is a high-impact, high-ownership role responsible for building core backend components
                that directly power our AI-driven learning experience.
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-semibold">Core Responsibilities</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li><strong>Develop Scalable APIs:</strong> Design, build, and optimize RESTful or GraphQL APIs using frameworks like FastAPI, Flask, or Node.js.</li>
                <li><strong>Database Design & Management:</strong> Architect, optimize, and manage relational and non-relational databases (PostgreSQL, MongoDB).</li>
                <li><strong>Microservices & Architecture:</strong> Develop modular, scalable backend services and integrate them using message queues (Kafka, RabbitMQ).</li>
                <li><strong>Cloud Deployment:</strong> Deploy, monitor, and manage applications on cloud platforms (AWS, GCP, Azure) using Docker and CI/CD pipelines.</li>
                <li><strong>Security & Authentication:</strong> Implement JWT/OAuth-based authentication, access control, and data security measures.</li>
                <li><strong>Performance Optimization:</strong> Analyze bottlenecks and optimize backend performance, scalability, logging, and error handling.</li>
                <li><strong>Collaborative Development:</strong> Work closely with frontend, AI, and product teams to integrate backend solutions into the main platform.</li>
              </ul>
            </section>

            {/* REQUIRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Currently pursuing B.Tech/M.Tech/Ph.D. in Computer Science or a related field at IIM.</li>
                <li>Strong programming skills in Python, Java, or Node.js.</li>
                <li>Hands-on experience with backend frameworks (FastAPI, Flask, Express, Django).</li>
                <li>Solid understanding of REST API design, database systems, and basic cloud concepts.</li>
                <li>Strong debugging skills and ability to write clean, modular, and scalable code.</li>
                <li>Ability to work independently, learn fast, and deliver under tight deadlines.</li>
              </ul>
            </section>

            {/* PREFERRED QUALIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold">Preferred Qualifications (Nice to Have)</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Experience with AWS or GCP (EC2, Lambda, S3, Firebase, etc.).</li>
                <li>Familiarity with Docker, Kubernetes, or CI/CD.</li>
                <li>Knowledge of caching, WebSockets, and real-time systems.</li>
                <li>A portfolio or GitHub demonstrating backend or system design projects.</li>
              </ul>
            </section>

            {/* WHAT WE OFFER */}
            <section>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
                <li>Ownership of a real-world backend architecture project.</li>
                <li>Direct experience working with scalable infrastructure and real-time platforms.</li>
                <li>Mentorship and collaboration with experienced engineers and AI experts.</li>
                <li>A competitive internship stipend.</li>
                <li>Opportunity to work with our core engineering team in Mumbai.</li>
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

export default BackendEngineerIntern;
