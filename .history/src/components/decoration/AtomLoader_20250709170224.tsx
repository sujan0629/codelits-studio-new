import React from 'react';

export function AtomLoader() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 mb-4">
        {/* Orbiting atoms */}
        <span className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#FFD700] orbit1" />
        <span className="absolute w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_#FFC107] orbit2" />
        <span className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#FFEB3B] orbit3" />
        {/* Center nucleus */}
        <span className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-200 rounded-full shadow-[0_0_10px_#FFD700] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <p className="text-white font-normal text-base animate-pulse">Initializing brilliance...</p>

      <style jsx>{`
        .orbit1 {
          top: 50%;
          left: 50%;
          transform-origin: center;
          animation: orbit1 1.8s linear infinite;
          transform-box: fill-box;
        }
        .orbit2 {
          top: 50%;
          left: 50%;
          transform-origin: center;
          animation: orbit2 1.6s linear infinite;
          transform-box: fill-box;
        }
        .orbit3 {
          top: 50%;
          left: 50%;
          transform-origin: center;
          animation: orbit3 1.4s linear infinite;
          transform-box: fill-box;
        }

        @keyframes orbit1 {
          0% {
            transform: rotate(0deg) translateX(24px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(24px) rotate(-360deg);
          }
        }
        @keyframes orbit2 {
          0% {
            transform: rotate(0deg) translateX(18px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(18px) rotate(-360deg);
          }
        }
        @keyframes orbit3 {
          0% {
            transform: rotate(0deg) translateX(12px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(12px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
