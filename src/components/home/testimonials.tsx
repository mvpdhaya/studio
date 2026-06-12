"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonialsRow1 = [
  {
    quote: "HexaCore transformed our legacy systems into a modern cloud architecture. Their expertise is unmatched.",
    author: "Daniel Wu",
    title: "CTO, Horizon FinTech",
  },
  {
    quote: "The personalized support we received made all the difference in our digital transformation journey.",
    author: "Aiko Tanaka",
    title: "COO, NextWave Startups",
  },
  {
    quote: "A true partner in innovation. Their AI strategies have given us a significant competitive edge.",
    author: "Marcus Allen",
    title: "CEO, BrightPath Logistics",
  },
  {
    quote: "Transparent, professional, and result-oriented. HexaCore is our go-to for all IT modernization.",
    author: "Sarah Jenkins",
    title: "VP of Engineering, CloudStream",
  },
];

const testimonialsRow2 = [
  {
    quote: "The ROI we've seen since implementing HexaCore's data solutions has been phenomenal.",
    author: "James Chen",
    title: "Director of Ops, TechFlow",
  },
  {
    quote: "Cybersecurity was a major concern for us until we partnered with HexaCore. Now we're future-proof.",
    author: "Elena Rodriguez",
    title: "CISO, GlobalSecure",
  },
  {
    quote: "Their digital workplace solutions have completely revolutionized how our remote teams collaborate.",
    author: "Tom Wilson",
    title: "Head of IT, RemoteFirst",
  },
  {
    quote: "Exceeded all expectations. The timeline and process were communicated clearly from day one.",
    author: "Linda Park",
    title: "Product Lead, InnovateHQ",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="glass-card p-6 rounded-2xl min-w-[350px] max-w-[400px]">
    <p className="text-slate-300 italic mb-6 leading-relaxed">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex-shrink-0" />
      <div>
        <h4 className="text-white font-bold text-sm">{testimonial.author}</h4>
        <p className="text-slate-500 text-xs">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-4 py-1 rounded-full border border-slate-700 text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-4 inline-block"
        >
          Testimonials
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          What Our Clients Say
        </motion.h2>
      </div>

      <div className="space-y-8">
        {/* Row 1: Scrolling Left */}
        <div className="flex w-max animate-marquee whitespace-nowrap gap-8 hover:[animation-play-state:paused] pointer-events-auto">
          {testimonialsRow1.concat(testimonialsRow1).map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max animate-marquee-reverse whitespace-nowrap gap-8 hover:[animation-play-state:paused] pointer-events-auto">
          {testimonialsRow2.concat(testimonialsRow2).map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
