
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, Image, Pilcrow, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const tools = [
  {
    title: 'Portfolio Copy Generator',
    description: 'Create compelling titles and summaries for your portfolio projects.',
    icon: Pilcrow,
    href: '/admin/portfolio-copy',
    active: true,
  },
  {
    title: 'Image Brief Generator',
    description: 'Generate detailed briefs for creating project visuals and moodboards.',
    icon: Image,
    href: '#',
    active: false,
  },
  {
    title: 'SEO Keyword Suggester',
    description: 'Discover relevant keywords to boost your project\'s visibility.',
    icon: Search,
    href: '#',
    active: false,
  },
   {
    title: 'Brand Voice Analyzer',
    description: 'Analyze text to ensure it aligns with your brand\'s tone and voice.',
    icon: Bot,
    href: '#',
    active: false,
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Welcome to the AI Toolkit</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Select a tool below to get started. More tools are coming soon!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.title} className="flex flex-col justify-between">
            <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <tool.icon className="h-6 w-6" />
                </div>
                <div>
                    <CardTitle className="font-headline text-xl">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                </div>
            </CardHeader>
            <CardFooter>
              {tool.active ? (
                <Button asChild className="w-full">
                  <Link href={tool.href}>Launch Tool <ArrowRight className="ml-2" /></Link>
                </Button>
              ) : (
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
