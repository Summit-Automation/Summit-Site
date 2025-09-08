// File: src/components/sections/ContactSection.tsx
'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, MessageCircle, Phone } from 'lucide-react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !message) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setEmail('');
      setMessage('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-24 px-6 bg-gray-900 text-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-12">
            <div className="bg-blue-900/20 rounded-full p-4 w-fit mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Message Sent!</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We&apos;ve received your message and will get back to you within 24 hours. Whether you&apos;re interested in our automation platform or custom web development services, we&apos;re excited to help grow your business.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors"
            >
              Send another message?
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Get in touch to discuss how we can help streamline your business operations or build your next website.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <form onSubmit={handleSubmit} className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
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
              
              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your business needs..."
                  rows={4}
                  className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
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
          </form>

          <div className="space-y-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <p className="text-gray-300 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  clientservices@summitautomation.io
                </p>
                <p className="text-gray-300 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  Available for consultation
                </p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">What can we help with?</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Business automation platform demo</li>
                <li>• Custom website development</li>
                <li>• Web hosting & maintenance</li>
                <li>• Business process optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;