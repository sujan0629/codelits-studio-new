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
      sectionRef.current,
      { opacity: 0, y: 50 },  // start 50px below and invisible
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' } // animate up to normal position & visible
    );
  }
}, []);

return (
  <div ref={sectionRef} className="w-full mt-36 mb-20 py-8 flex justify-center">
    <div className="flex flex-col md:flex-row items-center md:gap-8 gap-4">
      <h2 className="animate-item text-xl md:text-2xl font-semibold text-center md:text-left max-w-lg">
  Reliable foundations for lasting growth.
      </h2>
      <div className="animate-item flex gap-3">
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Check our work</Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/portfolio">Talk to sales</Link>
        </Button>
      </div>

    </div>
  </div>
);
}