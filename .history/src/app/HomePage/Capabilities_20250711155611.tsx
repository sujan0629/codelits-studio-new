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

const capabilities = [
  {
    icon: UxUiDesignIcon,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that users love.'
  },
  {
    icon: WebDevIcon,
    title: 'Web Development',
    description: 'Responsive, fast-loading websites with modern stacks and best practices.'
  },
  {
    icon: MobileAppDevIcon,
    title: 'Mobile App Development',
    description: 'Cross-platform apps that perform seamlessly on iOS and Android.'
  },
  {
    icon: DigitalMarketingIcon,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns tailored to boost your brand reach and ROI.'
  },
  {
    icon: EcomIcon,
    title: 'E-commerce Solutions',
    description: 'End-to-end solutions for scalable and secure online stores.'
  },
  {
    icon: SeoContentStrategyIcon,
    title: 'SEO & Content Strategy',
    description: 'Smart content strategies and technical SEO that drive traffic.'
  },
  {
    icon: AiMlIcon,
    title: 'AI & Machine Learning',
    description: 'Smart applications powered by machine learning and data science.'
  },
  {
    icon: SoftwareDevelopmentIcon,
    title: 'Custom Software Development',
    description: 'Tailored software that fits your unique business workflows.'
  },
  {
    icon: WebDesignIcon,
    title: 'Web Design',
    description: 'Visually engaging and functional designs for a flawless user experience.'
  },
  {
    icon: CloudDevOpsIcon,
    title: 'Cloud & DevOps',
    description: 'Efficient infrastructure and automation for modern cloud-native apps.'
  },
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.capability-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      gsap.fromTo('.capabilities-image',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
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
            <span>Expertise Across Digital Disciplines</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mt-6">Our Capabilities</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore a wide range of specialized services designed to elevate your digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="capability-item flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 leading-tight">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="capabilities-image relative aspect-square">
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
