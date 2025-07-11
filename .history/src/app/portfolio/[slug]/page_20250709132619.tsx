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
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-2 text-muted-foreground">Sorry, we couldn't find the project.</p>
        <Button asChild className="mt-6">
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
    <div className="w-full px-4 py-6 md:px-8 md:py-8 border-b bg-background sticky top-0 z-20 backdrop-blur-md">
  <div className="flex flex-wrap items-center justify-between gap-4">
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href="/portfolio"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <h1 className="text-xl md:text-2xl font-bold">{project.title}</h1>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </div>
    </div>

    {canBeIframed && (
      <Button asChild>
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          Live Site <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    )}
  </div>
</div>

  );
}
