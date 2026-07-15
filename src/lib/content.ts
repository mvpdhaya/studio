import { Zap, Bot, Globe, Smartphone, Database, Search, TestTube2, Rocket, Settings, Landmark, HeartPulse, ShoppingCart, Building2, BookOpen, Factory, Cpu, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  category: string;
  features: string[];
}

export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  num: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "axzron",
  tagline: "AI, Web & Mobile solutions built for your business",
  contact: {
    email: "hi@axzron.com",
    phone: "+94 781626515",
    whatsapp: "+94 781626515",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/axzron/",
    x: "https://x.com/Axzron_ai",
    instagram: "https://www.instagram.com/axzron.ai/",
    facebook: "https://www.facebook.com/share/1EXBpWK5ri/",
  },
  calendly: "https://calendly.com/axzron-ai/30min",
};

export const navigation = {
  links: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ],
  cta: "Book a free demo",
};

export const homePage = {
  seo: {
    title: "Axzron | AI Automation & Software Solutions",
    description: "Automate smarter, faster, seamlessly with AI workflows, agents & chatbots. Axzron builds AI-powered business solutions to accelerate your growth.",
  },
  hero: {
    badge: "Web • Mobile • AI • Automation • IoT",
    title: "Smart digital solutions for modern businesses",
    subtitle: "We build websites, mobile apps, AI systems, and IoT solutions to help your business grow faster and operate efficiently.",
    primaryCta: "Book a free demo",
    secondaryCta: "See our services",
  },
  scenarios: {
    title: "Real results for real businesses",
    items: [
      {
        title: 'Automating invoice processing',
        tag: 'Finance & Banking',
        description: 'A regional finance firm spent 40+ hours weekly on manual invoicing. We deployed an AI workflow that reduced processing time by 80%.',
      },
      {
        title: 'AI support chatbot for e-commerce',
        tag: 'E-Commerce',
        description: 'An online retailer struggled with high support ticket volume. Our AI chatbot now handles 70% of queries automatically, 24/7.',
      },
      {
        title: 'Predictive analytics for healthcare',
        tag: 'Healthcare',
        description: 'A healthcare provider needed faster patient risk assessment. We built a dashboard that flags high-risk cases in real time.',
      },
    ],
  },
};

export const servicesPage = {
  seo: {
    title: "AI Automation, Chatbots & App Development Services | Axzron",
    description: "Explore our range of AI-powered services including business automation, custom AI agents, web and mobile app development, and data intelligence.",
  },
  hero: {
    title: "Our Services",
    subtitle: "End-to-end AI and software solutions tailored to scale your business efficiency.",
  },
  services: [
    {
      icon: Zap,
      title: "Business Automation",
      description: "Streamline workflows with custom automation scripts.",
      category: "Automation",
      features: ["Workflow Optimization", "Custom triggers", "Data entry automation", "CRM integrations"],
    },
    {
      icon: Bot,
      title: "AI Agents & Chatbots",
      description: "Intelligent, context-aware conversational agents.",
      category: "AI",
      features: ["24/7 Support bots", "Lead generation agents", "Context-aware replies", "Multi-step conversations"],
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "Scalable, high-performance web applications.",
      category: "Development",
      features: ["High-performance React", "Responsive dashboards", "Secure authentication", "Real-time updates"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications.",
      category: "Development",
      features: ["iOS & Android apps", "Fluid animations", "Push notifications", "Offline functionality"],
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Integrate and analyze data for actionable insights.",
      category: "Analytics",
      features: ["Predictive insights", "Custom dashboards", "Dataset processing", "Visual analytics"],
    },
    {
      icon: Cpu,
      title: "AI+IoT Solutions",
      description: "Automate your physical assets with intelligent IoT.",
      category: "Smart Systems",
      features: ["Real-time sensor data", "Predictive maintenance", "Smart ecosystem design", "Remote asset control"],
    },
  ] as Service[],
  industries: {
    title: "Industries We Serve",
    subtitle: "We design automation, AI agents, and data-driven solutions tailored for multiple industries.",
    items: [
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
    ] as Industry[],
  }
};

export const aboutPage = {
  seo: {
    title: "About Axzron | AI-Powered Business Automation",
    description: "Learn about Axzron's mission to empower businesses through AI automation and our transparent, results-driven process.",
  },
  hero: {
    title: "Our Mission",
    subtitle: "Empowering businesses to scale through AI-driven efficiency and intelligent automation.",
  },
  process: {
    title: "Our Process",
    subtitle: "From tasks to tangible results",
    description: "At Axzron, we believe in a transparent and iterative process. We focus on early alignment, rapid prototyping, and rigorous testing so the final solution systematically tackles your bottlenecks and drives long-term efficiency.",
    steps: [
      { num: 1, icon: Search, title: 'Discover', description: 'Deep dive into your goals to find the highest leverage AI opportunities.' },
      { num: 2, icon: TestTube2, title: 'Design', description: 'Architecting the perfect flow and validating with rapid prototypes.' },
      { num: 3, icon: Rocket, title: 'Build', description: 'Engineering secure, scalable solutions with cutting-edge AI models.' },
      { num: 4, icon: Settings, title: 'Support', description: 'Seamless deployment with ongoing optimization to scale ROI.' },
    ] as ProcessStep[],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What types of businesses do you work with?",
        answer: "We partner with businesses across various sectors, including finance, healthcare, e-commerce, and manufacturing. Our ideal clients are organizations looking to scale through efficiency rather than just adding headcount.",
      },
      {
        question: "Which AI tools do you build with?",
        answer: "We leverage a best-in-class stack including OpenAI, Anthropic, and open-source models for core intelligence. For orchestration, we use tools like n8n and LangChain.",
      },
      {
        question: "How long does deployment take?",
        answer: "Simple automations can often be deployed in 2 to 4 weeks. Full-scale AI agent ecosystems typically range from 2 to 3 months.",
      },
      {
        question: "How do you measure ROI?",
        answer: "We define ROI metrics before any project begins, including time saved, reduction in errors, and response time improvement.",
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Yes, we provide continuous monitoring, performance optimization, and regular updates to ensure the solutions scale with you.",
      }
    ] as FaqItem[],
  }
};

export const contactPage = {
  seo: {
    title: "Contact Axzron | Book a Free AI Strategy Call",
    description: "Ready to build AI that delivers real business value? Contact Axzron or book a free 30-minute strategy call today.",
  },
  hero: {
    title: "Let's Build Something Great",
    subtitle: "Ready to build AI that delivers real business value?",
    description: "Book a free 30-minute strategy call — no commitment, just clarity.",
    cta: "Book your free call",
    footer: "No setup fee · Response in 24h · Cancel anytime",
  },
};
