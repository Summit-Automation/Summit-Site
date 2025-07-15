// File: src/components/sections/HowItWorksSection.tsx
'use client';

import React from 'react';
import { Check, Calendar, Zap, Target, ArrowDown } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Smarter, Grow Faster
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white rounded-xl p-6 font-bold text-2xl min-w-24 text-center shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-100">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {step.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      <Check className="w-4 h-4 mr-2" />
                      {step.highlight}
                    </div>
                  </div>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="bg-blue-600 rounded-full p-1 mr-3 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < 2 && (
                <div className="flex justify-center my-8">
                  <div className="bg-blue-100 rounded-full p-3">
                    <ArrowDown className="w-6 h-6 text-blue-600" />
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