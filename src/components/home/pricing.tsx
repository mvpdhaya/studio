"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter Plan',
    description: 'For small businesses beginning their digital journey',
    price: { monthly: 499, annually: 399 },
    features: [
      'Basic IT Consulting',
      'Cloud setup support',
      'Annual security audit',
      'On-demand troubleshooting (5 hrs/mo)',
    ],
    cta: 'Start Your Journey',
    featured: false,
  },
  {
    name: 'Growth Plan',
    description: 'Popular choice for expanding enterprises',
    price: { monthly: 1499, annually: 1199 },
    features: [
      'Cloud & AI consulting',
      'Continuous cybersecurity monitoring',
      'Quarterly optimization',
      'Monthly performance reports',
      'Remote team support',
      'Priority response (24/7)',
    ],
    cta: 'Upgrade and Scale',
    featured: true,
  },
  {
    name: 'Professional Plan',
    description: 'Advanced solutions for industry leaders',
    price: { monthly: 2999, annually: 2399 },
    features: [
      'Advanced cloud architecture',
      'AI-driven insights',
      'Bi-weekly performance reviews',
      'Comprehensive cybersecurity',
      'Strategy sessions with senior consultants',
      'Dedicated account manager',
    ],
    cta: 'Talk to a Professional',
    featured: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full border border-slate-700 text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-4 inline-block"
          >
            Pricing
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Flexible Pricing for Every Business
          </motion.h2>

          {/* Billing Toggle */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                billingCycle === 'monthly' ? "bg-white text-black shadow-lg shadow-white/10" : "text-slate-400 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                billingCycle === 'annually' ? "bg-white text-black shadow-lg shadow-white/10" : "text-slate-400 hover:text-white"
              )}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                plan.featured 
                  ? "bg-slate-900 border-white/20 shadow-2xl shadow-white/5 scale-105 z-10" 
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              )}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{plan.description}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-bold text-white">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually}
                  </span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                className={cn(
                  "w-full rounded-full py-6 font-bold transition-all",
                  plan.featured 
                    ? "bg-white text-black hover:bg-slate-200" 
                    : "bg-transparent border border-slate-700 text-white hover:bg-slate-800"
                )}
                asChild
              >
                <Link href="#contact">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
