"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import FadeInSection from "@/components/ui/fade-in-section";

const review = {
  quote:
    "The website they built for Pasumpull beautifully reflects our organic brand. It showcases our black sesame and sesame oil perfectly. Reliable and talented team.",
  author: "Seyon",
  role: "Founder",
  company: "Pasumpull",
  rating: 5,
};

export default function CustomerReviews() {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] md:dashed-border-top">
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

        {/* Single review card */}
        <FadeInSection delay={0.15}>
          <div className="flex justify-center">
            <div className="w-[340px] sm:w-[380px]">
              <div className="flex flex-col bg-white rounded-2xl border border-[#f0f0f0] p-7 shadow-[0_8px_32px_-8px_rgba(17,24,39,0.08)]">
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
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
