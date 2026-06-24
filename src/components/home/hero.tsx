
import { Button } from '@/components/ui/button';
import { Bot, Brain, Globe, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import StatsBar from './stats-bar';
import FadeInSection from '@/components/ui/fade-in-section';

import { homePage, siteConfig } from '@/lib/content';

export default function Hero() {
  const { hero } = homePage;

  return (
    <section className="bg-white relative pt-[120px] md:pt-[172px] pb-[40px] md:pb-[60px] min-h-[600px] flex flex-col justify-center overflow-hidden">
      {/* Modern Grid Line Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.6] z-0" style={{ 
        backgroundImage: `
          linear-gradient(to right, #f1f5f9 1px, transparent 1px),
          linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 85%)'
      }}></div>
      
      {/* Subtle secondary grid for refinement */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.2] z-0" style={{ 
        backgroundImage: `
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
        backgroundSize: '200px 200px',
      }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection delay={0.1}>
            <div className="inline-flex items-center gap-2 px-[16px] py-[6px] rounded-full bg-[#f3f4f6] text-[#111827] text-[12px] sm:text-[13px] font-medium mb-[20px] md:mb-[24px]">
              {hero.badge}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h1 className="text-[30px] sm:text-[42px] md:text-[54px] lg:text-[68px] leading-[1.15] font-[700] text-[#111827] tracking-tight mb-[18px] md:mb-[24px]">
              {hero.title.split('what actually matters')[0]}
              <span className="relative inline-block">
                what actually matters
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#f3f4f6] -z-10"></span>
              </span>
            </h1>

            <p className="max-w-[620px] mx-auto text-[16px] sm:text-[18px] md:text-[20px] text-[#6b7280] mb-[32px] md:mb-[40px] leading-[1.6] text-center px-2 sm:px-0">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-[40px] md:mb-[64px] px-4 sm:px-0">
              <Button className="w-full sm:w-auto h-[48px] px-[28px] text-[15px] font-[600] rounded-[8px] bg-[#2563eb] text-white hover:bg-[#1d4ed8]" asChild>
                <Link href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
                  {hero.primaryCta}
                </Link>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-[48px] px-[28px] text-[15px] font-[600] rounded-[8px] border-[1.5px] border-[#2563eb] text-[#2563eb] bg-white hover:bg-[#eff6ff]" asChild>
                <Link href="/services">
                  {hero.secondaryCta}
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* <div className="relative z-10 w-full mt-[20px]">
        <StatsBar />
      </div> */}
    </section>
  );
}
