import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, TestTube2, Rocket, Settings, Landmark, HeartPulse, ShoppingCart, Building2, BookOpen, Building, Factory } from "lucide-react";
import Image from "next/image";

const processSteps = [
    {
        icon: Search,
        title: "Discover & Define",
        description: "Gather requirements and align on goals.",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        icon: TestTube2,
        title: "Propose & Validate",
        description: "Share quotation and validate with POC.",
        color: "text-cyan-600",
        bg: "bg-cyan-100",
    },
    {
        icon: Rocket,
        title: "Build & Deploy",
        description: "Develop, integrate, and launch solutions.",
        color: "text-violet-600",
        bg: "bg-violet-100",
    },
    {
        icon: Settings,
        title: "Support & Evolve",
        description: "Monitor, optimize, and refine continuously.",
        color: "text-indigo-600",
        bg: "bg-indigo-100",
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
    <section id="our-process" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div id="industries">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-[#2563eb] font-bold text-sm uppercase tracking-wider mb-2 block">Industries</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Industries We Serve</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                    We design automation, AI agents, and data-driven solutions tailored for multiple industries.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry) => (
                    <Card key={industry.title} className="bg-slate-50 flex flex-col justify-start text-center items-center p-6 border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300 min-h-[180px]">
                        <CardHeader className="items-center pb-4 text-center">
                            <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                                <industry.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl font-bold text-slate-900">{industry.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-slate-600 leading-relaxed">{industry.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <div id="partnership" className="mt-28 relative">
            <div className="absolute inset-x-0 -top-14 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Example Scenario</h3>
            <div className="space-y-6 max-w-2xl mx-auto">
                <Card className="p-6 bg-white border-slate-200 shadow-sm relative">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-slate-200 rotate-45 border-r-0 border-t-0 hidden sm:block"></div>
                    <div className="flex items-start gap-4">
                        <div className="bg-slate-100 rounded-full p-3 flex-shrink-0 flex items-center justify-center text-slate-600">
                           <Building className="h-6 w-6" />
                        </div>
                        <div className="pt-2">
                           <p className="text-slate-800 italic leading-relaxed">"We need an AI agent to automate invoice extraction and reconciliation."</p>
                        </div>
                    </div>
                </Card>
                
                <div className="flex justify-center my-2">
                    <div className="w-px h-8 bg-slate-300 rounded-full"></div>
                </div>

                <Card className="p-6 shadow-md border-0 bg-blue-600 text-white relative">
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rotate-45 hidden sm:block"></div>
                    <div className="flex items-start gap-4">
                         <div className="bg-white rounded-full flex-shrink-0 flex items-center justify-center h-12 w-12 p-1 shadow-sm">
                            <Image src="/logo.png?v=2" alt="Axzron Logo" width={40} height={40} className="rounded-full" quality={100} />
                        </div>
                        <div className="pt-1">
                           <p className="font-medium leading-relaxed tracking-wide">"Axzron can build a POC, deploy an AI agent, and integrate it with your systems for fast, accurate results."</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

      </div>
    </section>
  )
}
