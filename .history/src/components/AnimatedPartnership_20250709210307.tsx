import React from "react";

const AnimatedPartnership: React.FC = () => {
  return (
    <>
      <style jsx>{`
        svg {
          width: 380px;
          height: 190px;
          overflow: visible;
          display: block;
          margin: 0 auto;
        }

        /* Cable drawing animation */
        #cablePath {
          stroke-dasharray: 550;
          stroke-dashoffset: 550;
          animation: draw 1.4s 0.4s forwards ease-in-out;
          filter: drop-shadow(0 0 1px #FFD700);
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Data pulse overlay */
        #pulsePath {
          stroke-dasharray: 18 14;
          stroke-dashoffset: 0;
          opacity: 0;
          animation: fadeIn 0.1s 1.8s forwards, pulse 1.6s 1.8s linear infinite;
        }
        @keyframes pulse {
          to {
            stroke-dashoffset: -64;
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        /* Glowing flow effect */
        #glowFlow {
          stroke-dasharray: 40 100;
          stroke-dashoffset: 0;
          stroke: url(#glowGrad);
          stroke-width: 6;
          fill: none;
          stroke-linecap: round;
          filter: drop-shadow(0 0 6px #FFD700);
          animation: flow 2s linear infinite;
        }
        @keyframes flow {
          to {
            stroke-dashoffset: -140;
          }
        }

        /* Device subtle bounce */
        .device {
          transform-origin: center;
          animation: pop 0.6s ease-out;
        }
        @keyframes pop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
            opacity: 1;
          }
          80% {
            transform: scale(0.96);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>

      <svg
        viewBox="0 0 380 190"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Laptop connected to mobile phone via cable"
      >
        <defs>
          <linearGradient id="cableGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#888888" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>

          <linearGradient id="glowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Laptop (left) */}
        <g className="device" aria-label="Laptop" transform="translate(30,55)">
          {/* Screen */}
          <rect
            x={0}
            y={0}
            width={130}
            height={75}
            rx={5}
            fill="#101215"
            stroke="#333"
            strokeWidth={1}
          />
          {/* Bezel shine */}
          <rect x={2} y={2} width={126} height={71} rx={4} fill="#1A1C1F" />
          {/* Keyboard base */}
          <rect x={-10} y={75} width={150} height={10} rx={2} fill="#888888" />
          {/* Trackpad */}
          <rect x={50} y={57.5} width={30} height={17.5} rx={3} fill="#2b2d30" />
        </g>

        {/* Mobile phone (smaller, closer to laptop) */}
        <g className="device" aria-label="Mobile phone" transform="translate(170,75) scale(0.85)">
          {/* Body */}
          <rect
            x={0}
            y={0}
            width={110}
            height={200}
            rx={22}
            fill="#FFD700"
            stroke="#BDA300"
            strokeWidth={2}
            transform="scale(0.5)"
          />
          {/* Screen */}
          <rect x={20} y={12.5} width={45} height={70} rx={6} fill="#101215" transform="scale(0.5)" />
          {/* Home indicator */}
          <rect x={45} y={175} width={20} height={4} rx={2} fill="#BDA300" />
        </g>

        {/* Cable path (base) */}
        <path
          id="cablePath"
          d="M95 140 C130 180, 190 180, 215 165"
          stroke="url(#cableGrad)"
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
        />

        {/* Overlay for moving dashes to simulate data flow */}
        <path
          id="pulsePath"
          d="M95 140 C130 180, 190 180, 215 165"
          stroke="url(#cableGrad)"
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
        />

        {/* Glowing flow effect */}
        <path
          id="glowFlow"
          d="M95 140 C130 180, 190 180, 215 165"
        />
      </svg>
    </>
  );
};

export default AnimatedPartnership;
