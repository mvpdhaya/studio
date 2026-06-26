
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

      <div className="container mx-auto relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection delay={0.1}>
            <div className="inline-flex items-center gap-2 px-[16px] py-[6px] rounded-full bg-[#f3f4f6] text-[#111827] text-[12px] sm:text-[13px] font-medium mb-[20px] md:mb-[24px]">
              {hero.badge}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h1 className="text-[30px] sm:text-[42px] md:text-[54px] lg:text-[68px] leading-[1.15] font-[700] text-[#111827] mb-[18px] md:mb-[24px] font-heading tracking-normal">
              {hero.title.split('modern businesses')[0]}
              <span className="relative inline-block">
                modern businesses
                <svg
                  className="absolute left-0 w-full overflow-visible pointer-events-none"
                  style={{ bottom: '-8px', height: '14px' }}
                  viewBox="0 0 200 14"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Thick curved line with gap before the end */}
                  <path
                    d="M2 10 C 50 14, 130 14, 180 10" 
                    stroke="#ff881e"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Dot after the gap */}
                  <circle cx="196" cy="9" r="2.5" fill="#ff881e" />
                </svg>
              </span>
            </h1>

            <p className="max-w-[620px] mx-auto text-[16px] sm:text-[18px] md:text-[20px] text-[#6b7280] mb-[32px] md:mb-[40px] leading-[1.6] text-center px-2 sm:px-0">
              {hero.subtitle}
            </p>

            <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 mb-[40px] md:mb-[64px] px-2 sm:px-0">
              <Button className="flex-1 sm:flex-none sm:w-auto h-[44px] sm:h-[48px] px-2 sm:px-[28px] text-[12px] sm:text-[15px] font-[600] rounded-[8px] bg-[#111827] text-white hover:bg-slate-800 shadow-lg shadow-slate-200/20 transition-all duration-300" asChild>
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
