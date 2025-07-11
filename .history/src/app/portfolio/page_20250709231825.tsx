'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Briefcase, FlaskConical, Handshake, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GraphWithSnakeTail from '@/components/GraphWithSnakeTail';
import AnimatedAtom from '@/components/AnimatedAtom';
import AnimatedPartnership from '@/components/AnimatedPartnership';
import AnimationAchievement from '@/components/AnimationAchievement';
import TrustpilotWidget from '@/components/TrustpilotWidget';
import { GridPattern } from '@/components/decoration/GridPattern';
gsap.registerPlugin(ScrollTrigger);

/**
 * Helper that decides whether to render an animation component or a fallback image
 */
const CardBackground = ({
  bgComponent: Bg,
  image,
  title,
}: {
  bgComponent?: React.FC;
  image?: string;
  title: string;
}) => {
  if (Bg) {
    return (
      <div className="absolute mb-10 ml-96 inset-0 pointer-events-none opacity-50">
        <Bg />
      </div>
    );
  }

  if (image) {
    return (
      <NextImage
        src={image}
        alt={title}
        fill
        className="absolute inset-0 object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
      />
    );
  }

  return null;
};



const GraphCard = ({
  bgComponent: Bg,

}: {
  bgComponent?: React.FC;
}) => {
  if (Bg) {
    return (
      <div className="absolute mt-8 ml-80 inset-0 pointer-events-none opacity-50">
        <Bg />
      </div>
    );
  }

  return null;
};

const portfolioCategories = [
  {
    title: 'Client Work',
    description:
      'Explore our successful collaborations and the impactful solutions we\'ve delivered for our clients.',
    href: '/client-work',
    icon: Briefcase,
    className: 'col-span-2 h-80',
        bgComponent: GraphWithSnakeTail,
    // keep using GraphWithSnakeTail directly in JSX for row‑1
  },
  {
    title: 'Research & Development',
    description:
      'Our experiments and internal projects where we explore new technologies and push creative boundaries.',
    href: '/portfolio/research',
    icon: FlaskConical,
    className: 'h-90',
    bgComponent: AnimatedAtom, // unique background
  },
{
  title: 'Achievements & Recognition',
  description:
    'Showcasing our milestones, awards, and notable accomplishments that highlight our excellence and impact.',
  href: '/portfolio/achievements',
  icon: Award,  // (assuming you want to change icon from PenTool to Trophy or similar)
  
  bgComponent: AnimationAchievement,
},

  {
    title: 'Partnerships',
    description:
      'Learn about our trusted partners and the synergistic relationships we build to enhance our offerings.',
    href: '/portfolio/partnerships',
    icon: Handshake,
    image:
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437c2?auto=format&fit=crop&w=1200&q=80',
    className: 'col-span-2 h-80',
    bgComponent: AnimatedPartnership, // handshake animation
  },
];

const PortfolioPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out', duration: 1 },
      });

      tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1.2 })
        .from(introRef.current, { y: 20, opacity: 0, duration: 1 }, '-=0.8')
        .from(
          Array.from(cardsRef.current?.children ?? []),
          { opacity: 0, y: 100, stagger: 0.2, duration: 0.8 },
          '-=0.5',
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" ref={sectionRef}>
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        {/* ───────── Title / Intro ───────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1
            className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white"
            ref={titleRef}
          >
            Our Work
          </h1>
          <p className="mt-4 text-lg text-muted-foreground" ref={introRef}>
            We believe in the power of collaboration and innovation. Explore the different facets of our work, from client projects to internal research.
          </p>
        </div>

        {/* ───────── Cards ───────── */}
        <div className="grid grid-cols-1 max-w-[1300px] mx-auto gap-8" ref={cardsRef}>
          {/* Row 1: Long Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
                   {[portfolioCategories[0]].map((item, index) => (
            <Link
               key={index}
              href={item.href}
              className={`category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${portfolioCategories[0].className}`}
            >
              {/* card content */}
              <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                <div className="max-w-[400px]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {React.createElement(portfolioCategories[0].icon, { className: 'h-6 w-6 text-primary' })}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white">{portfolioCategories[0].title}</h3>
                  <p className="mt-2 text-muted-foreground">{portfolioCategories[0].description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <Button asChild size="lg" variant="outline">
                    <Link href="/client-work/page.tsx">
                      Explore Section <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
          {/* background (animation or image) */}
                <GraphCard bgComponent={item.bgComponent} />
              {/* explicit background for row‑1 */}
            </Link>
                    ))}
          </div>

          {/* Row 2: Two stacked cards side‑by‑side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[portfolioCategories[1], portfolioCategories[2]].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${item.className}`}
              >
                <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                  <div className="max-w-[350px]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      {React.createElement(item.icon, { className: 'h-6 w-6 text-primary' })}
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2">
                    <Button asChild size="lg" variant="outline">
                      <Link href="/">
                        Explore Section <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* background (animation or image) */}
                <CardBackground bgComponent={item.bgComponent} image={item.image} title={item.title} />
              </Link>
            ))}
          </div>

          {/* Row 3: Long Card Again */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Link
              href={portfolioCategories[3].href}
              className={`category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${portfolioCategories[3].className}`}
            >
              <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                <div className="max-w-[400px]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {React.createElement(portfolioCategories[3].icon, { className: 'h-6 w-6 text-primary' })}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white">{portfolioCategories[3].title}</h3>
                  <p className="mt-2 text-muted-foreground">{portfolioCategories[3].description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <Button asChild size="lg" variant="outline">
                    <Link href="/">
                      Explore Section <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* background (handshake animation) */}
              <CardBackground
                bgComponent={portfolioCategories[3].bgComponent}
                image={portfolioCategories[3].image}
                title={portfolioCategories[3].title}
              />
            </Link>
          </div>
  <div className="relative my-16 p-8 rounded-xl overflow-hidden border border-primary/20 bg-background">
  <GridPattern
    width={40}
    height={40}
    x={-1}
    y={-1}
    className="absolute inset-0 h-full w-full stroke-primary/10 opacity-30 pointer-events-none"
  />
  <TrustpilotWidget />
</div>

        </div>
      </div>
          
    </div>
    
  );
};

export default PortfolioPage;
