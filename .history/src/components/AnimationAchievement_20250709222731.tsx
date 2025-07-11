import React from "react";

const GoldMedal: React.FC = () => {
  return (
    <>
      <style>{`


        .shimmer {
          animation: shimmer 3.5s infinite linear;
          transform-origin: center;
        }

        @keyframes shimmer {
          0%, 100% {
            filter: drop-shadow(0 0 3px rgba(255,255,255,0.3));
            opacity: 0.6;
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(255,255,255,0.8));
            opacity: 1;
          }
        }

        .swing {
          animation: swing 5s ease-in-out infinite;
          transform-origin: 110px 160px;
        }

        @keyframes swing {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
      `}</style>

      <div
        className="container"
        role="img"
        aria-label="Natural looking gold medal with cloth"
        style={{ overflow: "hidden", width: 220, height: 308, margin: "auto" }}
      >
        <svg
          viewBox="0 0 300 420"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <radialGradient id="goldGradient" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#7D6700" />
            </radialGradient>
            <radialGradient id="glow" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>

            {/* Clip path to cut off shadow overflow
            <clipPath id="clipCircle">
              <circle cx="150" cy="250" r="95" />
            </clipPath> */}

            {/* Drop shadow filter with tighter bounding box */}
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow
                dx="0"
                dy="6"
                stdDeviation="4"
                floodColor="#000"
                floodOpacity="0.25"
              />
            </filter>
          </defs>

          {/* Cloth ribbon */}
          <g>
            <path
              d="M110 0 C80 100, 80 120, 150 140 C220 120, 220 100, 190 0"
              fill="#3a3a3a"
              stroke="#bba14f"
              strokeWidth={1.5}
            />
            <path
              d="M115 10 C90 100, 90 110, 150 130 C210 110, 210 100, 185 10"
              fill="#e6c95e"
              opacity={0.2}
            />
          </g>

          {/* Medal with clipping and shadow */}
          <g
            className="swing"
            filter="url(#shadow)"
            clipPath="url(#clipCircle)"
          >
            <circle
              className="shimmer"
              cx={150}
              cy={250}
              r={90}
              fill="url(#goldGradient)"
            />
            <circle
              cx={150}
              cy={250}
              r={65}
              fill="#6e6e6e"
              stroke="#d4af37"
              strokeWidth={3}
            />
            <circle
              cx={150}
              cy={250}
              r={45}
              fill="url(#goldGradient)"
              stroke="#fff7b0"
              strokeWidth={3}
              opacity={0.9}
            />
            <g
              stroke="#fff8c8"
              strokeOpacity={0.7}
              strokeWidth={1.5}
              strokeLinecap="round"
            >
              <path d="M150 205 L150 295" />
              <path d="M125 215 L175 285" />
              <path d="M175 215 L125 285" />
              <path d="M110 250 L190 250" />
            </g>
            <ellipse
              className="shimmer"
              cx={150}
              cy={230}
              rx={80}
              ry={35}
              fill="url(#glow)"
              opacity={0.6}
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default GoldMedal;
