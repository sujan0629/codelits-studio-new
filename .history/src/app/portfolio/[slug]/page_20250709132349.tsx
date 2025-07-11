'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, AlertTriangle, Loader2 } from 'lucide-react';
import { allProjects } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find(p => p.slug === params.slug);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Project Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">Sorry, we couldn't find the project you're looking for.</p>
        <Button asChild className="mt-8">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    );
  }

  const canBeIframed = project.link.startsWith('http');

  return (
    <div className="bg-background flex flex-col" style={{ height: 'calc(100vh - 80px)'}}>
      <div className="border-b bg-background/80 backdrop-blur-sm sticky top-[72px] z-20">
        <div className="container mx-auto flex h-24 items-center justify-between gap-4 px-4">
          <div className="flex-1 min-w-0">
            <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center mb-1">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tight truncate">{project.title}</h1>
            <div className="mt-1 flex flex-wrap items-center gap-2">
                {project.tags.map(tag => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {canBeIframed &&
              <Button asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      Open Live Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
            }
          </div>
        </div>
      </div>
      
     <div className="w-full flex-grow flex flex-col">
  <div className="relative w-full flex-grow overflow-hidden">
{canBeIframed ? (
              <>
                <div className={cn(
                    "absolute inset-0 bg-muted flex flex-col items-center justify-center transition-opacity duration-500 z-10",
                    isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                )}>
                    <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
                    <p className="text-muted-foreground">Loading Live Project...</p>
                </div>
                <iframe
                  src={project.link}
                  title={project.title}
                  className={cn("w-full h-full border-0 transition-opacity duration-1000", isLoaded ? 'opacity-100' : 'opacity-0')}
                  sandbox="allow-scripts allow-same-origin"
                  onLoad={() => setIsLoaded(true)}
                />
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                <AlertTriangle className="w-16 h-16 text-primary/50 mb-4" />
                <h2 className="font-headline text-2xl font-bold">Live Preview Unavailable</h2>
                <p className="mt-2 max-w-md text-muted-foreground">
                  This project cannot be displayed in a live preview frame.
                </p>
                <Button asChild className="mt-6">
                   <Link href="/portfolio">Back to Portfolio</Link>
                </Button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
