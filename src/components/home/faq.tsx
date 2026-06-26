import FadeInSection from "@/components/ui/fade-in-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { aboutPage } from "@/lib/content";

export default function Faq() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <FadeInSection>
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-[700] text-[#111827] text-center mb-10 md:mb-14 leading-[1.2]">
            {aboutPage.faq.title}
          </h2>
        </FadeInSection>

        <div className="max-w-3xl mx-auto">
          <FadeInSection delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
                {aboutPage.faq.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#e5e7eb]">
                        <AccordionTrigger className="py-[24px] text-[17px] md:text-[18px] text-left hover:no-underline font-[600] text-[#111827] leading-[1.4] transition-colors hover:text-[#000000]">{item.question}</AccordionTrigger>
                        <AccordionContent className="pb-[24px] text-[15px] md:text-[16px] text-[#6b7280] leading-[1.65]">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
