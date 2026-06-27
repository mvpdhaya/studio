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
      <main className="pt-20 pb-8">
        <FeaturesGrid 
          variant="hero" 
          subtitle={servicesPage.hero.subtitle}
        />
        <Industries className="pt-0" />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
