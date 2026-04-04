import { Zap, Bot, Globe, Smartphone, Database, Blocks } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Zap,
    title: "Business Automation",
    description: "Streamline workflows with custom automation scripts.",
    category: "Automation",
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description: "Intelligent, context-aware conversational agents.",
    category: "AI",
  },
  {
    icon: Globe,
    title: "Web App Development",
    description: "Scalable, high-performance web applications.",
    category: "Development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native applications for iOS and Android devices.",
    category: "Development",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Integrate and analyze data for actionable insights.",
    category: "Analytics",
  },
  {
    icon: Blocks,
    title: "API & Integrations",
    description: "Seamless connections across all your internal tools.",
    category: "Infrastructure",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-[100px] bg-[#f0f4ff]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] font-bold text-sm uppercase tracking-wider mb-2 block text-center">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] max-w-5xl mx-auto mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-none rounded-[16px] p-[32px] shadow-sm hover:shadow-md hover:-translate-y-[4px] transition-all duration-200 flex flex-col items-start"
            >
              <div className="w-[56px] h-[56px] bg-[#eff6ff] rounded-full flex items-center justify-center text-[#2563eb] flex-shrink-0">
                <service.icon size={24} className="text-[#2563eb]" />
              </div>
              
              <div className="mt-[20px]">
                <h3 className="text-[20px] font-[700] text-[#1e40af] mb-[10px]">
                  {service.title}
                </h3>
                <p className="text-[15px] text-[#4b5563] leading-[1.7]">
                   {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="#contact" className="inline-block text-[#2563eb] text-[15px] font-[600] hover:underline">
            View all 12 services →
          </Link>
        </div>
      </div>
    </section>
  );
}
