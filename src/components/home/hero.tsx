
import { Button } from '@/components/ui/button';
import { Bot, Brain, Globe, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import StatsBar from './stats-bar';

export default function Hero() {
  const stats = [
    { value: "50", suffix: "+", label: "Projects delivered" },
    { value: "98", suffix: "%", label: "Client satisfaction" },
    { value: "3", suffix: "x", label: "Faster deployment" },
    { value: "24", suffix: "/7", label: "Support available" },
  ];

  return (
    <section className="bg-white relative pt-[172px] pb-[60px] min-h-[600px] flex flex-col justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 -translate-x-1/4 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-[16px] py-[6px] rounded-full bg-[#eff6ff] text-[#1d4ed8] text-[13px] font-medium mb-[24px]">
            AI-powered business solutions
          </div>
          
          <h1 className="text-[52px] leading-[1.15] font-[800] text-[#1e3a8a] tracking-tight mb-[20px]">
            We automate your ops so your team builds{' '}
            <span className="text-[#2563eb]">what actually matters</span>
          </h1>
          
          <p className="max-w-[560px] mx-auto text-[17px] text-[#374151] mb-[32px] leading-[1.8] text-center">
            Axzron builds AI agents, chatbots, and intelligent web & mobile apps that cut manual work and accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-[64px]">
            <Button className="w-full sm:w-auto h-[48px] px-[28px] text-[15px] font-[600] rounded-[8px] bg-[#2563eb] text-white hover:bg-[#1d4ed8]" asChild>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe7pkZTCTyDpeucHvWNnyQPEFBw2tWUMF389LQCVajKhHKAcg/viewform" target="_blank" rel="noopener noreferrer">
                Book a free demo
              </Link>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto h-[48px] px-[28px] text-[15px] font-[600] rounded-[8px] border-[1.5px] border-[#2563eb] text-[#2563eb] bg-white hover:bg-[#eff6ff]" asChild>
              <Link href="#features">
                See our work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-[20px]">
        <StatsBar />
      </div>
    </section>
  );
}
