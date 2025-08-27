import { Button } from '@/components/ui/button';
import { Cloud, Layers, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-background/50 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6">
            Build smarter, faster, secure AI agents with custom SLMs
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
            We build privacy-focused, high-performance AI agents tailored to automate your specific workflows, driving down costs and boosting operational speed and efficiency.
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild className="btn-schedule-demo text-white">
              <Link href="/schedule-demo">Schedule a demo</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-4 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center">
            <Layers className="h-7 w-7 text-accent" />
            <h3 className="font-semibold text-foreground">End-to-end orchestration</h3>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Cloud className="h-7 w-7 text-accent" />
            <h3 className="font-semibold text-foreground">100% Cloud agnostic</h3>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <ShieldCheck className="h-7 w-7 text-accent" />
            <h3 className="font-semibold text-foreground">Enterprise-grade security</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

    