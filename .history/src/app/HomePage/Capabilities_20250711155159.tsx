// app/HomePage/LinearStyleFeature.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LinearStyleFeature() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      gsap.from(cardsRef.current?.children, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div ref={leftRef} className="space-y-4">
          <h3 className="text-sm font-medium uppercase text-primary">
            Manage projects end-to-end
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Consolidate specs, milestones, tasks, and other documentation in one centralized location.
          </h2>
        </div>

        {/* Right stacked cards */}
        <div className="relative w-full h-[400px] flex justify-center items-center">
          <div ref={cardsRef} className="absolute w-3/4 h-full">
            {['0','1','2'].map((_, i) => (
              <div
                key={i}
                className={`
                  absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden
                  bg-gray-900/50 border border-gray-700
                  transform
                  ${i === 0 ? 'translate-x-0 translate-y-0 z-30' : ''}
                  ${i === 1 ? '-translate-x-4 translate-y-6 z-20' : ''}
                  ${i === 2 ? '-translate-x-8 translate-y-12 z-10' : ''}
                `}
              >
                <Image
                  src={`/screenshots/feature-${i+1}.png`}
                  alt={`Screenshot ${i+1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
