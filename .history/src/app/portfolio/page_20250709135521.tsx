'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.project-section');

      sections.forEach((section) => {
        const details = section.querySelector('.project-details');

        // Fade details in when section enters viewport, fade out when leaving
        gsap.fromTo(details, 
          { autoAlpha: 0, y: 30 }, 
          { 
            autoAlpha: 1, 
            y: 0,
            ease: 'power3.out',
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top center',
              end: 'bottom center',
              toggleActions: 'play reverse play reverse',
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-y-scroll scroll-snap-y mandatory"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {allProjects.map((project) => (
        <section
          key={project.slug}
          className="project-section snap-start flex h-screen w-full"
        >
          {/* Left: iframe preview */}
          <div className="w-1/2 h-full relative pointer-events-none select-none">
            <iframe
              src={project.link}
              title={project.title}
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-full border-0"
              loading="lazy"
            />
            {/* Optional overlay to block interactions */}
            <div className="absolute inset-0" style={{pointerEvents: 'none'}} />
          </div>

          {/* Right: Project Details */}
          <div className="w-1/2 flex flex-col justify-center p-12">
            <div className="project-details opacity-0">
              <h2 className="text-5xl font-bold mb-6">{project.title}</h2>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">{project.longDescription}</p>
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
