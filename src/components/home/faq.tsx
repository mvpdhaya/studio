import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What is a Small Language Model (SLM), and how does it differ from an LLM?",
        answer: "An SLM is a specialized AI model trained for specific tasks or domains, making it more efficient, cost-effective, and precise than a general-purpose Large Language Model (LLM). Unlike LLMs, which have broad knowledge, SLMs excel at understanding the nuances of your business.",
    },
    {
        question: "When should I use an SLM instead of an LLM?",
        answer: "Use an SLM when you need high accuracy for a specific workflow, require data privacy with on-premise deployment, or want a more cost-effective solution. LLMs are better for general-purpose tasks like creative writing or broad-topic Q&A.",
    },
    {
        question: "Can SLMs be fine-tuned for my business use case?",
        answer: "Absolutely. We specialize in fine-tuning SLMs on your private data using techniques like Advanced RAG. This ensures the AI agent understands your unique context, terminology, and processes, delivering highly relevant and accurate results.",
    },
    {
        question: "What business problems can custom AI agents solve?",
        answer: "Custom AI agents can automate a wide range of tasks, such as invoice processing, customer support ticket routing, compliance monitoring, data extraction from documents, sentiment analysis in communications, and evaluating credit applications.",
    },
    {
        question: "What is a custom AI agent, and how is it different from a chatbot?",
        answer: "A chatbot typically follows predefined scripts or answers general questions. A custom AI agent, powered by an SLM, is a more sophisticated system that integrates into your workflows, processes complex data, makes decisions, and performs actions, acting like an automated team member.",
    },
    {
        question: "What is your pricing model and what factors affect cost?",
        answer: "Our pricing is ROI-focused and tailored to each project. Costs depend on factors like the complexity of the workflow, the volume of data, the required level of model customization (fine-tuning), and the deployment environment (cloud vs. on-premise). We start with a focused POC to prove value before scaling.",
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
          <p className="mt-4 text-lg text-foreground/80">
            Find quick, clear responses to common queries about our solutions.
          </p>
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
