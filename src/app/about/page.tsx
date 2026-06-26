import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Process from '@/components/home/process';
import Faq from '@/components/home/faq';
import Cta from '@/components/home/cta';
import { aboutMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import FadeInSection from '@/components/ui/fade-in-section';
import { Rocket, Eye, Target, Zap, Users, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: aboutMetadata.title,
  description: aboutMetadata.description,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.6] z-0" style={{
            backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 85%)'
          }}></div>

          <div className="container mx-auto text-center relative z-10">
            <FadeInSection>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#ff881e] bg-[#ff881e]/10 border border-[#ff881e]/20 rounded-full px-4 py-1.5 mb-6">
                <Rocket className="h-3.5 w-3.5" />
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
                We Build AI That Works<br className="hidden md:block" />
                <span className="text-[#ff881e]"> for Your Business</span>
              </h1>
              <p className="text-lg md:text-xl text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
                Axzron is a team of engineers and AI specialists passionate about turning complex challenges into elegant, automated solutions.
              </p>
            </FadeInSection>

            {/* Stats row */}
            <FadeInSection>
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {[
                  { label: 'Projects Delivered', value: '50+' },
                  { label: 'Hours Saved for Clients', value: '10k+' },
                  { label: 'Industries Served', value: '6+' },
                  { label: 'Client Satisfaction', value: '98%' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-3xl font-bold text-[#111827]">{stat.value}</span>
                    <span className="text-[13px] text-slate-500 mt-1 text-center">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Our Story ────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-100">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
              <FadeInSection>
                <span className="inline-block text-[12px] font-bold text-[#ff881e] uppercase tracking-widest mb-4">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight mb-6">
                  From a Simple Idea to an AI-First Studio
                </h2>
                <div className="space-y-4 text-[#6b7280] leading-relaxed">
                  <p>
                    Axzron started in 2022 when our founders — frustrated by the amount of manual, repetitive work consuming teams at every company they worked with — decided to build something different.
                  </p>
                  <p>
                    What began as a small automation consultancy quickly evolved into a full-stack AI studio. We realised that the real opportunity wasn't just in saving time — it was in fundamentally changing how businesses operate at scale.
                  </p>
                  <p>
                    Today, we work with clients across finance, healthcare, e-commerce, and manufacturing to deploy AI agents, intelligent web apps, and end-to-end automation systems that deliver measurable ROI.
                  </p>
                </div>
              </FadeInSection>

              {/* Story visual card */}
              <FadeInSection>
                <div className="relative">
                  <div className="rounded-3xl bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 rounded-xl bg-[#ff881e]/20 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-[#ff881e]" />
                      </div>
                      <span className="font-semibold text-lg">Why we exist</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      "Every hour a talented person spends on a repetitive task is an hour lost to innovation. We exist to give that time back."
                    </p>
                    <div className="border-t border-white/10 pt-6 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#ff881e] flex items-center justify-center font-bold text-sm">A</div>
                      <div>
                        <p className="font-semibold text-sm">Axzron Team</p>
                        <p className="text-slate-400 text-xs">Founders, 2022</p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative blob */}
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-[#ff881e]/10 -z-10"></div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ── Vision & Mission ─────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto">
            <FadeInSection>
              <div className="text-center mb-14">
                <span className="inline-block text-[12px] font-bold text-[#ff881e] uppercase tracking-widest mb-3">What drives us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">Our Vision &amp; Mission</h2>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Vision */}
              <FadeInSection>
                <div className="group h-full rounded-3xl bg-white border border-slate-100 p-8 hover:border-[#ff881e]/30 hover:shadow-lg hover:shadow-[#ff881e]/5 transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-[#ff881e]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff881e]/20 transition-colors">
                    <Eye className="h-6 w-6 text-[#ff881e]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-3">Our Vision</h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    A world where every business — regardless of size — has access to intelligent automation that eliminates grunt work, unlocks creativity, and accelerates growth.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {['AI accessible to all businesses', 'No more manual bottlenecks', 'Technology that scales with you'].map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff881e] shrink-0"></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              {/* Mission */}
              <FadeInSection>
                <div className="group h-full rounded-3xl bg-white border border-slate-100 p-8 hover:border-[#ff881e]/30 hover:shadow-lg hover:shadow-[#ff881e]/5 transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-[#111827]/10 flex items-center justify-center mb-6 group-hover:bg-[#111827]/20 transition-colors">
                    <Target className="h-6 w-6 text-[#111827]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-3">Our Mission</h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    To design and deliver AI-powered systems that create measurable, lasting value — built on transparency, technical excellence, and a relentless focus on client outcomes.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {['Results-driven approach', 'Transparent, collaborative process', 'Long-term partnership, not one-off projects'].map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#111827] shrink-0"></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ── Existing sections ────────────────────────────────── */}
        <Process hideHeader={false} />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
