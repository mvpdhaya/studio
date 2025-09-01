import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Waypoints, Target, Gem } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Precision through context",
    description: "Our AI agents and chatbots leverage RAG techniques and SQL integration to understand your data—whether it’s PDFs, emails, or databases—delivering accurate and context-aware answers. Meanwhile, our automation systems handle repetitive tasks, freeing your team to focus on innovation.",
  },
  {
    icon: Waypoints,
    title: "From prototype to production",
    description: "We start with a proof of concept but build with production in mind. Solutions are hardened with monitoring, security guardrails, and optimization so they scale reliably.",
  },
  {
    icon: Zap,
    title: "Build fast, iterate smart",
    description: "We develop functional solutions quickly, gather feedback early, and refine continuously to ensure your teams see value right away.",
  },
  {
    icon: Gem,
    title: "Focus on accuracy and performance",
    description: "We don’t settle for “good enough.” Every AI agent, automation, and chatbot is fine-tuned for precision and reliability in real-world business settings.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            From tasks to tangible results: How Axzron powers your business
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <Card key={index} className="bg-card backdrop-blur-sm border-border/50">
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
