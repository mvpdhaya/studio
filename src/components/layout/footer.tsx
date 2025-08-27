
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <li><Link href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="#our-process" className="text-foreground/80 hover:text-foreground transition-colors">Our process</Link></li>
              <li><Link href="#industries" className="text-foreground/80 hover:text-foreground transition-colors">Industries</Link></li>
            </ul>
          </div>

          <div>
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

        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Axzron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
