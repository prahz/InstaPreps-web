// pages/lasttestsreports.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import Header from "src/components/header";
import Footer from "src/components/footer";
import VerticalSidebar from "src/components/VerticalSidebar";

const Report = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const report = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/report/3017/get_last_5_report`
      );

      // API shape may differ — assume response.data.data is an array of reports
      const dataa = response.data?.data ?? [];

      // If the API returns an array, store the first id (if present) under a consistent key.
      if (Array.isArray(dataa) && dataa.length > 0) {
        // store id of first report as a fallback
        localStorage.setItem("report_id", String(dataa[0].id ?? ""));
      } else if (dataa && typeof dataa === "object" && dataa.id) {
        // If API returns single object
        localStorage.setItem("report_id", String(dataa.id));
      }

      setData(dataa);
    } catch (err) {
      console.error("Failed to fetch reports", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Run once on mount (not on every render)
  useEffect(() => {
    report();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <Header /> */}
      <VerticalSidebar/>
      <div className="flex flex-col items-center justify-center mt-10 mb-12">
        {loading ? (
          <p className="text-center mt-4">Loading report...</p>
        ) : data && data.length > 0 ? (
          data.map((item, index) => {
            const key = item.id ?? index;
            // Defensive values in case some fields are missing
            const subjectName = item.subject_name ?? "Untitled Subject";
            const testName = item.test_name ?? "Test";
            const updatedAt = item.updated_at ? new Date(item.updated_at) : null;
            const formattedDate = updatedAt
              ? `${updatedAt.getDate()}-${updatedAt.toLocaleString("en-US", {
                  month: "long",
                })}-${updatedAt.getFullYear()}, ${updatedAt.toLocaleDateString("en-US", {
                  weekday: "long",
                })}`
              : "";

            // Score fallback (ensure numeric)
            const cbaScore = Number(item.cba_score) || 0;
            const standardScore = Number(item.standard_score) || 0;

            return (
              <div
                key={key}
                className="flex justify-center mt-6"
                aria-label={`report-card-${key}`}
              >
                <div className="student_policy h-[400px] w-[500px] rounded-xl p-6 bg-gradient-to-br from-cyan-300 to-blue-200 shadow-lg">
                  <p className="text-2xl font-semibold mt-2 text-white">{subjectName}</p>

                  <div className="flex justify-between items-start mt-4">
                    <h3 className="text-white text-lg font-medium">{testName}</h3>

                    <h3 className="text-white text-sm">{formattedDate}</h3>
                  </div>

                  <hr className="my-4 border-white/30" />

                  <div className="flex justify-center gap-6 mt-2 mb-4">
                    {/* Standard Score */}
                    <div className="w-40 sm:w-48 flex flex-col items-center">
                      <p className="py-2 font-medium text-sm text-center text-white">
                        Standard Score
                      </p>
                      <div style={{ width: 120, height: 120 }}>
                        <CircularProgressbar
                          background
                          styles={buildStyles({
                            textColor: "#002366",
                            pathColor: "#002366",
                            backgroundColor: "#ffffff",
                            trailColor: "#00bfff",
                          })}
                          value={cbaScore}
                          text={`${cbaScore}%`}
                          strokeWidth={10}
                        />
                      </div>
                    </div>

                    {/* Confidence Score */}
                    <div className="w-40 sm:w-48 flex flex-col items-center">
                      <p className="py-2 font-medium text-sm text-center text-white">
                        Confidence Score
                      </p>
                      <div style={{ width: 120, height: 120 }}>
                        <CircularProgressbar
                          background
                          styles={buildStyles({
                            textColor: "#002366",
                            pathColor: "#002366",
                            backgroundColor: "#ffffff",
                            trailColor: "#00bfff",
                          })}
                          value={standardScore}
                          text={`${standardScore}%`}
                          strokeWidth={10}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Centered action button */}
                  <div className="w-full flex justify-center mt-6">
                    <Link href="/boostconfidence">
                      <button
                        onClick={() => {
                          // store this specific report's id so the boost page knows which report to use
                          if (item.id) {
                            localStorage.setItem("report_id", String(item.id));
                          }
                        }}
                        className="w-[360px] h-12 bg-white rounded-3xl text-sm font-medium text-[#00bfff] shadow-md hover:shadow-lg transition"
                        type="button"
                      >
                        Plan to boost Confidence
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center mt-4">No reports found.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Report;
