import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What types of businesses do you work with?",
        answer: "We partner with businesses across various sectors, including finance, healthcare, e-commerce, and manufacturing. Our ideal clients are organizations looking to scale through efficiency rather than just adding headcount. Whether you are a mid-sized enterprise or a growing startup, our solutions are tailored to your specific operational bottlenecks and compliance requirements.",
    },
    {
        question: "Which AI tools do you build with?",
        answer: "We leverage a best-in-class stack including OpenAI, Anthropic, and open-source models for core intelligence. For orchestration, we use tools like n8n and LangChain to connect AI processing with your existing databases and APIs. We also employ specialized vector databases and RAG frameworks to ensure our agents can securely query your internal documents and structured data.",
    },
    {
        question: "How long does deployment take?",
        answer: "Our deployment timeline varies based on the complexity of the solution, but we prioritize rapid delivery. Simple automations or customer-facing chatbots can often be deployed in as little as 2 to 4 weeks. For more complex, full-scale AI agent ecosystems or enterprise web apps, a typical timeline ranges from 2 to 3 months, starting with a rapid proof of concept to validate the approach early.",
    },
    {
        question: "How do you measure ROI?",
        answer: "We define ROI metrics before any project begins, including time saved per week, reduction in manual errors, customer response time improvement, and cost per transaction. After deployment we track these KPIs monthly and share transparent reports with your team. Most clients see measurable ROI within 60–90 days of going live.",
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes, we believe robust support is critical to long-term success with AI and automation tools. We provide continuous monitoring, performance optimization, and regular updates to ensure the solutions scale as your business evolves. Our dedicated support team is available 24/7 to address any technical issues and help you train new staff on using our systems effectively.",
    }
];

export default function Faq() {
  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-[36px] font-[700] text-[#1e3a8a] text-center mb-[48px]">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#e5e7eb]">
                        <AccordionTrigger className="py-[20px] text-[16px] text-left hover:no-underline font-[600] text-[#1e40af]">{item.question}</AccordionTrigger>
                        <AccordionContent className="pb-[20px] text-[15px] text-[#374151] leading-[1.8]">
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
