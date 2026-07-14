"use client";

import Image from "next/image";
import FadeInSection from "@/components/ui/fade-in-section";

interface Client {
  name: string;
  logo: string;
}

export default function ClientsMarquee({ clients }: { clients: Client[] }) {
  // Duplicate for seamless infinite scroll
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto">
        <FadeInSection>
          <p className="text-center text-[13px] md:text-[14px] font-[600] uppercase tracking-[0.15em] text-[#9ca3af] mb-8 md:mb-10">
            Trusted by innovative companies
          </p>
        </FadeInSection>
      </div>

      {/* Row 1 – left to right */}
      <FadeInSection delay={0.15}>
        <div className="relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="flex items-center gap-16 sm:gap-20 md:gap-24 animate-scroll-marquee hover:[animation-play-state:paused] w-max">
            {marqueeClients.map((client, index) => (
              <div
                key={`row1-${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-14 sm:h-16 md:h-18 px-4 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={72}
                  className="object-contain h-full w-auto max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
                />
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
