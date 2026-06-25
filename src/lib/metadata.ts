/**
 * Pure string/plain data exports for use in Server Components (e.g. metadata exports).
 * Keep this file free of any imports that could be treated as client-side modules
 * (e.g. lucide-react, framer-motion, etc.) so page.tsx files can safely import it
 * alongside `export const metadata`.
 */

export const siteMetadata = {
  name: 'Axzron',
  tagline: 'AI, Web & Mobile solutions built for your business',
};

export const homeMetadata = {
  title: 'Axzron | AI Automation & Software Solutions',
  description:
    'Automate smarter, faster, seamlessly with AI workflows, agents & chatbots. Axzron builds AI-powered business solutions to accelerate your growth.',
};

export const servicesMetadata = {
  title: 'AI Automation, Chatbots & App Development Services | Axzron',
  description:
    'Explore our range of AI-powered services including business automation, custom AI agents, web and mobile app development, and data intelligence.',
};

export const aboutMetadata = {
  title: 'About Axzron | AI-Powered Business Automation',
  description:
    "Learn about Axzron's mission to empower businesses through AI automation and our transparent, results-driven process.",
};

export const contactMetadata = {
  title: 'Contact Axzron | Book a Free AI Strategy Call',
  description:
    'Ready to build AI that delivers real business value? Contact Axzron or book a free 30-minute strategy call today.',
};
