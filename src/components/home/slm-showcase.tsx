import FadeInSection from "@/components/ui/fade-in-section";

import { homePage } from "@/lib/content";

export default function SlmShowcase() {
  const scenarios = homePage.scenarios.items;

  return (
    <section className="pt-10 pb-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <FadeInSection>
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-[700] text-[#111827] text-center mb-[36px] md:mb-[48px] leading-[1.2]">
            {homePage.scenarios.title}
          </h2>
        </FadeInSection>
        <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 gap-[16px] md:gap-[24px] max-w-5xl mx-auto">
          {scenarios.map((scenario, index) => (
            <FadeInSection 
              key={index} 
              delay={index * 0.1}
              className="w-[calc(50%-8px)] md:w-auto aspect-square md:aspect-auto flex flex-col"
            >
              <div
                className="bg-white border rounded-[16px] p-3 sm:p-5 md:p-[28px] h-full flex flex-col shadow-sm"
              >
                <div className="flex items-start justify-between mb-2 md:mb-4">
                  <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-[#f3f4f6] text-[#ff881e] text-[9px] sm:text-[10px] md:text-[11px] font-[600] uppercase tracking-wider rounded-full">
                    {scenario.tag}
                  </span>
                </div>
                <h3 className="text-[13px] sm:text-[16px] md:text-[20px] font-bold text-[#111827] mb-[6px] md:mb-[12px] leading-[1.3]">
                  {scenario.title}
                </h3>
                <p className="text-[11px] sm:text-[13px] md:text-[15px] text-[#6b7280] leading-[1.4] md:leading-[1.65]">
                  {scenario.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
