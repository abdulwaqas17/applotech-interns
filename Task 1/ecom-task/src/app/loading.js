// export default function Loading() {
//   return (
//     <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
//       <div className="relative w-32 h-32 mb-8">
//         {/* Animated logo or spinner */}
//         <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//         <div className="absolute inset-4 border-4 border-gray-400 border-b-transparent rounded-full animate-spin-reverse"></div>
//       </div>

//       <h1 className="text-2xl font-bold text-white mb-2">LOADING</h1>

//       {/* Modern progress bar */}
//       <div className="w-64 h-1 bg-gray-700 overflow-hidden">
//         <div className="h-full bg-white animate-progress"></div>
//       </div>

//       <p className="text-gray-400 mt-4 text-sm">Preparing your shopping experience...</p>
//     </div>
//   );
// }

// 'use client';


// import Image from 'next/image';

// export default function Loading() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black z-50 flex items-center justify-center"
//     >
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//         className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] border-4 border-white border-t-transparent rounded-full"
//       />

//       <motion.div
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
//         className="absolute text-white font-bold text-xl"
//       >
//         <Image src="/images/hs-logo.png" width={200} height={200} alt="Company Logo"/>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8">
      {/* Logo with Animation */}
      <div className="relative w-40 h-40">
        {/* Static Logo - Replace with your actual logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <div className="text-white text-3xl font-serif tracking-widest"> */}
            {/* <Image
              src="/images/hs-logo.png"
              alt="Your Brand"
              width={120}
              height={120}
              className="object-contain"
            /> */}
            <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        className="w-full h-full flex justify-center items-center text-white font-bold text-xl"
      >
        <Image src="/images/hs-logo.png" fill
              className="object-contain" alt="Company Logo"/>
      </motion.div>
          </div>
        {/* </div> */}

        {/* Animated Rings */}
        {/* <div 
          className="absolute inset-0 border-2 border-transparent border-t-white rounded-full"
          style={{
            animation: 'spin 1s linear infinite',
            animationName: 'spin',
            animationDuration: '3s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        ></div>
        <div 
          className="absolute inset-3 border-2 border-transparent border-b-white rounded-full"
          style={{
            animation: 'spin 8s linear infinite reverse',
            animationName: 'spin',
            animationDuration: '8s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDirection: 'reverse'
          }}
        ></div> */}
      </div>

      {/* Progress Bar */}
      <div className="w-64 space-y-2">
        <div className="h-0.5 bg-white/10 overflow-hidden rounded-full">
          <div
            className="h-full bg-white"
            style={{
              animation: "shimmer 2s ease-in-out infinite",
              animationName: "shimmer",
              animationDuration: "2s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          ></div>
        </div>
        <p className="text-center text-xs text-white/50 font-light tracking-widest">
          PREPARING YOUR STYLE COLLECTION
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-8 bg-white/10"
            style={{
              animation: "pulse 1.5s ease-in-out infinite",
              animationDelay: `${i * 0.1}s`,
              animationName: "pulse",
              animationDuration: "1.5s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          />
        ))}
      </div>

      {/* Inline Style Tag for Animations */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
