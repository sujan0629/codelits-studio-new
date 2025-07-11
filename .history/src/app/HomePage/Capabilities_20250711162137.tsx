'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SoftwareDevelopmentIcon,
  MonitoringMaintenanceIcon,
  UxUiDesignIcon,
} from '@/components/icons';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    title: 'Manage projects end-to-end',
    description:
      'Consolidate specs, milestones, tasks, and other documentation in one centralized location.',
    imgSrc: 'https://placehold.co/800x600?text=Manage+Projects',
    alt: 'Manage projects illustration',
    Icon: SoftwareDevelopmentIcon,
  },
  {
    title: 'Project updates',
    description: 'Communicate progress and project health with built-in project updates.',
    imgSrc: 'https://placehold.co/800x600?text=Updates',
    alt: 'Project updates illustration',
    Icon: MonitoringMaintenanceIcon,
  },
  {
    title: 'Ideation & prototyping',
    description:
      'Turn insights into action by sketching out your next big features in context.',
    imgSrc: 'https://placehold.co/800x600?text=Ideation',
    alt: 'Ideation illustration',
    Icon: UxUiDesignIcon,
  },
];

export default function Capabilities() {
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="direction-label inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Expertise across every digital frontier</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-6">
            Our Capabilities
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            From strategy to execution, we offer a full spectrum of digital solutions — blending creativity, technology, and business insight to bring your ideas to life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {features.map((feature, idx) => (
            <div key={idx} className="feature space-y-4 text-left">
              <div className="flex items-center gap-2 text-primary">
                <feature.Icon />
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
              <div className="img mt-4 aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-lg bg-muted">
                <Image
                  src={feature.imgSrc}
                  alt={feature.alt}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}

          {/* Vertical divider for md+ */}
          <div className="hidden md:block absolute left-1/2 w-[2px] bg-[#1e2020] rounded-full top-0 bottom-0 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
