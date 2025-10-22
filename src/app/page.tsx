'use client';

import React, { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ContactSection from '@/components/sections/ContactSection';
import ChatWidget from '@/components/ui/ChatWidget';

// Lazy load below-the-fold components for better performance
const BlogSection = lazy(() => import('@/components/sections/BlogSection'));
const HowItWorksSection = lazy(() => import('@/components/sections/HowItWorksSection'));

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const tickingRef = useRef(false);

  // Optimized scroll handler with useCallback and reduced setState calls
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const shouldBeScrolled = scrollY > 50;

    // Only update state if it actually changed to prevent unnecessary re-renders
    setScrolled(current => current !== shouldBeScrolled ? shouldBeScrolled : current);
  }, []);

  useEffect(() => {
    // Ensure we're on the client before setting up scroll listener
    setIsClient(true);

    let lastScrollY = 0;

    // Ultra-optimized throttled scroll handler
    const throttledScrollHandler = () => {
      const currentScrollY = window.scrollY;

      // Only process if scroll crosses the threshold boundary or significant distance
      const threshold = 50;
      const crossedThreshold = (lastScrollY <= threshold && currentScrollY > threshold) ||
                              (lastScrollY > threshold && currentScrollY <= threshold);

      if (crossedThreshold || Math.abs(currentScrollY - lastScrollY) > 25) {
        if (!tickingRef.current) {
          requestAnimationFrame(() => {
            handleScroll();
            tickingRef.current = false;
          });
          tickingRef.current = true;
        }
        lastScrollY = currentScrollY;
      }
    };

    // Set initial scroll state
    handleScroll();

    // Use passive event listener for better performance
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [handleScroll]);

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
            "description": "Custom business automation solutions and professional web development services. We build tailored automation systems, API integrations, advanced workflows, voice agents, chatbots, and custom applications designed specifically for your business needs.",
            "brand": {
              "@type": "Brand",
              "name": "Summit Automation"
            },
            "category": "Business Automation Services",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "description": "Contact us for custom automation and web development services"
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
            "name": "Custom Business Automation Services",
            "description": "Custom business automation and integration services including API integrations, advanced workflow automation, AI agents, voice bots, chatbots, document processing, and tailored software solutions for businesses in Pittsburgh, PA and worldwide.",
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
            "serviceType": "Custom Business Automation",
            "category": "Business Automation Services"
          })
        }}
      />
      
      <Header scrolled={isClient ? scrolled : false} />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />

      <Suspense fallback={<div className="py-32" />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<div className="py-32" />}>
        <BlogSection />
      </Suspense>

      <ContactSection />

      <Footer />

      {/* Flowise Chat Widget */}
      <ChatWidget />
    </div>
  );
}