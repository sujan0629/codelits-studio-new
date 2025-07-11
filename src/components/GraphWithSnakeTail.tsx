import React from "react";

const GraphWithSnakeTail: React.FC = () => {
  return (
    <>
      <style jsx>{`
        svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.6));
        }

        .grey-line,
        .gold-line {
          stroke-width: 3;
          fill: none;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 720;
          stroke-dashoffset: 720;
          animation: drawLine 5s forwards ease-in-out;
        }

        .grey-line {
          stroke: url(#greyGradient);
          transform: translateY(45px);
        }

        .gold-line {
          stroke: url(#goldGradient);
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        .moving-ball {
          r: 5;
        }

        .gold-glow {
          fill: url(#glowGold);
          opacity: 0.7;
        }

        .grey-glow {
          fill: url(#glowGrey);
          opacity: 0.7;
        }
      `}</style>

      <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradients for glow */}
          <radialGradient id="glowGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowGrey" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#888888" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#888888" stopOpacity="0" />
          </radialGradient>

          {/* Stroke gradient */}
          <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
            <stop offset="10%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="greyGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#888888" stopOpacity="0" />
            <stop offset="10%" stopColor="#888888" stopOpacity="1" />
            <stop offset="100%" stopColor="#888888" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Paths */}
        <path
          id="greyPath"
          className="grey-line"
          d="
            M50 160
            C90 175, 130 155, 180 145
            S240 160, 290 140
            C320 155, 360 135, 410 145
            S470 140, 510 120
            S550 90, 550 50
          "
        />

        <path
          id="goldPath"
          className="gold-line"
          d="
            M50 160
            C70 140, 90 170, 110 140
            S130 170, 150 140
            C180 130, 230 130, 310 120
            S390 100, 450 60
            S510 40, 550 30
          "
        />

        {/* Gold ball */}
        <circle className="moving-ball" fill="#FFD700" r={5}>
          <animateMotion dur="3s" repeatCount="1" fill="freeze">
            <mpath href="#goldPath" />
          </animateMotion>
        </circle>
        <circle className="moving-ball gold-glow" r={5}>
          <animateMotion dur="3s" repeatCount="1" fill="freeze">
            <mpath href="#goldPath" />
          </animateMotion>
        </circle>

        {/* Grey ball */}
        <circle className="moving-ball" fill="#888888" r={5} transform="translate(0, 45)">
          <animateMotion dur="3s" repeatCount="1" fill="freeze">
            <mpath href="#greyPath" />
          </animateMotion>
        </circle>
        <circle className="moving-ball grey-glow" r={5} transform="translate(0, 45)">
          <animateMotion dur="3s" repeatCount="1" fill="freeze">
            <mpath href="#greyPath" />
          </animateMotion>
        </circle>
      </svg>
    </>
  );
};

export default GraphWithSnakeTail;
