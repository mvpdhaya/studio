import Header from '@/components/layout/header';
import Hero from '@/components/home/hero';
import SlmShowcase from '@/components/home/slm-showcase';
import FeaturesGrid from '@/components/home/features-grid';
import Cta from '@/components/home/cta';
import Footer from '@/components/layout/footer';
import { homePage } from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: homePage.seo.title,
  description: homePage.seo.description,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SlmShowcase />
        <FeaturesGrid limit={3} />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
