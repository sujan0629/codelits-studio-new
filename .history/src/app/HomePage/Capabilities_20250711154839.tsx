// app/HomePage/Capabilities.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import {
  UxUiDesignIcon,
  WebDevIcon,
  MobileAppDevIcon,
  DigitalMarketingIcon,
  EcomIcon,
  SeoContentStrategyIcon,
  AiMlIcon,
  SoftwareDevelopmentIcon,
  WebDesignIcon,
  CloudDevOpsIcon,
} from '@/components/icons/service-icons';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    label: 'Design & Experience',
    services: [
      { icon: UxUiDesignIcon, title: 'UI/UX Design' },
      { icon: WebDesignIcon, title: 'Web Design' },
    ],
  },
  {
    label: 'Engineering & Development',
    services: [
      { icon: WebDevIcon, title: 'Web Development' },
      { icon: MobileAppDevIcon, title: 'Mobile Apps' },
      { icon: SoftwareDevelopmentIcon, title: 'Custom Software' },
    ],
  },
  {
    label: 'Marketing & Growth',
    services: [
      { icon: DigitalMarketingIcon, title: 'Digital Marketing' },
      { icon: SeoContentStrategyIcon, title: 'SEO Strategy' },
    ],
  },
  {
    label: 'Innovation & Infrastructure',
    services: [
      { icon: AiMlIcon, title: 'AI / ML' },
      { icon: CloudDevOpsIcon, title: 'Cloud & DevOps' },
    ],
  },
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.capability-block',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Multi-Disciplinary Strength</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mt-6">Capabilities That Set Us Apart</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We're not just service providers — we’re digital problem solvers. Our expertise bridges design, code, data, and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {categories.map(({ label, services }) => (
            <div key={label} className="capability-block">
              <h3 className="font-semibold text-xl mb-4 text-primary">{label}</h3>
              <div className="space-y-4">
                {services.map(({ icon: Icon, title }) => (
                  <div key={title} className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-2 rounded-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-base font-medium text-foreground">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="capabilities-image relative aspect-square hidden md:block">
            <Image
              src="https://placehold.co/800x800.png"
              alt="Capabilities illustration"
              width={800}
              height={800}
              className="rounded-2xl object-cover w-full h-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}