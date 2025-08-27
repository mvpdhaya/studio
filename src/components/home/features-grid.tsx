import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, FileText, Lock, Bot, Database, Mail, Workflow, MessageSquare, Briefcase, BrainCircuit, Code } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Axzron’s AI Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle>AI Automation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3"><Code className="h-5 w-5 text-primary" /><span>Code-based automation</span></div>
              <div className="flex items-center gap-3"><Workflow className="h-5 w-5 text-primary" /><span>n8n workflow automation</span></div>
            </CardContent>
          </Card>

          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle>AI Agents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               <div className="flex items-center gap-3"><BrainCircuit className="h-5 w-5 text-primary" /><span>Intelligent agents tailored to your business processes</span></div>
            </CardContent>
          </Card>

          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle>Chatbots</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               <div className="flex items-center gap-3"><MessageSquare className="h-5 w-5 text-primary" /><span>RAG-powered chatbots</span></div>
               <div className="flex items-center gap-3"><Database className="h-5 w-5 text-primary" /><span>SQL-integrated chatbots</span></div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 lg:col-span-2">
            <CardHeader>
              <CardTitle>Data-Driven Intelligence</CardTitle>
            </CardHeader>
             <CardContent>
              <p>Work with PDFs, emails, databases, CRMs, and unstructured data</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80">
             <CardHeader>
              <CardTitle>Security and Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               <div>On-premise or private cloud deployments</div>
               <div>Role-based access and built-in security guardrails</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
