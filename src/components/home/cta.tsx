import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section id="contact" className="py-[100px] bg-[#2563eb] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[40px] font-[800] text-[#ffffff] mb-6 leading-tight">
            Ready to build AI that delivers real business value?
          </h2>
          <p className="max-w-2xl mx-auto text-[17px] text-[#bfdbfe] mb-10 leading-relaxed">
            Book a free 30-minute strategy call — no commitment, just clarity.
          </p>
          <div className="flex flex-col items-center justify-center">
            <Button className="h-[50px] px-[32px] text-[15px] bg-white text-[#1d4ed8] font-[600] hover:bg-slate-50 transition-all rounded-[8px]" asChild>
                <Link href="https://calendly.com/axzron-ai/30min" target="_blank" rel="noopener noreferrer">
                  Book your free call →
                </Link>
            </Button>
            <p className="text-[13px] text-[#dbeafe] mt-[14px]">
              No setup fee · Response in 24h · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
