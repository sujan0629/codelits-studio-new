'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SoftwareDevelopmentIcon,
  MonitoringMaintenanceIcon,
  UxUiDesignIcon,
} from '@/components/icons/service-icons';

gsap.registerPlugin(ScrollTrigger);

// Define a type for features
type Feature = {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  Icon?: React.ReactNode;
  align?: 'left' | 'right'; // for text alignment
};

// Content array for the features
const features: Feature[] = [
  {
    title: 'Manage projects end-to-end',
    description: 'Consolidate specs, milestones, tasks, and other documentation in one centralized location.',
    imgSrc: 'https://placehold.co/800x600?text=Project+Updates',
    imgAlt: 'Project Updates',
    Icon: <SoftwareDevelopmentIcon />,
    align: 'left',
  },
  {
    title: 'Project updates',
    description: 'Communicate progress and project health with built-in project updates.',
    imgSrc: 'https://placehold.co/800x600?text=Project+Updates',
    imgAlt: 'Project Updates',
    align: 'right',
  },
  {
    title: 'Ideate and specify what to build next',
    description: 'Turn insights into action by sketching out your next big features in context.',
    imgSrc: 'https://placehold.co/800x600?text=Project+Updates',
    imgAlt: 'Project Updates',
    align: 'left',
  },
];

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
    <section ref={sectionRef} className="py-20 bg-background text-white">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        {/* Top row */}
        <div className="text-center mb-16">
          <div className="direction-label inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Expertise across every digital frontier</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-6">
            Our Capabilities
          </h2>
          <p className="mt-4 mb-28 max-w-2xl mx-auto text-muted-foreground">
            From strategy to execution, we offer a full spectrum of digital solutions — blending creativity, technology, and business insight to bring your ideas to life.
          </p>
        </div>

        <div className="relative">
          {/* First two features side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
{features.slice(0, 2).map(({ title, description, imgSrc, imgAlt, Icon }, i) => (
  <div key={i} className="feature space-y-4 text-left">
<h3 className="text-xl font-bold flex items-center gap-2">
      {Icon && <span>{Icon}</span>}
      <span>{title}</span>
    </h3>
    <p className="text-gray-400">{description}</p>
    <div className="img mt-4 aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-lg bg-muted">
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  </div>
))}
          </div>

          {/* Vertical divider */}
          <div
            className="hidden md:block absolute left-1/2 w-[2px] bg-[#1e2020] rounded-full
                       -translate-x-1/2 top-[-45px] bottom-[-45px]"
          ></div>
        </div>

        {/* Horizontal divider */}
        <div className="w-full h-[2px] bg-[#1e2020] relative rounded-full">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#1e2020] rounded-full transform -translate-x-1/2"></div>
        </div>

        {/* Bottom Block */}
        <div className="feature grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-12">
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold">{features[2].title}</h3>
            <p className="text-gray-400">{features[2].description}</p>
          </div>
          <div className="img mt-4 aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-lg bg-muted">
            <Image
              src={features[2].imgSrc}
              alt={features[2].imgAlt}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
