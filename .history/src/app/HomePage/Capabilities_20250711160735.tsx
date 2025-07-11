// app/HomePage/LinearLayoutFeatures.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LinearLayoutFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blocks = sectionRef.current!.querySelectorAll('.feature');
    blocks.forEach((block) => {
      gsap.from(block.querySelector('.text'), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: block, start: 'top 85%' },
      });
      gsap.from(block.querySelector('.img'), {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: block, start: 'top 85%' },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background text-white"
    >
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="feature space-y-4 text-left">
            <h3 className="text-2xl font-bold">
              Manage projects end-to-end
            </h3>
            <p className="text-gray-400">
              Consolidate specs, milestones, tasks, and other documentation in one centralized location.
            </p>
            <div className="img mt-4 aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/screenshots/project-overview.png"
                alt="Project Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vertical divider */}
    <div
className="
   hidden md:block absolute left-1/2 w-[2px] bg-[#1e2020] rounded-full
    -translate-x-1/2
   top-[-16px] bottom-[-16px]
 "></div>          <div className="feature space-y-4 text-left md:text-right">
            <h3 className="text-2xl font-bold">
              Project updates
            </h3>
            <p className="text-gray-400">
              Communicate progress and project health with built-in project updates.
            </p>
            <div className="img mt-4 aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/screenshots/project-updates.png"
                alt="Project Updates"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="w-full h-[2px] bg-[#1e2020] relative rounded-full">
          {/* Extend vertical through */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#1e2020] rounded-full transform -translate-x-1/2"></div>
        </div>

        {/* Bottom single block */}
    <div className="feature grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-12">
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold">
              Ideate and specify what to build next
            </h3>
            <p className="text-gray-400">
              Turn insights into action by sketching out your next big features in context.
            </p>
          </div>
          <div className="img w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/ar.jpg"
              alt="Ideation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}