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
        className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative"
      >
        {/* Sophisticated background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/3 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

        
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="relative group">
            {/* Professional card with texture and depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
            
            {/* Enhanced border treatment */}
            <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
            
            {/* Content container */}
            <div className="relative p-12 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-full p-4 w-fit mx-auto mb-6 ring-2 ring-emerald-500/20 shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-400" />
            </div>
            <h2 className="text-4xl font-bold text-slate-50 mb-6">Message Sent!</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
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
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative"
    >
      {/* Sophisticated background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-50">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Get in touch to discuss how we can help streamline your business operations or build your next website.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <form onSubmit={handleSubmit} className="relative group">
            {/* Professional card with texture and depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
            
            {/* Enhanced border treatment */}
            <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
            
            {/* Content container */}
            <div className="relative p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-slate-50 mb-6 group-hover:text-white transition-colors duration-300">Send us a message</h3>
            
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-slate-800/60 text-slate-50 placeholder-slate-400/70 border border-slate-700/50 rounded-lg pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:outline-none transition-all backdrop-blur-sm"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your business needs..."
                  rows={4}
                  className="w-full bg-slate-800/60 text-slate-50 placeholder-slate-400/70 border border-slate-700/50 rounded-lg pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:outline-none transition-all resize-none backdrop-blur-sm"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-600/50 disabled:to-blue-700/50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 ring-2 ring-blue-500/20 hover:ring-blue-500/40"
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
            </div>
            
            {error && (
              <div className="relative mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-lg border border-red-500/20 shadow-inner"></div>
                <p className="relative text-red-400 text-sm px-4 py-2 backdrop-blur-sm">
                  {error}
                </p>
              </div>
            )}
          </form>

          <div className="space-y-6">
            <div className="relative group">
              {/* Professional card with texture and depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
              
              {/* Enhanced border treatment */}
              <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
              
              {/* Content container */}
              <div className="relative p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-slate-50 mb-4 group-hover:text-white transition-colors duration-300">Quick Contact</h3>
              <div className="space-y-3">
                <p className="text-slate-300 flex items-center gap-3 group/item hover:text-slate-200 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-blue-400" />
                  clientservices@summitautomation.io
                </p>
                <p className="text-slate-300 flex items-center gap-3 group/item hover:text-slate-200 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-blue-400" />
                  Available for consultation
                </p>
              </div>
              </div>
            </div>

            <div className="relative group">
              {/* Professional card with texture and depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
              
              {/* Enhanced border treatment */}
              <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
              
              {/* Content container */}
              <div className="relative p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-slate-50 mb-4 group-hover:text-white transition-colors duration-300">What can we help with?</h3>
              <ul className="text-slate-300 space-y-2">
                <li className="hover:text-slate-200 transition-colors duration-200">• Business automation platform demo</li>
                <li className="hover:text-slate-200 transition-colors duration-200">• Custom website development</li>
                <li className="hover:text-slate-200 transition-colors duration-200">• Web hosting & maintenance</li>
                <li className="hover:text-slate-200 transition-colors duration-200">• Business process optimization</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;