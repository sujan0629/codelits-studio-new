'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote, Code, Component, Megaphone, PenTool } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const featuredWork = [
  {
    title: 'RMS',
    description: 'A comprehensive management system for educational institutions.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'school dashboard',
    link: 'https://rms.codelitsstudio.com/',
  },
  {
    title: 'Playxio',
    description: 'A modern and sleek gaming platform for enthusiasts.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'gaming platform',
    link: 'https://playxio.xyz/',
  },
];

const testimonials = [
    {
        quote: "Working with CodeLits Studio was a game-changer for our business. Their expertise and dedication are unmatched.",
        name: "Jane Doe",
        title: "CEO, Tech Corp",
        image: "https://placehold.co/100x100.png",
        hint: "female professional"
    },
    {
        quote: "The team at CodeLits delivered a stunning website that exceeded all our expectations. Highly recommended!",
        name: "John Smith",
        title: "Marketing Director, Innovate Ltd.",
        image: "https://placehold.co/100x100.png",
        hint: "male professional"
    },
    {
        quote: "Their digital marketing strategies have significantly boosted our online presence and lead generation. A fantastic partner to work with.",
        name: "Emily White",
        title: "Founder, Creative Solutions",
        image: "https://placehold.co/100x100.png",
        hint: "creative woman"
    },
];

const clients = [
  { name: 'Meta', logo: '/logos/meta.svg' },
  { name: 'Apple', logo: '/logos/apple.svg' },
  { name: 'Amazon', logo: '/logos/amazon.svg' },
  { name: 'Netflix', logo: '/logos/netflix.svg' },
  { name: 'Google', logo: '/logos/google.svg' },
  { name: 'Microsoft', logo: '/logos/microsoft.svg' },
];


function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-title-char", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: 'power4.out' }
      );
      gsap.fromTo(".hero-p", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power4.out' }
      );
       gsap.fromTo(".hero-buttons", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: 'power4.out' }
      );
       gsap.fromTo(".hero-image", 
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, delay: 0.9, ease: 'power4.out' }
      );

      gsap.to(".hero-image", {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  const title = "We Craft Digital Masterpieces";

  return (
    <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div className="container mx-auto px-4 z-10 relative text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          {title.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-3 md:mr-4">
              {word.split("").map((char, j) => (
                <span key={j} className="hero-title-char inline-block">{char}</span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero-p mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          CodeLits is a digital product studio that partners with ambitious startups and established brands to create exceptional web and mobile experiences.
        </p>
        <div className="hero-buttons mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        
        <div className="hero-image mt-24 relative">
          <Image
              src="https://placehold.co/1200x600.png"
              alt="Digital masterpiece"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl w-full max-w-5xl mx-auto"
              data-ai-hint="digital agency dashboard"
          />
        </div>
      </div>
    </section>
  );
}

function Clients() {
    const clientsRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(clientsRef.current, { autoAlpha: 0, y: 50 }, {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: clientsRef.current,
                    start: "top 80%",
                }
            })
        }, clientsRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={clientsRef} className="py-12">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Powering the world&apos;s most innovative companies
                </h3>
                <div className="relative mt-8 flex h-10 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div className="flex w-max animate-marquee items-center [--gap:2rem] hover:[animation-play-state:paused]">
                        {clients.concat(clients).map((client, index) => (
                            <div key={index} className="flex-shrink-0" style={{ paddingLeft: '2rem' }}>
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={120}
                                    height={40}
                                    className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturedWork() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.featured-work-card',
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power4.out',
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
        <section ref={sectionRef} id="work" className="py-20 md:py-28 bg-card/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Masterpieces</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        A look at some of our favorite projects.
                    </p>
                </div>
                <div className="space-y-24">
                    {featuredWork.map((project, index) => (
                        <div key={project.title} className="featured-work-card grid md:grid-cols-2 gap-12 items-center">
                            <div className={`relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <Link href={project.link} target="_blank">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={1200}
                                        height={800}
                                        className="rounded-lg shadow-2xl aspect-[4/3] object-cover object-top hover:scale-105 transition-transform duration-500"
                                        data-ai-hint={project.hint}
                                    />
                                </Link>
                            </div>
                            <div className={`text-left ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <h3 className="font-headline text-3xl font-bold">{project.title}</h3>
                                <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
                                <Button asChild size="lg" variant="link" className="p-0 mt-4">
                                    <Link href={project.link} target="_blank">Visit Website <ArrowRight className="ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServicesOverview() {
    const services = [
        { icon: PenTool, title: "UI/UX Design", description: "Crafting intuitive and beautiful user interfaces that users love.", image: "https://placehold.co/500x500.png", hint: "abstract design" },
        { icon: Code, title: "Web Development", description: "Building responsive, high-performance, and scalable websites.", image: "https://placehold.co/500x500.png", hint: "abstract code" },
        { icon: Component, title: "App Development", description: "Creating engaging mobile apps for both iOS and Android platforms.", image: "https://placehold.co/500x500.png", hint: "abstract app" },
        { icon: Megaphone, title: "Digital Marketing", description: "Driving growth and user acquisition with targeted marketing strategies.", image: "https://placehold.co/500x500.png", hint: "abstract marketing" },
    ];
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.service-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            )
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Capabilities</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We offer a comprehensive suite of digital services to bring your vision to life.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div key={service.title} className="service-card group relative overflow-hidden rounded-xl border border-border/20 hover:border-primary/50 transition-all duration-300">
                             <Image
                                src={service.image}
                                alt={service.title}
                                width={500}
                                height={500}
                                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                data-ai-hint={service.hint}
                            />
                            <div className="relative z-10 p-8 h-full flex flex-col bg-gradient-to-t from-background via-background/80 to-transparent">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg ring-4 ring-primary/5 w-min mb-4">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    }
                }
            )
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-card/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We are proud to have earned the trust of our amazing clients.
                    </p>
                </div>
                 <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-5xl mx-auto"
                >
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-4">
                          <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 rounded-lg shadow-lg">
                            <CardContent className="p-8 flex flex-col items-start text-left justify-center h-full">
                                <Quote className="w-10 h-10 text-primary mb-6" />
                                <p className="text-lg italic flex-grow mb-6">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-lg">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                    </div>
                                </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex -left-12" />
                  <CarouselNext className="hidden md:flex -right-12" />
                </Carousel>
            </div>
        </section>
    );
}


export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <FeaturedWork />
      <ServicesOverview />
      <Testimonials />
    </>
  );
}
