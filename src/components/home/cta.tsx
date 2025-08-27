import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-card p-8 md:p-12 rounded-xl shadow-lg border">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Ready to automate and optimize your workflows with Axzron?
          </h2>
          <div className="mt-8">
            <Button size="lg" asChild className="btn-schedule-demo text-white">
                <Link href="/schedule-demo">Schedule a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
