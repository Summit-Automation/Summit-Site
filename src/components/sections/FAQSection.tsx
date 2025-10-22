'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of automation do you build?",
      answer: "We build custom automation solutions tailored to your specific business needs. This includes API integrations between your existing tools, intelligent document processing, AI agents and chatbots, voice automation, advanced workflow automation, task automation, and entirely custom business applications. Every solution is designed from scratch to match your exact requirements."
    },
    {
      question: "Can you integrate with my existing software?",
      answer: "Yes! We specialize in connecting existing systems. Whether you're using popular platforms like Salesforce, QuickBooks, Shopify, or custom in-house software, we can build integrations that allow your tools to communicate and share data automatically. We work with APIs, databases, webhooks, and legacy systems."
    },
    {
      question: "How do you determine what to automate?",
      answer: "We start with a consultation to understand your business processes and pain points. We identify repetitive tasks, manual data entry, disconnected systems, and workflow bottlenecks. Then we create a custom automation roadmap that prioritizes high-impact improvements. You'll know exactly what we're building and why before we start."
    },
    {
      question: "What if I already have some automation in place?",
      answer: "Perfect! We can work with your existing automation and enhance it. Whether you need to extend current systems, fix issues, modernize old solutions, or add new capabilities, we'll build on what you have rather than starting from scratch. We can also optimize and improve existing automation that isn't performing well."
    },
    {
      question: "How long does it take to build custom automation?",
      answer: "Timeline varies based on complexity. Simple integrations might take 1-2 weeks, while comprehensive automation systems can take 4-8 weeks or more. We provide clear timelines during consultation and work in phases so you can start seeing benefits quickly. We prioritize delivering working solutions incrementally rather than waiting for everything to be perfect."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes. We offer ongoing support and maintenance packages to ensure your automation continues running smoothly. This includes monitoring, updates, troubleshooting, and enhancements as your business evolves. We can also train your team to manage and maintain the systems we build."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, reliable technologies based on what's best for your specific needs. This includes Python for automation and AI, JavaScript/TypeScript for web applications, cloud platforms like AWS and Supabase, and various integration tools and frameworks. We focus on building maintainable, scalable solutions using proven technologies."
    },
    {
      question: "How much does custom automation cost?",
      answer: "Pricing depends on the scope and complexity of your project. Simple integrations might start around $1,000-$2,000, while comprehensive automation systems typically range from $5,000-$20,000+. We provide transparent pricing after understanding your needs during the initial consultation. Most clients see ROI within 3-6 months through time savings alone."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="section-flow section-primary py-24 px-6 relative">
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
            Everything you need to know about our custom automation services and how we can transform your business operations.
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
          <Link
            href="/#contact"
            className="text-primary hover:text-primary/80 font-semibold underline"
          >
            Contact us or schedule a meeting
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;