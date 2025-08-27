import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, UserCheck } from "lucide-react";

const dataSources = ["PDFs", "Emails", "Database", "CRM", "Unstructured Data", "Employee Manual", "Invoices"];
const securityFeatures = [
    { icon: Shield, text: "Built-in Guardrails" },
    { icon: UserCheck, text: "Role Based Access" },
];

const animatedItems = [
    "Invoice Extracted", "Negative Sentiment Alert", "Invoice Reconciliated", "Expense Report Generated",
    "Compliance Audit Completed", "Candidate Resume Evaluated"
];
const animatedRow = [...animatedItems, ...animatedItems, ...animatedItems, ...animatedItems]; // Extend for longer screens

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">For precise, efficient, and secure AI</h2>
          <p className="mt-4 text-lg text-foreground/80">
            We don't believe in one-size-fits-all AI. Our focus is delivering measurable results through tailored solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
            <Card className="lg:col-span-1 bg-card/80">
                <CardHeader>
                    <CardTitle>Best-Fit model strategy</CardTitle>
                    <CardDescription>Pick the best SLM, hybrid, or open-source models for your workflow to build efficient, high-performance AI.</CardDescription>
                </CardHeader>
            </Card>

            <Card className="lg:col-span-2 bg-card/80">
                <CardHeader>
                    <CardTitle>Advanced RAG techniques</CardTitle>
                    <CardDescription>Our advanced RAG delivers precise, contextually accurate results from your data that generic platforms can't match.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {dataSources.map(source => <Badge key={source} variant="secondary">{source}</Badge>)}
                    </div>
                </CardContent>
            </Card>

            <Card className="lg:col-span-2 bg-card/80">
                <CardHeader>
                    <CardTitle>Enterprise-grade privacy & security</CardTitle>
                    <CardDescription>Deploy on-premise or private cloud. Built-in security guardrails, adhere to compliance standards.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-6">
                    {securityFeatures.map(feat => (
                        <div key={feat.text} className="flex items-center gap-2 text-sm text-foreground">
                            <feat.icon className="h-5 w-5 text-accent"/>
                            <span>{feat.text}</span>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="lg:col-span-3 bg-card/80 overflow-hidden">
                <CardHeader>
                    <CardTitle>ROI-Focused implementation</CardTitle>
                    <CardDescription>Automate high-impact use cases directly aligned with your business goals, ensuring your AI investment delivers value.</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="relative flex overflow-x-hidden group">
                        <div className="py-2 animate-marquee group-hover:pause whitespace-nowrap flex gap-3">
                            {animatedRow.map((item, index) => (
                                <Badge key={`a-${index}`} variant="outline" className="flex items-center gap-2 text-sm py-1 px-3 border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400">
                                    <CheckCircle className="h-4 w-4"/>
                                    {item}
                                </Badge>
                            ))}
                        </div>
                        <div className="absolute top-0 py-2 animate-marquee2 group-hover:pause whitespace-nowrap flex gap-3">
                            {animatedRow.map((item, index) => (
                                <Badge key={`b-${index}`} variant="outline" className="flex items-center gap-2 text-sm py-1 px-3 border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400">
                                    <CheckCircle className="h-4 w-4"/>
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
