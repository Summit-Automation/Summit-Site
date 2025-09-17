'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BlogSection from '@/components/sections/BlogSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ContactSection from '@/components/sections/ContactSection';
import ChatWidget from '@/components/ui/ChatWidget';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure we're on the client before setting up scroll listener
    setIsClient(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              }
            ]
          })
        }}
      />

      {/* Product Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Summit Automation",
            "description": "Complete business management suite with AI-powered CRM, automated accounting, inventory tracking, mileage logging, recurring payments, and real-time analytics. Built for contractors, service providers, and growing businesses.",
            "brand": {
              "@type": "Brand",
              "name": "Summit Automation"
            },
            "category": "Business Software",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "description": "Contact us for business automation and web development services"
            }
          })
        }}
      />

      {/* Service Schema for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Business Automation Services",
            "description": "Complete business management services including AI-powered CRM, automated accounting, inventory tracking, mileage logging, payment processing, and business analytics for contractors and service businesses in Pittsburgh, PA and worldwide.",
            "provider": {
              "@type": "Organization",
              "name": "Summit Automation",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Castle",
                "addressRegion": "PA",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pittsburgh",
                "addressRegion": "PA"
              },
              {
                "@type": "State",
                "name": "Pennsylvania"
              }
            ],
            "serviceType": "Business Process Automation",
            "category": "Business Services"
          })
        }}
      />
      
      <Header scrolled={isClient ? scrolled : false} />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      
      {/* Flowise Chat Widget */}
      <ChatWidget />
    </div>
  );
}