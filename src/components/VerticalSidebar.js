// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const LAVENDER = {
//   from: '#E8E1FF',
//   to: '#C7B5FF',
//   deep: '#A895FF',
//   border: '#E8E1FF',
//   surface: '#F7F4FF'
// };

// /* ---------------- ICONS ---------------- */

// function DashboardIcon({ className = 'w-6 h-6' }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path
//         d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function UsersIcon({ className = 'w-6 h-6' }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path
//         d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z
//            M6 11c1.657 0 3-1.567 3-3.5S7.657 4 6 4 3 5.567 3 7.5 4.343 11 6 11z
//            M6 13c-3 0-6 1.5-6 4.5V20h12v-2.5C12 14.5 9 13 6 13zm10 0
//            c-1 0-1 .5-1 2.5V20h8v-2.5c0-3-3-4.5-7-4.5z"
//         strokeWidth="0.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function SequenceIcon({ className = 'w-6 h-6' }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path
//         d="M4 6h16M4 12h10M4 18h16"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function ChartIcon({ className = 'w-6 h-6' }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path d="M3 3v18h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//       <path
//         d="M7 13v6M12 9v10M17 5v14"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function CogIcon({ className = 'w-6 h-6' }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path
//         d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z"
//         strokeWidth="1.25"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// /* 📚 BOOK ICON */
// function BookIcon({ className = 'w-6 h-6' }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path
//         d="M4 19a2 2 0 012-2h14M6 17V5a2 2 0 012-2h12v14"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// /* ---------------- NAV ---------------- */

// const NAV = [
//   { id: 'dashboard', label: 'Dashboard', href: '/home', icon: DashboardIcon },
//   { id: 'premium', label: 'Premium', href: '/premiumpage', icon: UsersIcon },

//   // 📚 BOOKS
//   { id: 'books', label: 'Books', href: '/books', icon: BookIcon },

//   { id: 'confidence-test', label: 'Confidence Test', href: '/confidencetest', icon: SequenceIcon },
//   { id: 'startup-power', label: 'Startup Power', href: '/startuppower', icon: ChartIcon },
//   { id: 'feed', label: 'Feed', href: '/feed', icon: CogIcon }
// ];

// /* ---------------- SIDEBAR ---------------- */

// export default function VerticalSidebar({ variant = 'light' }) {
//   const [userData, setUserData] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isPinned, setIsPinned] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem('user') || '{}');
//     setUserData(data);
//   }, []);

//   useEffect(() => {
//     document.documentElement.style.setProperty(
//       '--sidebar-width',
//       `${isExpanded ? 288 : 80}px`
//     );
//   }, [isExpanded]);

//   const isDark = variant === 'dark';

//   return (
//     <div
//       className="fixed left-0 top-0 h-screen z-40 transition-all duration-300"
//       style={{ width: isExpanded ? 288 : 80 }}
//       onMouseEnter={() => !isPinned && setIsExpanded(true)}
//       onMouseLeave={() => !isPinned && setIsExpanded(false)}
//     >
//       <div
//         className="flex flex-col h-full shadow-xl"
        


//         style={{
//           background: isDark
//             ? 'linear-gradient(180deg, rgba(30,27,58,0.7), rgba(48,46,77,0.6))'
//             : 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(247,244,255,0.92))'
//         }}
//       >
//         <nav className="flex-1 overflow-auto py-3">
//           <ul className="space-y-1 px-2">
//             {NAV.map(item => {
//               const active = router.pathname.startsWith(item.href);
//               return (
//                 <li key={item.id}>
//                   <div
//                     onClick={() => router.push(item.href)}
//                     className={`flex items-center gap-3 rounded-xl p-2 cursor-pointer transition-colors
//                       ${
//                         active
//                           ? 'bg-[rgba(168,149,255,0.15)]'
//                           : 'hover:bg-[rgba(200,185,255,0.06)]'
//                       }`}
//                   >
//                     <div
//                       className={`flex items-center justify-center w-10 h-10 rounded-lg ${
//                         active
//                           ? 'bg-[linear-gradient(90deg,#E8E1FF,#C7B5FF)] text-white'
//                           : isDark
//                           ? 'bg-[rgba(255,255,255,0.10)] text-white'
//                           : 'bg-white text-slate-700'
//                       }`}
//                       style={{
//                         boxShadow: active
//                           ? '0 6px 18px rgba(168,149,255,0.15)'
//                           : 'none'
//                       }}
//                     >
//                       <item.icon />
//                     </div>

//                     {isExpanded && (
//                       <span className="text-sm font-medium text-slate-900">
//                         {item.label}
//                       </span>
//                     )}
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


/* ---------------- ICONS ---------------- */

function DashboardIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z
        M6 11c1.657 0 3-1.567 3-3.5S7.657 4 6 4 3 5.567 3 7.5 4.343 11 6 11z
        M6 13c-3 0-6 1.5-6 4.5V20h12v-2.5C12 14.5 9 13 6 13zm10 0
        c-1 0-1 .5-1 2.5V20h8v-2.5c0-3-3-4.5-7-4.5z" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SequenceIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 6h16M4 12h10M4 18h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 3v18h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 13v6M12 9v10M17 5v14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CogIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 19a2 2 0 012-2h14M6 17V5a2 2 0 012-2h12v14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CareerIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      {/* Briefcase body */}
      <path
        d="M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Handle */}
      <path
        d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ComfyAIIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"   // forced black border
    >
      {/* Brain outline */}
      <path
        d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3v1a3 3 0 0 0 3 3h1v3
           a3 3 0 0 0 6 0v-3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-2-3V6a3 3 0 0 0-3-3"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* AI spark */}
      <path
        d="M12 8v4M10 10h4"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ---------------- NAV ---------------- */

