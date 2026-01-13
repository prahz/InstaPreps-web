import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Header from "src/components/header";
import Footer from "src/components/footer";
import VerticalSidebar from "src/components/VerticalSidebar";

const Rewards = () => {
  const [winners, setWinners] = useState({
    highestScore: null,
    maxTests: null,
    mostConsistent: null,
  });
  const [leaderboard, setLeaderboard] = useState([]);
  const [activeTab, setActiveTab] = useState("topScorer");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_BASE_API_URL;
        console.log("BASE URL →", base);

        if (!base) {
          setError("NEXT_PUBLIC_BASE_API_URL is not set");
          setLoading(false);
          return;
        }

        const url = `${base}/api/report/weeklywinners`;
        console.log("Calling:", url);

        const res = await axios.get(url);
        console.log("weeklywinners →", res.data);

        const data = res.data?.data || {};

        // Old code ke hisaab se keys:
        // data.maxTestScorer, data.maxTestWinner, data.mostConsistentWinner
        const highestName = data.maxTestScorer || null;
        const maxTestsName = data.maxTestWinner || null;
        const mostConsistentName = data.mostConsistentWinner || null;

        setWinners({
          highestScore: highestName
            ? { name: highestName, reward: 50 }
            : null,
          maxTests: maxTestsName
            ? { name: maxTestsName, reward: 50 }
            : null,
          mostConsistent: mostConsistentName
            ? { name: mostConsistentName, reward: 50 }
            : null,
        });

        // Agar API leaderboard array bhi bhejti hai to use karo,
        // warna empty rehne do
        let lb = [];
        if (Array.isArray(data.leaderboard)) {
          lb = data.leaderboard;
        } else if (Array.isArray(data)) {
          lb = data;
        }
        setLeaderboard(lb);

        setError(null);
      } catch (err) {
        console.error("Error fetching weeklywinners:", err);
        setError(err?.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderWinnerCard = (title, emoji, winner) => (
    <div className="rounded-2xl bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <span className="text-2xl">{emoji}</span>
      </div>
      <p className="mt-4 text-slate-600 italic">
        {winner
          ? winner.name
          : loading
          ? "Loading…"
          : "—"}
      </p>
      <p className="mt-6 font-semibold text-green-600">
        {winner ? `Won ₹${winner.reward || 50}` : "Won ₹50"}
      </p>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100">
      <Head>
        <title>
          Earn Rewards at Instapreps - The Best Confidence building app
        </title>
        <meta
          name="description"
          content="Attempt Everyday Tests and collect reward points and get a chance to earn rewards every week at Instapreps - World's Best Confidence & Learning app"
        />
      </Head>

      {/* <Header /> */}
      <VerticalSidebar/>

      <main className="flex-grow w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Progress Bar */}
        <section className="text-center mb-10">
          <div className="flex justify-center items-center space-x-3">
            <span className="text-xl">👑</span>
            <div className="w-72 bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-yellow h-3 rounded-full" />
            </div>
            <span className="text-xl">👑</span>
          </div>
          <p className="mt-3 text-gray-700 font-medium">
            Unlock your potential and earn rewards as you progress on your
            confidence journey
          </p>
        </section>

        {/* Hero / Promo section */}
        <section className="mb-12">
          <div className="rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:shadow-xl transition">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 p-6 sm:px-8 lg:p-10">
              <div className="md:col-span-2 flex items-center justify-center">
                <img
                  src="/images/winner.webp"
                  alt="Rewards"
                  className="w-64 sm:w-72 md:w-80 rounded-xl drop-shadow-lg"
                />
              </div>

              <div className="md:col-span-3 flex flex-col justify-center">
                <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                  <span>⚡ </span>Fuel Your Confidence<span> 🚀</span>
                </h1>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Join our Rewards Promoter Program & unlock exclusive perks
                  that boost your journey to success.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 
                               bg-white px-5 py-3 text-slate-700 font-semibold shadow-sm
                               transition-all duration-300 ease-out
                               hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white
                               hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:-translate-y-1 active:scale-95
                               hover:animate-pulse"
                  >
                    Start Testing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category tiles */}
        <section className="mb-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 text-slate-900 shadow-md hover:shadow-xl hover:scale-[1.02] transition p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 ring-1 ring-blue-300 text-blue-800 shadow-inner">
                ⓘ
              </div>
              <h3 className="text-center font-semibold text-slate-900">
                Top Scorer
              </h3>
              <p className="mt-2 text-center text-sm text-slate-700">
                Achieve the highest scores and earn recognition for your
                exceptional performance.
              </p>
            </div>

            <div className="group rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 text-slate-900 shadow-md hover:shadow-xl hover:scale-[1.02] transition p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-200 ring-1 ring-purple-300 text-purple-800 shadow-inner">
                ⭐
              </div>
              <h3 className="text-center font-semibold text-slate-900">
                Most Tests Attempted
              </h3>
              <p className="mt-2 text-center text-sm text-slate-700">
                Show dedication by taking the most practice tests and building
                consistent study habits.
              </p>
            </div>

            <div className="group rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 text-slate-900 shadow-md hover:shadow-xl hover:scale-[1.02] transition p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-200 ring-1 ring-green-300 text-green-800 shadow-inner">
                🫶
              </div>
              <h3 className="text-center font-semibold text-slate-900">
                Referral Champion
              </h3>
              <p className="mt-2 text-center text-sm text-slate-700">
                Invite friends to join and earn exclusive rewards for growing
                our community.
              </p>
            </div>

            <div className="group rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 text-slate-900 shadow-md hover:shadow-xl hover:scale-[1.02] transition p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-300 ring-1 ring-amber-400 text-amber-900 shadow-inner">
                👑
              </div>
              <h3 className="text-center font-semibold text-slate-900">
                Promoter of the Week Award
              </h3>
              <p className="mt-2 text-center text-sm text-slate-700">
                Celebrate this week’s top promoter and inspire others to shine!
              </p>
            </div>
          </div>
        </section>

        {/* This Week's Winners */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
              This Week’s Winners
            </h2>
            <p className="mt-2 text-slate-500 text-lg">
              Winners announced every{" "}
              <span className="font-semibold text-indigo-600 underline decoration-indigo-400 underline-offset-4">
                Friday
              </span>
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {renderWinnerCard(
              "Highest Score Award",
              "🏆",
              winners.highestScore
            )}
            {renderWinnerCard("Maximum Tests Taken", "📈", winners.maxTests)}
            {renderWinnerCard(
              "Most Consistent Student",
              "📅",
              winners.mostConsistent
            )}
          </div>

          {error && (
            <p className="mt-4 text-center text-sm text-red-600">{error}</p>
          )}
        </section>

        {/* Leaderboard */}
        <section className="mt-14">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">🏆</span>
              <h2 className="text-3xl font-bold text-slate-900">Leaderboard</h2>
              <span className="text-2xl">✨</span>
            </div>
          </div>

          {/* Tabs (UI only; same data for now) */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-full border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-1 shadow-sm">
              <button
                onClick={() => setActiveTab("topScorer")}
                className={`px-4 py-2 text-sm font-bold rounded-full transition ${
                  activeTab === "topScorer"
                    ? "bg-indigo-600 text-yellow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Top Scorer
              </button>
              <button
                onClick={() => setActiveTab("mostTests")}
                className={`px-4 py-2 text-sm font-bold rounded-full transition ${
                  activeTab === "mostTests"
                    ? "bg-indigo-600 text-yellow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Most Tests
              </button>
              <button
                onClick={() => setActiveTab("promoter")}
                className={`px-4 py-2 text-sm font-bold rounded-full transition ${
                  activeTab === "promoter"
                    ? "bg-indigo-600 text-yellow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Promoter
              </button>
            </div>
          </div>

          <div className="max-w-lg mx-auto space-y-3">
            {leaderboard.length === 0 && !loading && (
              <p className="text-center text-sm text-slate-500">
                Leaderboard data not available.
              </p>
            )}

            {leaderboard.map((user, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl bg-white shadow-sm border border-slate-100 p-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                      idx === 0
                        ? "bg-amber-100 text-amber-600"
                        : idx === 1
                        ? "bg-violet-100 text-violet-600"
                        : idx === 2
                        ? "bg-blue-100 text-blue-600"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {user.name || user.username || "Student"}
                    </p>
                    <p className="text-sm text-slate-500">
                      {(user.points ?? user.score ?? 0) + " pts"}
                    </p>
                  </div>
                </div>
                {idx < 3 && (
                  <span>{idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rewards;
