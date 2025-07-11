// components/CallToAction.tsx
'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import gsap from 'gsap';

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sectionRef.current && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      gsap.fromTo(
        sectionRef.current.querySelectorAll('a'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-black text-white py-16 flex flex-col items-center justify-center gap-6">
      <h2 ref={textRef} className="text-3xl md:text-5xl font-semibold text-center max-w-3xl px-4">
        Plan the present. Build the future.
      </h2>
      <div className="flex gap-4">
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Talk to sales</Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/portfolio">Get started</Link>
        </Button>
      </div>
    </div>
  );
}
