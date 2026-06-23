"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

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
    { href: '/#features', label: 'Our Services', description: 'Our Services' },
    { href: '/#how-it-works', label: 'Our Process', description: 'From tasks to tangible results' },
    { href: '/#industries', label: 'Industries We Serve', description: 'Industries We Serve' },
  ];

  return (
    <header
      className={cn(
        'fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8',
      )}
    >
      <div className={cn(
        'container mx-auto flex h-[64px] items-center justify-between px-6 rounded-2xl transition-all duration-300',
        scrolled 
          ? 'bg-white/70 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]' 
          : 'bg-white/40 backdrop-blur-md border border-white/10 shadow-sm'
      )}>
        <Link href="/" className="flex items-center gap-0 font-bold text-lg" prefetch={true}>
          <Image src="/logo.png?v=2" alt="AXZRON Logo" width={40} height={40} className="h-10 w-10 text-primary rounded-full" quality={100} />
          <span className="text-[#111827]">AXZRON</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[14px] md:text-[15px] font-[500] text-[#374151] hover:text-[#2563eb] transition-colors" prefetch={true}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex h-[48px] px-[28px] text-[15px] font-[600] rounded-[8px] bg-[#2563eb] text-white hover:bg-[#1d4ed8]">
            <Link href="/#contact" prefetch={true}>Get a free demo</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-0 p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Mobile Navigation</SheetTitle>
                  <SheetDescription>Access the services, process, and industry pages.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full bg-white">
                  <div className="p-8 pb-4">
                    <Link href="/" className="flex items-center gap-0 font-bold text-lg mb-10" onClick={() => setMobileMenuOpen(false)}>
                      <Image src="/logo.png?v=2" alt="AXZRON Logo" width={40} height={40} className="h-10 w-10 text-primary rounded-full" quality={100} />
                      <span className="text-[#111827]">AXZRON</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-2 px-6">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        className="flex flex-col gap-1 p-4 rounded-xl hover:bg-slate-50 transition-all group" 
                        onClick={() => setMobileMenuOpen(false)} 
                        prefetch={true}
                      >
                        <span className="text-[17px] font-bold text-black group-hover:text-[#2563eb] transition-colors">
                          {link.label}
                        </span>
                        <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                          {link.description}
                        </span>
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-8 border-t border-slate-100">
                    <Button asChild className="w-full h-[54px] rounded-xl bg-[#2563eb] text-white hover:bg-[#1d4ed8]" onClick={() => setMobileMenuOpen(false)}>
                      <Link href="/#contact" prefetch={true}>Get a free demo</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
