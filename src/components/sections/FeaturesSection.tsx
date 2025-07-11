'use client';

import React from 'react';
import { Check, Users, Zap, FileText, Search } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powered by AI, built for your business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop manually entering data. Let Summit&apos;s AI handle the paperwork while you focus on growing your business. Plus custom automation bots tailored to your specific workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: <FileText className="w-8 h-8" />,
              title: "AI Receipt & Invoice Data Extractor",
              description: "Take a photo of any receipt or invoice. Our AI instantly extracts vendor info, amounts, dates, and categorizes expenses. No more manual data entry.",
              features: ["Instant photo-to-data conversion", "Automatic expense categorization", "Vendor contact extraction", "Receipt storage & organization"]
            },
            {
              icon: <Search className="w-8 h-8" />,
              title: "AI Lead Generation Tool",
              description: "Find new opportunities automatically. Our AI scans relevant sources to identify potential clients and business opportunities in your industry.",
              features: ["Industry-specific lead discovery", "Contact information extraction", "Automated lead scoring", "Opportunity tracking"]
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Built-in CRM for Client Management",
              description: "Track every conversation, follow-up, and opportunity in one organized place. Never lose track of a potential client or forget a follow-up again.",
              features: ["Contact & conversation history", "Automated follow-up reminders", "Project pipeline tracking", "Client communication tools"]
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Custom AI Automations",
              description: "Get bots tailored specifically to your business needs. From quote generators that pull from your templates to custom workflow automation - we build what you need.",
              features: ["Quote generator bots", "Template-based automation", "Custom workflow bots", "Business-specific solutions"]
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="bg-blue-100 text-blue-600 rounded-lg p-4 w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;