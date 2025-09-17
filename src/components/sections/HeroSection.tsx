// File: src/components/sections/HeroSection.tsx
'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden" aria-label="Hero section">
      {/* Sophisticated gradient background matching Summit-UI */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-slate-700/50 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Live & continuously improving
            <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Stop drowning in paperwork.<br />
            <span className="text-primary">Start growing your business.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Summit is your complete business management suite—AI-powered CRM, automated accounting, smart inventory tracking, mileage logging, and real-time analytics. Everything you need to run your business in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-slate-200 border border-slate-600/50 px-10 py-5 rounded-xl font-semibold hover:from-slate-700/60 hover:to-slate-600/40 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center backdrop-blur-sm group"
            >
              View Services
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Clean stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Business modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Hours saved weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">AI assistance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
              <div className="text-muted-foreground">Business analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;