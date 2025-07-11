import React from "react";

const AnimatedPartnership: React.FC = () => {
  return (
    <>
      <style jsx>{`
    

        /* Cable drawing animation */
        #cablePath {
          stroke-dasharray: 450;
          stroke-dashoffset: 450;
          animation: draw 1.4s 0.4s forwards ease-in-out;
          stroke: url(#cableGrad);
          stroke-width: 4;
          fill: none;
          stroke-linecap: round;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Pulse overlay */
        #pulsePath {
          stroke-dasharray: 18 14;
          stroke-dashoffset: 0;
          opacity: 0;
          animation: fadeIn 0.1s 1.8s forwards, pulse 1.6s 1.8s linear infinite;
          stroke: url(#cableGrad);
          stroke-width: 4;
          fill: none;
          stroke-linecap: round;
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
        viewBox="0 0 380 300"
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
        <g className="device" aria-label="Laptop" transform="translate(60,110)">
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
          <rect x={4} y={4} width={252} height={142} rx={8} fill="#1A1C1F" />
          <rect x={-20} y={150} width={300} height={20} rx={4} fill="#888888" />
          <rect x={100} y={115} width={60} height={35} rx={6} fill="#2b2d30" />
        </g>

        {/* Mobile phone (smaller, closer to laptop) */}
        <g className="device" aria-label="Mobile phone" transform="translate(320,110) scale(0.85)">
          <rect
            x={0}
            y={0}
            width={80}
            height={160}
            rx={24}
            ry={24}
            fill="#121212"
            stroke="#444"
            strokeWidth={2}
          />
          <rect x={8} y={15} width={64} height={130} rx={16} ry={16} fill="#0F1113" />
          <rect x={30} y={5} width={20} height={4} rx={2} ry={2} fill="#666" />
          <circle cx={70} cy={10} r={4} fill="#222" />
          <rect x={-4} y={40} width={3} height={30} rx={1.5} ry={1.5} fill="#333" />
          <rect x={-4} y={80} width={3} height={20} rx={1.5} ry={1.5} fill="#333" />
        </g>

        {/* Cable path connecting bottom center of laptop to bottom center of phone */}
<path
  id="cablePath"
d="M190 280 C240 320, 340 220, 380 267"
/>
<path
  id="pulsePath"
d="M190 280 C240 320, 340 220, 380 267"
/>
<path
  id="glowFlow"
d="M190 280 C240 320, 340 220, 380 267"
/>
      </svg>
    </>
  );
};

export default AnimatedPartnership;
