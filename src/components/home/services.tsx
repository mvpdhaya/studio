"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Cloud, Database, Shield, Building2, Route, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Migrate with confidence. We design secure, scalable cloud infrastructures tailored to your business needs.',
    icon: Cloud,
  },
  {
    title: 'Data & AI Consulting',
    description: 'Unlock the full value of your data with predictive analytics and custom-built AI implementation strategies.',
    icon: Database,
  },
  {
    title: 'Cybersecurity',
    description: 'Stay protected with advanced cybersecurity strategies, threat intelligence, and continuous monitoring.',
    icon: Shield,
  },
  {
    title: 'Digital Workplace Solutions',
    description: 'Empower your teams with modern collaboration tools and seamless remote work environments.',
    icon: Building2,
  },
  {
    title: 'Digital Strategy',
    description: 'We develop end-to-end strategies that align your business goals with the latest technology trends.',
    icon: Route,
  },
  {
    title: 'IT Modernization',
    description: 'Upgrade legacy systems with confidence. We help you transition to agile, modern architectures.',
    icon: RefreshCw,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full border border-slate-700 text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-4"
          >
            Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Expertise
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ff881e]/10 flex items-center justify-center text-[#ff881e] mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff881e] group/link"
              >
                Learn more 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 p-8 rounded-3xl border border-slate-800 bg-slate-900/40"
        >
          <span className="text-slate-300 font-medium">Can't find what you're looking for?</span>
          <Button 
            variant="outline" 
            className="rounded-full border-slate-700 text-white hover:bg-slate-800 hover:scale-105 transition-all"
            asChild
          >
            <Link href="#contact">Book Free Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
