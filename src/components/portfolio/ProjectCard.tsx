'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  hint: string;
  tags: string[];
};

export function ProjectCard({ project, className }: { project: Project, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const rotateX = gsap.utils.mapRange(0, rect.height, -10, 10, y);
      const rotateY = gsap.utils.mapRange(0, rect.width, 10, -10, x);

      gsap.to(card, {
        duration: 0.7,
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        duration: 0.7,
        rotationX: 0,
        rotationY: 0,
        ease: 'power3.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Link href={`/portfolio/${project.slug}`} className={`block group ${className}`}>
      <div ref={cardRef} style={{ transformStyle: 'preserve-3d' }}>
        <Card className="relative flex flex-col overflow-hidden transition-all duration-300 bg-card border-2 border-transparent h-full">
          <CardContent className="p-0 relative aspect-[4/3]">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={450}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={project.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transition-all duration-500 transform group-hover:translate-y-0 translate-y-12">
               <h3 className="font-headline text-2xl font-bold text-white">{project.title}</h3>
               <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
            </div>
            <div className="absolute top-4 right-4 h-12 w-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                <ArrowUpRight className="h-6 w-6 text-white"/>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
