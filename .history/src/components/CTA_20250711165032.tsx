'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import gsap from 'gsap';

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
        }
      );
    }
  }, []);
return (
  <div ref={sectionRef} className="w-full mt-24 mb-20 py-8 flex justify-center">
    <div className="flex flex-col md:flex-row items-center md:gap-8 gap-4">
      <h2 className="animate-item text-xl md:text-3xl font-semibold text-center md:text-left max-w-lg">
        Plan the present. Build the future.
      </h2>
      <div className="animate-item flex gap-3">
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Talk to sales</Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/portfolio">Get started</Link>
        </Button>
      </div>
    </div>
  </div>
);
}