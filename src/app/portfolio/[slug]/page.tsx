import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

// This is placeholder data. In a real app, you'd fetch this based on the slug.
const allProjects = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha',
    description: 'A complete branding and web development project for a leading tech startup.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'tech startup office',
    tags: ['UI/UX Design', 'Web Development'],
    longDescription: 'Project Alpha was a comprehensive digital transformation for a rising star in the tech industry. We handled everything from initial brand strategy and identity design to the development of a fully-featured, scalable web platform. The platform included a customer dashboard, marketing site, and an integrated blog. Our focus was on creating a seamless user experience that reflected the innovative nature of the client\'s product.',
  },
  {
    slug: 'project-beta',
    title: 'Project Beta',
    description: 'E-commerce platform with a custom design system and seamless user experience.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'modern ecommerce',
    tags: ['E-commerce', 'Branding'],
    longDescription: 'For Project Beta, we built a bespoke e-commerce solution from the ground up. The core of the project was a custom design system that ensured brand consistency across all user touchpoints. We developed a high-performance storefront, a streamlined checkout process, and a powerful backend for inventory and order management, resulting in a significant uplift in conversion rates and customer satisfaction.',
  },
  {
    slug: 'project-gamma',
    title: 'Project Gamma',
    description: 'Digital marketing campaign that increased lead generation by 300%.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'marketing analytics',
    tags: ['Marketing', 'SEO'],
    longDescription: 'Project Gamma was a targeted digital marketing initiative designed to skyrocket lead generation. We implemented a multi-channel strategy encompassing SEO, content marketing, PPC campaigns, and social media engagement. Through careful analysis and optimization, we were able to increase qualified leads by over 300% in just six months, providing a massive return on investment for our client.',
  },
  {
    slug: 'project-delta',
    title: 'Project Delta',
    description: 'Mobile app for a fintech company, with a focus on security and user experience.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'secure fintech app',
    tags: ['Mobile App', 'Fintech'],
    longDescription: 'Project Delta involved the creation of a secure and intuitive mobile application for a fintech startup. Security was paramount, and we integrated multi-factor authentication and end-to-end encryption. The user experience was designed to be simple and reassuring, helping users manage their finances with confidence. The app received high praise for its design and reliability upon launch.',
  },
  {
    slug: 'project-epsilon',
    title: 'Project Epsilon',
    description: 'AI-powered analytics dashboard for a major logistics corporation.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'ai dashboard logistics',
    tags: ['AI', 'Data Visualization'],
    longDescription: 'We developed an advanced, AI-powered analytics dashboard for a major logistics corporation. The tool, Project Epsilon, processes vast amounts of data in real-time to provide actionable insights on supply chain efficiency, delivery times, and cost-saving opportunities. The intuitive data visualizations make complex information easy to understand for stakeholders at all levels.',
  },
  {
    slug: 'project-phi',
    title: 'Project Phi',
    description: 'A beautiful and performant marketing website for a SaaS product.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'modern saas website',
    tags: ['Web Design', 'SaaS'],
    longDescription: 'Project Phi was a complete overhaul of a SaaS company\'s marketing website. We focused on creating a visually stunning design that communicated the product\'s value proposition clearly. Performance was a key goal, and we delivered a site with lightning-fast load times, which helped to improve their SEO rankings and reduce bounce rates significantly.',
  },
];


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

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">{project.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
                <div key={tag} className="text-sm uppercase text-primary font-semibold tracking-wider">{tag}</div>
            ))}
        </div>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground">{project.description}</p>
        
        <div className="mt-12">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl shadow-2xl"
            data-ai-hint={project.hint}
          />
        </div>

        <div className="mt-16 prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:tracking-tighter prose-a:text-primary hover:prose-a:text-primary/80">
            <h2 className="text-3xl font-bold">About the Project</h2>
            <p>{project.longDescription}</p>
            <Button asChild variant="outline" size="lg">
                <Link href="#" target="_blank">
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
