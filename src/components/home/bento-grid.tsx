"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const cards = [
  {
    title: 'Personalized Support',
    description: 'Work with dedicated consultants who understand your business goals.',
    className: 'md:col-span-1',
    visual: (
      <div className="flex items-center -space-x-4 mt-6">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'With You Every Step',
    description: 'Real-time collaboration and feedback loops for rapid iteration.',
    className: 'md:col-span-1',
    visual: (
      <div className="mt-6 space-y-3">
        <div className="bg-slate-800/50 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-xs text-slate-300 border border-slate-700/50">
          Your design draft is ready. Want feedback?
        </div>
        <div className="bg-cyan-500/10 p-3 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-xs text-cyan-200 border border-cyan-500/20">
          Looks great! Let's proceed to the next step.
        </div>
      </div>
    ),
  },
  {
    title: 'Measurable Impact',
    description: '99.8% average uptime maintained across all client systems.',
    className: 'md:col-span-1',
    visual: (
      <div className="mt-8 flex items-end gap-2 h-24">
        {[40, 60, 45, 90, 75, 98].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="flex-grow bg-gradient-to-t from-cyan-500 to-cyan-400/50 rounded-t-sm"
          />
        ))}
      </div>
    ),
  },
  {
    title: 'Future-Ready Solutions',
    description: 'Scalable systems that keep you competitive tomorrow.',
    className: 'md:col-span-1 lg:row-span-1',
    visual: (
      <div className="mt-6 relative h-32 flex items-center justify-center">
        <div className="w-16 h-16 bg-cyan-500/20 rotate-45 border border-cyan-500/50 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <motion.path 
              d="M20,50 L50,50 M80,50 L50,50 M50,20 L50,50 M50,80 L50,50" 
              stroke="cyan" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    title: 'Transparent Process',
    description: 'Clear milestones from asset export to launch setup.',
    className: 'md:col-span-2',
    visual: (
      <div className="mt-8 space-y-4">
        <div className="flex justify-between text-[10px] uppercase tracking-wider text-slate-500 mb-2">
          <span>Brief</span>
          <span>Build</span>
          <span>Review</span>
          <span className="text-cyan-500">Launch</span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '85%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-cyan-500"
          />
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={cn("h-1 flex-grow rounded-full", i <= 4 ? "bg-cyan-500/30" : "bg-slate-800")} />
          ))}
        </div>
      </div>
    ),
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full border border-slate-700 text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-4"
          >
            Perks
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Why Companies Choose axzron
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "glass p-8 rounded-3xl flex flex-col justify-between group overflow-hidden min-h-[320px]",
                card.className
              )}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="relative">
                 {card.visual}
                 {/* Hover Glow */}
                 <div className="absolute -inset-10 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
