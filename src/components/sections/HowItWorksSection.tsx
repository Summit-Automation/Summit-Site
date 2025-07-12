'use client';

import React from 'react';
import { Check } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Smarter, Grow Faster
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to transform how you run your business.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              step: "01",
              title: "Schedule a consultation",
              description: "See exactly how automation can save you time and money. In a quick consultation, we’ll identify your biggest pain points and build AI agents that can solve them. Real solutions. Clear next steps. Built around your workflow.",
              highlight: "Personalized for your workflow"
            },
            {
              step: "02", 
              title: "Let our agents do the work",
              description: "From the first message to the final invoice, our AI agents have it covered. They’re your behind-the-scenes team—keeping things organized, moving fast, and saving you hours every week. It’s like having a full back office—without the overhead.",
              highlight: "From first lead to final invoice"
            },
            {
              step: "03",
              title: "Focus on your business",
              description: "No more juggling tasks or chasing follow-ups. With AI automating your workflow, you can breathe easier and focus on what you do best. Let the tech handle the tasks, you handle the vision.",
              highlight: "You lead, we handle the busywork"
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