"use client";

import { useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/decoration/GridPattern';
import {
  ArrowRight,
  Bot,
  Feather,
  BrainCircuit,
  Search,
  BarChart,
  CheckCircle,
  Check,
} from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';

const AiBrainAnimation = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-md mx-auto">
    <defs>
      <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
        <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
      </radialGradient>
    </defs>

    {/* Connections */}
    <g opacity="0.2" className="animate-pulse">
      <path d="M 100 100 L 50 50" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animation-delay-200" />
      <path d="M 100 100 L 150 50" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <path d="M 100 100 L 50 150" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animation-delay-400" />
      <path d="M 100 100 L 150 150" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animation-delay-600" />
      <path d="M 100 100 L 30 100" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animation-delay-800" />
      <path d="M 100 100 L 170 100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <path d="M 100 100 L 100 30" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animation-delay-200" />
      <path d="M 100 100 L 100 170" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animation-delay-400" />
    </g>

    {/* Nodes */}
    <circle cx="100" cy="100" r="12" fill="hsl(var(--primary))" className="animate-pulse" />
    <circle cx="50" cy="50" r="8" fill="hsl(var(--primary) / 0.8)" className="animate-pulse animation-delay-400" />
    <circle cx="150" cy="50" r="8" fill="hsl(var(--primary) / 0.8)" className="animate-pulse animation-delay-200" />
    <circle cx="50" cy="150" r="8" fill="hsl(var(--primary) / 0.8)" className="animate-pulse animation-delay-600" />
    <circle cx="150" cy="150" r="8" fill="hsl(var(--primary) / 0.8)" className="animate-pulse animation-delay-800" />
    <circle cx="30" cy="100" r="6" fill="hsl(var(--primary) / 0.6)" className="animate-pulse" />
    <circle cx="170" cy="100" r="6" fill="hsl(var(--primary) / 0.6)" className="animate-pulse animation-delay-200" />
    <circle cx="100" cy="30" r="6" fill="hsl(var(--primary) / 0.6)" className="animate-pulse animation-delay-400" />
    <circle cx="100" cy="170" r="6" fill="hsl(var(--primary) / 0.6)" className="animate-pulse animation-delay-600" />

    <circle cx="100" cy="100" r="40" fill="url(#ai-glow)" />
  </svg>
);

const features = [
  {
    icon: Feather,
    title: 'Portfolio Copy Generator',
    description: 'Create compelling titles and summaries for your portfolio projects.',
    status: 'available',
  },
  {
    icon: BrainCircuit,
    title: 'Brand Voice Analyzer',
    description: "Analyze text to ensure it aligns with your brand's unique tone and voice.",
    status: 'coming_soon',
  },
  {
    icon: Search,
    title: 'SEO Keyword Suggester',
    description: "Discover relevant keywords to boost your project's search visibility.",
    status: 'coming_soon',
  },
  {
    icon: BarChart,
    title: 'Image Brief Generator',
    description: 'Generate detailed briefs for creating project visuals and moodboards.',
    status: 'coming_soon',
  },
];

const comingSoon = [
  'Heavy AI Models for advanced text generation',
  'Multimodal AI: Combine text, image, and video inputs',
  'Real-time content optimization & A/B testing',
  'Deep Brand Persona customization',
  'Automated SEO & Market Trend Predictions',
];

export default function AiLandingPage() {
  const trianglePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!trianglePathRef.current) return;

    const path = trianglePathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: '6 6',
      strokeDashoffset: 0,
    });

    gsap.to(path, {
      strokeDashoffset: -length,
      duration: 4,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-dark text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-dark w-full py-24 md:py-32 overflow-hidden">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] -z-10"
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-sm font-semibold text-primary mb-5 select-none">
                <Bot className="w-5 h-5" aria-hidden="true" />
                <span>Content &amp; Strategy Automation</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Amplify Your Creativity with AI
              </h1>
              <p className="mt-6 max-w-lg md:max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                Leverage our intelligent AI suite to streamline your workflow. From portfolio
                copywriting to SEO keyword discovery, create better content faster and smarter.
              </p>
              <div className="mt-10 flex justify-center md:justify-start gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 transition-colors flex items-center gap-3"
                  aria-label="Get started with AI Dashboard"
                >
                  <Link href="/admin">
                    Get Started <ArrowRight className="ml-1" size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-primary border-primary hover:bg-primary/10 transition-colors"
                  aria-label="Learn more about AI toolkit"
                >
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <AiBrainAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 max-w-7xl mx-auto px-4 bg-dark">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-headline text-4xl font-bold mb-3">What’s Inside the Toolkit?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A growing suite of AI tools tailored to fuel your creative process from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description, status }, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border/60 text-center flex flex-col items-center transition-transform hover:scale-[1.05] hover:shadow-lg cursor-default"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{title}</h3>
              <p className="text-muted-foreground text-base flex-grow">{description}</p>
              {status === 'coming_soon' && (
                <span className="mt-6 inline-block text-xs font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded-full tracking-wide select-none">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section (Pyramid Style) */}
      <section className="py-20 md:py-28 max-w-3xl mx-auto px-4 text-center relative">
        <h2 className="font-headline text-4xl font-bold mb-12">A Simple, Powerful Workflow</h2>

        {/* Container for triangle */}
        <div className="relative w-full max-w-md mx-auto aspect-square">
          {/* Dotted triangle lines - using SVG */}
          <svg
   
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
                     ref={trianglePathRef}
              d="M 100 20 L 1 170 L 200 170 Z"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.6"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Step 1: Top */}
          <div
            className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-md px-6 py-3 flex items-center gap-2 w-48 mx-auto"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-white font-semibold text-lg">Input Details</span>
          </div>

          {/* Step 2: Bottom left */}
        {/* Step 2: Bottom left */}
<div
  className="absolute bottom-10 left-[100%] bg-transparent bg-opacity-10 border border-white border-opacity-30 rounded-md px-6 py-3 flex items-center gap-2 w-48"
  style={{ backdropFilter: 'blur(8px)' }}
>
  <Check className="w-6 h-6 text-primary" />
  <span className="text-white font-semibold text-lg">Generate</span>
</div>

{/* Step 3: Bottom right */}
<div
  className="absolute bottom-10 right-[100%] bg-white bg-opacity-10 border border-white border-opacity-30 rounded-md px-6 py-3 flex items-center gap-2 w-48"
  style={{ backdropFilter: 'blur(8px)' }}
>
  <CheckCircle className="w-6 h-6 text-primary" />
  <span className="text-white font-semibold text-lg">Refine & Use</span>
</div>

        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl font-bold mb-6">Coming Soon: Next-Level AI Models</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          We’re building powerful heavy AI models to push your creativity even further. Here’s a sneak peek of what’s on the horizon:
        </p>
        <ul className="inline-block text-left space-y-4 list-disc list-inside text-primary text-lg font-semibold max-w-xl mx-auto">
          {comingSoon.map((item, idx) => (
            <li key={idx} className="hover:text-primary/90 transition-colors">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
