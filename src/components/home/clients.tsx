import Image from "next/image";
import FadeInSection from "@/components/ui/fade-in-section";

export default function Clients() {
  return (
    <section className="mt-16 pb-8 md:mt-0 md:py-16 bg-white md:dashed-border-top">
      <div className="container mx-auto">
        <FadeInSection>
          <p className="text-center text-[13px] md:text-[14px] font-[600] uppercase tracking-[0.15em] text-[#9ca3af] mb-8 md:mb-10">
            Trusted by innovative companies
          </p>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <div className="flex items-center justify-center">
            <Image
              src="/company/logo.png"
              alt="Trusted Company"
              width={180}
              height={72}
              className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
