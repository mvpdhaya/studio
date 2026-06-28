"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import FadeInSection from "@/components/ui/fade-in-section";

const reviews = [
  {
    quote:
      "axzron transformed our legacy systems into a modern cloud architecture. Their expertise in AI and automation is truly unmatched.",
    author: "Daniel Wu",
    role: "CTO",
    company: "Horizon FinTech",
    rating: 5,
  },
  {
    quote:
      "The personalized support we received made all the difference in our digital transformation journey. Exceptional team.",
    author: "Aiko Tanaka",
    role: "COO",
    company: "NextWave Startups",
    rating: 5,
  },
  {
    quote:
      "A true partner in innovation. Their AI strategies have given us a significant competitive edge in the logistics space.",
    author: "Marcus Allen",
    role: "CEO",
    company: "BrightPath Logistics",
    rating: 5,
  },
  {
    quote:
      "Transparent, professional, and result-oriented. axzron is our go-to for all IT modernization and cloud infrastructure.",
    author: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "CloudStream",
    rating: 5,
  },
  {
    quote:
      "The ROI we've seen since implementing axzron's data solutions has been phenomenal. They truly understand business needs.",
    author: "James Chen",
    role: "Director of Operations",
    company: "TechFlow",
    rating: 5,
  },
  {
    quote:
      "Their digital workplace solutions have completely revolutionized how our remote teams collaborate and deliver results.",
    author: "Tom Wilson",
    role: "Head of IT",
    company: "RemoteFirst",
    rating: 5,
  },
];

// Duplicate for seamless infinite scroll
const marqueeReviews = [...reviews, ...reviews];

export default function CustomerReviews() {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <FadeInSection>
            <span className="inline-block text-[12px] font-bold text-[#ff881e] uppercase tracking-widest mb-4">
              Client Testimonials
            </span>
          </FadeInSection>
          <FadeInSection delay={0.05}>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#111827] leading-[1.2] mb-4">
              Trusted by Businesses Worldwide
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <p className="text-[15px] md:text-[17px] text-[#6b7280] leading-[1.7]">
              Hear from the leaders who have transformed their operations with
              our AI-powered solutions and expert guidance.
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Marquee row */}
      <FadeInSection delay={0.15}>
        <div className="relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex items-stretch gap-6 animate-scroll-reviews hover:[animation-play-state:paused] w-max">
            {marqueeReviews.map((review, index) => (
              <div
                key={`${review.author}-${index}`}
                className="flex-shrink-0 w-[340px] sm:w-[380px] flex flex-col bg-white rounded-2xl border border-[#f0f0f0] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(17,24,39,0.1)] hover:border-[#e5e7eb]"
              >
                {/* Quote icon + Stars row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#111827] flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#ff881e] text-[#ff881e]"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-[15px] text-[#374151] leading-[1.7] mb-6 flex-1">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#f3f4f6]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#111827] to-[#374151] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[13px] font-bold">
                      {review.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#111827] leading-tight">
                      {review.author}
                    </h4>
                    <p className="text-[12px] text-[#9ca3af] leading-tight mt-0.5">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
