'use client';
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GridPattern } from '@/components/decoration/GridPattern';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out', duration: 1.2 }
      });
      tl.fromTo('.hero-title-char', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.6 })
        .fromTo('.hero-p', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
        .fromTo('.hero-buttons', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
        .fromTo('.hero-image', { y: 100, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.75)' }, '-=0.8');

      gsap.to('.hero-image', {
        yPercent: -15,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('.grid-pattern', {
        yPercent: 50,
        opacity: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const title = ['Crafting Digital Brilliance', 'for Visionary Startups'];

  return (
    <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden bg-background">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className="grid-pattern absolute -top-1/4 left-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
      />
      <div className="container mx-auto px-4 z-10 relative text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
          {title.map((line, i) => (
            <span key={i} className="block mb-2">
              {line.split(' ').map((word, j) => (
                <span key={j} className="inline-block mr-3 md:mr-4">
                  {word.split('').map((char, k) => (
                    <span key={k} className="hero-title-char inline-block">
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero-p mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          We&rsquo;re CodeLits Studio — a full-stack software company turning ambitious ideas into powerful tech solutions across web, mobile, AI, and beyond.
        </p>

        <div className="hero-buttons mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="hero-image mt-24 relative max-w-[1100px] mx-auto group">
          <div className="rounded-xl border border-[#111111] shadow-lg overflow-hidden bg-background">
            <div className="flex items-center gap-2 px-4 h-8 bg-[#111111] opacity-70 rounded-t-xl">
              <span className="w-3 h-3 rounded-full bg-red-500 shadow-md"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-md"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 shadow-md"></span>
              <span className="w-3 h-3 mx-2 text-[0.55rem] text-gray-300 shadow-md">codelitsstudio®</span>
            </div>

            <div className="relative">
              <video
                src="/videos/hehe.mp4"
                autoPlay
                loop
                muted
                playsInline
                // @ts-ignore-next-line
                webkit-playsinline="true"
                className="rounded-b-xl aspect-[20/10] object-cover object-top filter brightness-50"
                preload="metadata"
              />
              <div className="absolute inset-0 rounded-b-xl bg-black opacity-15 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
