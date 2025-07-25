// File: src/components/sections/HeroSection.tsx
'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden" aria-label="Hero section">
      {/* Clean background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_70%)]"></div>
      </div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-blue-200 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-150 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Currently in development
            <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Stop drowning in paperwork.<br />
            <span className="text-blue-600">Start growing your business.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Summit automates the boring stuff so businesses can focus on what they do best. 
            AI-powered CRM, invoicing, and custom automation tools that actually work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="#waitlist" 
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Join the waitlist
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Clean stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Hours saved weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">AI assistance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Custom</div>
              <div className="text-gray-600">Automation solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;