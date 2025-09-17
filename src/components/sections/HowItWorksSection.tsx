// File: src/components/sections/HowItWorksSection.tsx
'use client';

import React from 'react';
import { Check, Target, ArrowDown } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative" aria-label="How it works">
      {/* Sophisticated background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.05),transparent_70%)]"></div>

      
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-700/50 backdrop-blur-sm shadow-lg">
            <Target className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Work Smarter, Grow Faster
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Three simple steps to transform how you run your business.
          </p>
        </div>

        <div className="space-y-16">
          {[
            {
              step: "01",
              title: "Schedule a consultation",
              description: "See exactly how automation can save you time and money. In a quick consultation, we'll identify your biggest pain points and build AI agents that can solve them. Real solutions. Clear next steps. Built around your workflow.",
              highlight: "Personalized for your workflow",
              features: ["Comprehensive business assessment", "Custom automation roadmap", "No-obligation consultation", "Immediate actionable insights"]
            },
            {
              step: "02", 
              title: "Let our agents do the work",
              description: "From the first lead to the final invoice, our AI agents have it covered. They're your behind-the-scenes team—keeping things organized, moving fast, and saving you hours every week. It's like having a full back office—without the overhead.",
              highlight: "From first lead to final invoice",
              features: ["24/7 automated workflows", "Intelligent data processing", "Seamless integrations", "Real-time updates"]
            },
            {
              step: "03",
              title: "Focus on your business",
              description: "No more juggling tasks or chasing follow-ups. With AI automating your workflow, you can breathe easier and focus on what you do best. Let the tech handle the tasks, you handle the vision.",
              highlight: "You lead, we handle the busywork",
              features: ["Reclaim 20+ hours weekly", "Focus on growth activities", "Better work-life balance", "Scalable operations"]
            }
          ].map((step, index) => (
            <div key={index}>
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Step number - Enhanced with Summit-UI styling */}
                <div className="flex-shrink-0">
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 font-bold text-2xl min-w-24 text-center shadow-xl ring-2 ring-blue-500/20 group hover:ring-blue-500/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                    <span className="relative">{step.step}</span>
                  </div>
                </div>
                
                {/* Content - Professional card with texture and depth */}
                <div className="flex-1 relative group">
                  {/* Background with sophisticated gradients and texture */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
                  
                  {/* Border with enhanced visual treatment */}
                  <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
                  
                  {/* Content container */}
                  <div className="relative p-8 backdrop-blur-sm">
                    <h3 className="text-3xl font-bold text-slate-50 mb-4 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                      {step.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-blue-600/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20 backdrop-blur-sm">
                        <Check className="w-4 h-4 mr-2" />
                        {step.highlight}
                      </div>
                    </div>

                    {/* Features grid with enhanced styling */}
                    <div className="grid grid-cols-2 gap-4">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center group/item">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-1 mr-3 flex-shrink-0 shadow-lg ring-2 ring-blue-500/20 group-hover/item:ring-blue-500/40 transition-all duration-200">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm group-hover/item:text-slate-200 transition-colors duration-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced arrow between steps */}
              {index < 2 && (
                <div className="flex justify-center my-8">
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-full p-3 border border-slate-700/50 shadow-lg backdrop-blur-sm group hover:from-slate-700/60 hover:to-slate-600/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full"></div>
                    <ArrowDown className="w-6 h-6 text-blue-400 relative group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;