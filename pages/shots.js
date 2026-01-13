import React from 'react';
import { useRouter } from 'next/router';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';
import { Share2 } from 'lucide-react';
import VerticalSidebar from 'src/components/VerticalSidebar';

export default function Prepstoday() {
  const router = useRouter();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/all_shots_for_student/${user.id}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BallTriangle color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  // Gradient backgrounds
  const gradients = [
    "linear-gradient(90deg, #4caf50, #81c784)", // green
    "linear-gradient(90deg, #ff7043, #ff9800)", // orange
    "linear-gradient(90deg, #42a5f5, #64b5f6)", // blue
    "linear-gradient(90deg, #ab47bc, #ba68c8)", // purple
    "linear-gradient(90deg, #26a69a, #4db6ac)", // teal
    "linear-gradient(90deg, #ec407a, #f06292)", // pink
  ];

  return (
    <div>
      {/* <Header /> */}
      <VerticalSidebar/>
      <main className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-8">All Shots</h2>

        {/* Responsive grid with spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 justify-center">
          {data.map((item, index) => {
            // Extract preview text (longer for filled look)
            let preview = "";
            if (item.content) {
              preview =
                item.content.replace(/<[^>]+>/g, "").slice(0, 170) +
                " ...";
            } else if (item.questions?.length > 0) {
              preview = item.questions[0].slice(0, 170) + " ...";
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  localStorage.setItem("selectedPrep", JSON.stringify(item));
                  router.push(`/prepstodaytcontent?id=${item.id}`);
                }}
                className="cursor-pointer rounded-xl shadow-lg transition-transform transform hover:scale-105 flex flex-col bg-white h-[360px] w-[85%] mx-auto"
              >
                {/* Subject top card */}
                <div
                  className="rounded-t-xl p-5 text-white flex justify-between items-start"
                  style={{ background: gradients[index % gradients.length] }}
                >
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm opacity-90">
                      Duration: {item.duration || "10"} minutes
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.share
                        ? navigator.share({ title: item.name, url: window.location.href })
                        : alert("Sharing not supported");
                    }}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30"
                  >
                    <Share2 size={18} />
                  </button>
                </div>

                {/* White preview box below */}
                {/* White preview box below */}
{preview && (
  <div className="p-5 text-gray-400 text-[5px] leading-relaxed flex-grow overflow-hidden">
    <p className="mb-3">{preview}</p>
    <span className="text-blue-500 font-medium text-xs">View more →</span>
  </div>
)}

              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
