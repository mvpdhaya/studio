import { Card } from "@/components/ui/card";
import { CheckCircle, Rocket, TrendingUp, Building, TestTube2, Search, Settings, ShieldCheck } from "lucide-react";
import Image from "next/image";

const processSteps = [
    {
        icon: Search,
        title: "Collaborative Planning",
        description: "Identify workflows, define KPIs, and scope needs.",
    },
    {
        icon: TestTube2,
        title: "Proof of Concept (POC)",
        description: "Rapid prototypes to validate functionality and ROI.",
    },
    {
        icon: Rocket,
        title: "Build & Deploy",
        description: "Develop, optimize, and integrate securely.",
    },
    {
        icon: Settings,
        title: "Monitor & Improve",
        description: "Ongoing support, KPI tracking, and refinements.",
    },
]

export default function Process() {
  return (
    <section id="our-process" className="py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Collaborative Path to Results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step) => (
                <div key={step.title} className="text-center flex flex-col items-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full flex items-center justify-center">
                           <step.icon className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/80 text-sm">{step.description}</p>
                </div>
            ))}
        </div>
        
        <div id="partnership" className="grid lg:grid-cols-1 gap-x-12 gap-y-8 items-center pt-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Example Scenario</h3>
            <div className="space-y-4 max-w-2xl mx-auto">
                <Card className="p-6 bg-card shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-full p-2 flex-shrink-0 flex items-center justify-center">
                           <Building className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-foreground/90 italic">"We need an AI agent to automate invoice extraction and reconciliation."</p>
                    </div>
                </Card>
                <Card className="p-6 bg-primary/90 text-primary-foreground shadow-lg">
                    <div className="flex items-start gap-4">
                         <div className="bg-primary-foreground/20 rounded-full p-2 flex-shrink-0 flex items-center justify-center">
                            <Image src="/logo.png" alt="Axzron Logo" width={24} height={24} className="h-6 w-6" />
                        </div>
                        <p className="font-medium">"Axzron can build a POC, deploy an AI agent, and integrate it with your systems for fast, accurate results."</p>
                    </div>
                </Card>
            </div>
        </div>

      </div>
    </section>
  )
}
