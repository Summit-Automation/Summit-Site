// File: src/components/sections/ProblemSection.tsx
'use client';

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            You didn&apos;t start a business to become a 
            <span className="text-primary"> data entry clerk</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Most business owners spend 20+ hours a week on paperwork, follow-ups, and administrative tasks. 
            That&apos;s time stolen from growing your business and serving customers.
          </p>
        </div>

        {/* Standardized ContactSection border system */}
        <div className="mb-16 relative group !block" id="problem-main-card">
          {/* Professional card with texture and depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
          
          {/* Enhanced border treatment */}
          <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
          
          {/* Content container */}
          <div className="relative p-8 backdrop-blur-sm">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-slate-50">Where Your Week Goes</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="relative group">
              {/* Professional card with texture and depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-lg shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-lg"></div>
              
              {/* Enhanced border treatment */}
              <div className="absolute inset-0 rounded-lg border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5"></div>
              
              {/* Content container */}
              <div className="relative p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-1">6h</div>
              <div className="text-sm text-primary/80">Manual data entry</div>
              </div>
            </div>
            <div className="relative group">
              {/* Professional card with texture and depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-lg shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-lg"></div>
              
              {/* Enhanced border treatment */}
              <div className="absolute inset-0 rounded-lg border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5"></div>
              
              {/* Content container */}
              <div className="relative p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-1">5h</div>
              <div className="text-sm text-primary/80">Client follow-ups</div>
              </div>
            </div>
            <div className="relative group">
              {/* Professional card with texture and depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-lg shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-lg"></div>
              
              {/* Enhanced border treatment */}
              <div className="absolute inset-0 rounded-lg border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5"></div>
              
              {/* Content container */}
              <div className="relative p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-1">4h</div>
              <div className="text-sm text-primary/80">Financial tracking</div>
              </div>
            </div>
            <div className="relative group">
              {/* Professional card with texture and depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-lg shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-lg"></div>
              
              {/* Enhanced border treatment */}
              <div className="absolute inset-0 rounded-lg border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5"></div>
              
              {/* Content container */}
              <div className="relative p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-1">5h</div>
              <div className="text-sm text-primary/80">Inventory & planning</div>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left items-center">
          <div className="relative group">
          {/* Professional card with texture and depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
          
          {/* Enhanced border treatment */}
          <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
          
          {/* Content container */}
          <div className="relative p-8 backdrop-blur-sm">
            <h3 className="font-bold text-slate-50 mb-4">Without Summit</h3>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-start">
                <span className="text-muted-foreground/50 mr-2">•</span>
                Manual expense entry and bookkeeping
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/50 mr-2">•</span>
                Clients falling through the cracks
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/50 mr-2">•</span>
                Poor business performance visibility
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/50 mr-2">•</span>
                Inventory stockouts and overstock
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/50 mr-2">•</span>
                Scattered business tools and data
              </li>
            </ul>
          </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-primary rounded-full p-4 shadow-lg">
              <ArrowRight className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <div className="relative group">
          {/* Professional card with texture and depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
          
          {/* Enhanced border treatment */}
          <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
          
          {/* Content container */}
          <div className="relative p-8 backdrop-blur-sm">
            <h3 className="font-bold text-primary mb-4">With Summit</h3>
            <ul className="text-primary/80 space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                AI-powered expense and financial tracking
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Automated lead nurturing and CRM
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Real-time business analytics dashboard
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Smart inventory and stock management
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Everything integrated in one platform
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Clean ROI section */}
        <div className="mt-16 relative group">
          {/* Professional card with texture and depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
          
          {/* Enhanced border treatment */}
          <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
          
          {/* Content container */}
          <div className="relative p-8 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">The Real Cost of Manual Work</h3>
            <p className="text-muted-foreground mb-6">
              If your time is worth $50/hour, those 20 hours of admin work represent 
              <span className="font-bold text-primary"> $1,000 per week</span> in lost revenue potential.
            </p>
            <div className="inline-flex items-center bg-background rounded-full px-6 py-3 shadow-sm border border-slate-700/40">
              <span className="text-foreground/70">That&apos;s </span>
              <span className="font-bold text-primary mx-2 text-xl">$52,000</span>
              <span className="text-foreground/70"> per year</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;