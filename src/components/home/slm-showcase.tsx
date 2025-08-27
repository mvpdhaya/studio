import Image from "next/image";

export default function SlmShowcase() {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Smarter workflows, bigger results: AI built for your business
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Most AI tools are built to be generic, which often makes them complex and less relevant to real business needs. At Axzron, we take a different path. We create purpose-driven automation systems and intelligent chatbots designed specifically for your workflows.
              </p>
              <p>
                By combining code-based and n8n automation with RAG-powered and SQL-driven chatbots, we turn your data—documents, databases, emails—into actionable intelligence. Our solutions are lightweight, cost-effective, and integrate seamlessly with your existing infrastructure, whether on-premise or cloud, keeping your data secure and your operations efficient.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/450"
              alt="AI Workflow Visualization"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl"
              data-ai-hint="abstract technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
