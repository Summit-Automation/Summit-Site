'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Users, Zap, FileText, Search } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SummitDashboardPreview from '@/components/SummitDashboardPreview';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Use proper Header component but pass scrolled state */}
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Currently in development
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop drowning in paperwork.<br />
              <span className="text-blue-600">Start growing your business.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Summit automates the boring stuff so businesses can focus on what they do best. 
              AI-powered CRM, invoicing, and custom automation tools that actually work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#waitlist" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                Join the waitlist
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="relative max-w-4xl mx-auto">
            <SummitDashboardPreview />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            You didn&apos;t start a business to become a data entry clerk
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Most business owners spend 20+ hours a week on paperwork, follow-ups, and administrative tasks. 
            That&apos;s time stolen from growing your business and serving customers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-red-900 mb-2">The current way</h3>
              <ul className="text-red-700 space-y-2">
                <li>• Manual data entry from receipts</li>
                <li>• Clients fall through the cracks</li>
                <li>• No visibility into cash flow</li>
                <li>• Buried in spreadsheets</li>
              </ul>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-gray-400" />
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">The Summit way</h3>
              <ul className="text-green-700 space-y-2">
                <li>• AI extracts data automatically</li>
                <li>• Smart lead generation & tracking</li>
                <li>• Real-time financial insights</li>
                <li>• Everything in one place</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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
                title: "Custom Automation Bots",
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

      {/* How it Works */}
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

      {/* CTA Section */}
      <section id="waitlist" className="py-20 bg-blue-600 text-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to reclaim your time?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join our waitlist and be the first to access Summit when we launch. 
                Get exclusive updates on our development progress.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                />
                <button
                  onClick={handleWaitlistSubmit}
                  disabled={isSubmitting}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {isSubmitting ? 'Joining...' : 'Join waitlist'}
                </button>
              </div>
              
              <p className="text-blue-200 text-sm mt-4">
                We&apos;ll never spam you. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">You&apos;re on the list!</h2>
              <p className="text-xl text-blue-100 mb-6">
                Thanks for joining our waitlist. We&apos;ll keep you updated on Summit&apos;s progress and let you know when we&apos;re ready to launch.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-blue-200 hover:text-white underline"
              >
                Add another email?
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Use proper Footer component */}
      <Footer />
    </div>
  );
}