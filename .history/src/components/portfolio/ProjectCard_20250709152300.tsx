'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import type { Project } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = gsap.utils.mapRange(0, rect.height, -8, 8, y);
      const rotateY = gsap.utils.mapRange(0, rect.width, 8, -8, x);

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

  // Fallback timeout to hide loader after 10 seconds
  useEffect(() => {
    if (isLoaded) return;
    const timeout = setTimeout(() => {
      console.warn('Loading timeout reached, hiding loader');
      setIsLoaded(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [isLoaded]);

  return (
    <Link href={`/portfolio/${project.slug}`} className={`block group ${className}`}>
      <div ref={cardRef} style={{ transformStyle: 'preserve-3d' }}>
        <Card className="relative flex flex-col overflow-hidden transition-all duration-300 bg-card border-2 border-border/50 h-full">
          <CardContent className="p-0 relative aspect-[4/3]">
            <div
              className={cn(
                'absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black to-zinc-900 transition-opacity duration-500 z-50',
                isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
              )}
              style={{ pointerEvents: isLoaded ? 'none' : 'auto' }}
            >
              {/* Atom Loader */}
              <div className="relative w-16 h-16 mb-4">
                {/* Orbiting atoms */}
                <span className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_8px_#FFD700] orbit1" />
                <span className="absolute w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_#FFC107] orbit2" />
                <span className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_8px_#FFEB3B] orbit3" />
                {/* Center nucleus */}
                <span className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-200 rounded-full shadow-[0_0_10px_#FFD700] -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Golden Text */}
              <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-pulse">
                Initializing brilliance...
              </p>

              {/* Inline styles for animations */}
              <style jsx>{`
                .orbit1 {
                  top: 50%;
                  left: 50%;
                  transform-origin: center;
                  animation: orbit1 1.8s linear infinite;
                  transform-box: fill-box;
                }
                .orbit2 {
                  top: 50%;
                  left: 50%;
                  transform-origin: center;
                  animation: orbit2 1.6s linear infinite;
                  transform-box: fill-box;
                }
                .orbit3 {
                  top: 50%;
                  left: 50%;
                  transform-origin: center;
                  animation: orbit3 1.4s linear infinite;
                  transform-box: fill-box;
                }

                @keyframes orbit1 {
                  0% {
                    transform: rotate(0deg) translateX(24px) rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg) translateX(24px) rotate(-360deg);
                  }
                }
                @keyframes orbit2 {
                  0% {
                    transform: rotate(0deg) translateX(18px) rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg) translateX(18px) rotate(-360deg);
                  }
                }
                @keyframes orbit3 {
                  0% {
                    transform: rotate(0deg) translateX(12px) rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg) translateX(12px) rotate(-360deg);
                  }
                }
              `}</style>
            </div>

            <iframe
              src={project.link}
              title={project.title}
              className={cn(
                'absolute inset-0 w-full h-full border-0 transition-opacity duration-1000',
                isLoaded ? 'opacity-100' : 'opacity-0'
              )}
              loading="lazy"
              onLoad={() => {
                console.log('Iframe loaded!');
                setIsLoaded(true);
              }}
              sandbox="allow-scripts allow-same-origin"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="transition-transform duration-500 ease-out transform group-hover:-translate-y-10">
                <h3 className="font-headline text-2xl font-bold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  {project.title}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-sm text-white/90 mt-1 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="backdrop-blur-sm bg-black/20 text-white/90 border-white/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 h-12 w-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
              <ArrowUpRight className="h-6 w-6 text-white" />
            </div>

            {/* This div captures mouse events for the tilt effect */}
            <div className="absolute inset-0" />
          </CardContent>
        </Card>
      </div>

      {/* Debug text: show loading state */}
      <p className="fixed top-2 left-2 z-50 text-white font-mono text-xs bg-black/70 px-2 rounded">
        {`Loaded: ${isLoaded}`}
      </p>
    </Link>
  );
}
