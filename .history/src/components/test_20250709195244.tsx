'use client';

import React from 'react';

const ResearchDevelopmentGraph: React.FC = () => {
  return (
    <>
      <style jsx>{`
        svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.6));
        }

        /* Shared line styles */
        .rd-line {
          stroke-width: 3;
          fill: none;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 760;
          stroke-dashoffset: 760;
          animation: drawLine 6s forwards ease-in-out;
        }

        .research-line {
          stroke: url(#researchGradient);
        }
        .dev-line {
          stroke: url(#devGradient);
          transform: translateY(48px); /* slightly lower track for Dev */
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        .moving-ball {
          r: 5;
        }
        .research-glow {
          fill: url(#glowResearch);
          opacity: 0.7;
        }
        .dev-glow {
          fill: url(#glowDev);
          opacity: 0.7;
        }
      `}</style>

      <svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Ball glow gradients */}
          <radialGradient id="glowResearch" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowDev" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#32CD32" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#32CD32" stopOpacity="0" />
          </radialGradient>

          {/* Stroke gradients */}
          <linearGradient id="researchGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
            <stop offset="10%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#00BFFF" />
          </linearGradient>
          <linearGradient id="devGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#32CD32" stopOpacity="0" />
            <stop offset="10%" stopColor="#32CD32" />
            <stop offset="100%" stopColor="#32CD32" />
          </linearGradient>
        </defs>

        {/* Research path (upper) */}
        <path
          id="researchPath"
          className="rd-line research-line"
          d="
            M40 200
            C90 190, 140 170, 190 200
            S260 250, 310 210
            C360 170, 410 150, 460 180
            S540 230, 600 180
          "
        />

        {/* Development path (lower) */}
        <path
          id="devPath"
          className="rd-line dev-line"
          d="
            M40 200
            C80 240, 120 270, 170 240
            S240 160, 300 220
            C350 260, 420 280, 510 250
            S590 220, 600 260
          "
        />

        {/* Research moving ball + glow */}
        <circle className="moving-ball" fill="#00BFFF" r={5}>
          <animateMotion dur="4s" repeatCount="1" fill="freeze">
            <mpath href="#researchPath" />
          </animateMotion>
        </circle>
        <circle className="moving-ball research-glow" r={5}>
          <animateMotion dur="4s" repeatCount="1" fill="freeze">
            <mpath href="#researchPath" />
          </animateMotion>
        </circle>

        {/* Development moving ball + glow */}
        <circle
          className="moving-ball"
          fill="#32CD32"
          r={5}
          transform="translate(0, 48)"
        >
          <animateMotion dur="4s" repeatCount="1" fill="freeze">
            <mpath href="#devPath" />
          </animateMotion>
        </circle>
        <circle
          className="moving-ball dev-glow"
          r={5}
          transform="translate(0, 48)"
        >
          <animateMotion dur="4s" repeatCount="1" fill="freeze">
            <mpath href="#devPath" />
          </animateMotion>
        </circle>
      </svg>
    </>
  );
};

export default ResearchDevelopmentGraph;
