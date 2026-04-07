"use client";

import { useEffect, useState, useRef } from "react";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";

const AnimatedNumber = ({ 
  target, 
  duration, 
  isVisible,
  onComplete
}: { 
  target: number, 
  duration: number, 
  isVisible: boolean,
  onComplete: () => void 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = 0;
    let animationFrame: number;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const t = Math.min(progress / duration, 1);
      
      setCount(Math.floor(target * easeOut(t)));

      if (t < 1) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setCount(target);
        onComplete();
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration, onComplete]);

  return <span>{count}</span>;
};

const StatCell = ({ stat, idx, isVisible }: { stat: any, idx: number, isVisible: boolean }) => {
  const [complete, setComplete] = useState(false);
  
  return (
    <div 
      className={`flex flex-col items-center justify-center py-[32px] px-[24px] transform transition-all duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="flex items-baseline">
        <span className="text-[48px] md:text-[56px] font-[700] text-[#111827] leading-none tracking-tight">
          <AnimatedNumber target={stat.target} duration={stat.duration} isVisible={isVisible} onComplete={() => setComplete(true)} />
        </span>
        <span className={`text-[48px] md:text-[56px] font-[700] text-[#2563eb] leading-none tracking-tight ${complete ? 'opacity-100' : 'opacity-0'}`}>
          {stat.suffix}
        </span>
      </div>
      <span className="text-[12px] font-[600] tracking-[0.05em] uppercase text-[#6b7280] mt-[10px] text-center">
        {stat.label}
      </span>
    </div>
  );
};

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { target: 50, suffix: "+", label: "AI Solutions Delivered", duration: 2000 },
    { target: 98, suffix: "%", label: "Client Satisfaction", duration: 2000 },
    { target: 3, suffix: "x", label: "Faster Workflows", duration: 1500 },
    { target: 24, suffix: "/7", label: "Monitoring & Support", duration: 1800 },
  ];

  const badges = [
    { icon: ShieldCheck, color: "text-[#059669]", text: "On-premise & cloud ready" },
    { icon: TrendingUp, color: "text-[#2563eb]", text: "Proven ROI across industries" },
    { icon: Zap, color: "text-[#d97706]", text: "Fast delivery, high quality" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white pb-[20px]">
      {/* Row 1: Stats */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl mx-auto">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center flex-1 w-full justify-center">
            <StatCell stat={stat} idx={idx} isVisible={isVisible} />
            
            {/* Vertical Divider */}
            {idx < stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-[48px] bg-[#e5e7eb]"></div>
            )}
            {/* Horizontal Divider for Mobile */}
            {idx < stats.length - 1 && (
              <div className="md:hidden block h-[1px] w-[48px] bg-[#e5e7eb]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Row 2: Badges */}
      <div className="border-t-[1px] border-[#f3f4f6] pt-[24px] mt-[10px] flex flex-col md:flex-row justify-center items-center gap-[40px] flex-wrap max-w-5xl mx-auto">
        {badges.map((badge, idx) => {
          return (
            <div 
              key={idx} 
              className={`inline-flex items-center gap-[8px] transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${600 + (idx * 100)}ms` }}
            >
              <badge.icon className={`w-[16px] h-[16px] ${badge.color}`} />
              <span className="text-[14px] font-[500] text-[#4b5563]">{badge.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
