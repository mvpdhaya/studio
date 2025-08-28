"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
    { href: '/#features', label: 'Axzron’s AI Services' },
    { href: '/#our-process', label: 'Our Process' },
    { href: '/#industries', label: 'Industries We Serve' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl" prefetch={true}>
          <Image src="/logo.png" alt="AXZRON Logo" width={32} height={32} className="h-8 w-8 text-primary rounded-full" />
          <span className="text-foreground">AXZRON</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
             <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors" prefetch={true}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="btn-get-in-touch hidden sm:inline-flex">
             <Link href="/#contact" prefetch={true}>change Get in Touch</Link>
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
                <SheetHeader className="p-6 pb-0">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-start p-6">
                   <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8" onClick={() => setMobileMenuOpen(false)}>
                      <Image src="/logo.png" alt="AXZRON Logo" width={32} height={32} className="h-8 w-8 text-primary rounded-full" />
                      <span className="text-foreground">AXZRON</span>
                   </Link>
                   <nav className="flex flex-col items-start gap-6 text-lg font-medium">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)} prefetch={true}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button asChild className="mt-8" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/#contact" prefetch={true}>change Get in Touch</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
