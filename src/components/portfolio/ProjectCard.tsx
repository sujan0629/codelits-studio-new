import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Project = {
  title: string;
  description: string;
  image: string;
  hint: string;
  tags: string[];
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
      <CardHeader className="p-0 relative">
        <div className="overflow-hidden">
             <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={project.hint}
            />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        <CardDescription className="mt-2">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 h-auto">
            <Link href={project.link}>View Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
