import { Card } from "@/components/ui/card";
import { CheckCircle, Rocket, TrendingUp, Building } from "lucide-react";
import Logo from "../layout/logo";

const processSteps = [
    {
        icon: Logo,
        title: "Collaborative Planning",
        description: "We work with your team to identify high-value tasks, define success metrics, and analyze data and workflow requirements to accelerate results.",
    },
    {
        icon: CheckCircle,
        title: "Proof of Concept (POC)",
        description: "Before scaling, we develop a focused prototype to test functionality, gather feedback, and validate feasibility and ROI.",
    },
    {
        icon: Rocket,
        title: "Build & Deploy",
        description: "After POC approval, we develop, optimize, and integrate the automation systems and chatbots into your environment, ensuring security, scalability, and reliability.",
    },
    {
        icon: TrendingUp,
        title: "Monitor & Improve",
        description: "We provide ongoing monitoring, track KPIs, and continuously refine your solutions to maintain accuracy, efficiency, and alignment with business needs.",
    },
]

const pocSteps = ["POC Development", "Workflow & Bot Design", "Dataset Preparation", "Automation / Bot Building", "Build, Test & Integration"];

export default function Process() {
  return (
    <section id="our-process" className="py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Collaborative Path to Results
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            At Axzron, we turn ideas into practical solutions. Whether it’s workflow automation or intelligent chatbots, we partner with you to deliver systems that are ready for production and aligned with your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {processSteps.map((step, index) => (
                <div key={step.title} className="text-center flex flex-col items-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full">
                           <step.icon className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/80 text-sm">{step.description}</p>
                </div>
            ))}
        </div>
        
        <div id="partnership" className="grid lg:grid-cols-2 gap-x-12 gap-y-16 items-center pt-8">
            <div className="space-y-4">
                 <h3 className="text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">Example Scenario</h3>
                <Card className="p-6 bg-card shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-full p-2 flex-shrink-0">
                           <Building className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-foreground/90 italic">"We need an automated system to extract invoice data and reconcile it with our accounting system."</p>
                    </div>
                </Card>
                <Card className="p-6 bg-primary/90 text-primary-foreground shadow-lg">
                    <div className="flex items-start gap-4">
                         <div className="bg-primary-foreground/20 rounded-full p-2 flex-shrink-0">
                            <Logo className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <p className="font-medium">"Absolutely. Axzron can create a POC that automates extraction and reconciliation, providing accurate and reliable results."</p>
                    </div>
                </Card>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">End-to-End Workflow for Your Automation & Chatbots</h3>
                <div className="flex flex-col gap-2">
                    {pocSteps.map((step, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="flex-shrink-0 bg-accent h-8 w-8 rounded-full flex items-center justify-center text-accent-foreground font-bold">{index + 1}</div>
                            <div className="w-full bg-card p-3 rounded-md shadow-sm">
                                <p className="font-medium text-foreground">{step}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-right mt-4 font-semibold text-primary/80">by Axzron</p>
            </div>
        </div>

      </div>
    </section>
  )
}
