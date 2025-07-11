'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { allServices } from '@/lib/services';
import { allProjects, type Project } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GridPattern } from '@/components/decoration/GridPattern';
import { cn } from '@/lib/utils';
import { AtomLoader } from '@/components/decoration/AtomLoader';
import { Badge } from '@/components/ui/badge';

// RelatedProjectShowcase (unchanged as requested)
const RelatedProjectShowcase = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canBeIframed = !project.link.includes('google.com');

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div
        className={cn(
          'relative aspect-[16/10] rounded-xl shadow-2xl bg-muted/30 overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20',
          index % 2 === 1 ? 'md:order-last' : ''
        )}
      >
        {canBeIframed ? (
          <>
            <div
              className={cn(
                'absolute inset-0 bg-muted flex items-center justify-center transition-opacity duration-500 z-10',
                isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
              )}
            >
              <AtomLoader />
            </div>
            <iframe
              src={project.link}
              title={project.title}
              className={cn(
                'w-full h-full border-0 transition-opacity duration-1000',
                isLoaded ? 'opacity-100' : 'opacity-0'
              )}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              sandbox="allow-scripts allow-same-origin"
            />
          </>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            data-ai-hint={project.hint}
          />
        )}
      </div>
      <div className="details">
        <h3 className="font-headline text-2xl md:text-3xl font-bold">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 my-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground">{project.description}</p>
        <Button asChild variant="outline" className="mt-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project <ArrowRight className="ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

// Main Service Detail Page
export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) notFound();

  const relatedProjects = allProjects.filter((p) =>
    service.relatedProjects.includes(p.slug)
  );

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <div className="relative pt-20 md:pt-2 pb-16 md:pb-20 overflow-hidden">
        <GridPattern
          width={60}
          height={60}
          x={-1}
          y={-1}
          className="absolute inset-0 h-full w-full stroke-primary/5 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="mb-10">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
              <service.icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
              {service.title}
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              {service.tagline || 'Explore our professional service in detail.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 pb-28">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Description and Image */}
          <div className="lg:col-span-2 space-y-10">
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                data-ai-hint={service.hint}
              />
            </div>
            <div className="text-muted-foreground text-lg leading-relaxed">
              <p className="text-lg font-medium leading-8 text-foreground">
                {service.longDescription}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card border border-border rounded-2xl p-6 shadow-md">
              <h3 className="font-headline text-2xl font-bold mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {service.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span className="text-muted-foreground leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="bg-card/50 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Our Projects of {service.title}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                See our expertise in action with these live examples.
              </p>
            </div>
            <div className="space-y-24 md:space-y-32 max-w-7xl mx-auto">
              {relatedProjects.map((project, index) => (
                <RelatedProjectShowcase
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
