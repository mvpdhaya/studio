import Header from '@/components/layout/header';
import Hero from '@/components/home/hero';
import SlmShowcase from '@/components/home/slm-showcase';
import HowItWorks from '@/components/home/how-it-works';
import FeaturesGrid from '@/components/home/features-grid';
import Process from '@/components/home/process';
import Faq from '@/components/home/faq';
import Cta from '@/components/home/cta';
import Footer from '@/components/layout/footer';

export default function Home({ params }: { params: {} }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SlmShowcase />
        <HowItWorks />
        <FeaturesGrid />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
