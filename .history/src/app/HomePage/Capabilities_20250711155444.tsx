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
      className="py-20 bg-white text-gray-900"
    >
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="feature space-y-4 text-left">
            <h3 className="text-2xl font-bold">
              Manage projects end-to-end
            </h3>
            <p className="text-gray-600">
              Consolidate specs, milestones, tasks, and other documentation in one centralized location.
            </p>
            <div className="img mt-4 aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow">
              <Image
                src="/screenshots/project-overview.png"
                alt="Project Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gray-200 transform -translate-x-1"></div>

          <div className="feature space-y-4 text-left md:text-right">
            <h3 className="text-2xl font-bold">
              Project updates
            </h3>
            <p className="text-gray-600">
              Communicate progress and project health with built-in project updates.
            </p>
            <div className="img mt-4 aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow">
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
        <div className="w-full h-px bg-gray-200"></div>

        {/* Bottom single block */}
        <div className="feature grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold">
              Ideate and specify what to build next
            </h3>
            <p className="text-gray-600">
              Turn insights into action by sketching out your next big features in context.
            </p>
          </div>
          <div className="img aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow">
            <Image
              src="/screenshots/ideation.png"
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
