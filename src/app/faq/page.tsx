import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FAQSection from '@/components/sections/FAQSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ - Summit Automation | Frequently Asked Questions",
  description: "Get answers to common questions about Summit's custom business automation services. Learn about our API integrations, AI agents, voice bots, chatbots, workflow automation, and tailored business solutions.",
  keywords: "Summit Automation FAQ, custom automation questions, API integration help, workflow automation, AI agents, voice bots, chatbots, custom business solutions, automation consulting",
  openGraph: {
    title: "FAQ - Summit Automation",
    description: "Get answers to common questions about Summit's custom business automation services including AI agents and advanced workflows.",
    url: "https://summitautomation.io/faq",
    type: "website"
  },
  alternates: {
    canonical: "https://summitautomation.io/faq"
  }
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Breadcrumb Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://summitautomation.io"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "FAQ",
                "item": "https://summitautomation.io/faq"
              }
            ]
          })
        }}
      />

      <Header scrolled={true} />
      
      <main className="pt-24 pb-0">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </nav>
        </div>
        
        {/* Use the existing FAQSection component but remove the outer padding */}
        <div className="pb-16">
          <FAQSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}