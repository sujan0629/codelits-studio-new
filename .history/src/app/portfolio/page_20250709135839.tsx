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

export default function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLElement>('.project-wrapper');

      boxes.forEach((wrapper) => {
        const box = wrapper.querySelector('.iframe-box')!;
        const details = wrapper.querySelector('.project-details')!;

        gsap.set([box, details], { autoAlpha: 0, y: 50 });

        // Fade in box and details together
        gsap.to([box, details], {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top center+=100',
            end: 'bottom center-=100',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center bg-background py-32 space-y-32"
    >
      {allProjects.map((project) => (
        <div
          key={project.slug}
          className="project-wrapper w-[90vw] max-w-6xl flex items-start space-x-12"
        >
          {/* LEFT: only the iframe in a styled box */}
          <div className="iframe-box w-1/2 h-[400px] bg-card border border-border rounded-2xl overflow-hidden relative pointer-events-none select-none">
            <iframe
              src={project.link}
              title={project.title}
              className="w-full h-full"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* RIGHT: details outside the box */}
          <div className="project-details flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              {project.longDescription}
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href={`/portfolio/${project.slug}`}>
                View Live Project <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
