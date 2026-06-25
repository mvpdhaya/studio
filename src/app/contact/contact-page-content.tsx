import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { siteConfig, contactPage } from '@/lib/content';
import FadeInSection from '@/components/ui/fade-in-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactPageContent() {
  const { hero } = contactPage;
  const { contact } = siteConfig;

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <FadeInSection>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
                  {hero.title}
                </h1>
                <p className="text-lg md:text-xl text-[#6b7280] mb-10 leading-relaxed">
                  {hero.subtitle}
                </p>
              </FadeInSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <FadeInSection key={index} delay={index * 0.1}>
                    <Link 
                      href={method.href} 
                      className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#111827] shadow-sm mb-4 group-hover:bg-[#111827] group-hover:text-white transition-colors">
                        <method.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-1">{method.label}</span>
                      <span className="text-[#111827] font-bold group-hover:text-black transition-colors">{method.value}</span>
                    </Link>
                  </FadeInSection>
                ))}
              </div>

              <FadeInSection delay={0.3}>
                <div className="bg-[#111827] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }}></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                      {hero.subtitle}
                    </h2>
                    <p className="text-[#9ca3af] text-lg mb-8 max-w-2xl mx-auto">{hero.description}</p>
                    
                    <Button className="h-[56px] px-10 text-lg bg-white text-[#111827] font-bold hover:bg-slate-50 rounded-xl group transition-all duration-300" asChild>
                      <Link href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        {hero.cta}
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-black" />
                      </Link>
                    </Button>
                    
                    <p className="mt-6 text-sm text-[#4b5563]">{hero.footer}</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
