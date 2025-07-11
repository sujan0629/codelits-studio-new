'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectSections = gsap.utils.toArray<HTMLElement>('.project-section');
      
      projectSections.forEach((section) => {
        const image = section.querySelector('.project-image');
        const details = section.querySelectorAll('.project-details > *');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
          }
        });

        tl.fromTo(image, 
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

  return (
    <div ref={containerRef} className="portfolio-showcase-container">
      <div className="text-center max-w-3xl mx-auto py-16 md:py-24 px-4">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A curated selection of projects that define our commitment to excellence. Each one a story of collaboration and innovation.
        </p>
      </div>

      <div className="relative">
        {allProjects.map((project, index) => (
          <section 
            key={project.slug} 
            className="project-section relative min-h-screen w-full flex items-center justify-center p-4 sm:p-8 md:p-16 overflow-hidden"
            style={{ backgroundColor: index % 2 === 0 ? 'hsl(var(--background))' : 'hsl(var(--card) / 0.5)' }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
              <div className={`project-image relative aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden group ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
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
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h2>
                <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <p className="text-muted-foreground text-lg">{project.longDescription}</p>
                <Button asChild variant="outline" size="lg" className="mt-8">
                    <Link href={`/portfolio/${project.slug}`}>View Live Project <ArrowRight className="ml-2" /></Link>
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
