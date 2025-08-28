import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side */}
          <div className="flex-1 max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                  <Image src="/logo.png" alt="Axzron Logo" width={28} height={28} className="h-7 w-7 text-primary" />
                  <span className="text-foreground">Axzron</span>
                </Link>
                <p className="text-foreground/80 max-w-xs">
                  AI automation, agents, and chatbots for business success
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Axzron’s AI Services</Link></li>
                  <li><Link href="#our-process" className="text-foreground/80 hover:text-foreground transition-colors">Our process</Link></li>
                  <li><Link href="#industries" className="text-foreground/80 hover:text-foreground transition-colors">Industries</Link></li>
                </ul>
              </div>

              <div className="sm:col-span-2">
                 <h4 className="font-semibold text-foreground mb-4">Address</h4>
                 <p className="text-foreground/80">
                   30 N Gould St, Suite R,
                   <br />
                   Sheridan, WY 82801,
                   <br />
                   United States.
                 </p>
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="relative flex-1 flex items-center justify-center min-h-[150px] md:min-h-0">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative text-7xl md:text-8xl lg:text-9xl font-extrabold whitespace-nowrap">
                    <span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.2)] animate-move" style={{ animationDelay: '0s' }}>AXZRON</span>
                    <span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.2)] animate-move" style={{ animationDelay: '0.3s' }}>AXZRON</span>
                    <span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.2)] animate-move" style={{ animationDelay: '0.6s' }}>AXZRON</span>
                    <span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.2)] animate-move" style={{ animationDelay: '0.9s' }}>AXZRON</span>
                    <h2 className="relative text-foreground [-webkit-text-stroke:0]">AXZRON</h2>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Axzron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
