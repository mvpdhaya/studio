import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What types of automation and agents does Axzron build?",
        answer: "We specialize in custom AI agents, RAG-based knowledge systems, workflow automation bots, intelligent document processing, and domain-specific Small Language Models (SLMs) designed to solve real business challenges.",
    },
    {
        question: "Can chatbots connect directly to SQL databases?",
        answer: "Yes. Our agents can securely connect to SQL or NoSQL databases, perform read/write operations, and provide real-time insights while maintaining strict data governance.",
    },
    {
        question: "How secure are Axzron’s deployments?",
        answer: "Security is built into every stage. We offer on-premise or private cloud deployment, data encryption, role-based access, and compliance-ready solutions (GDPR, SOC 2, etc.).",
    },
    {
        question: "How long does it take to launch a solution?",
        answer: "Timelines vary by complexity. POCs typically take 2–4 weeks, while full-scale deployments range from 6–12 weeks. We focus on iterative delivery for quick wins.",
    },
    {
        question: "How do you measure ROI?",
        answer: "We track ROI using defined KPIs, such as cost savings, efficiency gains, accuracy improvements, and user adoption rates, ensuring clear business value.",
    }
];

export default function Faq() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b">
                        <AccordionTrigger className="text-lg text-left hover:no-underline font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/80">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
