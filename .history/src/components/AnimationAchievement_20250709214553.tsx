'use client';

import React from 'react';

const AnimationAchievement: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .achievement-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          background: #121212;
          height: 100vh;
        }

        svg {
          width: 180px;
          height: 220px;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.6));
        }

        .medal-circle {
          fill: url(#medalGradient);
          stroke: gold;
          stroke-width: 5;
          filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.7));
        }

        .medal-inner {
          fill: #666666;
          stroke: #aaa;
          stroke-width: 2;
        }

        .ribbon-left,
        .ribbon-right {
          fill: #444;
          stroke: gold;
          stroke-width: 2;
          filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.5));
        }

        /* Shimmer effect */
        .shimmer {
          animation: shimmerMove 3.5s linear infinite;
          transform-origin: 90px 90px;
        }

        @keyframes shimmerMove {
          0% {
            transform: rotate(0deg);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.6;
          }
        }
      `}</style>

      <div className="achievement-container">
        <svg viewBox="0 0 180 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="medalGradient" cx="0.5" cy="0.5" r="0.6">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="60%" stopColor="#8c7a1c" />
              <stop offset="100%" stopColor="#554d10" />
            </radialGradient>

            <linearGradient id="shimmerGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Left ribbon */}
          <path
            className="ribbon-left"
            d="M30 10 L60 70 L40 80 L10 20 Z"
          />

          {/* Right ribbon */}
          <path
            className="ribbon-right"
            d="M150 10 L120 70 L140 80 L170 20 Z"
          />

          {/* Medal circle */}
          <circle className="medal-circle" cx="90" cy="100" r="70" />

          {/* Inner circle for depth */}
          <circle className="medal-inner" cx="90" cy="100" r="55" />

          {/* Shimmer overlay as a rotated ellipse with gradient fill */}
          <ellipse
            className="shimmer"
            cx="90"
            cy="100"
            rx="70"
            ry="30"
            fill="url(#shimmerGradient)"
          />
        </svg>
      </div>
    </>
  );
};

export default AnimationAchievement;
