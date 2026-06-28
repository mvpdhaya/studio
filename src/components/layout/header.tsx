"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, Home, Briefcase, Info, Mail, ArrowRight } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';

import { siteConfig, navigation, servicesPage } from '@/lib/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { ...navigation.links[0], icon: Home },
    { ...navigation.links[1], icon: Briefcase },
    { ...navigation.links[2], icon: Info },
    { ...navigation.links[3], icon: Mail },
  ];

  return (
    <header
      className={cn(
        'fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8',
      )}
    >
      <div className={cn(
        'max-w-3xl mx-auto flex h-[64px] items-center justify-center gap-8 px-6 rounded-2xl transition-all duration-300',
        scrolled
          ? 'bg-white/70 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'
          : 'bg-white/40 backdrop-blur-md border border-white/10 shadow-sm'
      )}>
        {/* Brand Group */}
        <Link href="/" className="flex items-center shrink-0" prefetch={true}>
          <Image
            src="/nalogo.png"
            alt={siteConfig.name}
            width={83}
            height={20}
            style={{ width: 'auto', height: '20px' }}
            className="transition-opacity hover:opacity-90"
            quality={100}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[14px] md:text-[15px] font-[500] text-[#374151] hover:text-[#ff881e] transition-colors shrink-0" prefetch={true}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button asChild className="hidden sm:inline-flex h-[40px] px-5 text-[14px] font-[600] rounded-lg bg-[#111827] text-white hover:bg-slate-800 transition-all duration-300 shrink-0">
          <Link href="/contact" prefetch={true}>{navigation.cta}</Link>
        </Button>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden ml-auto">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#111827] h-10 w-10 rounded-xl hover:bg-slate-100 transition-all active:scale-95">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-[90vh] border-b-0 p-0 rounded-b-[2rem] overflow-hidden">
              <SheetHeader className="sr-only">
                <SheetTitle>Mobile Navigation</SheetTitle>
                <SheetDescription>Access the services, process, and industry pages.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full bg-white/95 backdrop-blur-xl">
                <div className="p-8 pb-4 flex items-center justify-between">
                  <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="/nalogo.png"
                      alt={siteConfig.name}
                      width={83}
                      height={20}
                      style={{ width: 'auto', height: '20px' }}
                      quality={100}
                      priority
                    />
                  </Link>
                </div>

                <div className="px-6 flex-1 overflow-y-auto">
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Menu</p>
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link, index) => {
                      if (link.label === "Services") {
                        return (
                          <div key={link.href} className="flex flex-col">
                            <Accordion type="single" collapsible className="w-full border-none">
                              <AccordionItem value="services" className="border-none">
                                <AccordionTrigger className="flex items-center p-4 rounded-2xl hover:bg-slate-50 transition-all group hover:no-underline py-4">
                                  <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#111827]/10 transition-colors">
                                      <link.icon className="w-5 h-5 text-slate-500 group-hover:text-[#ff881e] transition-colors" />
                                    </div>
                                    <span className="text-[16px] font-semibold text-[#111827] group-hover:text-[#ff881e] transition-colors">
                                      {link.label}
                                    </span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="grid grid-cols-1 gap-2 pl-4 pr-4 pb-4">
                                    {servicesPage.services.map((service) => (
                                      <Link
                                        key={service.title}
                                        href="/services"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all"
                                      >
                                        <div className="p-2 rounded-lg bg-slate-50">
                                          <service.icon className="h-4 w-4 text-slate-400" />
                                        </div>
                                        <span className="text-[14px] font-medium text-slate-600">{service.title}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group relative overflow-hidden"
                          onClick={() => setMobileMenuOpen(false)}
                          prefetch={true}
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#111827]/10 transition-colors">
                            <link.icon className="w-5 h-5 text-slate-500 group-hover:text-[#ff881e] transition-colors" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[16px] font-semibold text-[#111827] group-hover:text-[#ff881e] transition-colors">
                              {link.label}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 ml-auto text-slate-300 group-hover:text-[#ff881e] group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                <div className="p-8 pt-4 bg-slate-50/50 border-t border-slate-100">
                  <Button asChild className="w-full h-[56px] rounded-2xl bg-[#111827] text-white hover:bg-slate-800 shadow-lg shadow-slate-200/20 group text-[16px] font-semibold transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/contact" className="flex items-center justify-center gap-2" prefetch={true}>
                      {navigation.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <p className="text-center text-[13px] text-slate-400 mt-4 font-medium">
                    Available for new projects
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
