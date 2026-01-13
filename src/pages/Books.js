// import React from "react";
// import Link from "next/link";
// import Header from "src/components/header";
// import Footer from "src/components/footer";
// import VerticalSidebar from "src/components/VerticalSidebar";

// export default function Books() {
//   return (
//     <>
//       {/* <Header /> */}
//       < VerticalSidebar/>

//       <div className="p-6 min-h-screen">
        
//         <h1 className="text-3xl font-bold mb-4">NCERT Books</h1>
        
//         <div className="mt-4">
//           <h2 className="text-2xl font-semibold mb-2">Class 10</h2>
//           <div className="flex flex-col gap-2">
//             <Link
//               href="/books/class10"
//               className="text-blue-600 hover:underline text-lg"
//             >
//               View Class 10 Books →
//             </Link>
//           </div>
//         </div>

//         <div className="mt-4">
//           <h2 className="text-2xl font-semibold mb-2">Class 12</h2>
//           <div className="flex flex-col gap-2">
//             <Link
//               href="/books/class12"
//               className="text-blue-600 hover:underline text-lg"
//             >
//               View Class 12 Books →
//             </Link>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

import React, { useState } from "react";
import Link from "next/link";
import Footer from "src/components/footer";
import VerticalSidebar from "src/components/VerticalSidebar";

export default function Books() {
  const [sidebarHovered, setSidebarHovered] = useState(false);

  return (
    <>
      <div className="layout-wrapper">
        {/* ✅ Hover detector ONLY for sidebar */}
        <div
          className="sidebar-hover-zone"
          onMouseEnter={() => setSidebarHovered(true)}
          onMouseLeave={() => setSidebarHovered(false)}
        >
          <VerticalSidebar />
        </div>

        {/* ✅ Main content shifts ONLY when sidebar is hovered */}
        <main className={`page-content ${sidebarHovered ? "shifted" : ""}`}>
          <h1 className="text-3xl font-bold mb-4">NCERT Books</h1>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Class 10</h2>
            <Link
              href="/books/class10"
              className="text-blue-600 hover:underline text-lg"
            >
              View Class 10 Books →
            </Link>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Class 12</h2>
            <Link
              href="/books/class12"
              className="text-blue-600 hover:underline text-lg"
            >
              View Class 12 Books →
            </Link>
          </div>
        </main>
      </div>

      <Footer />

      {/* 🔥 INLINE CSS – NOTHING ELSE NEEDED */}
      <style jsx>{`
        .layout-wrapper {
          display: flex;
        }

        .sidebar-hover-zone {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          z-index: 50;
        }

        .page-content {
          padding: 24px;
          min-height: 100vh;
          margin-left: 80px; /* collapsed sidebar */
          transition: margin-left 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: margin-left;
        }

        .page-content.shifted {
          margin-left: 240px; /* expanded sidebar */
        }
      `}</style>
    </>
  );
}
