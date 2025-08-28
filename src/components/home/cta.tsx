import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Ready to build AI that delivers real business value?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Ready to move from AI concepts to real-world results? Let's build production-ready AI agents tailored precisely to your workflows.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="btn-schedule-demo text-white">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe7pkZTCTyDpeucHvWNnyQPEFBw2tWUMF389LQCVajKhHKAcg/viewform" target="_blank" rel="noopener noreferrer">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
