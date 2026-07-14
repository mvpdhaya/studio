"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import { servicesPage } from "@/lib/content";
import FadeInSection from "@/components/ui/fade-in-section";
import { ArrowRight } from "lucide-react";

interface FeaturesGridProps {
  limit?: number;
  hideHeader?: boolean;
  variant?: "default" | "hero";
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FeaturesGrid({ limit, hideHeader, variant = "default", title, subtitle, className }: FeaturesGridProps) {
  const allServices = servicesPage.services;
  
  const services = useMemo(() => {
    return limit ? allServices.slice(0, limit) : allServices;
  }, [limit, allServices]);

  const isHero = variant === "hero";

  return (
    <section id="services" className={`py-12 md:py-16 bg-white md:dashed-border-top ${isHero ? 'pt-20' : ''} ${className || ''}`}>
      <div className="container mx-auto">
        {!hideHeader && (
          <FadeInSection>
            <div className={`max-w-4xl mx-auto text-center ${isHero ? 'mb-0' : 'mb-10 md:mb-14'}`}>
              {!isHero && <span className="text-[#ff881e] font-bold text-[13px] uppercase tracking-[0.2em] mb-3 block">Our Services</span>}
              <h2 className={`${isHero ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-[32px] md:text-[48px]'} font-bold text-[#111827] leading-[1.2] ${subtitle ? 'mb-6' : 'mb-10'}`}>
                {title || (isHero ? "Our Services" : "Solutions built for the automation era")}
              </h2>
              {subtitle && (
                <p className={`text-lg md:text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed ${isHero ? 'mb-10' : ''}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </FadeInSection>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={index} delay={index * 0.1}>
                <div
                  className="bg-white border border-slate-100 rounded-[24px] p-7 md:p-8 h-full shadow-sm hover:border-slate-300 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-start group"
                >
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-[#111827] flex-shrink-0 group-hover:bg-[#111827] group-hover:text-[#ff881e] transition-all duration-500 mb-6 shadow-sm">
                    <Icon size={24} />
                  </div>
                  
                  <div className="flex-grow w-full">
                    <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-2 group-hover:text-black transition-colors tracking-tight">{service.title}</h3>
                    <p className="text-[#6b7280] text-[15px] leading-relaxed mb-6 font-medium">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2.5 mb-6 border-t border-slate-50 pt-6">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2.5 text-[14px] text-[#4b5563] group/item">
                          <span className="text-[#111827] font-bold text-base leading-none">+</span>
                          <span className="font-medium group-hover/item:text-[#111827] transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href="#contact"
                    className="mt-auto flex items-center gap-2 text-xs font-bold text-[#ff881e] uppercase tracking-[0.2em] transform transition-all duration-300 hover:translate-x-2 group-hover:text-[#ff881e]/80"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
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
                className="inline-flex items-center gap-2 h-[48px] px-8 text-[15px] font-[600] rounded-lg bg-[#111827] text-white border border-[#111827] hover:bg-white hover:text-[#111827] transition-all duration-300 shadow-md hover:shadow-lg group"
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
