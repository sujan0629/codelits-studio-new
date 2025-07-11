// app/HomePage/Capabilities.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    { icon: CheckCircle2, title: "UI/UX Design", description: "Crafting intuitive and beautiful user interfaces that users love." },
    { icon: CheckCircle2, title: "Web Development", description: "Building responsive, high-performance, and scalable websites." },
    { icon: CheckCircle2, title: "App Development", description: "Creating engaging mobile apps for both iOS and Android platforms." },
    { icon: CheckCircle2, title: "Digital Marketing", description: "Driving growth and user acquisition with targeted marketing strategies." },
    { icon: CheckCircle2, title: "E-commerce Solutions", description: "Building robust e-commerce platforms that provide a seamless shopping experience." },
    { icon: CheckCircle2, title: "SEO & Content Strategy", description: "Improving search engine rankings and attracting organic traffic." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.capability-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
      gsap.fromTo('.capabilities-image',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'elastic.out(1, 0.75)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="direction-label inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Comprehensive project and strategic expertise</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl mt-6 font-bold">Our Capabilities</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We offer a comprehensive suite of digital services to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {capabilities.map(service => (
              <div key={service.title} className="capability-item flex items-start gap-4">
                <div className="p-1 bg-primary/10 text-primary rounded-full mt-1">
                  <service.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="capabilities-image relative aspect-square">
            <Image
              src="https://placehold.co/800x800.png"
              alt="Capabilities"
              width={800}
              height={800}
              className="rounded-2xl object-cover w-full h-full"
              data-ai-hint="digital agency capabilities"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 
