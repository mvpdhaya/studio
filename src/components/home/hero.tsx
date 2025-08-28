
import { Button } from '@/components/ui/button';
import { Cloud, Layers, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-background/50 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6">
            Automate smarter, faster, and securely with Axzron
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
            Axzron helps businesses streamline operations and unlock new efficiencies through custom AI solutions. We design code-based and n8n automations, intelligent AI agents, and chatbots powered by RAG and SQL, all tailored to your unique workflows. Our systems cut costs, boost speed, and keep your data secure.
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild className="btn-schedule-demo text-white">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe7pkZTCTyDpeucHvWNnyQPEFBw2tWUMF389LQCVajKhHKAcg/viewform" target="_blank" rel="noopener noreferrer">Book Now</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center text-center sm:text-left">
            <Layers className="h-7 w-7 text-primary flex-shrink-0" />
            <h3 className="font-semibold text-foreground">End-to-end automation and AI agent development</h3>
          </div>
          <div className="flex items-center gap-3 justify-center text-center sm:text-left">
            <Cloud className="h-7 w-7 text-primary flex-shrink-0" />
            <h3 className="font-semibold text-foreground">Works across any platform or cloud</h3>
          </div>
          <div className="flex items-center gap-3 justify-center text-center sm:text-left">
            <ShieldCheck className="h-7 w-7 text-primary flex-shrink-0" />
            <h3 className="font-semibold text-foreground">Enterprise-grade security and privacy</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
