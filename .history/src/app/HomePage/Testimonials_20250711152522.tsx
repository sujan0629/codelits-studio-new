'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';

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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        const rotateX = gsap.utils.mapRange(0, 1, -5, 5, y);
        const rotateY = gsap.utils.mapRange(0, 1, 5, -5, x);

        gsap.to(cardRef.current, {
            rotateX,
            rotateY,
            scale: 1.03,
            ease: 'power2.out',
            duration: 0.4,
        });
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            ease: 'power2.out',
            duration: 0.4,
        });
    };

    return (
        <div
            ref={cardRef}
            className="relative p-8 rounded-2xl bg-white text-card-foreground shadow-lg flex-shrink-0 w-[340px] md:w-[420px] h-full flex flex-col justify-between border border-border"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Quote icon placed inline above the paragraph */}
            <div className="mb-4">
                <Quote className="w-10 h-10 text-primary" />
            </div>

            <p className="text-base italic font-light text-muted-foreground leading-relaxed text-left">
                &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex items-center gap-4 mt-6">
                <Avatar className="w-12 h-12 border-2 border-primary/50">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-base">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

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

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        isDown.current = true;
        scrollRef.current.classList.add('cursor-grabbing');
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        if (!scrollRef.current) return;
        isDown.current = false;
        scrollRef.current.classList.remove('cursor-grabbing');
    };

    const handleMouseUp = () => {
        if (!scrollRef.current) return;
        isDown.current = false;
        scrollRef.current.classList.remove('cursor-grabbing');
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // scroll-fast
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };
    
    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-card/50 overflow-hidden">
            <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">REVIEWS</p>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2 flex items-center gap-3">
                            5.0 
                             <svg width="32" height="32" viewBox="0 0 24 24" className="text-red-500 fill-red-500">
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.848L19.336 24 12 20.213 4.664 24 6 15.271 0 9.423l8.332-1.268z"/>
                            </svg>
                            on Clutch.
                        </h2>
                    </div>
              <div className="flex justify-start">
  <div className="max-w-md text-left">
    <p className="text-lg text-muted-foreground mb-6">
      Discover what experiences our customers share on Clutch. Your success story could be the next.
    </p>
<Button
  asChild
  variant="outline"
  size="lg"
  className="flex items-center gap-2 py-4 px-6 max-w-[160px]"
>
      <a 
        href="https://review.clutch.co/review?provider_id=ffa83896-9708-498a-9b40-3092cf975341" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        
        <img 
          src="/logos/clutch.svg" 
          alt="Clutch Logo" 
          className="w-8 h-8" 
          loading="lazy"
        />
        All Reviews
      </a>
    </Button>
  </div>
</div>

                </div>

                <div
                    ref={scrollRef}
                    className="flex flex-nowrap gap-8 overflow-x-auto cursor-grab py-8 -mx-4 px-4"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
