// File: src/components/sections/WaitlistSection.tsx
'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      setError('Something went wrong. Please try again.');
      console.error('Waitlist submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="waitlist"
        className="py-24 bg-gray-900 text-white"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-12">
            <div className="bg-blue-900/20 rounded-full p-4 w-fit mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Welcome to the Future!</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              You've successfully joined our waitlist. We'll keep you updated on Summit Automation's progress and let you know when early access is available.
            </p>
            <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
              <p className="text-blue-300 font-medium">What's next?</p>
              <ul className="text-gray-300 mt-3 space-y-2 text-left">
                <li>• Exclusive updates on our development progress</li>
                <li>• Early access when we launch</li>
                <li>• Behind-the-scenes content from our team</li>
              </ul>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors"
            >
              Join another email?
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-24 bg-gray-900 text-white"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-blue-900/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-800">
            <Sparkles className="w-4 h-4 mr-2" />
            Early Access Available Soon
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Be the first to try Summit Automation. Get updates, early access, and behind-the-scenes content as we build the future of business automation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-12">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Joining...
                  </>
                ) : (
                  <>
                    Join Now
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            
            {error && (
              <p className="text-red-400 text-sm mt-4 bg-red-900/20 border border-red-800 rounded-lg px-4 py-2">
                {error}
              </p>
            )}
          </div>
        </form>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Early Access",
              description: "Be among the first to use Summit when we launch"
            },
            {
              title: "Exclusive Updates", 
              description: "Get behind-the-scenes content and development progress"
            },
            {
              title: "Special Pricing",
              description: "Early adopters get access to exclusive pricing tiers"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;