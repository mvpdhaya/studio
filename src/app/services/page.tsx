import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FeaturesGrid from '@/components/home/features-grid';
import Industries from '@/components/home/industries';
import Cta from '@/components/home/cta';
import { servicesMetadata } from '@/lib/metadata';
import { servicesPage } from '@/lib/content';
import { Metadata } from 'next';
import FadeInSection from '@/components/ui/fade-in-section';

export const metadata: Metadata = {
  title: servicesMetadata.title,
  description: servicesMetadata.description,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
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

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
                {servicesPage.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
                {servicesPage.hero.subtitle}
              </p>
            </FadeInSection>
          </div>
        </section>

        <FeaturesGrid hideHeader={true} />
        <Industries />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
