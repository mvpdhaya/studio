"use client";

import { aboutPage } from "@/lib/content";
import FadeInSection from "@/components/ui/fade-in-section";
import { Settings } from "lucide-react";

interface ProcessProps {
  hideHeader?: boolean;
}

export default function Process({ hideHeader }: ProcessProps) {
  const { process } = aboutPage;

  return (
    <section id="our-process" className="py-10 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto">
        {!hideHeader && (
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <span className="inline-block text-[12px] font-bold text-[#ff881e] uppercase tracking-widest mb-3">Workflow</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
                {process.title}
              </h2>
            </div>
          </FadeInSection>
        )}

        {/* ── Desktop Timeline (lg+) ────────────────────────── */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Horizontal connecting line */}
          <div className="absolute top-[120px] left-[12%] right-[12%] h-[2px] z-0">
            <div className="w-full h-full bg-gradient-to-r from-slate-200 via-[#ff881e]/25 to-slate-200 rounded-full" />
            {/* Animated pulse dots */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff881e]/40 process-dot-anim"
                style={{
                  left: `${i * 25}%`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {process.steps.map((step, index) => {
              const Icon = step.icon || Settings;
              const isEven = index % 2 === 1;

              return (
                <FadeInSection key={index} delay={index * 0.15}>
                  <div className={`flex flex-col items-center ${isEven ? 'pt-16' : ''}`}>
                    {/* Content above circle for odd steps */}
                    {!isEven && (
                      <div className="text-center mb-6 min-h-[88px] flex flex-col justify-end">
                        <h3 className="text-lg font-bold text-[#111827] mb-2 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-[#64748b] text-[14px] leading-relaxed max-w-[200px] mx-auto">
                          {step.description}
                        </p>
                      </div>
                    )}

                    {/* Step Circle */}
                    <div className="relative group cursor-default">
                      <div className="w-[60px] h-[60px] rounded-full bg-[#111827] flex items-center justify-center relative z-10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#111827]/20 group-hover:scale-110 border-[3px] border-white ring-2 ring-slate-100 group-hover:ring-[#ff881e]/40">
                        <Icon className="h-6 w-6 text-white group-hover:text-[#ff881e] transition-colors duration-300" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-1 -right-1 w-[22px] h-[22px] rounded-full bg-[#ff881e] text-white text-[10px] font-bold flex items-center justify-center z-20 shadow-sm border-2 border-white transition-transform group-hover:scale-110">
                        {step.num}
                      </div>
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-full bg-[#ff881e] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15 -z-10 scale-150" />
                    </div>

                    {/* Content below circle for even steps */}
                    {isEven && (
                      <div className="text-center mt-6 min-h-[88px] flex flex-col justify-start">
                        <h3 className="text-lg font-bold text-[#111827] mb-2 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-[#64748b] text-[14px] leading-relaxed max-w-[200px] mx-auto">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>

        {/* ── Mobile / Tablet Timeline (<lg) ─────────────────── */}
        <div className="lg:hidden relative max-w-lg mx-auto pl-10">
          {/* Vertical connecting line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-slate-200 via-[#ff881e]/25 to-slate-200 rounded-full z-0" />

          <div className="flex flex-col gap-10">
            {process.steps.map((step, index) => {
              const Icon = step.icon || Settings;
              return (
                <FadeInSection key={index} delay={index * 0.12}>
                  <div className="flex items-start gap-5 relative">
                    {/* Step Circle — sits on the vertical line */}
                    <div className="relative shrink-0 -ml-10 group cursor-default">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#111827] flex items-center justify-center relative z-10 transition-all duration-400 group-hover:scale-110 border-[3px] border-white ring-2 ring-slate-100 group-hover:ring-[#ff881e]/40">
                        <Icon className="h-4 w-4 text-white group-hover:text-[#ff881e] transition-colors duration-300" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-[#ff881e] text-white text-[9px] font-bold flex items-center justify-center z-20 border-2 border-white">
                        {step.num}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1.5">
                      <h3 className="text-[16px] font-bold text-[#111827] mb-1.5 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#64748b] text-[14px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes process-dot-flow {
          0% { opacity: 0; transform: translateY(-50%) scale(0.5); }
          50% { opacity: 1; transform: translateY(-50%) scale(1.2); }
          100% { opacity: 0; transform: translateY(-50%) scale(0.5); }
        }
        .process-dot-anim {
          animation: process-dot-flow 2.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
