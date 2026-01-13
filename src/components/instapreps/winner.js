
import React, { useState, useEffect } from "react";

const Winner = () => {
  const ActionType = {
    Marks: "marks",
    Maximum: "maximum",
    Mosts: "mosts",
  };

  const [activeState, setActiveState] = useState(ActionType.Marks);
  const [toperMark, setToperMark] = useState([]);
  const [maxTest, setMaxTest] = useState([]);
  const [mostConst, setMostConst] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/report/maxtestscore`)
      .then((res) => res.json())
      .then((data) => setToperMark(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/report/maxtestwinner`)
      .then((res) => res.json())
      .then((data) => setMaxTest(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/report/mostconsistentwinner`
    )
      .then((res) => res.json())
      .then((data) => setMostConst(data))
      .catch((err) => console.log(err));
  }, []);

  const getActiveList = () => {
    switch (activeState) {
      case ActionType.Marks:
        return toperMark;
      case ActionType.Maximum:
        return maxTest;
      case ActionType.Mosts:
        return mostConst;
      default:
        return [];
    }
  };

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return null;
  };

  return (
    <div className="mt-10">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full border border-slate-200 bg-white shadow-sm overflow-hidden">
          <button
            onClick={() => setActiveState(ActionType.Marks)}
            className={`px-4 sm:px-6 py-2 text-sm font-medium transition ${
              activeState === ActionType.Marks
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Highest Score
          </button>
          <button
            onClick={() => setActiveState(ActionType.Maximum)}
            className={`px-4 sm:px-6 py-2 text-sm font-medium transition ${
              activeState === ActionType.Maximum
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Most Tests
          </button>
          <button
            onClick={() => setActiveState(ActionType.Mosts)}
            className={`px-4 sm:px-6 py-2 text-sm font-medium transition ${
              activeState === ActionType.Mosts
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Most Consistent
          </button>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        {getActiveList().map((items, index) => {
          const medal = getMedal(index);

          return (
            <div
              key={items.id}
              className="flex items-center justify-between rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition p-4 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-semibold">
                  {medal ? medal : index + 1}
                </span>
                <p className="font-semibold text-slate-900">
                  {items.first_name}
                </p>
              </div>
              <p className="text-slate-600 font-medium">
                {items.total_score || items.total_test || 0}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Winner;
