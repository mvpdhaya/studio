import { Card } from "@/components/ui/card";
import { CheckCircle, BrainCircuit, Rocket, TrendingUp, Building } from "lucide-react";

const processSteps = [
    {
        icon: BrainCircuit,
        title: "Collaborative ideation",
        description: "Define high-value use cases, KPIs & success metrics. Analyze needs, data, architecture & scope to accelerate time-to-value.",
    },
    {
        icon: CheckCircle,
        title: "Validate with a POC",
        description: "Build a focused Proof of Concept. Test core functions, gather early user feedback, and validate feasibility & potential ROI before scaling.",
    },
    {
        icon: Rocket,
        title: "Build & deploy",
        description: "Post POC, we build & optimize the agent using best-fit models and rigorous testing, then securely deploy and integrate.",
    },
    {
        icon: TrendingUp,
        title: "Monitor & enhance",
        description: "Ongoing monitoring of performance, security & cost. Track KPIs, iterate for accuracy, and collaborate on future enhancements.",
    },
]

const pocSteps = ["POC Development", "Model Evaluation", "Dataset Preparation", "Agent building", "Build, Test, Integrate"];

export default function Process() {
  return (
    <section id="our-process" className="py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our collaborative path to value
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Ready to move from AI concepts to real-world results? Let's build production-ready AI agents tailored precisely to your workflows.
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
                <Card className="p-6 bg-card shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-full p-2 flex-shrink-0">
                           <Building className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-foreground/90 italic">"We need an automated system to evaluate credit applications using financial data and risk factors, providing reliable assessments."</p>
                    </div>
                </Card>
                <Card className="p-6 bg-primary/90 text-primary-foreground shadow-lg">
                    <div className="flex items-start gap-4">
                         <div className="bg-primary-foreground/20 rounded-full p-2 flex-shrink-0">
                            <BrainCircuit className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <p className="font-medium">"Absolutely. We can start with a proof of concept that automates the analysis and delivers accurate credit risk assessments."</p>
                    </div>
                </Card>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">End to End automated workflow</h3>
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
                <p className="text-right mt-4 font-semibold text-primary/80">by madhi.ai</p>
            </div>
        </div>

      </div>
    </section>
  )
}
