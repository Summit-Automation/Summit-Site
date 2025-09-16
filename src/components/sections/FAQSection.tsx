'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does Summit include?",
      answer: "Summit is a complete business management suite that includes: real-time business analytics dashboard, AI-powered bookkeeping and expense tracking, smart CRM with lead generation, inventory management with automated alerts, mileage tracking for tax deductions, and multi-user team collaboration. Everything you need to run your business in one integrated platform."
    },
    {
      question: "What types of businesses can use Summit?",
      answer: "Summit works for any business that manages customers, tracks expenses, or handles inventory—from solo consultants and freelancers to growing teams and established companies. Whether you're in professional services, retail, hospitality, or any other industry, Summit adapts to your specific business needs."
    },
    {
      question: "How does the AI automation actually work?",
      answer: "Summit's AI handles the time-consuming tasks automatically: snap a photo of any receipt and it extracts all the data instantly, generates leads from your industry sources, creates follow-up reminders for customers, predicts inventory needs, and provides business insights from your data. It's trained on thousands of business documents and achieves over 95% accuracy."
    },
    {
      question: "Can multiple team members use Summit?",
      answer: "Yes, Summit supports multi-user access with role-based permissions. You can give team members access to specific modules (like inventory or customer management) while maintaining control over financial data and sensitive information. Perfect for growing businesses that need team collaboration."
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. All data is encrypted at rest with AES-256 and in transit via TLS. We follow SOC 2 Type 2 compliance standards and implement strict access controls. Your business data stays private and secure, with regular security audits and monitoring."
    },
    {
      question: "When can I start using Summit?",
      answer: "We're launching our Early Access program soon for select businesses. Early Access participants get free access during testing, direct input into product development, and priority pricing when we launch. Join our waitlist to secure your spot."
    },
    {
      question: "Does Summit integrate with other tools?",
      answer: "Summit is designed to be your central business hub, reducing the need for multiple disconnected tools. We're building key integrations based on Early Access feedback. The goal is to have everything you need in one place, but we understand some businesses have specific tool requirements."
    },
    {
      question: "How is this different from other business software?",
      answer: "Most business tools solve one problem at a time—separate CRM, separate accounting, separate inventory. Summit brings everything together with AI that learns your business patterns. Instead of switching between multiple apps and manually connecting data, you get one integrated system that works seamlessly."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-muted/20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-muted/50 text-primary/80 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Got questions? We&apos;ve got answers.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Summit and how our complete business management suite can transform your operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Professional card with texture and depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
              
              {/* Enhanced border treatment */}
              <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
              
              {/* Content container */}
              <div className="relative backdrop-blur-sm">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-8 pb-6"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:admin@summitautomation.io"
            className="text-primary hover:text-primary/80 font-semibold underline"
          >
            Contact us directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;