import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, FileText, Lock, Search, Bot, Database, Mail } from "lucide-react";

const bestFitModels = [
    { name: "Microsoft", icon: Bot },
    { name: "Mixedbread", icon: Bot },
    { name: "Google", icon: Bot },
    { name: "google/gemma-3-12b-it", textClass: "text-sm" },
    { name: "Multimodal", textClass: "text-sm" },
];

const advancedRagItems = [
    { name: "PDFs", icon: FileText },
    { name: "Emails", icon: Mail },
    { name: "Database", icon: Database },
    { name: "CRM", icon: Bot },
];

const roiItems = [
    "Sentiment Alert", "Invoice Reconciliated", "Expense Report Generated",
    "Invoice Extracted", "Negative Sentiment Alert"
];

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

        <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Best-Fit model strategy */}
            <Card className="bg-card/80 h-full">
                <CardHeader>
                    <CardTitle>Best-Fit model strategy</CardTitle>
                    <CardDescription>Pick the best SLM, hybrid, or open-source models based on your workflow to build efficient, high-performance AI.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative h-48 flex flex-col items-center justify-center">
                        {bestFitModels.map((model, index) => (
                            <Badge
                                key={model.name}
                                variant="secondary"
                                className={`absolute bg-card border border-border/50 shadow-lg p-2 ${
                                    index === 0 ? 'top-4 left-8' :
                                    index === 1 ? 'top-12 right-12' :
                                    index === 2 ? 'top-20 left-16' :
                                    index === 3 ? 'bottom-12 left-24' :
                                    'bottom-4 right-20'
                                }`}
                                style={{ transform: `scale(${1 - index * 0.05})`}}
                            >
                                <div className="flex items-center gap-2">
                                    {model.icon && <model.icon className="h-4 w-4" />}
                                    <span className={model.textClass || 'font-medium'}>{model.name}</span>
                                </div>
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Advanced RAG techniques */}
            <Card className="bg-card/80 h-full">
                <CardHeader>
                    <CardTitle>Advanced RAG techniques</CardTitle>
                    <CardDescription>Our advanced RAG delivers precise, contextually accurate results from your data that generic platforms can't match.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {advancedRagItems.map(item => <Badge key={item.name} variant="secondary">{item.name}</Badge>)}
                    </div>
                    <div className="w-full max-w-sm bg-card p-4 rounded-lg border border-border/50 text-center relative mt-4">
                        <p className="font-medium text-foreground">Unstructured Data Processing</p>
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card p-2 rounded-full border border-border/50">
                            <Search className="h-5 w-5 text-foreground"/>
                        </div>
                    </div>
                     <div className="w-full max-w-sm grid grid-cols-2 gap-4 mt-8">
                        <Badge variant="secondary" className="justify-center py-2">Employee Manual</Badge>
                        <Badge variant="secondary" className="justify-center py-2">Invoices</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Enterprise-grade privacy & security */}
            <Card className="bg-card/80 h-full">
                <CardHeader>
                    <CardTitle>Enterprise-grade privacy & security</CardTitle>
                    <CardDescription>Deploy on-premise or private cloud. Built-in security guardrails, adhere to compliance standards.</CardDescription>
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

            {/* ROI-Focused implementation */}
            <Card className="bg-card/80 h-full overflow-hidden">
                <CardHeader>
                    <CardTitle>ROI-Focused implementation</CardTitle>
                    <CardDescription>Automate high-impact use cases directly aligned with your business goals, ensuring your AI investment delivers value.</CardDescription>
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
