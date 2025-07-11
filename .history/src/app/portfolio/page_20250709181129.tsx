'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Briefcase, FlaskConical, Handshake, PenTool } from 'lucide-react';
import { GridPattern } from '@/components/decoration/GridPattern';

gsap.registerPlugin(ScrollTrigger);

const portfolioCategories = [
  {
    title: 'Linear Build',
    description: 'Make progress with issue tracking and cycle planning',
    href: '/portfolio/client-work',
    icon: Briefcase,
    image: 'https://linear.app/_next/image?url=%2Fimages%2Ffeatures%2Fhero-build-dark.png&w=1920&q=80',
    className: 'col-span-2 h-64',
  },
  {
    title: 'Mobile',
    description: 'Move product work forward from anywhere',
    href: '/portfolio/mobile',
    icon: PenTool,
    image: 'https://linear.app/_next/image?url=%2Fimages%2Ffeatures%2Fhero-mobile-dark.png&w=1920&q=80',
    className: 'h-96',
  },
  {
    title: 'Insights',
    description: 'Instant analytics for any stream of work',
    href: '/portfolio/research',
    icon: FlaskConical,
    image: 'https://linear.app/_next/image?url=%2Fimages%2Ffeatures%2Fhero-insights-dark.png&w=1920&q=80',
    className: 'h-96',
  },
  {
    title: 'Partnerships',
    description: 'Learn about our trusted partners',
    href: '/portfolio/partnerships',
    icon: Handshake,
    image: 'https://linear.app/_next/image?url=%2Fimages%2Ffeatures%2Fhero-roadmap-dark.png&w=1920&q=80',
    className: 'col-span-2 h-64',
  },
];


const PortfolioPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.category-card') as Element[];
    gsap.set(cards, { opacity: 0, y: 30 });

    ScrollTrigger.batch(cards, {
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        }),
      start: 'top 85%',
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" ref={sectionRef}>
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
      />
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white">Our Work</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We believe in the power of collaboration and innovation. Explore the different facets of our work, from client projects to internal research.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Row 1: Long Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Link href={portfolioCategories[0].href} className={`category-card group relative rounded-2xl overflow-hidden border bg-card/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${portfolioCategories[0].className}`}>
              <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {React.createElement(portfolioCategories[0].icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white">{portfolioCategories[0].title}</h3>
                  <p className="mt-2 text-muted-foreground">{portfolioCategories[0].description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 font-medium text-primary">
                  Explore Section <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <Image src={portfolioCategories[0].image} alt={portfolioCategories[0].title} fill className="absolute inset-0 object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Row 2: Two Stacked Cards Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[portfolioCategories[1], portfolioCategories[2]].map((item, index) => (
              <Link key={index} href={item.href} className={`category-card group relative rounded-2xl overflow-hidden border bg-card/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${item.className}`}>
                <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 font-medium text-primary">
                    Explore Section <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <Image src={item.image} alt={item.title} fill className="absolute inset-0 object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              </Link>
            ))}
          </div>

          {/* Row 3: Long Card Again */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Link href={portfolioCategories[3].href} className={`category-card group relative rounded-2xl overflow-hidden border bg-card/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${portfolioCategories[3].className}`}>
              <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {React.createElement(portfolioCategories[3].icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white">{portfolioCategories[3].title}</h3>
                  <p className="mt-2 text-muted-foreground">{portfolioCategories[3].description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 font-medium text-primary">
                  Explore Section <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <Image src={portfolioCategories[3].image} alt={portfolioCategories[3].title} fill className="absolute inset-0 object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;