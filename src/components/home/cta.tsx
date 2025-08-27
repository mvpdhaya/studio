import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-card p-8 md:p-12 rounded-xl shadow-lg border">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Ready to build AI that delivers real business value?
          </h2>
          <p className="mt-4 mb-8 text-lg text-foreground/80">
            Ready to move from AI concepts to real-world results? Let's build production-ready AI agents tailored precisely to your workflows.
          </p>
          <Button size="lg" asChild className="btn-schedule-demo text-white">
              <Link href="#">Schedule a demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
