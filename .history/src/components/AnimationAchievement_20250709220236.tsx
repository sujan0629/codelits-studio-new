import React from "react";

const GoldMedal: React.FC = () => {
  return (
    <>
      <style>{`

        svg {
          width: 300px;
          height: 420px;
        }
        .shimmer {
          animation: shimmer 3s infinite linear;
          transform-origin: center;
        }
        @keyframes shimmer {
          0%   { filter: drop-shadow(0 0 2px rgba(255,255,255,0.25)); }
          50%  { filter: drop-shadow(0 0 6px rgba(255,255,255,0.6)); }
          100% { filter: drop-shadow(0 0 2px rgba(255,255,255,0.25)); }
        }
        .swing {
          animation: swing 4s ease-in-out infinite;
          transform-origin: 150px 140px;
        }
        @keyframes swing {
          0%   { transform: rotate(-4deg); }
          50%  { transform: rotate(4deg);  }
          100% { transform: rotate(-4deg); }
        }
      `}</style>

      <div className="container" role="img" aria-label="Realistic gold medal with cloth">
        <svg viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="goldGradient" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="35%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8860B" />
            </radialGradient>
            <radialGradient id="glow" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Cloth ribbon */}
          <g filter="url(#shadow)">
            <path
              d="M110 0 C80 100, 80 120, 150 140 C220 120, 220 100, 190 0"
              fill="#2E2E2E"
              stroke="#444"
              strokeWidth={2}
            />
            <path
              d="M115 10 C90 100, 90 110, 150 130 C210 110, 210 100, 185 10"
              fill="#FFD700"
              opacity={0.25}
            />
          </g>

          {/* Medal */}
          <g className="swing">
            <circle
              className="shimmer"
              cx={150}
              cy={250}
              r={90}
              fill="url(#goldGradient)"
              filter="url(#shadow)"
            />
            <circle
              cx={150}
              cy={250}
              r={65}
              fill="url(#goldGradient)"
              stroke="#fff"
              strokeWidth={0.4}
            />
            <circle
              cx={150}
              cy={250}
              r={45}
              fill="url(#goldGradient)"
              stroke="#FFD700"
              strokeWidth={4}
            />
            <g stroke="#FFFFFF" strokeOpacity={0.2} strokeWidth={2}>
              <path d="M150 205 L150 295" />
              <path d="M125 215 L175 285" />
              <path d="M175 215 L125 285" />
              <path d="M110 250 L190 250" />
            </g>
            <circle
              className="shimmer"
              cx={150}
              cy={250}
              r={95}
              fill="url(#glow)"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default GoldMedal;
