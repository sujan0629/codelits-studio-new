import Link from 'next/link';
import { ArrowRight, Bot, Image, Pilcrow, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    description: "Discover relevant keywords to boost your project's visibility.",
    icon: Search,
    href: '#',
    active: false,
  },
  {
    title: 'Brand Voice Analyzer',
    description: "Analyze text to ensure it aligns with your brand's tone and voice.",
    icon: Bot,
    href: '#',
    active: false,
  },
];

const ToolCard = ({ tool }: { tool: typeof tools[0] }) => {
  const cardContent = (
    <div
      className={cn(
        'relative group overflow-hidden rounded-xl border border-border bg-card/50 h-[300px] p-8 flex flex-col justify-between transition-all duration-300',
        'hover:border-primary/60 hover:shadow-primary/20 hover:shadow-lg',
        tool.active ? 'cursor-pointer' : 'cursor-not-allowed opacity-60',
      )}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      {/* Subtle decorative pulse */}
      <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 via-primary/10 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-3xl animate-pulse -z-10" />

      {/* Decorative background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        >
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--primary) / 0.05)" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary) / 0.1)' }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--primary) / 0)' }} />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
          <rect
            width="100%"
            height="100%"
            fill="url(#gradient)"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/15 border border-primary/30 text-primary flex-shrink-0">
            <tool.icon className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold leading-tight">{tool.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-[350px]">{tool.description}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-end">
        <div
          className={cn(
            'flex items-center gap-2 text-xs font-medium transition-colors duration-300 select-none',
            tool.active ? 'text-primary group-hover:text-primary/90' : 'text-muted-foreground',
          )}
        >
          {tool.active ? 'Launch Tool' : 'Coming Soon'}
          {tool.active && (
            <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </div>
  );

  return tool.active ? (
    <Link href={tool.href} className="group w-full">
      {cardContent}
    </Link>
  ) : (
    <div className="w-full">{cardContent}</div>
  );
};

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8 max-w-3xl">
        <h1 className="font-headline text-2xl mx-2 md:text-2xl font-bold tracking-tight">
          Welcome to the AI Toolkit
        </h1>
        <p className="mt-2 mx-2 text-sm text-muted-foreground max-w-xl">
          Select a tool below to get started. More tools are coming soon!
        </p>
      </div>
<div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:justify-items-start gap-10 mb-32 mx-auto">
  {tools.map((tool) => (
    <ToolCard key={tool.title} tool={tool} />
  ))}
</div>

    </div>
  );
}
