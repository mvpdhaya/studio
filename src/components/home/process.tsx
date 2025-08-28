
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, TestTube2, Rocket, Settings, Landmark, HeartPulse, ShoppingCart, Building2, BookOpen, Building, Factory } from "lucide-react";
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

const industries = [
    {
        icon: Landmark,
        title: "Finance & Banking",
        description: "Automate invoice processing, reconciliations, and fraud detection. AI chatbots for customer support and portfolio insights.",
    },
    {
        icon: HeartPulse,
        title: "Healthcare",
        description: "Intelligent assistants for patient queries and appointment management. Secure data handling and compliance-ready solutions.",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce & Retail",
        description: "Product recommendation engines, inventory automation, and personalized chatbots. Multichannel integration with CRMs and databases.",
    },
    {
        icon: Building2,
        title: "Enterprises & Startups",
        description: "AI-powered workflow automation and document intelligence. Custom agents for HR, sales, and operations.",
    },
    {
        icon: BookOpen,
        title: "Education & Training",
        description: "AI tutors, content generation, and administrative task automation.",
    },
    {
        icon: Factory,
        title: "Manufacturing & Supply Chain",
        description: "Predictive maintenance and quality control using AI. Automated inventory tracking and logistics optimization."
    }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {processSteps.map((step) => (
                <div key={step.title} className="text-center flex flex-col items-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full flex items-center justify-center">
                           <step.icon className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/80 text-sm max-w-xs mx-auto">{step.description}</p>
                </div>
            ))}
        </div>
        
        <div id="industries">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Industries We Serve</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    We design automation, AI agents, and data-driven solutions tailored for multiple industries.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry) => (
                    <Card key={industry.title} className="bg-card/80 flex flex-col text-center items-center p-4">
                        <CardHeader className="items-center pb-4">
                            <div className="bg-primary/10 p-3 rounded-full mb-2">
                                <industry.icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">{industry.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-foreground/80">{industry.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <div id="partnership" className="pt-28">
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
