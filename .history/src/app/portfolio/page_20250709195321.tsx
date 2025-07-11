'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Briefcase, FlaskConical, Handshake, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GraphWithSnakeTail from '@/components/GraphWithSnakeTail';
import Test from "@/components/test";
gsap.registerPlugin(ScrollTrigger);

const portfolioCategories = [
  {
    title: 'Client Work',
    description:
      "Explore our successful collaborations and the impactful solutions we've delivered for our clients.Explore our successful collaborations.",
    href: '/portfolio/client-work',
    icon: Briefcase,
    className: 'col-span-2 h-80',
  },
  {
    title: 'Research & Development',
    description:
      'Our experiments and internal projects where we explore new technologies and push creative boundaries.',
    href: '/portfolio/research',
    icon: FlaskConical,
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1200&q=80',
    className: 'h-96',
  },
  {
    title: 'Design Philosophy',
    description:
      'A deep dive into our design principles, from user experience to visual identity and interaction design.',
    href: '/portfolio/design',
    icon: PenTool,
    image:
      'https://images.unsplash.com/photo-1621809286969-1e6c4c11c152?auto=format&fit=crop&w=1200&q=80',
    className: 'h-96',
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

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
    })
      .from(
        introRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 1,
        },
        '-=0.8'
      )
      .from(
        Array.from(cardsRef.current?.children ?? []),
        {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          duration: 0.8,
        },
        '-=0.5'
      );

    // ❌ Remove this to avoid scroll-triggered animation
    // gsap.utils.toArray<HTMLElement>('.category-card').forEach((card) => {
    //   gsap.fromTo(
    //     card,
    //     { opacity: 0, y: 80 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       duration: 0.8,
    //       ease: 'power3.out',
    //       scrollTrigger: {
    //         trigger: card,
    //         start: 'top 85%',
    //         toggleActions: 'play none none reverse',
    //       },
    //     }
    //   );
    // });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <div className="relative min-h-screen w-full overflow-hidden" ref={sectionRef}>
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1
            className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white"
            ref={titleRef}
          >
            Our Work
          </h1>
          <p className="mt-4 text-lg text-muted-foreground" ref={introRef}>
            We believe in the power of collaboration and innovation. Explore the different facets of
            our work, from client projects to internal research.
          </p>
        </div>

        <div
          className="grid grid-cols-1 max-w-[1300px] mx-auto gap-8"
          ref={cardsRef}
        >
          {/* Row 1: Long Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Link
              href={portfolioCategories[0].href}
              className={`category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${portfolioCategories[0].className}`}
            >
              <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                <div className="max-w-[400px]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {React.createElement(portfolioCategories[0].icon, {
                      className: 'h-6 w-6 text-primary',
                    })}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white">
                    {portfolioCategories[0].title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{portfolioCategories[0].description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <Button asChild size="lg" variant="outline">
                    <Link href="/">
                      Explore Section <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Replace background image with GraphWithSnakeTail */}
              <div className="absolute mt-10 ml-72 inset-0 opacity-50 pointer-events-none">
                <Test />
              </div>
            </Link>
          </div>

          {/* Row 2: Two Stacked Cards Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[portfolioCategories[1], portfolioCategories[2]].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${item.className}`}
              >
                <div className="relative z-10 flex flex-col h-full p-8 justify-between">
          <div className="max-w-[400px]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
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
                <NextImage
                  src={item.image ?? ''}
                  alt={item.title}
                  fill
                  className="absolute inset-0 object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                />
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
                    {React.createElement(portfolioCategories[3].icon, {
                      className: 'h-6 w-6 text-primary',
                    })}
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
              <NextImage
                src={portfolioCategories[3].image ?? ''}
                alt={portfolioCategories[3].title}
                fill
                className="absolute inset-0 object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
