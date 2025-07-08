'use client';

import { ProjectCard } from '@/components/portfolio/ProjectCard';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha',
    description: 'Branding & web development for a tech startup.',
    image: 'https://placehold.co/600x450.png',
    hint: 'tech startup',
    tags: ['UI/UX Design', 'Web Development'],
  },
  {
    slug: 'project-beta',
    title: 'Project Beta',
    description: 'E-commerce platform with a custom design system.',
    image: 'https://placehold.co/600x450.png',
    hint: 'ecommerce platform',
    tags: ['E-commerce', 'Branding'],
  },
  {
    slug: 'project-gamma',
    title: 'Project Gamma',
    description: 'Digital marketing campaign increasing leads by 300%.',
    image: 'https://placehold.co/600x450.png',
    hint: 'digital marketing',
    tags: ['Marketing', 'SEO'],
  },
  {
    slug: 'project-delta',
    title: 'Project Delta',
    description: 'Mobile application for a new social media platform.',
    image: 'https://placehold.co/600x450.png',
    hint: 'social media',
    tags: ['Mobile App', 'UI/UX Design'],
  },
  {
    slug: 'project-epsilon',
    title: 'Project Epsilon',
    description: 'Corporate website redesign for a Fortune 500 company.',
    image: 'https://placehold.co/600x450.png',
    hint: 'corporate website',
    tags: ['Web Development', 'Branding'],
  },
  {
    slug: 'project-phi',
    title: 'Project Phi',
    description: 'A beautiful and performant marketing website for a SaaS product.',
    image: 'https://placehold.co/600x450.png',
    hint: 'saas website',
    tags: ['Web Design', 'SaaS'],
  },
];

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore a selection of projects that showcase our passion for creating impactful digital solutions.
        </p>
      </div>

      <div ref={containerRef} className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              className={`project-card ${index % 3 === 1 ? 'md:mt-24' : ''}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
