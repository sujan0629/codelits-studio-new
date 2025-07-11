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
  className="flex flex-col items-center bg-background py-40 space-y-40" // increased padding and spacing
>
  {allProjects.map((project) => (
    <div
      key={project.slug}
      className="project-wrapper w-[95vw] max-w-7xl flex items-start space-x-16" // wider layout, more spacing
    >
      {/* LEFT: only the iframe in a styled box */}
     <div className="iframe-box w-1/2 h-[480px] bg-card border border-border rounded-2xl overflow-hidden relative pointer-events-none select-none">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
</div>


      {/* RIGHT: details outside the box */}
      <div className="project-details flex-1 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h2> {/* increased */}
        <div className="flex flex-wrap gap-3 mb-5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-base px-3 py-1.5">{tag}</Badge> // slightly larger badges
          ))}
        </div>
        <p className="text-muted-foreground text-lg md:text-xl mb-8">
          {project.longDescription}
        </p>
        <Button asChild variant="outline" size="lg" className="text-lg px-6 py-3">
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
