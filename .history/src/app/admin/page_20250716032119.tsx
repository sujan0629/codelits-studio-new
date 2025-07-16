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
        "relative group overflow-hidden rounded-xl border border-border bg-card/50 h-full p-6 flex flex-col justify-between transition-all duration-300",
        tool.active
          ? "hover:border-primary/70 hover:shadow-lg hover:scale-[1.03] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          : "opacity-60 cursor-not-allowed select-none"
      )}
      aria-disabled={!tool.active}
    >
      <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl animate-pulse -z-10" />

      {/* Decorative background pattern */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary flex-shrink-0">
            <tool.icon className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold">{tool.title}</h3>
            <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">{tool.description}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-end">
        <div
          className={cn(
            "flex items-center gap-2 text-sm md:text-base font-semibold text-primary transition-all duration-300 select-none",
            !tool.active && "text-muted-foreground"
          )}
        >
          {tool.active ? (
            <>
              <span>Launch Tool</span>
              <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </>
          ) : (
            <span>Coming Soon</span>
          )}
        </div>
      </div>
    </div>
  );

  return tool.active ? (
    <Link href={tool.href} tabIndex={0} aria-label={`Launch ${tool.title} tool`}>
      {cardContent}
    </Link>
  ) : (
    <div>{cardContent}</div>
  );
};

export default function AdminDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
          Welcome to the AI Toolkit
        </h1>
        <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Select a tool below to get started. More tools are coming soon!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.title} tool={tool} />
        ))}
      </div>
    </div>
  );
}
