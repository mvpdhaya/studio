import Image from "next/image";

export default function SlmShowcase() {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Smaller models, bigger impact: AI built for your workflow
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Large Language Models (LLMs) promise transformative intelligence, but their generic, one-size-fits-all approach struggles with the precision, scalability, and security. Madhi.ai offers a focused alternative: we build specialized Small Language Models (SLMs), purpose-driven AI agents designed exclusively for your workflows, ensuring relevance and alignment with your specific goals.
              </p>
              <p>
                Leveraging your private data with techniques like Advanced RAG and domain-specific fine-tuning, we achieve highly accurate, context-aware results. Crucially, our SLMs integrate seamlessly into your infrastructure—on-premise or private cloud—inherently safeguarding your privacy and providing a significantly more cost-effective path to powerful, specialized AI compared to generic models.
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
