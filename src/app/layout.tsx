import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Poppins, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// Assuming Satoshi is managed via a local font or CSS import elsewhere
// If not found, we use Inter as a high-quality fallback for the 'Satoshi' name in Tailwind
const satoshi = inter; 

export const metadata: Metadata = {
  title: 'Axzron',
  description: 'Automate smarter, faster, seamlessly with AI workflows, agents & chatbots.',
  icons: {
    icon: [
      { url: '/icon.png?v=3', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png?v=3', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${satoshi.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
