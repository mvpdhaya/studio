import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeInSection from '@/components/ui/fade-in-section';

const stats = [
  { value: '1+', label: 'Projects Delivered' },
  { value: '10+', label: 'Hours Saved for Clients' },
  { value: '1+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-white md:dashed-border-top">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: Text */}
          <FadeInSection>
            <span className="inline-block text-[12px] font-bold text-[#ff881e] uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#111827] leading-[1.2] mb-5">
              We Build AI That Works for Your Business
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#6b7280] leading-[1.7] mb-8">
              Axzron is a team of engineers and AI specialists passionate about turning complex challenges into elegant, automated solutions — helping businesses of every size scale smarter.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 h-[46px] px-7 text-[14px] font-[600] rounded-[8px] bg-[#111827] text-white hover:bg-slate-800 transition-all duration-300 group"
            >
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInSection>

          {/* Right: Stats grid */}
          <FadeInSection delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-start p-4 sm:p-6 rounded-2xl bg-[#111827] border border-[#1f2937]"
                >
                  <span className="text-[24px] sm:text-[32px] font-bold text-white leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-slate-400 leading-snug font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}
