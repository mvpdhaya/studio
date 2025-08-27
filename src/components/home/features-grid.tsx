import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, FileText, Lock, Bot, Database, Mail, Workflow, MessageSquare, Briefcase } from "lucide-react";

const dataSources = [
    { name: "PDFs, manuals, and documents", icon: FileText },
    { name: "Emails and internal communications", icon: Mail },
    { name: "Databases and CRMs", icon: Database },
    { name: "Unstructured business data", icon: Briefcase },
];

const roiItems = [
    "Invoice extraction and reconciliation",
    "Expense report generation",
    "Sentiment monitoring and alerts",
    "Customer support and knowledge management",
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Efficient, reliable, and secure AI for your business</h2>
          <p className="mt-4 text-lg text-foreground/80">
            At Axzron, we don’t believe in generic solutions. Every automation system and chatbot we build is customized to your workflows, ensuring measurable impact and real business value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="bg-card/80 h-full">
                <CardHeader>
                    <CardTitle>Tailored Automation & Chatbot Strategy</CardTitle>
                    <CardDescription>We choose the best approach for your needs—whether it’s code-based automation, n8n workflows, RAG-powered chatbots, or SQL-driven bots—to deliver fast, accurate, and high-performance solutions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Badge variant="secondary" className="py-2 px-4 text-sm"><Workflow className="mr-2" /> Code-based Automation</Badge>
                        <Badge variant="secondary" className="py-2 px-4 text-sm"><Bot className="mr-2" /> n8n Workflows</Badge>
                        <Badge variant="secondary" className="py-2 px-4 text-sm"><MessageSquare className="mr-2" /> RAG Chatbots</Badge>
                        <Badge variant="secondary" className="py-2 px-4 text-sm"><Database className="mr-2" /> SQL-driven Bots</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-card/80 h-full">
                <CardHeader>
                    <CardTitle>Data-Driven Intelligence</CardTitle>
                    <CardDescription>Our AI bots and automation tools extract precise, context-aware insights from:</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    {dataSources.map(item => (
                        <div key={item.name} className="flex items-center gap-3 bg-card p-3 rounded-lg border border-border/50">
                            <item.icon className="h-5 w-5 text-primary"/>
                            <span className="font-medium text-foreground">{item.name}</span>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="bg-card/80 h-full">
                <CardHeader>
                    <CardTitle>Secure and Compliant</CardTitle>
                    <CardDescription>Deploy on-premises or in private cloud environments with built-in security guardrails, role-based access, and adherence to compliance standards.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-48">
                    <div className="relative w-48 h-48">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent rounded-full" />
                        <div className="absolute inset-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent rounded-full" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <Lock className="w-12 h-12 text-primary/80" />
                        </div>
                        <Badge variant="secondary" className="absolute top-8 -right-4">Guardrails</Badge>
                        <Badge variant="secondary" className="absolute bottom-8 -left-8">Role Based Access</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-card/80 h-full overflow-hidden">
                <CardHeader>
                    <CardTitle>ROI-Focused Automation</CardTitle>
                    <CardDescription>We prioritize automating high-impact tasks aligned with your business goals to maximize value:</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                     <div className="flex flex-wrap gap-3 justify-center">
                        {roiItems.map((item, index) => (
                            <Badge key={index} variant="outline" className="flex items-center gap-2 text-sm py-1.5 px-3 bg-card border-border/50 shadow-sm">
                                <CheckCircle className="h-4 w-4 text-foreground/80"/>
                                {item}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
