"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-2">
      {/* Logo with Animation */}
      <div className="relative w-40 h-40">
        {/* Static Logo - Replace with your actual logo */}
        <div className="absolute inset-0 flex items-center justify-center">
        
            <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="w-full h-full flex justify-center items-center text-white font-bold text-xl"
      >
        <Image src="/images/hs-logo.png" fill
              className="object-contain" alt="Company Logo"/>
      </motion.div>
          </div>
  
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
