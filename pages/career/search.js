import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";
import VerticalSidebar from "src/components/VerticalSidebar";

const jobs = [
  {
    title: "Frontend Developer",
    team: "Engineering",
    location: "Remote",
    link: "/careers/frontend"
  },
  {
    title: "Backend Developer",
    team: "Engineering",
    location: "Mumbai, India",
    link: "/careers/backend"
  },
  {
    title: "AI",
    team: "AI & Content",
    location: "Remote",
    link: "/careers/ai"
  },
  {
    title: "Strategy and operations",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/strategist"
  },
  {
    title: "Forward Deployed Engineering",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/fde"
  },
  {
    title: "Product Management",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/pm"
  },
  {
    title: "Software developer",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/software"
  },
  {
    title: "IOS",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/ios"
  },
  {
    title: "Business_Development",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/business_development"
  },
  {
    title: "Business_Analyst",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/business_analyst"
  },
  {
    title: "Business_Strategist",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/business_strategist"
  },
  {
    title: "Android",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/android"
  },
  {
    title: "Consulting",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/consulting"
  },
  {
    title: "Marketing",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/marketing"
  },
  {
    title: "Social Media",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/social_media"
  },
  {
    title: "Confidence companion",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/confidence_companion"
  },
  {
    title: "Digital Design",
    team: "Growth",
    location: "Mumbai, India",
    link: "/careers/digital_design"
  }
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers at InstaprepsAI</title>
      </Head>
      {/* <Header /> */}
      <VerticalSidebar/>
      <div className="min-h-screen px-6 md:px-16 py-20">
        <h1 className="text-5xl pl-6 font-semibold mb-10">Careers at InstaprepsAI</h1>

        <div className="flex justify-between pl-6 items-center mb-10 text-gray-600">
          <p>{jobs.length} open roles</p>
          <div className="flex gap-6">
            <select className="border p-2 rounded-xl">
              <option>All teams</option>
              <option>Engineering</option>
              <option>AI & Content</option>
              <option>Growth</option>
            </select>
            <select className="border p-2 rounded-xl">
              <option>All locations</option>
              <option>Remote</option>
              <option>Mumbai, India</option>
            </select>
          </div>
        </div>

        <div className="space-y-10">
          {jobs.map((job, index) => (
            <div key={index} className="flex justify-between pl-6 items-start border-b pb-6">
              <div>
                <Link href={job.link} className="text-xl font-medium hover:underline">
                  {job.title}
                </Link>
                <p className="text-gray-600 text-sm mt-1">{job.team}</p>
                <p className="text-gray-600 text-sm">{job.location}</p>
              </div>
              <Link href={job.link} className="text-blue-600 hover:underline text-sm">
                Apply now ↗
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
