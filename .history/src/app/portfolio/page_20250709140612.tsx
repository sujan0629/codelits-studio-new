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
      const sections = gsap.utils.toArray<HTMLElement>('.project-wrapper');

      gsap.set(sections, { position: 'absolute', top: 0, left: 0, width: '100%' });

      sections.forEach((section, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top top+=${index * window.innerHeight}`,
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(section, { autoAlpha: 1, duration: 1, ease: 'power2.out' })
          .to(section, { autoAlpha: 0, duration: 1, ease: 'power2.in' }, '+=0.5');
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-background"
    >
      {allProjects.map((project, index) => (
        <div
          key={project.slug}
          className="project-wrapper opacity-0 h-full flex flex-col md:flex-row items-center gap-10 px-10"
        >
          {/* LEFT: image */}
          <div className="iframe-box w-full md:w-2/3 h-[500px] bg-card border border-border rounded-2xl overflow-hidden relative pointer-events-none select-none">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* RIGHT: text */}
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
