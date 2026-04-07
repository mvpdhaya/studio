
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const XLogo = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const WhatsAppLogo = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479s1.065 2.871 1.213 3.069c.149.198 2.096 3.203 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-[60px] pb-[32px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Logo & Text */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-[800] text-xl">
              <Image src="/logo.png?v=2" alt="AXZRON" width={32} height={32} className="h-8 w-8 text-[#2563eb] rounded-full object-contain" quality={100} />
              <span className="text-[#1e40af]">AXZRON</span>
            </Link>
            <p className="text-[14px] text-[#4b5563] mt-2 leading-[1.7]">
              AI, Web & Mobile solutions built for your business
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[15px] font-[600] text-[#111827] mb-[20px]">Services</h4>
            <ul className="space-y-3 text-[14px] text-[#6b7280]">
              <li><Link href="#features" className="hover:text-[#2563eb] transition-colors">Automation</Link></li>
              <li><Link href="#features" className="hover:text-[#2563eb] transition-colors">AI Agents</Link></li>
              <li><Link href="#features" className="hover:text-[#2563eb] transition-colors">Web Apps</Link></li>
              <li><Link href="#features" className="hover:text-[#2563eb] transition-colors">Mobile Apps</Link></li>
              <li><Link href="#features" className="hover:text-[#2563eb] transition-colors">Data Intelligence</Link></li>
              <li><Link href="#features" className="hover:text-[#2563eb] transition-colors">API Integration</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[15px] font-[600] text-[#111827] mb-[20px]">Company</h4>
            <ul className="space-y-3 text-[14px] text-[#6b7280]">
              <li><Link href="/#how-it-works" className="hover:text-[#2563eb] transition-colors">Our Process</Link></li>
              <li><Link href="/#industries" className="hover:text-[#2563eb] transition-colors">Industries</Link></li>
              <li><Link href="/#faq" className="hover:text-[#2563eb] transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-[#2563eb] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[15px] font-[600] text-[#111827] mb-[20px]">Contact</h4>
            <ul className="space-y-3 text-[14px] text-[#6b7280] mb-6">
              <li><a href="mailto:axzron.ai@gmail.com" className="hover:text-[#2563eb] transition-colors">axzron.ai@gmail.com</a></li>
              <li><a href="tel:+0123456789" className="hover:text-[#2563eb] transition-colors">+94 781626515</a></li>
            </ul>
            <div className="flex items-center gap-4 mt-[16px]">
              <Link href="https://www.linkedin.com/company/axzron/" target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#2563eb] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/Axzron_ai" target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#2563eb] transition-colors">
                <XLogo />
              </Link>
              <Link href="https://www.instagram.com/axzron.ai/" target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#2563eb] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 mt-[48px] pt-[32px] pb-[8px] text-center">
          <p className="text-[13px] text-[#9ca3af]">
            © {new Date().getFullYear()} Axzron. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
