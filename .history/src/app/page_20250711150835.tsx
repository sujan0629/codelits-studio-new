// app/page.tsx
'use client';

import React from 'react';
import {
  Hero,
  Clients,
  FeaturedWork,
  Capabilities,
  StrongFoundations,
  Testimonials,
} from './HomePage';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <FeaturedWork />
      <Capabilities />
      <StrongFoundations />
      <Testimonials />
    </>
  );
}
