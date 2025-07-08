'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Quote, Code, Component, Megaphone, PenTool } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha',
    description: 'A complete branding and web development project for a leading tech startup.',
    image: 'https://placehold.co/600x450.png',
    hint: 'tech startup',
    tags: ['UI/UX Design', 'Web Development'],
  },
  {
    slug: 'project-beta',
    title: 'Project Beta',
    description: 'E-commerce platform with a custom design system and seamless user experience.',
    image: 'https://placehold.co/600x450.png',
    hint: 'ecommerce platform',
    tags: ['E-commerce', 'Branding'],
  },
  {
    slug: 'project-gamma',
    title: 'Project Gamma',
    description: 'Digital marketing campaign that increased lead generation by 300%.',
    image: 'https://placehold.co/600x450.png',
    hint: 'digital marketing',
    tags: ['Marketing', 'SEO'],
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
  { name: 'Meta', logo: 'https://placehold.co/150x50.png', hint: 'meta logo' },
  { name: 'Apple', logo: 'https://placehold.co/150x50.png', hint: 'apple logo' },
  { name: 'Amazon', logo: 'https://placehold.co/150x50.png', hint: 'amazon logo' },
  { name: 'Netflix', logo: 'https://placehold.co/150x50.png', hint: 'netflix logo' },
  { name: 'Google', logo: 'https://placehold.co/150x50.png', hint: 'google logo' },
  { name: 'Microsoft', logo: 'https://placehold.co/150x50.png', hint: 'microsoft logo' },
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
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Powering the world&apos;s most innovative companies
                </h3>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-6">
                    {clients.map(client => (
                        <Image
                            key={client.name}
                            src={client.logo}
                            alt={client.name}
                            width={120}
                            height={40}
                            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                            data-ai-hint={client.hint}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeaturedProjects() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">From Concept to Creation</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into the solutions we&apos;ve crafted for our clients.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">Explore All Projects</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
    const services = [
        { icon: PenTool, title: "UI/UX Design", description: "Crafting intuitive and beautiful user interfaces." },
        { icon: Code, title: "Web Development", description: "Building responsive and high-performance websites." },
        { icon: Component, title: "App Development", description: "Creating mobile apps for iOS and Android platforms." },
        { icon: Megaphone, title: "Digital Marketing", description: "Driving growth with targeted marketing strategies." },
    ];

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Capabilities</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We offer a comprehensive suite of digital services to bring your vision to life.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div key={service.title} className="text-center p-6 rounded-lg border border-transparent hover:border-primary/30 hover:bg-card/50 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="inline-block p-4 bg-primary/10 text-primary rounded-full ring-8 ring-primary/5">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold">{service.title}</h3>
                            <p className="mt-2 text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


function Testimonials() {
    return (
        <section className="py-20 md:py-28 bg-card/50">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We are proud to have earned the trust of our amazing clients.
                    </p>
                </div>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full max-w-5xl mx-auto mt-12"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-2">
                                    <div className="h-full bg-card/50 backdrop-blur-sm border-primary/20 rounded-lg p-8 flex flex-col items-start text-left justify-center">
                                        <Quote className="w-8 h-8 text-primary mb-4" />
                                        <p className="text-lg italic flex-grow">&quot;{testimonial.quote}&quot;</p>
                                        <div className="mt-6 flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
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
      <FeaturedProjects />
      <ServicesOverview />
      <Testimonials />
    </>
  );
}
