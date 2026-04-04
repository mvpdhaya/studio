export default function HowItWorks() {
  const steps = [
    { num: 1, title: 'Discover', desc: 'Understand your goals' },
    { num: 2, title: 'Design', desc: 'Prototype & validate' },
    { num: 3, title: 'Build', desc: 'Develop & test' },
    { num: 4, title: 'Support', desc: 'Deploy & evolve' },
  ];

  return (
    <section id="how-it-works" className="py-[100px] bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-[36px] font-[700] text-[#1e3a8a] text-center mb-[48px]">
          From tasks to tangible results
        </h2>
        
        <div className="max-w-4xl mx-auto relative mb-[48px]">
          {/* Connector Line */}
          <div className="absolute top-[24px] left-0 right-0 h-[2px] bg-[#bfdbfe] z-0 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative pointer-events-none md:pointer-events-auto">
                <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[#2563eb] text-white text-[18px] font-[700] relative z-10 shadow-sm border-[4px] border-white md:border-transparent md:bg-clip-padding md:shadow-none">
                  {step.num}
                </div>
                <h3 className="text-[15px] font-[600] text-[#1e40af] mt-[12px]">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#6b7280] mt-[4px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[#374151] max-w-2xl mx-auto text-[16px] font-[400] leading-[1.8]">
          At Axzron, we believe in a transparent and iterative process. We focus on early alignment, rapid prototyping, and rigorous testing so the final solution systematically tackles your bottlenecks and drives long-term efficiency.
        </p>
      </div>
    </section>
  );
}
