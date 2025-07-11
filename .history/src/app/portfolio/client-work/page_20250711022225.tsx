'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AtomLoader } from '@/components/decoration/AtomLoader';
import { GridPattern } from '@/components/decoration/GridPattern';

gsap.registerPlugin(ScrollTrigger);

export default function ClientWorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectSections = gsap.utils.toArray<HTMLElement>('.project-section');
      
      projectSections.forEach((section) => {
        const preview = section.querySelector('.project-preview');
        const details = section.querySelectorAll('.project-details > *');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
          }
        });

        tl.fromTo(preview, 
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out' }
        )
        .fromTo(details,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power4.out' },
          "-=0.7"
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const clientProjects = allProjects.filter(p => p.category === 'Client Work');

  return (
    <div ref={containerRef} className="portfolio-showcase-container bg-background">
        <div className="relative pt-6 md:pt-5 pb-16 md:pb-20 overflow-hidden">
             <GridPattern
               width={60}
               height={60}
               x={-1}
               y={-1}
  className="absolute inset-0 h-full w-full stroke-primary/5 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] pointer-events-none"
             />
      <div className="text-center max-w-3xl mx-auto py-16 md:py-12 px-4">
            
       <Link 
  href="/portfolio" 
  className="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:bg-accent hover:text-accent-foreground rounded-md px-4 py-2 mb-4"
>
  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
</Link>

        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Client Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A curated selection of projects that define our commitment to excellence. Each one a story of collaboration and innovation.
        </p>
      </div>
</div>
      <div className="relative">
        {clientProjects.map((project, index) => {
          return (
       <section 
  key={project.slug} 
  className="project-section relative w-full flex items-center justify-center py-28 px-8 sm:py-32 sm:px-12 md:py-26 md:px-16 overflow-hidden"
  style={{ backgroundColor: index % 2 === 0 ? 'hsl(var(--background))' : 'hsl(var(--card) / 0.5)' }}
>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
                <div className={`project-preview relative aspect-[16/11] rounded-2xl shadow-2xl overflow-hidden group bg-muted ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                   <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover object-top"
                      data-ai-hint={project.hint}
                    />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                <div className="project-details">
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
