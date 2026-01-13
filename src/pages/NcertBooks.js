import React, { useState } from "react";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";
import PdfModal from "../components/PdfModal";
import ncertData from "../data/ncertData";
import VerticalSidebar from "src/components/VerticalSidebar";

export default function NcertBooks() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Class 10 NCERT Books | InstaprepsAi</title>
        <meta
          name="description"
          content="Access Class 10 NCERT books for English, Maths, Science, Social Science, and Hindi with InstaprepsAi."
        />
      </Head>

      {/* HEADER */}
      {/* <Header /> */}
      <VerticalSidebar/>

      {/* PAGE CONTENT */}
      <div className="sm:w-[90%] m-auto w-full p-6 mt-20 mb-16">
        <h1 className="text-3xl font-bold mb-6">Class 10 NCERT Books</h1>

        {["english", "maths", "Social_Science", "Science", "Hindi"].map(subject => (
          <div key={subject} className="mb-6">
            <h2 className="text-2xl font-semibold capitalize mb-2">
              {subject.replace("_", " ")}
            </h2>

            <div className="ml-4">
              {ncertData.class10[subject].map((book, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPdf(book.file)}
                  className="block text-left py-1 text-blue-600 hover:underline"
                >
                  {book.name}
                </button>
              ))}
            </div>
          </div>
        ))}

        {selectedPdf && (
          <PdfModal
            pdf={selectedPdf}
            onClose={() => setSelectedPdf(null)}
          />
        )}
      </div>
      <div className="sm:w-[90%] m-auto w-full p-6 mt-20 mb-16">
        <h1 className="text-3xl font-bold mb-6">Class 12 NCERT Books</h1>

        {[ "maths_1"].map(subject => (
          <div key={subject} className="mb-6">
            <h2 className="text-2xl font-semibold capitalize mb-2">
              {subject.replace("_", " ")}
            </h2>

            <div className="ml-4">
              {ncertData.class12[subject].map((book, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPdf(book.file)}
                  className="block text-left py-1 text-blue-600 hover:underline"
                >
                  {book.name}
                </button>
              ))}
            </div>
          </div>
        ))}

        {selectedPdf && (
          <PdfModal
            pdf={selectedPdf}
            onClose={() => setSelectedPdf(null)}
          />
        )}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
