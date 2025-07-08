import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Code, Component, Megaphone, PenTool, Quote } from 'lucide-react';

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
];

const testimonials = [
    {
        quote: "Working with CodeLits Studio was a game-changer for our business. Their expertise and dedication are unmatched.",
        name: "Jane Doe",
        title: "CEO, Tech Corp",
    },
    {
        quote: "The team at CodeLits delivered a stunning website that exceeded all our expectations. Highly recommended!",
        name: "John Smith",
        title: "Marketing Director, Innovate Ltd.",
    },
    {
        quote: "Their digital marketing strategies have significantly boosted our online presence and lead generation. A fantastic partner to work with.",
        name: "Emily White",
        title: "Founder, Creative Solutions",
    },
];

const clients = [
  { name: 'InnovateX' },
  { name: 'QuantumLeap' },
  { name: 'Stellar Solutions' },
  { name: 'Nexus' },
  { name: 'Apex Industries' },
];


function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          We Build <span className="text-primary">Exceptional</span> Digital Experiences
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          CodeLits Studio is a full-service digital agency specializing in crafting beautiful, high-performance websites and applications that drive results.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
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
                    Trusted by the world&apos;s most innovative companies
                </h3>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-4">
                    {clients.map(client => (
                        <span key={client.name} className="font-semibold text-muted-foreground text-lg opacity-60 hover:opacity-100 transition-opacity">
                            {client.name}
                        </span>
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
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Featured Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into the solutions we&apos;ve crafted for our clients.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
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
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We offer a comprehensive suite of digital services to bring your vision to life.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div key={service.title} className="text-center p-6 rounded-lg hover:bg-card/50 transition-colors">
                            <div className="inline-block p-4 bg-primary/10 text-primary rounded-full">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-headline text-xl font-semibold">{service.title}</h3>
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
                    className="w-full max-w-4xl mx-auto mt-12"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2">
                                <div className="p-1">
                                    <Card className="h-full">
                                        <CardContent className="p-6 flex flex-col items-center text-center justify-center h-full">
                                            <Quote className="w-8 h-8 text-primary mb-4" />
                                            <p className="text-lg italic">&quot;{testimonial.quote}&quot;</p>
                                            <div className="mt-6">
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
