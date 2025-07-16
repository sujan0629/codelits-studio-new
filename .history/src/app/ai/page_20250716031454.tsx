import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/decoration/GridPattern';
import {
  ArrowRight,
  Bot,
  Feather,
  BrainCircuit,
  Search,
  BarChart,
  GraduationCap,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

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
      <path
        d="M 100 100 L 50 50"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        className="animation-delay-200"
      />
      <path d="M 100 100 L 150 50" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <path
        d="M 100 100 L 50 150"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        className="animation-delay-400"
      />
      <path
        d="M 100 100 L 150 150"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        className="animation-delay-600"
      />
      <path
        d="M 100 100 L 30 100"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        className="animation-delay-800"
      />
      <path d="M 100 100 L 170 100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <path
        d="M 100 100 L 100 30"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        className="animation-delay-200"
      />
      <path
        d="M 100 100 L 100 170"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        className="animation-delay-400"
      />
    </g>

    {/* Nodes */}
    <circle cx="100" cy="100" r="12" fill="hsl(var(--primary))" className="animate-pulse" />
    <circle
      cx="50"
      cy="50"
      r="8"
      fill="hsl(var(--primary) / 0.8)"
      className="animate-pulse animation-delay-400"
    />
    <circle
      cx="150"
      cy="50"
      r="8"
      fill="hsl(var(--primary) / 0.8)"
      className="animate-pulse animation-delay-200"
    />
    <circle
      cx="50"
      cy="150"
      r="8"
      fill="hsl(var(--primary) / 0.8)"
      className="animate-pulse animation-delay-600"
    />
    <circle
      cx="150"
      cy="150"
      r="8"
      fill="hsl(var(--primary) / 0.8)"
      className="animate-pulse animation-delay-800"
    />
    <circle cx="30" cy="100" r="6" fill="hsl(var(--primary) / 0.6)" className="animate-pulse" />
    <circle
      cx="170"
      cy="100"
      r="6"
      fill="hsl(var(--primary) / 0.6)"
      className="animate-pulse animation-delay-200"
    />
    <circle
      cx="100"
      cy="30"
      r="6"
      fill="hsl(var(--primary) / 0.6)"
      className="animate-pulse animation-delay-400"
    />
    <circle
      cx="100"
      cy="170"
      r="6"
      fill="hsl(var(--primary) / 0.6)"
      className="animate-pulse animation-delay-600"
    />

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

const benefits = [
  {
    title: 'Save Time',
    description:
      'Automate repetitive content tasks and focus on what matters most: creativity and strategy.',
  },
  {
    title: 'Boost Creativity',
    description:
      'Overcome writer’s block with AI-powered ideas and suggestions tailored to your projects.',
  },
  {
    title: 'Ensure Consistency',
    description: 'Maintain a consistent brand voice and messaging across all your portfolio items.',
  },
];

const testimonials = [
  {
    name: 'Sophia M.',
    role: 'Product Designer',
    quote:
      "This AI toolkit transformed how I create portfolio content. It saves me hours every week and the suggestions always feel spot on!",
  },
  {
    name: 'Ethan L.',
    role: 'Freelance Developer',
    quote:
      "The SEO keyword suggester gave me insights that boosted my project visibility drastically. Can't wait for the new features!",
  },
  {
    name: 'Maya R.',
    role: 'Marketing Specialist',
    quote:
      "I love the brand voice analyzer! It's like having a personal editor that ensures all my communications sound authentic.",
  },
];

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes! We offer a 7-day free trial to explore all the available features and see how the AI can fit into your workflow.',
  },
  {
    question: 'Can I customize the AI-generated content?',
    answer:
      'Absolutely. The generated content serves as a starting point. You can refine and edit it to perfectly match your style.',
  },
  {
    question: 'Will new features be added regularly?',
    answer:
      'Yes, we are continuously working on expanding the toolkit with new AI-powered tools based on user feedback.',
  },
];

