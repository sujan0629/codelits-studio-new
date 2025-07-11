// app/HomePage/Capabilities.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Capabilities() {
  const features = [
    {
      id: '01',
      title: 'Creative Strategy',
      description:
        'We craft bold ideas backed by research, ensuring every project starts with purpose and vision.',
      bg: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    },
    {
      id: '02',
      title: 'Technical Excellence',
      description:
        'Our engineers turn concepts into reality using cutting-edge tech, scalable architectures, and clean code.',
      bg: 'bg-gradient-to-br from-green-500 to-teal-500'
    },
    {
      id: '03',
      title: 'Growth & Impact',
      description:
        'Data-driven optimization and agile marketing that accelerates growth and maximizes ROI.',
      bg: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Beyond Services: Our Approach
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We don’t just deliver services—we build partnerships rooted in creativity,
          technology, and measurable growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`${feature.bg} text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl font-extrabold mr-4 opacity-20">
                  {feature.id}
                </div>
                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
