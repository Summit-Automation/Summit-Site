'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Summit Automation save time for small businesses?",
      answer: "Summit automates repetitive tasks like receipt processing, invoice creation, and customer follow-ups. Our AI can extract data from receipts in seconds, automatically generate professional invoices, and manage your customer relationships, saving you 20+ hours per week on administrative work."
    },
    {
      question: "What types of businesses can use Summit Automation?",
      answer: "Summit is designed for any small business that deals with paperwork and customer management. This includes consultants, freelancers, retail stores, restaurants, service providers, agencies, and more. Our platform adapts to different industries and business models."
    },
    {
      question: "How accurate is the AI receipt and invoice processing?",
      answer: "Our AI has been trained on thousands of business documents and achieves over 95% accuracy in data extraction. It can recognize vendor information, amounts, dates, and categories from photos of receipts and invoices, significantly reducing manual data entry errors."
    },
    {
      question: "Is my business data secure with Summit Automation?",
      answer: "Yes, security is our top priority. All data is encrypted at rest with AES-256 and in transit via TLS. We follow SOC 2 Type 2 compliance standards and implement strict access controls to protect your sensitive business information."
    },
    {
      question: "When will Summit Automation be available?",
      answer: "We're currently in development and will be launching our Alpha program soon. Join our waitlist to be among the first to get early access, exclusive updates, and special pricing for early adopters."
    },
    {
      question: "How much does Summit Automation cost?",
      answer: "We're developing flexible pricing plans suitable for small businesses of all sizes. Early waitlist members will get access to special pricing tiers. Join our waitlist to be notified about pricing and get exclusive early adopter benefits."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <FAQSchema faqs={faqs} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got questions? We've got answers.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Summit Automation and how it can transform your business operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-8 pb-6"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:admin@summitautomation.io"
            className="text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            Contact us directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;