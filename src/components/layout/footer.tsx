
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
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479s1.065 2.871 1.213 3.069c.149.198 2.096 3.203 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);


export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(to right, #7a65ff, #c1baff)' }} className="border-t border-transparent overflow-hidden text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side */}
          <div className="flex-1 max-w-xl">
            <div className="flex flex-col gap-8 md:items-start items-center text-center md:text-left">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                  <Image src="/logo.png?v=2" alt="AXZRON Logo" width={28} height={28} className="h-7 w-7 text-primary rounded-full" quality={100} />
                  <span className="text-white">AXZRON</span>
                </Link>
                <p className="text-white max-w-xs">
                  AI automation, agents, and chatbots for business success
                </p>
              </div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li><Link href="#features" className="text-white hover:text-white/80 transition-colors">Axzron’s AI Services</Link></li>
                    <li><Link href="#our-process" className="text-white hover:text-white/80 transition-colors">Our process</Link></li>
                    <li><Link href="#industries" className="text-white hover:text-white/80 transition-colors">Industries We Serve</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                  <div className="flex space-x-4 justify-center md:justify-start">
                    <Link href="https://www.linkedin.com/company/axzron/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.instagram.com/axzron.ai/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="https://x.com/Axzron_ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <XLogo />
                    </Link>
                     <Link href="https://wa.me/0781626515" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <WhatsAppLogo />
                    </Link>
                    <Link href="mailto:axzron.ai@gmail.com" className="text-white hover:text-white/80 transition-colors">
                      <Mail className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Right Side */}
          <div className="relative flex-1 flex items-center justify-center min-h-[250px] md:min-h-0">
             <div className="group relative text-7xl md:text-8xl lg:text-9xl font-extrabold whitespace-nowrap">
                <h2 className="absolute top-0 left-0 w-full h-full text-white/10 -translate-y-[150%] text-center">AXZRON</h2>
                <h2 className="absolute top-0 left-0 w-full h-full text-white/20 -translate-y-[75%] text-center">AXZRON</h2>
                <h2 className="relative text-white text-center" style={{
                  textShadow:
                    '0 0 5px hsl(0 0% 100% / 0.2), 0 0 10px hsl(0 0% 100% / 0.1)'
                }}>AXZRON</h2>
                <h2 className="absolute top-0 left-0 w-full h-full text-white/20 translate-y-[75%] text-center">AXZRON</h2>
                <h2 className="absolute top-0 left-0 w-full h-full text-white/10 translate-y-[150%] text-center">AXZRON</h2>
             </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Axzron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
