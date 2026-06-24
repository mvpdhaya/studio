import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/ui/fade-in-section";

import { contactPage, siteConfig } from "@/lib/content";

export default function Cta() {
  const { hero } = contactPage;
  return (
    <section id="contact" className="py-16 md:py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }}></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-[700] text-[#ffffff] mb-5 leading-[1.2]">
              {hero.subtitle}
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="max-w-2xl mx-auto text-[15px] sm:text-[17px] md:text-[18px] text-[#bfdbfe] mb-8 md:mb-10 leading-[1.6]">
              {hero.description}
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex flex-col items-center justify-center">
              <Button className="group h-[50px] px-[32px] text-[15px] bg-white text-[#111827] font-[600] hover:bg-slate-50 transition-all rounded-[8px]" asChild>
                  <Link href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {hero.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
              </Button>
              <p className="text-[13px] text-[#dbeafe] mt-[14px]">
                {hero.footer}
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
