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
  const scrollProxyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollProxyRef.current) return;

    const wrappers = gsap.utils.toArray<HTMLElement>('.project-wrapper');
    const total = wrappers.length;
    const viewportHeight = window.innerHeight;

    // Setup initial state: all hidden except first
    gsap.set(wrappers, {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      autoAlpha: 0,
      rotationX: 0,
      transformOrigin: '50% 50% -250px',
      backfaceVisibility: 'hidden',
    });
    gsap.set(wrappers[0], { autoAlpha: 1 });

    // Kill old triggers if any
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // For each project, create a ScrollTrigger that fires once per section
    wrappers.forEach((wrapper, i) => {
      ScrollTrigger.create({
        trigger: scrollProxyRef.current,
        start: () => viewportHeight * i + ' top',
        end: () => viewportHeight * (i + 1) + ' top',
        onEnter: () => {
          // Show this project instantly with spin
          gsap.set(wrappers, { autoAlpha: 0 });
          gsap.set(wrappers, { rotationX: 0 });
          gsap.set(wrapper, { autoAlpha: 1, rotationX: 360 });
          gsap.to(wrapper, { rotationX: 0, duration: 0.3, ease: 'power1.out' });
        },
        onEnterBack: () => {
          // Same animation when scrolling back
          gsap.set(wrappers, { autoAlpha: 0 });
          gsap.set(wrappers, { rotationX: 0 });
          gsap.set(wrapper, { autoAlpha: 1, rotationX: 360 });
          gsap.to(wrapper, { rotationX: 0, duration: 0.3, ease: 'power1.out' });
        },
        onLeave: () => {
          gsap.set(wrapper, { autoAlpha: 0 });
        },
        onLeaveBack: () => {
          gsap.set(wrapper, { autoAlpha: 0 });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Scroll space */}
      <div
        ref={scrollProxyRef}
        style={{ height: `${window.innerHeight * allProjects.length}px` }}
      />
      {/* Pinned container with perspective */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-background"
        style={{ pointerEvents: 'none', perspective: '1500px' }}
      >
        {allProjects.map((project) => (
          <div
            key={project.slug}
            className="project-wrapper flex flex-col md:flex-row items-center justify-center gap-10 px-10 h-full pointer-events-auto"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Image */}
            <div className="w-full md:w-2/3 h-[500px] bg-card border border-border rounded-2xl overflow-hidden relative select-none">
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
    </>
  );
}