const NAV = [
  { id: 'dashboard', label: 'Dashboard', href: '/home', icon: DashboardIcon },
  { id: 'career', label: 'Career', href: '/career/search', icon: CareerIcon },
  { id: 'comfy-ai', label: 'Comfy AI', href: '/comfy', icon: ComfyAIIcon },
  // { id: 'premium', label: 'Premium', href: '/premiumpage', icon: UsersIcon },
  { id: 'books', label: 'Books', href: '/books', icon: BookIcon },
  { id: 'confidence-test', label: 'Confidence Test', href: '/confidencetest', icon: SequenceIcon },
  { id: 'startup-power', label: 'Startup Power', href: '/startuppower', icon: ChartIcon },
  { id: 'feed', label: 'Feed', href: '/feed', icon: CogIcon }
];

/* ---------------- SIDEBAR ---------------- */

export default function VerticalSidebar({ variant = 'light' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
  const syncUser = () => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    const token = localStorage.getItem('token') || storedUser?.id;

    if (storedUser && token) {
      setUser(storedUser);
    } else {
      setUser(null);
    }
  };

  syncUser(); // initial load
  window.addEventListener('storage', syncUser);

  return () => window.removeEventListener('storage', syncUser);
}, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      `${isExpanded ? 288 : 80}px`
    );
  }, [isExpanded]);

  const isDark = variant === 'dark';

  return (
    <div
      className="fixed left-0 top-0 h-screen z-40 transition-all duration-300"
      style={{ width: isExpanded ? 288 : 80 }}
      onMouseEnter={() => !isPinned && setIsExpanded(true)}
      onMouseLeave={() => !isPinned && setIsExpanded(false)}
    >
      <div
        className="flex flex-col h-full shadow-xl"
        style={{
          background: isDark
            ? 'linear-gradient(180deg, rgba(30,27,58,0.7), rgba(48,46,77,0.6))'
            : 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(247,244,255,0.92))'
        }}
      >

        {/* ================= LOGO SECTION (ONLY ADDITION) ================= */}
        <div
          onClick={() => router.push('/')}
          className="flex items-center gap-3 px-3 py-4 cursor-pointer select-none"
        >
          {/* Replace this with your logo image */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg,#E8E1FF,#C7B5FF)',
              boxShadow: '0 6px 18px rgba(168,149,255,0.25)'
            }}
          >
            <img src="/images/InstaPrepsLogo.png" alt="InstaPreps" className="w-7 h-7" />

          </div>

          {isExpanded && (
            <span className="text-lg font-semibold text-slate-900 tracking-tight">
              InstaPreps AI
            </span>
          )}
        </div>
        {/* ================= END LOGO SECTION ================= */}

        <nav className="flex-1 overflow-auto py-3">
          <ul className="space-y-1 px-2">
            {NAV.map(item => {
              const active = router.pathname.startsWith(item.href);
              return (
                <li key={item.id}>
                  <div
                    onClick={() => router.push(item.href)}
                    className={`flex items-center gap-3 rounded-xl p-2 cursor-pointer transition-colors
                      ${active
                        ? 'bg-[rgba(168,149,255,0.15)]'
                        : 'hover:bg-[rgba(200,185,255,0.06)]'
                      }`}
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                        active
                          ? 'bg-[linear-gradient(90deg,#E8E1FF,#C7B5FF)] text-white'
                          : isDark
                          ? 'bg-[rgba(255,255,255,0.10)] text-white'
                          : 'bg-white text-slate-700'
                      }`}
                      style={{
                        boxShadow: active
                          ? '0 6px 18px rgba(168,149,255,0.15)'
                          : 'none'
                      }}
                    >
                      <item.icon />
                    </div>

                    {isExpanded && (
                      <span className="text-sm font-medium text-slate-900">
                        {item.label}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 🔐 LOGIN & SIGNUP (ONLY ADDITION) */}
<div className="px-3 py-3 border-t border-[rgba(0,0,0,0.06)]">
  {user ? (
    <div
      onClick={() => router.push('/useraccount')}
      className="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-[rgba(200,185,255,0.08)]"
    >
      <div className="w-10 h-10 rounded-full bg-[linear-gradient(135deg,#A895FF,#C7B5FF)] flex items-center justify-center text-white font-semibold">
        {(user.first_name || user.name || 'U')[0].toUpperCase()}
      </div>

      {isExpanded && (
        <span className="text-sm font-medium text-slate-900">
          {user.first_name || user.name}
        </span>
      )}
    </div>
  ) : (
    <>
      <div
        onClick={() => router.push('/login')}
        className="w-full text-center text-sm py-2 rounded-xl cursor-pointer hover:bg-[rgba(200,185,255,0.08)]"
      >
        {isExpanded ? 'Login' : '🔐'}
      </div>

      <div
        onClick={() => router.push('/Signup')}
        className="w-full text-center text-sm py-2 mt-2 rounded-xl cursor-pointer text-white hover:bg-[rgba(200,185,255,0.08)] bg-[linear-gradient(135deg,#A895FF,#C7B5FF)]"
      >
        {isExpanded ? 'Sign Up' : '➕'}
      </div>
    </>
  )}
</div>

        
      </div>
    </div>
  );
}
