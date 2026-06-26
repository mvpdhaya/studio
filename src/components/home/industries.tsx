"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/ui/fade-in-section";
import { Landmark, HeartPulse, ShoppingCart, Building2, BookOpen, Factory, LucideIcon } from "lucide-react";
import { servicesPage } from "@/lib/content";

export default function Industries() {
  const { industries } = servicesPage;

  return (
    <section id="industries" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <span className="text-[#111827] font-[600] text-[13px] uppercase tracking-wider mb-2 block">Industries</span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-[700] tracking-tight text-[#111827] leading-[1.2]">
              {industries.title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[15px] md:text-[18px] text-[#6b7280] leading-[1.6]">
              {industries.subtitle}
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.items.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <FadeInSection key={industry.title} delay={index * 0.1}>
                <Card className="bg-white flex flex-col justify-start text-center items-center p-4 md:p-6 border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300 h-full group">
                  <CardHeader className="items-center pb-4 text-center">
                    <div className="bg-white p-3 rounded-xl mb-3 text-[#111827] shadow-sm group-hover:bg-[#111827] group-hover:text-[#ff881e] transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-[18px] md:text-[22px] font-[700] text-[#111827] leading-[1.3]">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-[15px] text-[#6b7280] leading-[1.65]">{industry.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
