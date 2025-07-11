// app/HomePage/StrongFoundations.tsx
'use client';
import React from 'react';
import FeatureSection from './FeatureSection';
import { ExpandableFeatureCard } from '@/components/ExpandableFeatureCard';

const features = [
  {
    title: 'Scalable system design',
    description: 'Our development process is built on a foundation of scalability. We design systems that can handle growth from day one to enterprise-level traffic, ensuring your application remains robust and performant as your user base expands.',
    image: '/images/art.jpeg',
    hint: 'scalable architecture diagram',
    points: ['Microservices & Serverless', 'Load Balancing', 'Database Optimization', 'Cloud-Native Infrastructure']
  },
  {
    title: 'Blazing Fast Performance',
    description: 'Performance isn\'t an afterthought; it\'s a core feature of everything we build. We employ modern techniques like edge computing, code splitting, and image optimization to deliver lightning-fast experiences that keep users engaged and improve conversion rates.',
    image: '/images/bugattii.jpg',
    hint: 'fast loading website',
    points: ['Next.js & Edge Functions', 'Static Site Generation', 'Lazy Loading Assets', 'Global CDN Delivery']
  },
  {
    title: 'User-centered design approach',
    description: 'We believe that great products are built around people. Our design and development process is deeply rooted in user-centered principles. We conduct research, create prototypes, and test with real users to ensure the final product is intuitive, accessible, and delightful to use.',
    image: '/images/des.jpeg',
    hint: 'user experience design',
    points: ['User Personas & Journey Mapping', 'A/B Testing', 'Accessibility (WCAG) Compliance', 'Interactive Prototyping']
  },
]

export default function StrongFoundations() {
  return (
    <FeatureSection className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="direction-label inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Robust project and strategic planning</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-6">Built on strong foundations</h2>
          <p className="mt-4 mb-28 max-w-2xl mx-auto text-muted-foreground">
            We use advanced, scalable technologies to make sure your product excels today and is ready for the future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div key={i} className={i === 1 ? "lg:-mt-8" : ""}>
              <ExpandableFeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </FeatureSection>
  )
}
