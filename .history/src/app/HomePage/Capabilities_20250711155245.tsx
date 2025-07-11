// app/HomePage/LinearFeatures.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Manage projects end-to-end',
    subtitle: 'Consolidate specs, milestones, tasks, and other documentation in one centralized location.',
    image: '/screenshots/project-overview.png',
    layout: 'left'
  },
  {
    title: 'Project updates',
    subtitle: 'Communicate progress and project health with built-in project updates.',
    image: '/screenshots/project-updates.png',
    layout: 'right'
  },
  {
    title: 'Ideate and specify what to build next',
    subtitle: 'Turn insights into action by sketching out your next big features in context.',
    image: '/screenshots/ideation.png',
    layout: 'left'
  },
];

export default function LinearFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.feature-block').forEach((block: any, i) => {
        gsap.from(block.querySelector('.text'), {
          opacity: 0,
          x: block.dataset.layout === 'left' ? -50 : 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
          }
        });
        gsap.from(block.querySelector('.image'), {
          opacity: 0,
          y: 30,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 space-y-20">
        {features.map((f, i) => (
          <div
            key={i}
            className={`feature-block grid gap-8 items-center ${
              f.layout === 'right'
                ? 'md:grid-cols-[1fr,auto]'
                : 'md:grid-cols-[auto,1fr]'
            }`}
            data-layout={f.layout}
          >
            {/* TEXT */}
            <div className="text max-w-lg space-y-4">
              <h3 className="text-sm font-medium uppercase text-primary">
                {f.title}
              </h3>
              <p className="text-lg text-gray-300">
                {f.subtitle}
              </p>
            </div>

            {/* IMAGE */}
            <div className="image w-full max-w-md aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={f.image}
                alt={f.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
