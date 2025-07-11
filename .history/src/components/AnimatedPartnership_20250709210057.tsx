import React from "react";

const AnimatedPartnership: React.FC = () => {
  return (
    <>
      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #0f1011;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        svg {
          width: 760px;
          height: 380px;
          overflow: visible;
        }

        /* Cable drawing animation */
        #cablePath {
          stroke-dasharray: 1100;
          stroke-dashoffset: 1100;
          animation: draw 1.4s 0.4s forwards ease-in-out;
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
        viewBox="0 0 760 380"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Laptop connected to mobile phone via cable"
      >
        <defs>
          <linearGradient id="cableGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#888888" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>

        {/* Laptop (left) */}
        <g className="device" aria-label="Laptop" transform="translate(60,110)">
          {/* Screen */}
          <rect
            x={0}
            y={0}
            width={260}
            height={150}
            rx={10}
            fill="#101215"
            stroke="#333"
            strokeWidth={2}
          />
          {/* Bezel shine */}
          <rect x={4} y={4} width={252} height={142} rx={8} fill="#1A1C1F" />
          {/* Keyboard base */}
          <rect x={-20} y={150} width={300} height={20} rx={4} fill="#888888" />
          {/* Trackpad */}
          <rect x={100} y={115} width={60} height={35} rx={6} fill="#2b2d30" />
        </g>

        {/* Mobile phone (smaller, closer to laptop) */}
        <g className="device" aria-label="Mobile phone" transform="translate(340,150) scale(0.85)">
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
          />
          {/* Screen */}
          <rect x={10} y={25} width={90} height={140} rx={12} fill="#101215" />
          {/* Home indicator */}
          <rect x={45} y={175} width={20} height={4} rx={2} fill="#BDA300" />
        </g>

        {/* Cable path (from laptop bottom center to mobile bottom center) */}
        <path
          id="cablePath"
          d="M190 280 C260 360, 380 360, 430 330"
          stroke="url(#cableGrad)"
          strokeWidth={8}
          fill="none"
          strokeLinecap="round"
        />

        {/* Overlay for moving dashes to simulate data flow */}
        <path
          id="pulsePath"
          d="M190 280 C260 360, 380 360, 430 330"
          stroke="url(#cableGrad)"
          strokeWidth={8}
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default AnimatedPartnership;
