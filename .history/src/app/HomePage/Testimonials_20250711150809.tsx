// app/HomePage/Testimonials.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

export default function Testimonials() {
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
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="direction-label inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Trusted by clients worldwide</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-6">What Our Clients Say</h2>
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
