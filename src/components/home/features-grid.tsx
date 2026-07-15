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
    if (limit === 3) {
      const baseServices = allServices.slice(0, 3);
      const iotService = allServices.find(s => s.title === "AI+IoT Solutions");
      if (iotService) {
        return [
          ...baseServices,
          { ...iotService, isMobileOnly: true }
        ];
      }
      return baseServices;
    }
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isMobileOnly = (service as any).isMobileOnly;
            return (
              <FadeInSection 
                key={index} 
                delay={index * 0.1}
                className={isMobileOnly ? "md:hidden" : ""}
              >
                <div
                  className="bg-white border border-slate-100 rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 md:p-8 h-full shadow-sm hover:border-slate-300 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-start group"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#111827] flex-shrink-0 group-hover:bg-[#111827] group-hover:text-[#ff881e] transition-all duration-500 mb-4 sm:mb-6 shadow-sm">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  
                  <div className="flex-grow w-full">
                    <h3 className="text-[15px] sm:text-lg md:text-2xl font-bold text-[#111827] mb-1 sm:mb-2 group-hover:text-black transition-colors tracking-tight leading-tight">{service.title}</h3>
                    <p className="text-[#6b7280] text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed mb-4 sm:mb-6 font-medium">
                      {service.description}
                    </p>
                    
                    <div className="space-y-1.5 sm:space-y-2.5 mb-4 sm:mb-6 border-t border-slate-50 pt-3 sm:pt-6">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-1.5 sm:gap-2.5 text-[10px] sm:text-[13px] md:text-[14px] text-[#4b5563] group/item">
                          <span className="text-[#111827] font-bold text-xs sm:text-base leading-none select-none">+</span>
                          <span className="font-medium group-hover/item:text-[#111827] transition-colors leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href="#contact"
                    className="mt-auto flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-xs font-bold text-[#ff881e] uppercase tracking-[0.15em] sm:tracking-[0.2em] transform transition-all duration-300 hover:translate-x-2 group-hover:text-[#ff881e]/80"
                  >
                    Learn More <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
