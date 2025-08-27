"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BrainCircuit, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
    { href: '/#features', label: 'Features' },
    { href: '/#our-process', label: 'Our Process' },
    { href: '/#partnership', label: 'Partnership' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl" prefetch={true}>
          <BrainCircuit className="h-7 w-7 text-primary" />
          <span className="text-foreground">madhi.ai</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
             <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors" prefetch={true}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="btn-get-in-touch">
             <Link href="/schedule-demo" prefetch={true}>Get in touch</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col items-start p-6">
                   <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8" onClick={() => setMobileMenuOpen(false)}>
                      <BrainCircuit className="h-7 w-7 text-primary" />
                      <span className="text-foreground">madhi.ai</span>
                   </Link>
                   <nav className="flex flex-col items-start gap-6 text-lg font-medium">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)} prefetch={true}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
