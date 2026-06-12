import FadeInSection from "@/components/ui/fade-in-section";

export default function HowItWorks() {
  const steps = [
    { num: 1, title: 'Discover', desc: 'Understand your goals' },
    { num: 2, title: 'Design', desc: 'Prototype & validate' },
    { num: 3, title: 'Build', desc: 'Develop & test' },
    { num: 4, title: 'Support', desc: 'Deploy & evolve' },
  ];

  return (
    <section id="how-it-works" className="py-[60px] md:py-[100px] bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <span className="text-[#2563eb] font-[600] text-[13px] uppercase tracking-wider mb-2 block">Our Process</span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-[700] text-[#111827] leading-[1.2]">
              From tasks to tangible results
            </h2>
          </div>
        </FadeInSection>
        
        <div className="max-w-4xl mx-auto relative mb-[48px] md:mb-[64px]">
          {/* Desktop Connector Line */}
          <div className="absolute top-[24px] left-0 right-0 h-[2px] bg-[#bfdbfe] z-0 hidden md:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[#2563eb] text-white text-[18px] font-[700] relative z-10 shadow-sm border-[4px] border-white">
                    {step.num}
                  </div>
                  <h3 className="text-[15px] font-[600] text-[#111827] mt-[14px]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#6b7280] mt-[6px] leading-[1.5]">
                    {step.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        <FadeInSection delay={0.4}>
          <p className="text-center text-[#6b7280] max-w-2xl mx-auto text-[15px] md:text-[16px] font-[400] leading-[1.65] px-2 sm:px-0">
            At Axzron, we believe in a transparent and iterative process. We focus on early alignment, rapid prototyping, and rigorous testing so the final solution systematically tackles your bottlenecks and drives long-term efficiency.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
