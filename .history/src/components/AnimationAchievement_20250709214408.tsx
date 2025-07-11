'use client';

import React from 'react';

const AnimationAchievement: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .achievement-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 2rem;
          background: #121212; /* dark background for glow contrast */
        }

        .medal {
          position: relative;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle at center, #555555 40%, #222222 95%);
          border: 6px solid gold;
          border-radius: 50%;
          box-shadow:
            0 0 25px rgba(255, 215, 0, 0.6),
            inset 0 0 15px rgba(255, 215, 0, 0.3);
          overflow: hidden;
          cursor: default;
        }

        .center-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3.5rem;
          color: gold;
          z-index: 2;
          text-shadow:
            0 0 5px #ffd700,
            0 0 10px #ffd700;
          user-select: none;
        }

        /* Shimmer effect container */
        .shimmer {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background:
            linear-gradient(
              120deg,
              rgba(255, 255, 255, 0) 30%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0) 70%
            );
          animation: shimmerMove 3.5s ease-in-out infinite;
          pointer-events: none;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.7));
          transform-origin: center;
          border-radius: 50%;
          mix-blend-mode: screen;
          z-index: 3;
        }

        @keyframes shimmerMove {
          0% {
            transform: rotate(0deg) translateX(-100%) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: rotate(360deg) translateX(100%) rotate(-360deg);
            opacity: 0.3;
          }
        }

        .label {
          margin-top: 1rem;
          font-weight: 600;
          font-size: 1.25rem;
          color: #ddd;
          text-shadow: 0 0 6px rgba(255, 215, 0, 0.6);
          user-select: none;
        }
      `}</style>

      <div className="achievement-container">
        <div className="medal">
          <div className="shimmer" />
          <div className="center-icon">🏆</div>
        </div>
        <p className="label">Achievement Unlocked</p>
      </div>
    </>
  );
};

export default AnimationAchievement;
