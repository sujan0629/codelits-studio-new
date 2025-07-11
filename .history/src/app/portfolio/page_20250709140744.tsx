'use client';

import React, { useEffect, useRef } from 'react';
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
      const wrappers = gsap.utils.toArray<HTMLElement>('.project-wrapper');

      wrappers.forEach((section, i) => {
        gsap.set(section, { autoAlpha: i === 0 ? 1 : 0 }); // show only the first

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: () => `top top+=${i * window.innerHeight}`,
          end: () => `+=${window.innerHeight}`,
          scrub: 1.2, // buttery smooth
          pin: true,
          pinSpacing: false,
          onUpdate: (self) => {
            const progress = self.progress;

            wrappers.forEach((el, index) => {
              const distance = Math.abs(i - index);
              gsap.to(el, {
                autoAlpha: index === i ? 1 : 0,
                ease: 'power2.inOut',
                duration: 0.5,
              });
            });
          },
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {allProjects.map((project, index) => (
        <div
          key={project.slug}
          className="project-wrapper absolute top-0 left-0 w-full h-full opacity-0 flex flex-col md:flex-row items-center justify-center px-10 gap-10 transition-opacity duration-500 ease-in-out"
        >
          {/* Image */}
          <div className="w-full md:w-2/3 h-[500px] bg-card border border-border rounded-2xl overflow-hidden relative pointer-events-none select-none">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="w-full md:flex-1 flex flex-col justify-center text-left">
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
