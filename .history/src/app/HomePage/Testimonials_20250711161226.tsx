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
        quote: "Working with CodeLits Studio was an incredible experience from start to finish. Their professionalism, expertise, and dedication to our project truly stood out. We are thrilled with the results and look forward to collaborating again in the future.",
        name: "Jane Doe",
        title: "CEO, Tech Corp",
        image: "https://placehold.co/200x200.png",  // bigger image placeholder
        hint: "female professional"
    },
    {
        quote: "The CodeLits team delivered an outstanding website that not only met but exceeded our expectations. Their attention to detail and responsiveness made the whole process seamless and enjoyable.",
        name: "John Smith",
        title: "Marketing Director, Innovate Ltd.",
        image: "https://placehold.co/200x200.png",
        hint: "male professional"
    },
    {
        quote: "Thanks to CodeLits’ innovative marketing strategies, our online presence has grown significantly. Their team has been a trusted partner, always available and ready with new ideas.",
        name: "Emily White",
        title: "Founder, Creative Solutions",
        image: "https://placehold.co/200x200.png",
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
            className="relative p-8 rounded-lg bg-gray-200 text-black shadow-lg flex-shrink-0 w-[550px] md:w-[590px] h-[360px] flex flex-col justify-between border border-border cursor-grab"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Lucide Quote icon with reduced margin-bottom */}
<Quote
  className="w-10 h-10 text-black"
  fill="currentColor"
  stroke="none"
    style={{ transform: 'rotateX(180deg) rotateY(180deg)' }}
/>

            <p className="text-base italic font-light leading-relaxed text-black text-left">
                {testimonial.quote}
            </p>

            <div className="flex items-center gap-4 mt-6">
               <Avatar className="w-20 h-20 border-2 border-primary/50">  {/* Increased size */}
    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
</Avatar>
                <div>
                    <p className="font-semibold text-base text-black">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};

// Testimonials component:
const Testimonials = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const isDown = React.useRef(false);
    const startX = React.useRef(0);
    const scrollLeft = React.useRef(0);
    const velocity = React.useRef(0);
    const lastMouseX = React.useRef(0);
    const lastTime = React.useRef(0);
    const animationFrameId = React.useRef<number | null>(null);

    React.useEffect(() => {
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

    const startInertia = () => {
const friction = 0.97; // slower decay = longer smoother scroll

        const threshold = 0.02;

        const step = () => {
            if (!scrollRef.current) return;

            scrollRef.current.scrollLeft -= velocity.current * 10; // speed multiplier

            velocity.current *= friction;

            if (Math.abs(velocity.current) > threshold) {
                animationFrameId.current = requestAnimationFrame(step);
            } else {
                animationFrameId.current = null;
            }
        };

        animationFrameId.current = requestAnimationFrame(step);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        isDown.current = true;
        scrollRef.current.classList.add('cursor-grabbing');
        scrollRef.current.classList.remove('cursor-grab');
          scrollRef.current.style.userSelect = 'none'; 
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;

        lastMouseX.current = e.pageX;
        lastTime.current = Date.now();

        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // scroll speed
        scrollRef.current.scrollLeft = scrollLeft.current - walk;

        // Velocity calculation
        const now = Date.now();
        const dt = now - lastTime.current;
        if (dt > 0) {
            const dx = e.pageX - lastMouseX.current;
            velocity.current = dx / dt; // pixels/ms
            lastMouseX.current = e.pageX;
            lastTime.current = now;
        }
    };

    const handleMouseUp = () => {
        if (!scrollRef.current) return;
        isDown.current = false;
        scrollRef.current.classList.remove('cursor-grabbing');
        scrollRef.current.classList.add('cursor-grab');
 scrollRef.current.style.userSelect = 'auto';
        startInertia();
    };

    const handleMouseLeave = () => {
        if (!scrollRef.current) return;
        if (isDown.current) {
            isDown.current = false;
            scrollRef.current.classList.remove('cursor-grabbing');
            scrollRef.current.classList.add('cursor-grab');
scrollRef.current.style.userSelect = 'auto';
            startInertia();
        }
    };

    return (
   <section
  ref={sectionRef}
  className="relative  py-20 md:py-28 bg-[#0E0E0E] overflow-hidden"
>
  {/* Top blur blend with above section */}
  <div
    className="absolute top-0 left-0 w-full h-24 z-10 pointer-events-none"
    style={{
      background:
        'linear-gradient(to bottom, #080808 0%, rgba(14,14,14,0.6) 60%, rgba(14,14,14,1) 100%)',
      backdropFilter: 'blur(8px)',
    }}
  />

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
                               Explore the experiences our clients have shared on Clutch. Yours could be the next success we celebrate.
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
                                    Reviews us ?
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex flex-nowrap gap-8 overflow-x-auto cursor-grab py-8 px-8 -mx-8"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.concat(testimonials).slice(0, 6).map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
