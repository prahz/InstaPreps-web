import React from "react";
import { useRouter } from "next/router";
import Header from "src/components/header";
import Footer from "src/components/footer";
import axios from "axios";
import VerticalSidebar from "src/components/VerticalSidebar";

export default function PrepDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [detail, setDetail] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!id) return;
    setLoading(true);

    // Try to get from localStorage first
    const local = localStorage.getItem("selectedPrep");
    if (local) {
      try {
        const parsed = JSON.parse(local);
        if (parsed && String(parsed.id) === String(id)) {
          setDetail(parsed);
          setLoading(false);
          return;
        }
      } catch {}
    }

    // Fallback to API if not found or id mismatch
    axios
      .get(`https://staging.instapreps.com/api/shot_by_id/${id}`)
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch(() => setDetail(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !detail)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );

  return (
    <div>
      {/* <Header /> */}
      <VerticalSidebar/>
      <main className="p-6 bg-white min-h-screen flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">{detail.name}</h1>
        <p className="text-gray-600 mb-6 text-center">
          Instant Preps <br />
          Duration: {detail.duration || "10"} min read
        </p>

        {/* Render HTML content if present */}
        {detail.content && (
          <div className="flex justify-center w-full">
            <div
              className="prose max-w-4xl bg-gray-100 p-6 rounded-xl shadow-md text-black"
              dangerouslySetInnerHTML={{ __html: detail.content }}
            />
          </div>
        )}

        {/* Fallback: Render questions if present and no HTML content */}
        {!detail.content && detail.questions?.length > 0 && (
          <div className="flex justify-center w-full">
            <div className="bg-gray-100 max-w-4xl p-6 rounded-xl shadow-md space-y-3 text-black">
              {detail.questions.map((q, i) => (
                <p key={i} className="text-gray-900 text-base">
                  {i + 1}. {q}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* <div className="fixed bottom-4 left-0 w-full flex justify-center">
          <button className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-6 py-2 rounded-full shadow-md">
            Mark as complete
          </button>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
