'use client';

import React from 'react';

const AnimatedAtom: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .atom-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        svg {
          width: 300px;
          height: 300px;
        }

        .orbit {
          fill: none;
          stroke: rgba(255, 255, 255, 0.2);
          stroke-width: 1.2;
        }

        .electron {
          fill: #00BFFF;
        }

        .electron-glow {
          fill: #00BFFF;
          filter: blur(3px);
          opacity: 0.5;
        }

        .spin-x {
          animation: spinX 6s linear infinite;
          transform-origin: 50% 50%;
        }

        .spin-y {
          animation: spinY 8s linear infinite;
          transform-origin: 50% 50%;
        }

        .spin-z {
          animation: spinZ 10s linear infinite;
          transform-origin: 50% 50%;
        }

        @keyframes spinX {
          100% {
            transform: rotateX(360deg) rotateZ(360deg);
          }
        }

        @keyframes spinY {
          100% {
            transform: rotateY(360deg) rotateZ(360deg);
          }
        }

        @keyframes spinZ {
          100% {
            transform: rotateZ(360deg);
          }
        }

        .nucleus {
          fill: #FFD700;
          filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.6));
        }
      `}</style>

      <div className="atom-container">
        <svg viewBox="0 0 200 200">
          {/* Nucleus */}
          <circle className="nucleus" cx="100" cy="100" r="8" />

          {/* Orbit 1 (Z-axis spin) */}
          <g className="spin-z">
            <ellipse className="orbit" cx="100" cy="100" rx="60" ry="20" />
            <circle className="electron" cx="160" cy="100" r="4" />
            <circle className="electron-glow" cx="160" cy="100" r="4" />
          </g>

          {/* Orbit 2 (X-axis mimic) */}
          <g className="spin-x">
            <ellipse className="orbit" cx="100" cy="100" rx="60" ry="20" transform="rotate(60 100 100)" />
            <circle className="electron" cx="160" cy="100" r="4" />
            <circle className="electron-glow" cx="160" cy="100" r="4" />
          </g>

          {/* Orbit 3 (Y-axis mimic) */}
          <g className="spin-y">
            <ellipse className="orbit" cx="100" cy="100" rx="60" ry="20" transform="rotate(-60 100 100)" />
            <circle className="electron" cx="160" cy="100" r="4" />
            <circle className="electron-glow" cx="160" cy="100" r="4" />
          </g>
        </svg>
      </div>
    </>
  );
};

export default AnimatedAtom;
