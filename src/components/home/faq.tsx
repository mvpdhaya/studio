import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What types of automation and agents does Axzron build?",
        answer: "Axzron builds code-based automations for custom workflows and n8n-based automations for scalable, low-code process orchestration. We also design AI agents tailored to specific business needs, such as data handling, customer support, and task management.",
    },
    {
        question: "Can chatbots connect directly to SQL databases?",
        answer: "Yes. Our chatbots can connect directly to SQL databases to retrieve, update, and manage data in real time. We also build RAG-powered chatbots that work with unstructured content like documents and emails.",
    },
    {
        question: "How secure are Axzron’s deployments?",
        answer: "All solutions follow strict security practices, including encryption, access controls, and secure integrations. Whether deployed on cloud or on-premise, Axzron ensures compliance with client data policies and industry standards.",
    },
    {
        question: "How long does it take to launch a solution?",
        answer: "Simple automations or chatbots: 2–4 weeks. Full-scale automation systems or agents: 1–3 months. We deliver quick proofs of concept (POCs) first, then scale to production-ready solutions.",
    },
    {
        question: "How do you measure ROI?",
        answer: "We define ROI through KPIs agreed with the client—such as time saved, reduced manual effort, faster response times, increased accuracy, and operational cost savings. We also provide post-deployment tracking to ensure ongoing value.",
    }
];

export default function Faq() {
  return (
    <section className="pt-16 md:pt-20 pb-8 md:pb-10 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
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
