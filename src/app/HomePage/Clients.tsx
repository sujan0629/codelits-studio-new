// app/HomePage/Clients.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
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
  },
  {
    name: 'PlayXio',
    logo: '/logos/playxio.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
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

export default function Clients() {
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