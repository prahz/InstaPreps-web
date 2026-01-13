// import { useEffect, useState } from 'react';

// const AnimatedCounter = ({ target, duration = 2000, suffix = '+' }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const numericTarget = typeof target === 'string' ? parseFloat(target.replace(/[^\d.]/g, '')) : target;
//     if (isNaN(numericTarget)) return;

//     const steps = 60;
//     const increment = numericTarget / steps;
//     const interval = Math.floor(duration / steps);

//     let current = 0;
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= numericTarget) {
//         current = numericTarget;
//         clearInterval(timer);
//       }
//       setCount(current);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [target, duration]);

//   const isDecimal = Math.floor(target) !== target;

//   return (
//     <span>
//       {isDecimal
//         ? count.toFixed(1)
//         : Math.floor(count).toLocaleString()}
//       {suffix}
//     </span>
//   );
// };

// export default AnimatedCounter;


"use client";
import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 } // start when 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
