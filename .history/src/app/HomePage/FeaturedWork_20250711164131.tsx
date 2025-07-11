// app/HomePage/FeaturedWork.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/decoration/GridPattern';
import { featuredProjects, type Project } from '@/lib/projects';
import { cn } from '@/lib/utils';

function ProjectShowcaseItem({ project, index }: { project: Project, index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="featured-project-item grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className={`relative aspect-[16/10] rounded-xl shadow-2xl bg-muted/30 overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
        <div className={cn(
          'absolute inset-0 bg-muted flex items-center justify-center transition-opacity duration-500 z-10',
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        )}>
          <p className="text-muted-foreground text-sm">Loading Live Preview...</p>
        </div>
        <iframe
          src={project.link}
          title={project.title}
          className={cn('w-full h-full border-0 transition-opacity duration-1000', isLoaded ? 'opacity-100' : 'opacity-0')}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <div className="details">
        <h3 className="font-headline text-2xl md:text-3xl font-bold">{project.title}</h3>
        <div className="flex flex-wrap gap-2 my-4">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <p className="text-muted-foreground">{project.description}</p>
        <Button asChild variant="outline" className="mt-8">
          <Link href={`/portfolio/${project.slug}`}>Explore Project <ArrowRight className="ml-2" /></Link>
        </Button>
      </div>
    </div>
  );
}

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLDivElement>('.featured-project-item').forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"
      />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 md:mb-24">
          <div className="direction-label inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
     <span>Discover the art behind our masterpieces</span>
          </div>
     
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-6">Our Masterpieces</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Interact with our live projects directly from the showcase.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {featuredProjects.map((project, index) => (
            <ProjectShowcaseItem key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/portfolio">View All Projects <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}