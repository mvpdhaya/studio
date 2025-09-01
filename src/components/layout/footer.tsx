
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


export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#5e17eb' }} className="border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side */}
          <div className="flex-1 max-w-xl">
            <div className="flex flex-col gap-8 md:items-start items-center text-center md:text-left">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                  <Image src="/logo.png" alt="AXZRON Logo" width={28} height={28} className="h-7 w-7 text-primary rounded-full" quality={100} />
                  <span className="text-primary-foreground">AXZRON</span>
                </Link>
                <p className="text-primary-foreground/80 max-w-xs">
                  AI automation, agents, and chatbots for business success
                </p>
              </div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li><Link href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Axzron’s AI Services</Link></li>
                    <li><Link href="#our-process" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our process</Link></li>
                    <li><Link href="#industries" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Industries We Serve</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-4">Contact Us</h4>
                  <div className="flex space-x-4 justify-center md:justify-start">
                    <Link href="https://www.linkedin.com/company/axzron/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      <XLogo />
                    </Link>
                    <Link href="mailto:axzron.ai@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
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
                <h2 className="relative text-primary-foreground animate-neon-glow text-center">AXZRON</h2>
                <h2 className="absolute top-0 left-0 w-full h-full text-white/20 translate-y-[75%] text-center">AXZRON</h2>
                <h2 className="absolute top-0 left-0 w-full h-full text-white/10 translate-y-[150%] text-center">AXZRON</h2>
             </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Axzron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
