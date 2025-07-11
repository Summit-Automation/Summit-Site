'use client';

import React from 'react';
import { Check } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Summit works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to transform how you run your business.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              step: "01",
              title: "Connect your data",
              description: "Import your existing contacts or start fresh. Summit's AI learns your business patterns and sets everything up automatically.",
              highlight: "Works with existing tools"
            },
            {
              step: "02", 
              title: "Let AI do the work",
              description: "Take photos of receipts, and Summit extracts all the data. Our AI finds new leads and tracks client interactions automatically.",
              highlight: "Zero manual data entry"
            },
            {
              step: "03",
              title: "Focus on your business",
              description: "Get real-time insights into your finances, follow up with leads automatically, and spend time on what matters most - growing your business.",
              highlight: "More time for what matters"
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-blue-600 text-white rounded-lg p-4 font-bold text-xl min-w-16 text-center">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Check className="w-4 h-4 mr-1" />
                  {step.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;