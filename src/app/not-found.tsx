import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Summit Automation',
  description: 'The page you are looking for could not be found. Return to Summit Automation homepage or explore our blog articles.',
  robots: 'noindex, follow',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary">
                Summit Automation
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center px-6 pt-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <Link 
              href="/blog"
              className="bg-muted text-muted-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted/80 transition-colors inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Visit Blog
            </Link>
          </div>
          
          <div className="mt-12 bg-muted/20 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Popular Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary hover:text-primary/80 underline">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary hover:text-primary/80 underline">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary hover:text-primary/80 underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <footer className="bg-card text-muted-foreground py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Summit Automation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}