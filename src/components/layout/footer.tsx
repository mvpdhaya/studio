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
    <footer className="relative bg-white pt-16 pb-8 overflow-hidden border-t border-slate-100 min-h-[360px] md:min-h-[380px] flex flex-col justify-between">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[20vw] font-black text-[#111827] opacity-[0.02] tracking-tighter">
          {siteConfig.name.toLowerCase()}
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logo.png?v=2" 
                alt={`${siteConfig.name} Logo`} 
                width={32} 
                height={32} 
                className="h-8 w-8 rounded-lg shadow-sm group-hover:rotate-12 transition-transform duration-300" 
                quality={100} 
              />
              <span className="text-xl font-bold tracking-tight text-[#111827]">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-[#6b7280] leading-relaxed max-w-[280px]">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-2.5 mt-2">
              <Link href={siteConfig.social.linkedin} target="_blank" className="p-2 rounded-lg bg-slate-50 text-[#6b7280] hover:bg-[#111827] hover:text-[#ff881e] transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.x} target="_blank" className="p-2 rounded-lg bg-slate-50 text-[#6b7280] hover:bg-[#111827] hover:text-[#ff881e] transition-all duration-300">
                <XLogo />
              </Link>
              <Link href={siteConfig.social.instagram} target="_blank" className="p-2 rounded-lg bg-slate-50 text-[#6b7280] hover:bg-[#111827] hover:text-[#ff881e] transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.facebook} target="_blank" className="p-2 rounded-lg bg-slate-50 text-[#6b7280] hover:bg-[#111827] hover:text-[#ff881e] transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#111827] mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navigation.links.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[14px] text-[#6b7280] hover:text-[#ff881e] transition-colors font-medium">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#111827] mb-6">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#ff881e]">
                  <Mail size={16} />
                </div>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[14px] text-[#6b7280] hover:text-[#ff881e] transition-colors font-medium">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#ff881e]">
                  <Phone size={16} />
                </div>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-[14px] text-[#6b7280] hover:text-[#ff881e] transition-colors font-medium">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#ff881e] mt-0.5">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] text-[#6b7280] font-medium leading-relaxed">
                    Remote First · Solutions Worldwide
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left relative z-20">
          <p className="text-xs text-[#9ca3af] font-medium">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-[#9ca3af] hover:text-[#111827] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-[#9ca3af] hover:text-[#111827] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Massive Brand Background Text - Absolutely positioned at bottom center */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden h-[min(20vw,150px)]">
         <h1 className="text-[16vw] font-black text-[#111827] leading-none tracking-tighter opacity-[0.05] translate-y-1/2">
          {siteConfig.name.toLowerCase()}
        </h1>
      </div>
    </footer>
  );
}
