"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/decoration/GridPattern";
import {
  ArrowRight,
  Bot,
  Feather,
  BrainCircuit,
  Search,
  BarChart,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Feather,
    title: "Portfolio Copy Generator",
    description: "Craft polished project titles and summaries instantly.",
    status: "available",
  },
  {
    icon: BrainCircuit,
    title: "Brand Voice Analyzer",
    description: "Check if your content fits your brand's unique tone.",
    status: "coming_soon",
  },
  {
    icon: Search,
    title: "SEO Keyword Suggester",
    description: "Find keywords to improve visibility.",
    status: "coming_soon",
  },
  {
    icon: BarChart,
    title: "Image Brief Generator",
    description: "Generate detailed briefs for visuals and moodboards.",
    status: "coming_soon",
  },
];

const benefits = [
  {
    title: "Save Time",
    description: "Automate repetitive content tasks.",
  },
  {
    title: "Boost Creativity",
    description: "Overcome writer's block with smart suggestions.",
  },
  {
    title: "Ensure Consistency",
    description: "Keep a uniform tone across your projects.",
  },
];

export default function AiLandingPage() {
  // Change ref type here to HTMLElement | null to match <section> elements
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className="absolute inset-0 stroke-primary/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] -z-10"
      />

      {/* Hero */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 items-center gap-16"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium border border-primary/30 bg-primary/10 text-primary">
            <Bot className="h-4 w-4" /> AI Content Assistant
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight tracking-tight font-headline">
            Create Smarter, Faster
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Use our AI toolkit to write better content, generate ideas, and
            refine your message—all in one place.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/admin">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="aspect-square w-full max-w-md mx-auto">
          <svg
            viewBox="0 0 256 256"
            fill="none"
            className="w-full h-full"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
          >
            <circle
              cx="128"
              cy="128"
              r="90"
              fill="hsl(var(--primary) / 0.05)"
            />
            <path
              d="M128 16c-40 0-72 32-72 72 0 16 5 32 14 44-25 0-46 20-46 44 0 20 16 36 36 36 0 10 0 40 46 40s46-30 46-40c20 0 36-16 36-36 0-24-21-44-46-44 9-12 14-28 14-44 0-40-32-72-72-72z"
              strokeDasharray="500"
              strokeDashoffset="500"
              style={{ animation: "dash 3s forwards ease-out" }}
            />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-20 md:py-28 bg-card/30"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">
            AI Features That Do the Work for You
          </h2>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-6 border border-border text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {feature.description}
                </p>
                {feature.status === "coming_soon" && (
                  <span className="mt-4 inline-block text-xs text-secondary-foreground bg-secondary px-2 py-1 rounded-full font-medium">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-xl">{benefit.title}</h4>
                    <p className="text-muted-foreground mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Smarter Workflow, Better Results
              </h2>
              <p className="text-lg text-muted-foreground">
                Let the AI handle repetitive tasks while you focus on creative
                storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-20 md:py-28 text-center"
      >
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Supercharge Your Creativity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop wasting time on the blank page. Start creating better content
            with AI.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/admin">
                Explore Dashboard <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
