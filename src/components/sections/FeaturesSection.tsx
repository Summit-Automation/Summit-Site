// File: src/components/sections/FeaturesSection.tsx
'use client';

import React from 'react';
import { Check, Users, Zap, FileText, Search, Camera, Clock, Target } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-white" aria-label="Features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your new AI workforce, built for your business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ever wished your employees could work 24/7? Our AI agents do exactly that. Whether you get a late-night quote request or want to get ahead on your outreach, our agents are always there to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {[
            {
              icon: <FileText className="w-8 h-8" />,
              title: "AI Receipt & Invoice Data Extractor",
              description: "Take a photo of any receipt or invoice. Our AI instantly extracts vendor info, amounts, dates, and categorizes expenses. No more manual data entry.",
              features: [
                "Instant photo-to-data conversion", 
                "Automatic expense categorization", 
                "Vendor contact extraction", 
                "Receipt storage & organization"
              ]
            },
            {
              icon: <Search className="w-8 h-8" />,
              title: "AI Lead Generation Tool",
              description: "Find new leads with ease. Our AI scans relevant sources to identify potential clients and business opportunities in your industry.",
              features: [
                "Industry-specific lead discovery", 
                "Contact information extraction", 
                "Automated lead scoring", 
                "Opportunity tracking"
              ]
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Built-in CRM for Client Management",
              description: "Track every conversation, follow-up, and opportunity in one organized place. Never lose track of a potential client or forget a follow-up again.",
              features: [
                "Contact & conversation history", 
                "Automated follow-up reminders", 
                "Project pipeline tracking", 
                "Client communication tools"
              ]
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Custom AI Automations",
              description: "Get agents tailored specifically to your business needs. From intelligent customer support to smart internal ops, we build automations that fit your business—seamlessly and scalably.",
              features: [
                "Personalized to your systems", 
                "Built with the latest AI models", 
                "Trained on your data", 
                "Always on, always learning"
              ]
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 text-blue-600 rounded-lg p-4 w-fit mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional features grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Camera className="w-6 h-6" />,
              title: "Mobile-First Design",
              description: "Capture receipts, update leads, and manage your business from anywhere."
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Real-Time Updates",
              description: "See your business data update instantly across all your devices."
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "Smart Insights",
              description: "Get actionable recommendations to grow your business faster."
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 rounded-xl p-4 w-fit mx-auto mb-4">
                <div className="text-blue-600">
                  {item.icon}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;