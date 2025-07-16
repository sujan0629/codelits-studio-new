
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/decoration/GridPattern';
import { ArrowRight, Bot, Feather, BrainCircuit, Search, BarChart, GraduationCap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const AiBrainAnimation = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
            <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
            </radialGradient>
        </defs>

        {/* Connections */}
        <g opacity="0.2">
            <path d="M 100 100 L 50 50" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-pulse animation-delay-200" />
            <path d="M 100 100 L 150 50" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-pulse" />
            <path d="M 100 100 L 50 150" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-pulse animation-delay-400" />
            <path d="M 100 100 L 150 150" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-pulse animation-delay-600" />
            <path d="M 100 100 L 30 100" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-pulse animation-delay-800" />
            <path d="M 100 100 L 170 100" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-pulse" />
            <path d="M 100 100 L 100 30" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-pulse animation-delay-200" />
            <path d="M 100 100 L 100 170" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-pulse animation-delay-400" />
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
        title: "Portfolio Copy Generator",
        description: "Create compelling titles and summaries for your portfolio projects.",
        status: "available"
    },
    {
        icon: BrainCircuit,
        title: "Brand Voice Analyzer",
        description: "Analyze text to ensure it aligns with your brand's unique tone and voice.",
        status: "coming_soon"
    },
    {
        icon: Search,
        title: "SEO Keyword Suggester",
        description: "Discover relevant keywords to boost your project's search visibility.",
        status: "coming_soon"
    },
    {
        icon: BarChart,
        title: "Image Brief Generator",
        description: "Generate detailed briefs for creating project visuals and moodboards.",
        status: "coming_soon"
    },
];

const benefits = [
    {
        title: "Save Time",
        description: "Automate repetitive content tasks and focus on what matters most: creativity and strategy.",
    },
    {
        title: "Boost Creativity",
        description: "Overcome writer's block with AI-powered ideas and suggestions tailored to your projects.",
    },
    {
        title: "Ensure Consistency",
        description: "Maintain a consistent brand voice and messaging across all your portfolio items.",
    },
];

export default function AiLandingPage() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
        <GridPattern
            width={50}
            height={50}
            x={-1}
            y={-1}
            className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] -z-10"
        />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                        <Bot className="w-4 h-4" />
                        <span>Content & Strategy Automation</span>
                    </div>
                    <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                        Amplify Your Creativity with AI
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground">
                        Leverage our suite of intelligent tools designed to streamline your workflow. From generating portfolio copy to suggesting SEO keywords, our AI assistant is here to help you create better content, faster.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start gap-4">
                        <Button asChild size="lg">
                            <Link href="/admin">Get Started <ArrowRight className="ml-2" /></Link>
                        </Button>
                    </div>
                </div>
                <div className="relative w-full max-w-md mx-auto aspect-square">
                    <AiBrainAnimation />
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-card/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">What's Inside the Toolkit?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A growing suite of specialized AI tools to assist your creative process from start to finish.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-card rounded-lg p-6 border border-border/50 text-center flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm mt-2 flex-grow">{feature.description}</p>
                            {feature.status === "coming_soon" && (
                                <span className="mt-4 text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full">Coming Soon</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">A Simple, Powerful Workflow</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Integrate AI into your work in just three easy steps.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8 text-center relative">
                    {/* Dashed lines for connecting steps */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-12">
                         <svg width="100%" height="100%"><line x1="15%" y1="0" x2="85%" y2="0" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="8 8"/></svg>
                    </div>

                    <div className="relative flex flex-col items-center p-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4 z-10 bg-card border-2 border-primary">1</div>
                        <h3 className="font-semibold text-xl">Input Details</h3>
                        <p className="text-muted-foreground mt-2">Provide context about your project, audience, and keywords.</p>
                    </div>
                    <div className="relative flex flex-col items-center p-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4 z-10 bg-card border-2 border-primary">2</div>
                        <h3 className="font-semibold text-xl">Generate Content</h3>
                        <p className="text-muted-foreground mt-2">Let the AI generate titles, summaries, and other creative copy.</p>
                    </div>
                    <div className="relative flex flex-col items-center p-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4 z-10 bg-card border-2 border-primary">3</div>
                        <h3 className="font-semibold text-xl">Refine & Use</h3>
                        <p className="text-muted-foreground mt-2">Copy the generated content and use it in your portfolio or marketing materials.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-card/30">
            <div className="container mx-auto px-4">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-xl">{benefit.title}</h3>
                                    <p className="text-muted-foreground mt-1">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center lg:text-left">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Work Smarter, Not Harder</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our AI assistant is designed to be a seamless part of your workflow, enhancing your capabilities without getting in the way. It's the creative partner you've always wanted.
                        </p>
                    </div>
                 </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Supercharge Your Workflow?</h2>
                <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
                    Stop staring at a blank page. Start creating with the power of AI.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/admin">Explore the AI Dashboard <ArrowRight className="ml-2" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
