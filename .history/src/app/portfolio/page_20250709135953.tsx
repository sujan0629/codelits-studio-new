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

export default function PortfolioFadeCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // For each section, fade its .project-wrapper in when it enters, out when leaving
      allProjects.forEach((_, i) => {
        const triggerEl = containerRef.current!.querySelectorAll('section')[i] as HTMLElement;
        const wrapper = triggerEl.querySelector('.project-wrapper') as HTMLElement;

        gsap.set(wrapper, { autoAlpha: 0 });
        gsap.to(wrapper, {
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top center',
            end: 'bottom center',
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
      className="overflow-y-scroll h-screen"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {allProjects.map((project) => (
        <section
          key={project.slug}
          className="h-screen flex items-center justify-center"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className="project-wrapper w-[90vw] max-w-6xl bg-card border border-border rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            {/* LEFT: boxed iframe */}
            <div className="iframe-box w-full md:w-1/2 h-64 md:h-[400px] rounded-xl overflow-hidden relative pointer-events-none select-none border">
              <iframe
                src={project.link}
                title={project.title}
                className="w-full h-full"
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            {/* RIGHT: details outside the iframe box */}
            <div className="project-details w-full md:w-1/2 px-0 md:px-8 pt-8 md:pt-0 flex flex-col justify-center">
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
        </section>
      ))}
    </div>
  );
}
