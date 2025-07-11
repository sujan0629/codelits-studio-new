'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { AtomLoader } from '@/components/decoration/AtomLoader';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedProjects, setLoadedProjects] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectSections = gsap.utils.toArray<HTMLElement>('.project-section');
      
      projectSections.forEach((section) => {
        const preview = section.querySelector('.project-preview');
        const details = section.querySelectorAll('.project-details > *');
        
        gsap.fromTo(preview,
          { opacity: 0, x: section.classList.contains('md:order-last-container') ? 100 : -100, scale: 0.95 },
          {
            opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play none none none',
            }
          }
        );

        gsap.fromTo(details,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleLoad = (slug: string) => {
    setLoadedProjects(prev => ({ ...prev, [slug]: true }));
  };

  return (
    <div ref={containerRef} className="portfolio-showcase-container">
      <div className="text-center max-w-3xl mx-auto py-16 md:py-24 px-4">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A curated selection of projects that define our commitment to excellence. Each one a story of collaboration and innovation.
        </p>
      </div>

      <div className="relative">
        {allProjects.map((project, index) => {
          const isLoaded = loadedProjects[project.slug];
          const canBeIframed = !project.link.includes('google.com');

          return (
            <section 
              key={project.slug} 
              className={cn(
                "project-section relative min-h-screen w-full flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden",
                index % 2 !== 0 ? 'md:order-last-container' : ''
              )}
              style={{ backgroundColor: index % 2 === 0 ? 'hsl(var(--background))' : 'hsl(var(--card) / 0.5)' }}
            >
              <div className="grid md:grid-cols-10 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
                <div className={cn(
                    "project-preview relative aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden group bg-muted md:col-span-6",
                    index % 2 !== 0 ? 'md:order-last' : ''
                )}>
                  {canBeIframed ? (
                    <>
                      {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-muted">
                          <AtomLoader />
                        </div>
                      )}
                      <iframe
                        src={project.link}
                        title={project.title}
                        className={cn(
                          "w-full h-full border-0 pointer-events-none transition-opacity duration-1000",
                          isLoaded ? 'opacity-100' : 'opacity-0'
                        )}
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                        onLoad={() => handleLoad(project.slug)}
                      />
                    </>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover object-top"
                      data-ai-hint={project.hint}
                    />
                  )}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                <div className="project-details md:col-span-4">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 my-4">
                      {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                  </div>
                  <p className="text-muted-foreground text-base">{project.longDescription}</p>
                  <Button asChild variant="outline" size="lg" className="mt-8">
                      <Link href={`/portfolio/${project.slug}`}>View Live Project <ArrowRight className="ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  );
}
