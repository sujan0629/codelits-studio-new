'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, AlertTriangle, Loader2 } from 'lucide-react';
import { allProjects } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';

import Image from 'next/image';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = allProjects.find(p => p.slug === params.slug);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-2 text-muted-foreground">Sorry, we couldn't find the project.</p>
        <Button asChild className="mt-6">
          <Link href="/portfolio/client-work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Client Work
          </Link>
        </Button>
      </div>
    );
  }

  const canBeIframed = project.link.startsWith('http');

  return (
    <div className="flex flex-col h-screen">
      {/* Info bar */}
      <div className="flex-shrink-0 z-20 border-b bg-background backdrop-blur-md px-4 py-3 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
              <Link href="/portfolio/client-work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Client Work
              </Link>
            </Button>

            <h1 className="text-xl md:text-2xl font-bold">{project.title}</h1>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
  {/* Center logo */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
    <Image
      src="/logos/logo.png"
      alt="Logo"
      width={40}
      height={40}
      priority={true}
    />
  </div>
          {canBeIframed && (
            <Button asChild>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Live preview */}
      <div className="flex-grow flex flex-col min-h-0 relative">
        {canBeIframed ? (
          <>
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-background">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm text-muted-foreground">
                  Loading Live Project...
                </span>
              </div>
            )}
            <iframe
              src={project.link}
              title={project.title}
              className={cn(
                'w-full h-full border-0 transition-opacity duration-500',
                isLoaded ? 'opacity-100' : 'opacity-0'
              )}
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIsLoaded(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
            <AlertTriangle className="w-10 h-10 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold">Live Preview Unavailable</h2>
            <p className="mt-2 text-muted-foreground">
              This project cannot be displayed in an iframe preview.
            </p>
            <Button asChild className="mt-6">
              <Link href="/portfolio/client-work">Back to Client Work</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
