import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Code, Component, Megaphone, PenTool, Quote, Award, Users, Zap, Briefcase } from 'lucide-react';
import { GridPattern } from '@/components/decoration/GridPattern';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A complete branding and web development project for a leading tech startup.',
    image: 'https://placehold.co/600x400.png',
    hint: 'tech startup',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    title: 'Project Beta',
    description: 'E-commerce platform with a custom design system and seamless user experience.',
    image: 'https://placehold.co/600x400.png',
    hint: 'ecommerce platform',
    tags: ['E-commerce', 'Branding'],
    link: '#',
  },
  {
    title: 'Project Gamma',
    description: 'Digital marketing campaign that increased lead generation by 300%.',
    image: 'https://placehold.co/600x400.png',
    hint: 'digital marketing',
    tags: ['Marketing', 'SEO'],
    link: '#',
  },
    {
    title: 'Project Delta',
    description: 'Mobile app for a fintech company, with a focus on security and user experience.',
    image: 'https://placehold.co/600x400.png',
    hint: 'fintech app',
    tags: ['Mobile App', 'Fintech'],
    link: '#',
  },
    {
    title: 'Project Epsilon',
    description: 'AI-powered analytics dashboard for a major logistics corporation.',
    image: 'https://placehold.co/600x400.png',
    hint: 'analytics dashboard',
    tags: ['AI', 'Data Visualization'],
    link: '#',
  },
    {
    title: 'Project Phi',
    description: 'A beautiful and performant marketing website for a SaaS product.',
    image: 'https://placehold.co/600x400.png',
    hint: 'saas website',
    tags: ['Web Design', 'SaaS'],
    link: '#',
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

const bentoItems = [
    {
        icon: Award,
        title: "10+ Years of Experience",
        description: "Proven expertise in delivering high-quality digital products.",
        className: "md:col-span-2",
    },
    {
        icon: Users,
        title: "50+ Happy Clients",
        description: "From startups to Fortune 500 companies.",
        className: "md:col-span-1",
    },
    {
        icon: Briefcase,
        title: "100+ Projects Completed",
        description: "A diverse portfolio of successful projects.",
        className: "md:col-span-1",
    },
    {
        icon: Zap,
        title: "Agile & Fast",
        description: "We work fast and adapt to your needs for a quick turnaround.",
        className: "md:col-span-2",
    },
];


function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
        <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            className="absolute inset-0 h-full w-full stroke-gray-500/30 [mask-image:radial-gradient(at_top_left,white,transparent_75%)]"
        />
      <div className="container mx-auto px-4 text-center z-10 relative">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          We Craft Digital <br className="hidden md:block" /> Masterpieces
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          CodeLits is a digital product studio that partners with ambitious startups and established brands to create exceptional web and mobile experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {bentoItems.map((item) => (
                <Card key={item.title} className={`${item.className} p-6 bg-card/50 backdrop-blur-sm text-left border-primary/20 hover:border-primary/50 transition-colors`}>
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                </Card>
            ))}
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
            <Card key={project.title} className="flex flex-col overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                 <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
                    {project.tags.map(tag => (
                        <div key={tag} className="text-xs uppercase text-primary font-semibold tracking-wider">{tag}</div>
                    ))}
                </div>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/portfolio">View Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
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
                                    <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20">
                                        <CardContent className="p-8 flex flex-col items-start text-left justify-center h-full">
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
                                        </CardContent>
                                    </Card>
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
