
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, AlertTriangle } from 'lucide-react';
import { allProjects } from '@/lib/projects';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find(p => p.slug === params.slug);

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
    <div className="flex flex-col" style={{ height: 'calc(100vh - 80px)'}}>
      <div className="flex-shrink-0 border-b bg-background z-10">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="max-w-prose">
            <h1 className="font-headline text-xl md:text-2xl font-bold tracking-tight truncate">{project.title}</h1>
            <p className="text-sm text-muted-foreground truncate">{project.description}</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {canBeIframed &&
              <Button asChild variant="outline" size="sm">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      Open Live Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
            }
            <Button asChild variant="ghost" size="sm">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">Back</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-muted/40">
        {canBeIframed ? (
            <iframe
              src={project.link}
              title={project.title}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
            />
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
  );
}
