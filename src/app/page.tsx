'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BlogSection from '@/components/sections/BlogSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import WaitlistSection from '@/components/sections/WaitlistSection';
import ChatWidget from '@/components/ui/ChatWidget';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Product Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Summit Automation",
            "description": "AI-powered business automation platform for businesses of all sizes. Automate CRM, invoicing, and business processes to save time and grow faster.",
            "brand": {
              "@type": "Brand",
              "name": "Summit Automation"
            },
            "category": "Business Software",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/PreOrder",
              "description": "Join waitlist for early access"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "1",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      
      <Header scrolled={scrolled} />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BlogSection />
      <WaitlistSection />
      <Footer />
      
      {/* Flowise Chat Widget */}
      <ChatWidget />
    </div>
  );
}