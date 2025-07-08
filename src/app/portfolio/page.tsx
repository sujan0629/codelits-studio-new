
'use client';

import { ProjectCard } from '@/components/portfolio/ProjectCard';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allProjects } from '@/lib/projects';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore a selection of projects that showcase our passion for creating impactful digital solutions. Each card is a live preview of the actual website.
        </p>
      </div>

      <div ref={containerRef} className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {allProjects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              className={`project-card`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