export default function AiLandingPage() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground min-h-screen">
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
            <div
              aria-label="Content and Strategy Automation badge"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 select-none"
            >
              <Bot className="w-5 h-5" aria-hidden="true" />
              <span>Content &amp; Strategy Automation</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Amplify Your Creativity with AI
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Leverage our intelligent AI suite to streamline your workflow. From portfolio
              copywriting to SEO keyword discovery, create better content faster and smarter.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-colors flex items-center gap-2"
                aria-label="Get started with AI Dashboard"
              >
                <Link href="/admin">
                  Get Started <ArrowRight className="ml-1" size={20} />
                </Link>
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">What’s Inside the Toolkit?</h2>
            <p className="text-lg text-muted-foreground">
              A growing suite of AI tools tailored to fuel your creative process from start to finish.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border/50 text-center flex flex-col items-center transition-transform hover:scale-[1.04] hover:shadow-lg"
                role="group"
                aria-labelledby={`feature-title-${index}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3
                  id={`feature-title-${index}`}
                  className="font-semibold text-xl mb-3"
                >
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base flex-grow">{feature.description}</p>
                {feature.status === 'coming_soon' && (
                  <span
                    className="mt-6 inline-block text-xs font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded-full tracking-wide select-none"
                    aria-label="Coming Soon"
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">A Simple, Powerful Workflow</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Integrate AI into your work in just three easy steps.
            </p>
          </div>
          <div className="relative grid md:grid-cols-3 gap-12 text-center items-start">
            {/* Dashed connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-6 pointer-events-none" aria-hidden="true">
              <svg width="100%" height="4">
                <line
                  x1="10%"
                  y1="2"
                  x2="90%"
                  y2="2"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
              </svg>
            </div>

            {[{
              step: 1,
              title: 'Input Details',
              description: 'Provide context about your project, audience, and keywords.',
            }, {
              step: 2,
              title: 'Generate Content',
              description: 'Let the AI generate titles, summaries, and creative copy.',
            }, {
              step: 3,
              title: 'Refine & Use',
              description: 'Copy and integrate the generated content in your portfolio or marketing.',
            }].map(({ step, title, description }) => (
              <div key={step} className="relative flex flex-col items-center p-6">
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-3xl font-extrabold mb-5 z-10 bg-card border-4 border-primary shadow-lg"
                  aria-label={`Step ${step}`}
                >
                  {step}
                </div>
                <h3 className="font-semibold text-2xl">{title}</h3>
                <p className="text-muted-foreground mt-2 max-w-xs">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-5">
                  <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-2xl">{benefit.title}</h3>
                    <p className="text-muted-foreground mt-1 text-lg">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-headline text-4xl font-bold">Work Smarter, Not Harder</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our AI assistant seamlessly enhances your creative workflow — the partner you’ve always
                wanted to help you excel without interruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-headline text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map(({ name, role, quote }, idx) => (
              <blockquote
                key={idx}
                className="bg-card rounded-xl p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                <p className="text-lg italic text-muted-foreground mb-6">"{quote}"</p>
                <footer className="text-sm font-semibold text-primary">
                  — {name}, <span className="font-normal text-muted-foreground">{role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <dl className="space-y-8">
            {faqs.map(({ question, answer }, idx) => (
              <div key={idx} className="group">
                <dt className="font-semibold text-xl cursor-pointer flex justify-between items-center">
                  {question}
                  <span
                    aria-hidden="true"
                    className="ml-2 text-primary transition-transform group-hover:rotate-45"
                  >
                    +
                  </span>
                </dt>
                <dd className="mt-2 text-muted-foreground max-w-prose leading-relaxed">
                  {answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-headline text-4xl font-bold">Ready to Supercharge Your Workflow?</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Stop staring at a blank page. Start creating with the power of AI today.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-colors flex items-center gap-3"
              aria-label="Explore the AI Dashboard"
            >
              <Link href="/admin">
                Explore the AI Dashboard <ArrowRight className="ml-1" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
