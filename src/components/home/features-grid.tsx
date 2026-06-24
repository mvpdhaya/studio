"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import { servicesPage } from "@/lib/content";
import FadeInSection from "@/components/ui/fade-in-section";
import { ArrowRight } from "lucide-react";

interface FeaturesGridProps {
  limit?: number;
  hideHeader?: boolean;
}

export default function FeaturesGrid({ limit, hideHeader }: FeaturesGridProps) {
  const allServices = servicesPage.services;
  
  const services = useMemo(() => {
    return limit ? allServices.slice(0, limit) : allServices;
  }, [limit, allServices]);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 md:px-6">
        {!hideHeader && (
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
              <span className="text-black font-bold text-[13px] uppercase tracking-[0.2em] mb-3 block">Our Services</span>
              <h2 className="text-[32px] md:text-[48px] font-bold text-[#111827] leading-[1.2]">
                Solutions built for the <span className="text-[#111827]">automation era</span>
              </h2>
            </div>
          </FadeInSection>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={index} delay={index * 0.1}>
                <div
                  className="bg-white border border-slate-100 rounded-[24px] p-8 h-full shadow-sm hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
                >
                  <div className="w-14 h-14 bg-[#f3f4f6] rounded-2xl flex items-center justify-center text-[#111827] flex-shrink-0 group-hover:bg-[#111827] group-hover:text-white transition-all duration-300 mb-6">
                    <Icon size={24} />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-4 group-hover:text-black transition-colors">{service.title}</h3>
                    <p className="text-[#6b7280] text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-[#111827] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {limit && limit < allServices.length && (
          <FadeInSection delay={0.4}>
            <div className="text-center mt-12 md:mt-16">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 h-[48px] px-8 text-[15px] font-[600] rounded-lg bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all shadow-md hover:shadow-lg group"
              >
                View all services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
        )}
      </div>
    </section>
  );
}
