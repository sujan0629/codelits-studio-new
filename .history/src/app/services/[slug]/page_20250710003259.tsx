
'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { allServices } from '@/lib/services';
import { allProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { GridPattern } from '@/components/decoration/GridPattern';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = allProjects.filter(p => service.relatedProjects.includes(p.slug));

  return (
    <div className="bg-background">
      <div className="relative pt-12 pb-16 md:pt-24 md:pb-24">
         <GridPattern
            width={50}
            height={50}
            x={-1}
            y={-1}
            className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
        />
        <div className="container mx-auto px-4 relative">
             <Button asChild variant="ghost" className="mb-8">
                <Link href="/services"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Services</Link>
            </Button>
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
                    <service.icon className="w-10 h-10"/>
                </div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">{service.title}</h1>
            </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                    <p className="lead text-xl">{service.longDescription}</p>
                </div>
                <div className="relative aspect-video rounded-xl shadow-lg overflow-hidden">
                    <Image 
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={service.hint}
                    />
                </div>
            </div>
            <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-headline text-2xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                        {service.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>

      {relatedProjects.length > 0 && (
        <div className="bg-card/50 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Related Projects</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                See our {service.title} expertise in action.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
