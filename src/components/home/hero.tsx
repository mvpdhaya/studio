
import { Button } from '@/components/ui/button';
import { Bot, Brain, Globe, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import StatsBar from './stats-bar';
import FadeInSection from '@/components/ui/fade-in-section';

import { homePage, siteConfig } from '@/lib/content';

export default function Hero() {
  const { hero } = homePage;

  return (
    <section className="bg-white relative pt-[100px] sm:pt-[120px] pb-[10px] md:pt-[172px] md:pb-[60px] md:min-h-[600px] md:flex md:flex-col md:justify-center overflow-hidden">

      <div className="container mx-auto relative z-10 md:flex-grow">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Modern Grid Line Background (bounded dynamically relative to buttons) */}
          <div className="absolute top-[-100px] sm:top-[-120px] md:top-[-172px] left-1/2 -translate-x-1/2 w-screen bottom-0 pointer-events-none opacity-[0.8] -z-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 M 0 0 L 0 48' fill='none' stroke='%23cbd5e1' stroke-width='1' stroke-dasharray='4,4'/%3E%3C/svg%3E")`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 95%)'
          }}></div>

          <FadeInSection delay={0.2}>
            <h1 className="text-[30px] sm:text-[42px] md:text-[54px] lg:text-[68px] leading-[1.15] font-[700] text-[#111827] mb-[18px] md:mb-[24px] font-heading tracking-normal">
              {hero.title}
            </h1>

            <p className="max-w-[620px] mx-auto text-[16px] sm:text-[18px] md:text-[20px] text-[#6b7280] mb-[32px] md:mb-[40px] leading-[1.6] text-center px-2 sm:px-0">
              {hero.subtitle}
            </p>

            <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 px-2 sm:px-0">
              <Button className="flex-1 sm:flex-none sm:w-auto h-[44px] sm:h-[48px] px-2 sm:px-[28px] text-[12px] sm:text-[15px] font-[600] rounded-[8px] bg-[#ff881e] text-white hover:bg-[#e0771a] transition-all duration-300" asChild>
                <Link href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
                  {hero.primaryCta}
                </Link>
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none sm:w-auto h-[44px] sm:h-[48px] px-2 sm:px-[28px] text-[12px] sm:text-[15px] font-[600] rounded-[8px] border-[1.5px] border-[#111827] text-[#111827] bg-white hover:bg-slate-50" asChild>
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
