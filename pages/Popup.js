// import React, { useState, useEffect } from 'react';

// const Popup = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     isVisible && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//         <div className="relative bg-white p-4 rounded-lg shadow-lg w-[90vw] sm:w-[520px] max-w-[90%] h-auto max-h-[100vh] flex flex-col items-center">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsVisible(false)}
//             className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-red-500 text-white text-2xl rounded-full shadow-md hover:bg-red-600 focus:outline-none"
//           >
//             &times;
//           </button>

//           {/* Popup Image */}
//           <img
//             src="/images/jee_crack.jpg"
//             alt="15th August - Happy Independence Day"
//             className="w-full h-auto rounded-lg object-cover"
//           />
//         </div>
//       </div>
//     )
//   );
// };

// export default Popup;
import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white p-4 rounded-lg shadow-lg w-[90vw] sm:w-[520px] max-w-[90%] h-auto max-h-[100vh] flex flex-col items-center">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-red-500 text-white text-2xl rounded-full shadow-md hover:bg-red-600 focus:outline-none"
          >
            &times;
          </button>

          {/* Popup Image with YouTube Link */}
          <a
            // href="https://www.youtube.com/@InstaPreps/featured"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <img
              src="/images/happyNewYearPost.jpg"
              className="w-full h-auto rounded-lg object-cover cursor-pointer "
            />
          </a>
        </div>
      </div>
    )
  );
};

export default Popup;
