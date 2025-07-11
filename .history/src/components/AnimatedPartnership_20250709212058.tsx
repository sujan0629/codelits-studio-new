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
          {/* Gradient for cable */}
          <linearGradient id="cableGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#888888" />
            <stop offset="
