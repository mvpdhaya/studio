import Image from 'next/image';

export default function SlmShowcase() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 mb-6">
              Smarter workflows, bigger results: AI built for your business
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Generic AI tools often fall short when applied to real business scenarios. Axzron builds purpose-driven automation systems, AI agents, and chatbots designed around your exact needs.
              </p>
              <p>
                By combining custom code automation, n8n workflows, and chatbots that integrate with your documents, databases, and systems, we turn your data into actionable intelligence. Our solutions are lightweight, cost-efficient, and fit seamlessly into your on-premise or cloud infrastructure.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/wb.png"
              alt="AI Workflow"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl"
              data-ai-hint="workflow diagram"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
