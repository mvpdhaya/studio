export default function SlmShowcase() {
  const scenarios = [
    {
      title: 'Automating invoice processing',
      tag: 'Finance & Banking',
      description: 'A regional finance firm spent 40+ hours weekly on manual invoicing. We deployed an AI workflow that reduced processing time by 80%.',
    },
    {
      title: 'AI support chatbot for e-commerce',
      tag: 'E-Commerce',
      description: 'An online retailer struggled with high support ticket volume. Our AI chatbot now handles 70% of queries automatically, 24/7.',
    },
    {
      title: 'Predictive analytics for healthcare',
      tag: 'Healthcare',
      description: 'A healthcare provider needed faster patient risk assessment. We built a dashboard that flags high-risk cases in real time.',
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-[32px] md:text-[38px] font-[700] text-[#111827] text-center mb-[48px] leading-[1.2]">
          Real results for real businesses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] max-w-5xl mx-auto">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] p-[28px] flex flex-col shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-[600] uppercase tracking-wider rounded-full">
                  {scenario.tag}
                </span>
              </div>
              <h3 className="text-[20px] font-bold text-[#111827] mb-[12px] leading-[1.3]">
                {scenario.title}
              </h3>
              <p className="text-[15px] text-[#6b7280] leading-[1.65]">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
