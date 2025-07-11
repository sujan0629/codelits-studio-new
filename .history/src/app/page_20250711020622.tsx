'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote, CheckCircle2, Star , Users, Layers, Zap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GridPattern } from '@/components/decoration/GridPattern';
import { featuredProjects, type Project } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ExpandableFeatureCard } from '@/components/ExpandableFeatureCard';

gsap.registerPlugin(ScrollTrigger);

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
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', // clean white Meta logo
  },

  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },  {
    name: 'PlayXio',
    logo: '/logos/playxio.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', // colored Microsoft logo
  },


  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
  },
 
];



function Hero() {

  
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
          defaults: { ease: 'power4.out', duration: 1.2 }
      });
      tl.fromTo(".hero-title-char", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.6 }
      )
      .fromTo(".hero-p", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(".hero-buttons", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(".hero-image",
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.75)' },
        "-=0.8"
      );

      gsap.to(".hero-image", {
        yPercent: -15,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
       gsap.to(".grid-pattern", {
        yPercent: 50,
        opacity: 0.3,
        ease: "power1.inOut",
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

const title = [
  "Crafting Digital Brilliance",
  "for Visionary Startups",
];


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
      {line.split(" ").map((word, j) => (
        <span key={j} className="inline-block mr-3 md:mr-4">
          {word.split("").map((char, k) => (
            <span key={k} className="hero-title-char inline-block">{char}</span>
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
  {/* Outer container with border and shadow */}
  <div className="rounded-xl border border-[#111111] shadow-lg overflow-hidden bg-background">
    {/* Top nav bar with semi-transparent black */}
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
  data-ai-hint="digital agency dashboard"
  preload="metadata"
  controls={false}
/>


      {/* Black overlay with lower opacity */}
      <div className="absolute inset-0 rounded-b-xl bg-black opacity-15 pointer-events-none" />
    </div>
  </div>


</div>
</div>
    </section>
  );
}

function ClientLogo({ logo, name }: { logo: string; name: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Image
      src={logo}
      alt={name}
      width={120}
      height={40}
      style={{
        filter: isHovered ? 'grayscale(0%)' : 'grayscale(90%)',
        opacity: isHovered ? 1 : 0.8,
        transition: 'all 0.3s ease-in-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
function FeatureSection({
  className,
  ...props
}: React.ComponentProps<'section'>) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section ref={sectionRef} className={className} {...props} />;
}

function Clients() {
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        clientsRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: clientsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, clientsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={clientsRef} className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Powering the world&apos;s most innovative companies
        </h3>
        <div className="relative mt-8 flex h-10 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-marquee items-center [--gap:2rem] hover:[animation-play-state:paused]">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="flex-shrink-0" style={{ paddingLeft: '2rem' }}>
                <ClientLogo logo={client.logo} name={client.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const ProjectShowcaseItem = ({ project, index }: { project: Project, index: number }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="featured-project-item grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className={`relative aspect-[16/10] rounded-xl shadow-2xl bg-muted/30 overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <div className={cn(
                    "absolute inset-0 bg-muted flex items-center justify-center transition-opacity duration-500 z-10",
                    isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                )}>
                    <p className="text-muted-foreground text-sm">Loading Live Preview...</p>
                </div>
                <iframe
                    src={project.link}
                    title={project.title}
                    className={cn("w-full h-full border-0 transition-opacity duration-1000", isLoaded ? 'opacity-100' : 'opacity-0')}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    sandbox="allow-scripts allow-same-origin"
                />
            </div>
            <div className="details">
                <h3 className="font-headline text-2xl md:text-3xl font-bold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <Button asChild variant="outline" className="mt-8">
                    <Link href={`/portfolio/${project.slug}`}>Explore Project <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </div>
    );
};

function FeaturedWork() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLDivElement>('.featured-project-item').forEach((item) => {
                gsap.fromTo(item,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                        }
                    }
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="work" className="py-20 md:py-28 bg-background relative overflow-hidden">
             <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"
             />
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Masterpieces</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Interact with our live projects directly from the showcase.
                    </p>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {featuredProjects.map((project, index) => (
                       <ProjectShowcaseItem key={project.slug} project={project} index={index} />
                    ))}
                </div>

                 <div className="mt-24 text-center">
                    <Button asChild size="lg" variant="outline">
                        <Link href="/portfolio">View All Projects <ArrowRight className="ml-2" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}


const features = [
  {
    title: 'Scalable system design',
    description: 'Our development process is built on a foundation of scalability. We design systems that can handle growth from day one to enterprise-level traffic, ensuring your application remains robust and performant as your user base expands.',
    image: '/images/art.jpeg',
    hint: 'scalable architecture diagram',
    points: ['Microservices & Serverless', 'Load Balancing', 'Database Optimization', 'Cloud-Native Infrastructure']
  },
  {
    title: 'Blazing Fast Performance',
    description: 'Performance isn\'t an afterthought; it\'s a core feature of everything we build. We employ modern techniques like edge computing, code splitting, and image optimization to deliver lightning-fast experiences that keep users engaged and improve conversion rates.',
    image: '/images/bugattii.jpg',
    hint: 'fast loading website',
    points: ['Next.js & Edge Functions', 'Static Site Generation', 'Lazy Loading Assets', 'Global CDN Delivery']
  },
  {
    title: 'User-centered design approach',
    description: 'We believe that great products are built around people. Our design and development process is deeply rooted in user-centered principles. We conduct research, create prototypes, and test with real users to ensure the final product is intuitive, accessible, and delightful to use.',
    image: '/images/des.jpeg',
    hint: 'user experience design',
    points: ['User Personas & Journey Mapping', 'A/B Testing', 'Accessibility (WCAG) Compliance', 'Interactive Prototyping']
  },
]

function StrongFoundations() {
  return (
    <FeatureSection className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">Built on strong foundations</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
         We use advanced, scalable technologies to make sure your product excels today and is ready for the future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
                <ExpandableFeatureCard key={i} feature={feature} />
            ))}
        </div>
      </div>
    </FeatureSection>
  )
}



function ProductDirection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    ).fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95, rotateX: 10 },
      { opacity: 1, scale: 1, rotateX: 0, duration: 1.2, ease: 'power2.out' },
      '-=0.6'
    );
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0F1011] flex flex-col justify-center items-center px-6 py-16">
      <div
        ref={textRef}
        className="text-center text-white max-w-3xl mb-12"
      >
        <p className="text-sm text-green-400 font-medium mb-3">
          Project and long-term planning
        </p>
        <h1 className="text-5xl font-bold leading-tight">
          Set the product direction
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          Align your team around a unified product timeline.
          <br />
          Plan, manage, and track all product initiatives with Linear’s visual
          planning tools.
        </p>
      </div>

      {/* Image container without blurred background container */}
      <div
        ref={imageRef}
        className="relative overflow-hidden rounded-xl transform shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#2a2a2a] bg-[#121212]/60 backdrop-blur-xl max-w-[90vw] w-full"
        style={{ transform: 'rotateX(17deg) rotateZ(-10deg) scale(0.95)' }}
      >
        <Image
          src="/linear-timeline.png"
          alt="Timeline graphic"
          width={3000}   // increased width for better horizontal scale
          height={1200}  // keep proportionally bigger height
          className="w-full h-auto object-cover opacity-95"
          priority
        />
      </div>

      {/* Decorative corner box */}
      <div className="absolute bottom-[-12px] left-[-12px] w-8 h-8 bg-[#0f0f0f] rounded-md blur-sm border border-[#2a2a2a] opacity-70" />
    </section>
  );
}

function Capabilities() {
    const capabilities = [
        { icon: CheckCircle2, title: "UI/UX Design", description: "Crafting intuitive and beautiful user interfaces that users love." },
        { icon: CheckCircle2, title: "Web Development", description: "Building responsive, high-performance, and scalable websites." },
        { icon: CheckCircle2, title: "App Development", description: "Creating engaging mobile apps for both iOS and Android platforms." },
        { icon: CheckCircle2, title: "Digital Marketing", description: "Driving growth and user acquisition with targeted marketing strategies." },
        { icon: CheckCircle2, title: "E-commerce Solutions", description: "Building robust e-commerce platforms that provide a seamless shopping experience." },
        { icon: CheckCircle2, title: "SEO & Content Strategy", description: "Improving search engine rankings and attracting organic traffic." },
    ];
    const sectionRef = useRef<HTMLDivElement>(null);

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
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Capabilities</h2>
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
                     <div className="inline-block p-3 bg-primary/10 rounded-full">
                        <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">What Our Clients Say</h2>
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
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <Card className="h-full bg-background/50 backdrop-blur-sm border-border/20 rounded-lg shadow-lg group">
                            <CardContent className="p-8 flex flex-col items-start text-left justify-center h-full">
                                <Quote className="w-8 h-8 text-primary/70 mb-6 transition-transform duration-300 group-hover:scale-110" />
                                <p className="text-md italic flex-grow mb-6">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12 border-2 border-primary/50">
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
      <ProductDirection />
      <Capabilities />

           <StrongFoundations />
      <Testimonials />
    </>
  );
}
