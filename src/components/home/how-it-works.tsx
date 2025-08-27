import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Waypoints, Target, Gem } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Precision through context",
    description: "Generic AI often misses the details that matter. Our RAG-powered chatbots and SQL-integrated bots extract meaningful context from your documents, databases, and business workflows. Meanwhile, our automation solutions—built with custom code and n8n—handle repetitive tasks efficiently, so your teams can focus on innovation instead of manual work.",
  },
  {
    icon: Waypoints,
    title: "From prototype to production",
    description: "A working demo is just the start. We ensure your automation and chatbot solutions are robust, scalable, and reliable. With monitoring, security guardrails, and performance optimization, one-off prototypes become fully dependable business systems.",
  },
  {
    icon: Zap,
    title: "Build fast, iterate smart, drive adoption",
    description: "We deliver working automation and chatbots in weeks, collect early feedback, and refine quickly. This approach ensures your teams see results immediately, stay engaged, and help shape solutions that truly fit your workflows.",
  },
  {
    icon: Gem,
    title: "Excellence in every detail",
    description: "For mission-critical workflows, average results aren’t enough. We focus on fine-tuning and continuous improvement, ensuring your bots and automations achieve near-perfect accuracy and deliver dependable performance you can trust.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            From tasks to tangible results: How Axzron powers your business
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
