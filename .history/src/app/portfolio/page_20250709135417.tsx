
'use client';

import { ProjectCard } from '@/components/portfolio/ProjectCard';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allProjects } from '@/lib/projects';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const layoutConfig = [
    { class: 'md:col-span-7', delay: 0 },
    { class: 'md:col-span-5', delay: 0.1 },
    { class: 'md:col-span-5', delay: 0 },
    { class: 'md:col-span-7', delay: 0.1 },
    { class: 'md:col-span-12', delay: 0 },
    { class: 'md:col-span-6', delay: 0 },
    { class: 'md:col-span-6', delay: 0.1 },
    { class: 'md:col-span-8', delay: 0 },
    { class: 'md:col-span-4', delay: 0.1 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectCards = gsap.utils.toArray<HTMLElement>('.project-card-item');
      
      projectCards.forEach((card) => {
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            y: 80,
            scale: 0.95
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: parseFloat(card.dataset.delay || '0'),
            ease: 'power4.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore a selection of projects that showcase our passion for creating impactful digital solutions. Each card is a live preview of the actual website.
        </p>
      </div>

      <div ref={containerRef} className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {allProjects.map((project, index) => {
            const config = layoutConfig[index % layoutConfig.length];
            return (
              <div 
                key={project.slug} 
                className={cn(
                  'project-card-item',
                   config.class
                )}
                data-delay={config.delay}
              >
                <ProjectCard 
                  project={project} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
