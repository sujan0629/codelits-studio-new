'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedPartnership: React.FC = () => {
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(
      leftHandRef.current,
      { x: '-150%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.2 }
    )
    .fromTo(
      rightHandRef.current,
      { x: '150%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.2 },
      '<' // start at same time as left hand
    )
    .to([leftHandRef.current, rightHandRef.current], {
      scale: 1.05,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-32 h-32">
        <svg
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g ref={leftHandRef}>
            <path
              d="M60,50 C40,40 40,60 60,50"
              fill="gray"
              stroke="gray"
              strokeWidth="5"
            />
            <rect x="30" y="40" width="20" height="20" fill="gray" rx="4" />
          </g>
          <g ref={rightHandRef}>
            <path
              d="M140,50 C160,40 160,60 140,50"
              fill="gold"
              stroke="gold"
              strokeWidth="5"
            />
            <rect x="150" y="40" width="20" height="20" fill="gold" rx="4" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedPartnership;
