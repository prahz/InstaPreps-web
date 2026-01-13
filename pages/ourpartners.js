// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import Header from 'src/components/header';
// import Footer from 'src/components/footer';

// function Example() {
//   const [schools, setSchools] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         console.log("API Base URL:", process.env.NEXT_PUBLIC_BASE_API_URL);
      
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/schools`);
//         // const response = await axios.get("https://instapreps.com/api/schools");
//         console.log(response.data);
//         setSchools(response.data.data || []);
//       } catch (error) {
//         console.error("Error fetching data:", error.response || error.message);
//         setError(error.message); // Set error state
//       } finally {
//         setLoading(false); // Ensure loading is set to false once data fetching is complete
//       }
//     };

//     load();
//   }, []);

//   // if (loading) return <p className="text-gray-700">Loading schools...</p>;
//   // if (error) return <p className="text-red-500">Error: {error}</p>;

//   return (<>

//     <Header />
    
      
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-2xl pt-16 pb-8 sm:py-24 lg:max-w-none lg:py-11">
//         <h2 className="text-2xl font-bold text-gray-900">Our Partners</h2>
//         <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 lg:space-y-0">
//           {schools.length === 0 ? (
//             <p className="text-gray-500">No schools found.</p>
//           ) : (
//             schools.map((school) => (
//               <div key={school.id || school.name} className="group relative">
//                 <h3 className="mt-6 text-center font-medium">{school.name || 'Unnamed School'}</h3>
//                 <div className="flex justify-center">
//                   <a
//                     href={school.website || '#'}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block w-[200px] py-2 mt-2 text-xl font-medium text-center text-white transition bg-[#6554e1] border border-transparent rounded-4xl focus:outline-none hover:shadow-secondary hover:-translate-y-1 transform duration-300 hover:bg-gray-700"
//                   >
//                     Visit Website
//                   </a>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// }

// export default Example;


// import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
// import Header from 'src/components/header';
// import Footer from 'src/components/footer';

// const Associations = () => {
//   return (
//     <div className='w-full overflow-hidden association_preps flex flex-col min-h-screen'>
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className='flex-grow'>
//         <ScrollAnimation animateIn='zoomIn' duration={1} animateOnce={true}>
//           <div className='flex justify-center lg:text-4xl text-2xl text-black font-bold mt-20'>
//             Our Partners
//           </div>
//         </ScrollAnimation>

//         <div className='mt-28'>
//           <div className='lg:w-[60%] w-full m-auto overflow-hidden'>
//             <div className='w-full flex flex-wrap justify-center lg:gap-24 gap-16'>

//               {/* Partner 1 */}
//               <div className='flex flex-col items-center'>
//                 <ScrollAnimation animateIn='zoomIn' duration={1}>
//                   <img className='lg:w-[130px] w-[130px]' src='/images/SPDT.png' alt='SPDT' />
//                 </ScrollAnimation>
//                 <p className='mt-4 text-center text-gray-700 text-lg font-medium'>SPDT</p>
//               </div>

//               {/* Partner 2 */}
//               <div className='flex flex-col items-center'>
//                 <ScrollAnimation animateIn='zoomIn' duration={1}>
//                   <img className='w-[130px]' src='/images/Ideal.jpg' alt='Ideal High School' />
//                 </ScrollAnimation>
//                 <p className='mt-4 text-center text-gray-700 text-lg font-medium'>Ideal High School</p>
//               </div>

//               {/* Partner 3 */}
//               <div className='flex flex-col items-center'>
//                 <ScrollAnimation animateIn='zoomIn' duration={1}>
//                   <img className='lg:w-[130px] w-[160px]' src='/images/7Classes.png' alt='7 CLASSES' />
//                 </ScrollAnimation>
//                 <p className='mt-4 text-center text-gray-700 text-lg font-medium'>7 CLASSES</p>
//               </div>

//               {/* Partner 4 */}
//               <div className='flex flex-col items-center'>
//                 <ScrollAnimation animateIn='zoomIn' duration={1}>
//                   <img className='lg:w-[120px] w-[80px]' src='/images/Thakur.jpg' alt='Thakur Group of Colleges and School' />
//                 </ScrollAnimation>
//                 <p className='mt-4 text-center text-gray-700 text-lg font-medium'>Thakur Group of Colleges <br /> and School</p>
//               </div>

//               {/* Partner 5 */}
//               <div className='flex flex-col items-center'>
//                 <ScrollAnimation animateIn='zoomIn' duration={1}>
//                   <img className='w-[200px] w-[220px]' src='/images/Fuell.png' alt='FUELL' />
//                 </ScrollAnimation>
//                 <p className='mt-4 text-center text-gray-700 text-lg font-medium'>FUELL</p>
//               </div>

//               {/* Partner 5 */}
//               <div className='flex flex-col items-center'>
//                 <ScrollAnimation animateIn='zoomIn' duration={1}>
//                   <img className='w-[200px] w-[220px]' src='/images/Pinge.jpg' alt='Pinge' />
//                 </ScrollAnimation>
//                 <p className='mt-4 text-center text-gray-700 text-lg font-medium'>PINGE Classes</p>
//               </div>

//               {/* Partner 5 */}
//               <div className='flex flex-col items-center'>
//                 <ScrollAnimation animateIn='zoomIn' duration={1}>
//                   <img className='w-[200px]' src='/images/GS.jpeg' alt='GS Shetty International School' />
//                 </ScrollAnimation>
//                 <p className='mt-4 text-center text-gray-700 text-lg font-medium'>GS Shetty International School</p>
//               </div>

//               {/* Partner 5 */}
//               <div className='flex flex-col items-center mb-20'> {/* Added mb-20 */}
//                   <ScrollAnimation animateIn='zoomIn' duration={1}>
//                     <img className='w-[180px]' src='/images/Rahul.webp' alt='India Today' />
//                   </ScrollAnimation>
//                   <p className='mt-4 text-center text-gray-700 text-lg font-medium'> RAHUL EDUCATION & L.R TIWARI <br /> COLLEGE GROUPS </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Associations;


// import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
// import Header from 'src/components/header';
// import Footer from 'src/components/footer';

// const partners = [
//   { name: 'SPDT College ', img: '/images/SPDT.png', width: 'w-[130px]' },
//   { name: 'Ideal High School', img: '/images/Ideal.jpg', width: 'w-[130px]' },
//   { name: '7 CLASSES', img: '/images/7Classes.png', width: 'w-[160px]' },
//   { name: 'Thakur Group of Colleges and School', img: '/images/Thakur.jpg', width: 'w-[150px]' },
//   { name: 'FUELL', img: '/images/Fuell.png', width: 'w-[220px]' },
//   { name: 'PINGE Classes', img: '/images/Pinge.jpg', width: 'w-[220px]' },
//   { name: 'GS Shetty International School', img: '/images/GS.jpeg', width: 'w-[200px]' },
//   { name: 'RAHUL EDUCATION & L.R TIWARI COLLEGE GROUPS', img: '/images/Rahul.webp', width: 'w-[180px]' },
// ];

// const Associations = () => {
//   return (
//     <div className="w-full overflow-hidden association_preps flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-grow">
//         <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce>
//           <div className="flex justify-center text-center mt-20">
//             <h1 className="lg:text-5xl text-3xl font-extrabold text-gray-800 relative inline-block">
//               Our Partners
//               <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-20 h-[3px] bg-blue-500 rounded-full"></span>
//             </h1>
//           </div>
//         </ScrollAnimation>

//         <div className="mt-20 pb-24">
//           <div className="lg:w-[65%] w-full m-auto">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 place-items-center">
//               {partners.map((partner, index) => (
//                 <ScrollAnimation key={index} animateIn="zoomIn" duration={1} animateOnce>
//                   <div className="flex flex-col items-center group">
//                     <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                       <img
//                         className={`${partner.width} object-contain`}
//                         src={partner.img}
//                         alt={partner.name}
//                       />
//                     </div>
//                     <p className="mt-4 text-center text-gray-700 text-lg font-medium leading-snug">
//                       {partner.name}
//                     </p>
//                   </div>
//                 </ScrollAnimation>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Associations;



import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import VerticalSidebar from 'src/components/VerticalSidebar';

const partners = [
  { name: 'SPDT College ', img: '/images/SPDT.png' },
  { name: 'Ideal High School', img: '/images/Ideal.jpg' },
  { name: '7 CLASSES', img: '/images/7Classes.png' },
  { name: 'Thakur Group of Colleges and School', img: '/images/Thakur.jpg' },
  { name: 'FUELL', img: '/images/Fuell.png' },
  { name: 'PINGES Tution Classes', img: '/images/Pinge.jpg' },
  { name: 'GS Shetty International School', img: '/images/GS.jpeg' },
  { name: 'Rahul Education & L.R Tiwari College Groups', img: '/images/Rahul.webp' },
];

const Associations = () => {
  return (
    <div className="w-full overflow-hidden association_preps flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      {/* <Header /> */}
      <VerticalSidebar/>

      {/* Main Content */}
      <main className="flex-grow">
        <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce>
          <div className="flex justify-center text-center mt-20">
            <h1 className="lg:text-5xl text-3xl font-extrabold text-gray-800 relative inline-block">
              Our Partners
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-20 h-[3px] bg-blue-500 rounded-full"></span>
            </h1>
          </div>
        </ScrollAnimation>

        <div className="mt-20 pb-24">
          <div className="lg:w-[65%] w-full m-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 place-items-center">
              {partners.map((partner, index) => (
                <ScrollAnimation key={index} animateIn="zoomIn" duration={1} animateOnce>
                  <div className="flex flex-col items-center group">
                    
                    {/* Fixed-size container for perfect alignment */}
                    <div className="bg-white w-40 h-40 flex items-center justify-center rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <img
                        className="max-w-full max-h-full object-contain"
                        src={partner.img}
                        alt={partner.name}
                      />
                    </div>

                    <p className="mt-4 text-center text-gray-700 text-lg font-medium leading-snug">
                      {partner.name}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Associations;
