'use client';

import React, { useRef, useEffect, useState } from 'react';
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
  const boxRef = useRef<HTMLDivElement>(null);

  // Track current project index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !boxRef.current) return;

    const container = containerRef.current;
    const box = boxRef.current;

    const containerRect = container.getBoundingClientRect();

    // Positions for box movement boundaries (in px)
    const margin = 20;
    const maxX = container.clientWidth - box.clientWidth - margin;
    const maxY = 200; // Vertical move limit (adjust as needed)

    // GSAP timeline for movement
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: self => {
          // Detect direction change & update project index accordingly

          // self.progress = 0 to 1 based on scroll

          // We'll map progress from 0 to 1 and cycle 4 directions (right, down, left, up)

          const totalSegments = 4;
          const segmentLength = 1 / totalSegments;
          const progress = self.progress;

          // Determine current segment number (0 to 3)
          const segmentIndex = Math.floor(progress / segmentLength);

          // When segment changes, update project index
          if (segmentIndex !== tl.vars.currentSegment) {
            // Cycle project index on direction change
            tl.vars.currentSegment = segmentIndex;
            setCurrentIndex((prev) => (prev + 1) % allProjects.length);
          }
        },
      },
      defaults: { ease: 'none' },
      currentSegment: -1,
    });

    // Movement: right -> down -> left -> up (square path)

    tl.to(box, { x: maxX, duration: 1 })   // Move right
      .to(box, { y: maxY, duration: 1 })   // Move down
      .to(box, { x: 0, duration: 1 })      // Move left
      .to(box, { y: 0, duration: 1 });     // Move up

    return () => {
      tl.kill();
      ScrollTrigger.kill();
    };
  }, []);

  const project = allProjects[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-[95vw] max-w-7xl h-[600px] mx-auto bg-background rounded-2xl overflow-hidden"
      style={{ perspective: 800 }}
    >
      {/* Image box that moves */}
      <div
        ref={boxRef}
        className="iframe-box w-[400px] h-[300px] bg-card border border-border rounded-2xl overflow-hidden shadow-lg absolute top-0 left-0"
        style={{ willChange: 'transform' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Project details fixed on the right */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[350px] flex flex-col text-left">
        <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm px-2 py-1">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground text-base mb-6 max-w-md">
          {project.longDescription}
        </p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="text-sm px-4 py-2 w-fit"
        >
          <Link href={`/portfolio/${project.slug}`}>
            View Live Project <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
