'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { allProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioShowcaseBoxed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLElement>('.project-box');

      boxes.forEach((box, i) => {
        gsap.set(box, { opacity: 0, y: 50 });

        gsap.to(box, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: box,
            start: 'top center+=100',
            end: 'bottom center-=100',
            toggleActions: 'play reverse play reverse',
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center space-y-40 py-32 bg-background"
    >
      {allProjects.map((project, index) => (
        <section
          key={project.slug}
          className="project-box w-[90vw] max-w-6xl bg-card border border-border rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between opacity-0"
        >
          {/* Left: iframe in a box */}
          <div className="w-full md:w-1/2 h-64 md:h-[400px] rounded-xl overflow-hidden relative pointer-events-none select-none border">
            <iframe
              src={project.link}
              title={project.title}
              className="w-full h-full object-cover"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 px-0 md:px-8 pt-8 md:pt-0 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              {project.longDescription}
            </p>
            <Button asChild variant="outline">
              <Link href={`/portfolio/${project.slug}`}>
                View Live Project <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      ))}
    </div>
  );
}
