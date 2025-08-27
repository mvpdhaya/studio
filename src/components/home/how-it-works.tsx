import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Waypoints, Target, Gem } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Precision through context",
    description: "Generic AI misses nuance. Our Advanced RAG techniques extract deep, accurate context from your specific data (PDFs, emails, databases), fueling smarter agents. We handle this complexity, letting your engineers focus on innovation, not data plumbing.",
  },
  {
    icon: Waypoints,
    title: "Bridge the pilot‑to‑production gap",
    description: "A proof of concept shows it can work; production demands it never breaks. We harden your pilot with autoscaling, observability, security guardrails, and cost optimization, turning one‑off demos into dependable, enterprise‑grade AI agents.",
  },
  {
    icon: Zap,
    title: "Build fast, iterate smart, drive adoption",
    description: "Speed beats perfection in the real world. We ship lean agents in weeks, gather human feedback early, and iterate in tight loops—so your teams see quick wins, stay engaged, and help refine the solution until it becomes an indispensable part of their workflow.",
  },
  {
    icon: Gem,
    title: "The last 10% matters most",
    description: "90% accuracy is table stakes. We obsess over the final 10%. Through slice‑based evaluations, domain‑expert labeling, and relentless fine‑tuning, we close that gap—delivering near‑perfect answers that let you automate with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            From raw data to real results: How Axzron helps you?
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
