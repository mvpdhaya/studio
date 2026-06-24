"use client";

import { siteConfig, navigation } from '@/lib/content';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Facebook, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

const XLogo = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const WhatsAppLogo = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479s1.065 2.871 1.213 3.069c.149.198 2.096 3.203 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-white pt-16 pb-8 overflow-hidden border-t border-slate-100">
      {/* Gradient Grid Background Look */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)`,
        backgroundSize: '24px 24px',
        maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
      }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logo.png?v=2" 
                alt={`${siteConfig.name} Logo`} 
                width={36} 
                height={36} 
                className="h-9 w-9 rounded-full shadow-sm group-hover:rotate-12 transition-transform duration-300" 
                quality={100} 
              />
              <span className="text-xl font-bold tracking-tight text-[#111827]">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-[#6b7280] leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <Link href={siteConfig.social.linkedin} target="_blank" className="p-2 rounded-lg bg-slate-50 text-[#6b7280] hover:bg-[#111827] hover:text-white transition-all duration-200">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.x} target="_blank" className="p-2 rounded-lg bg-slate-50 text-[#6b7280] hover:bg-[#111827] hover:text-white transition-all duration-200">
                <XLogo />
              </Link>
              <Link href={siteConfig.social.instagram} target="_blank" className="p-2 rounded-lg bg-slate-50 text-[#6b7280] hover:bg-[#111827] hover:text-white transition-all duration-200">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.facebook} target="_blank" className="p-2 rounded-lg bg-slate-50 text-[#6b7280] hover:bg-[#111827] hover:text-white transition-all duration-200">
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#111827] mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'AI Automation', href: '/services' },
                { label: 'AI Agents', href: '/services' },
                { label: 'Web & Mobile Apps', href: '/services' },
                { label: 'Data Intelligence', href: '/services' },
                { label: 'API Integrations', href: '/services' },
                { label: 'AI+IoT Solutions', href: '/services' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#111827] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Process', href: '/about#our-process' },
                { label: 'Industries', href: '/services#industries' },
                { label: 'FAQ', href: '/about#faq' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-50/50 border border-slate-100 p-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#111827] mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#111827] mt-[2px]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors font-medium">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#111827] mt-[2px]" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors font-medium">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#111827] mt-[2px]" />
                <span className="text-sm text-[#6b7280]">
                  Remote First · Solutions Worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-[#9ca3af] font-medium">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-[#9ca3af] hover:text-[#111827] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-[#9ca3af] hover:text-[#111827] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
