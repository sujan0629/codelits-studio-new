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
      const sections = gsap.utils.toArray<HTMLElement>('.fade-project');

      sections.forEach((section, i) => {
        gsap.set(section, { opacity: 0 });

        gsap.to(section, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen" ref={containerRef}>
      {allProjects.map((project, index) => (
        <section
          key={project.slug}
          className="fade-project h-screen w-full absolute top-0 left-0 flex items-center justify-center"
          style={{ zIndex: allProjects.length - index }}
        >
          <div className="bg-card shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row w-[90vw] max-w-6xl h-[80vh]">
            {/* Left: Preview */}
            <div className="w-full md:w-1/2 h-64 md:h-full rounded-xl overflow-hidden relative pointer-events-none select-none">
              <iframe
                src={project.link}
                title={project.title}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin"
              />
              <div className="absolute inset-0 bg-black/10" />
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
              <p className="text-muted-foreground text-base md:text-lg mb-6">{project.longDescription}</p>
              <Button asChild variant="outline">
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
