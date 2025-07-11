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
  className="flex flex-col items-center bg-background py-32 space-y-28"
>
  {allProjects.map((project) => (
    <div
      key={project.slug}
      className="project-wrapper w-[95vw] max-w-7xl flex flex-col md:flex-row items-center gap-10"
    >
      {/* LEFT: larger image box */}
      <div className="iframe-box w-full md:w-2/3 h-[500px] bg-card border border-border rounded-2xl overflow-hidden relative pointer-events-none select-none">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* RIGHT: centered text section */}
 <div className="project-details w-full md:flex-1 flex flex-col justify-center text-left">
  <h2 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h2>
  <div className="flex flex-wrap gap-2 mb-3">
    {project.tags.map((tag) => (
      <Badge key={tag} variant="secondary" className="text-sm px-2 py-1">
        {tag}
      </Badge>
    ))}
  </div>
  <p className="text-muted-foreground text-sm md:text-base mb-5 max-w-md">
    {project.longDescription}
  </p>
  <Button asChild variant="outline" size="sm" className="text-sm px-4 py-2 w-fit">
    <Link href={`/portfolio/${project.slug}`}>
      View Live Project <ArrowRight className="ml-1 w-4 h-4" />
    </Link>
  </Button>
</div>

    </div>
  ))}
</div>


  );
}
