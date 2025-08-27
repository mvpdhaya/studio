import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What types of automation and agents does Axzron build?",
        answer: "We build a wide range of automation solutions, including code-based scripts for complex tasks, n8n workflows for streamlined process integration, and intelligent AI agents and chatbots tailored to your specific operational needs to ensure maximum efficiency and impact.",
    },
    {
        question: "Can chatbots connect directly to SQL databases?",
        answer: "Yes. We develop SQL-integrated chatbots that can securely connect to your databases, retrieve information, and provide real-time answers. This allows your team to get instant insights from your data through a simple conversational interface.",
    },
    {
        question: "How secure are Axzron’s deployments?",
        answer: "Data security is our top priority. We deploy solutions on-premises or in your private cloud to ensure your data never leaves your control. Our systems include robust security guardrails and role-based access to meet strict compliance and privacy standards.",
    },
    {
        question: "How long does it take to launch a solution?",
        answer: "We focus on delivering value quickly. A proof of concept (POC) is typically ready in a few weeks. Full deployment timelines vary based on complexity, but our iterative approach ensures you see results fast and can provide feedback throughout the process.",
    },
    {
        question: "How do you measure ROI?",
        answer: "We work with you to define clear KPIs from the start, such as cost savings, time reduction, and error rate improvement. By focusing on high-impact use cases, we ensure our solutions deliver measurable and meaningful returns on your investment.",
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
