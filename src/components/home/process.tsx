"use client";

import { aboutPage } from "@/lib/content";
import FadeInSection from "@/components/ui/fade-in-section";
import { Settings, ChevronRight, ChevronDown } from "lucide-react";

interface ProcessProps {
  hideHeader?: boolean;
}

export default function Process({ hideHeader }: ProcessProps) {
  const { process } = aboutPage;

  return (
    <section id="our-process" className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {!hideHeader && (
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <span className="text-black font-bold text-[13px] uppercase tracking-[0.2em] mb-3 block">Workflow</span>
              <h2 className="text-[32px] md:text-[48px] font-bold text-[#111827] leading-tight">
                {process.title}
              </h2>
            </div>
          </FadeInSection>
        )}

        <div className="relative">
          {/* Desktop Connecting Arrows - Hidden on mobile */}
          <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-px z-0">
            <div className="absolute inset-0 flex justify-around items-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative flex items-center justify-center w-full">
                  <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent opacity-60"></div>
                  <div className="absolute right-[10%] animate-pulse-slow">
                    <ChevronRight className="h-5 w-5 text-[#94a3b8]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {process.steps.map((step, index) => {
              const Icon = step.icon || Settings;
              return (
                <FadeInSection key={index} delay={index * 0.15}>
                  <div className="flex flex-col items-center text-center group relative">
                    {/* Circle Container */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-[#111827] shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6 z-10 relative">
                        <Icon className="h-9 w-9 text-[#111827] group-hover:text-[#2563eb] transition-colors duration-300" />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#111827] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-md z-20 transition-transform group-hover:scale-110">
                        {index + 1}
                      </div>

                      {/* Animated Glow Effect */}
                      <div className="absolute inset-0 bg-[#2563eb] opacity-0 blur-2xl rounded-full transition-opacity duration-500 group-hover:opacity-20 -z-10"></div>
                    </div>

                    <h3 className="text-xl font-bold text-[#111827] mb-4 tracking-tight group-hover:text-[#2563eb] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[#64748b] text-[15px] leading-relaxed max-w-[220px]">
                      {step.description}
                    </p>

                    {/* Mobile/Tablet Arrow - Hidden on Desktop LG */}
                    {index < process.steps.length - 1 && (
                      <div className="lg:hidden mt-8 text-[#cbd5e1] animate-bounce-slow">
                        <ChevronDown className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(10px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
