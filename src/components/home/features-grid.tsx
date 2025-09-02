import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Workflow, BrainCircuit, MessageSquare, Database, Lock, ShieldCheck, FileText, Mail, Briefcase } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Code-Based Automation",
    description: "Streamline complex workflows with robust, custom-coded automation scripts designed to handle repetitive tasks, integrate systems, and improve overall efficiency.",
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    description: "Leverage visual, low-code workflow orchestration using n8n to connect multiple services, APIs, and tools seamlessly, ensuring faster deployment and scalability.",
  },
  {
    icon: BrainCircuit,
    title: "AI Agents",
    description: "Develop intelligent, context-aware agents that understand your business processes, make decisions, and perform tasks autonomously, driving productivity and cost savings.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots",
    description: "RAG-Powered Chatbots for accurate, context-driven responses. SQL-Integrated Chatbots that can query, analyze, and update databases securely, enabling instant data-driven interactions.",
  },
  {
    icon: Database,
    title: "Data-Driven Intelligence",
    description: "Empower your organization to work with structured and unstructured data. Integrate PDFs, emails, CRMs, databases, and other data sources to create actionable insights and automate decision-making.",
  },
  {
    icon: Lock,
    title: "Security and Compliance",
    description: "Keep your sensitive data secure with flexible hosting options, including on-premise setups or private cloud environments. Implement strict role-based access controls and built-in security guardrails to protect workflows and maintain compliance.",
  }
];


export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">Axzron’s AI Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card flex flex-col p-2">
              <CardHeader className="flex-row items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl leading-tight">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
