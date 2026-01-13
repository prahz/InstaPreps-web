import React, { useState, useEffect } from "react";


export default function CountryPicker({  value = "+91", onChange = () => {} }) {
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");



  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,flags")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return;

        const formatted = data
          .filter((c) => c.idd?.root && c.idd?.suffixes?.[0])
          .map((c) => ({
            code: `${c.idd.root}${c.idd.suffixes[0]}`,
            label: c.name.common,
            flag: c.flags?.svg || c.flags?.png || "",
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        setCountries(
          formatted.length > 0
            ? formatted
            : [{ code: "+91", label: "India", flag: "https://flagcdn.com/in.svg" }]
        );
      })
      .catch(() =>
        setCountries([{ code: "+91", label: "India", flag: "https://flagcdn.com/in.svg" }])
      );
  }, []);

  // const selected = countries.find((c) => c.code === value) || countries[0];
  const selected = countries.find((c) => c.code === value) 
  || countries.find((c) => c.code === "+91") 
  || countries[0];


  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center border border-[#7666CA] rounded-md px-3 py-2 bg-white text-gray-900"
      >
        {/* {selected?.flag ? (
          <img src={selected.flag} alt={selected.label} className="w-6 h-4 mr-2" />
        ) : (
          <span className="mr-2">🏳️</span>
        )} */}
        {error ? (
  <span className="mr-2 text-red-500 text-sm">⚠️</span>
) : selected?.flag ? (
  <img src={selected.flag} alt={selected.label} className="w-6 h-4 mr-2" />
) : (
  <span className="mr-2">🏳️</span>
)}

        {/* <span className="font-medium">{selected?.code || "+91"}</span> */}
        <input
  type="text"
  value={value ?? ""}
  onChange={(e) => {
    let typed = e.target.value.trim();

    // Always normalize: add '+' if missing
    if (typed && !typed.startsWith("+")) {
      typed = "+" + typed;
    }

    onChange(typed);

    const match = countries.find((c) => c.code === typed);
    if (match) {
      setError("");
      setOpen(false);
    } else {
      setError("Invalid country code");
    }
  }}
  className="w-20 font-medium outline-none"
/>



        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {/* {open && (
        <div className="absolute z-50 mt-2 w-60 max-h-64 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {countries.map((c, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(c.code);
                    setOpen(false);
                  }}
                  className="w-full flex items-center px-3 py-2 hover:bg-gray-100 text-left"
                >
                  {c.flag ? (
                    <img src={c.flag} alt={c.label} className="w-6 h-4 mr-2" />
                  ) : (
                    <span className="mr-2">🏳️</span>
                  )}
                  <span className="flex-1">{c.label}</span>
                  <span className="text-gray-500">{c.code}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )} */}
      {open && (
  <div className="absolute z-50 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg">
    {/* 🔍 Search box */}
    <div className="p-2">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-md px-2 py-2 text-m"
      />
    </div>

    {/* Country list */}
    <ul className="py-1 max-h-48 overflow-auto">
      {countries
        .filter(
          (c) =>
            c.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.code.includes(searchTerm)
        )
        .map((c, idx) => (
          <li key={idx}>
            <button
              type="button"
              // onClick={() => {
              //   onChange(c.code);
              //   setOpen(false);
              // }}
//               onClick={() => {
//   onChange(c.code);
//   setOpen(false);   //  close dropdown
//   setSearchTerm(""); //  clear search box
//   setError("");      //  reset error
// }}
onClick={(e) => {
  e.stopPropagation();
  onChange(c.code);
  setOpen(false);   // close dropdown
  setSearchTerm(""); // clear search box
  setError("");
}}

              className="w-full flex items-center px-3 py-2 hover:bg-gray-100 text-left"
            >
              {c.flag ? (
                <img src={c.flag} alt={c.label} className="w-6 h-4 mr-2" />
              ) : (
                <span className="mr-2">🏳️</span>
              )}
              <span className="flex-1">{c.label}</span>
              <span className="text-gray-500">{c.code}</span>
            </button>
          </li>
        ))}
    </ul>
  </div>
)}



    </div>
  );
}
