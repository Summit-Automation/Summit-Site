// File: src/components/sections/ServicesSection.tsx
'use client';

import React from 'react';
import { Bot, Code, Server, Zap, Globe, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      category: "Business Automation Platform",
      description: "Our flagship product - complete business management suite",
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      features: [
        "AI-powered CRM system",
        "Automated accounting & invoicing", 
        "Smart inventory tracking",
        "Mileage logging & expense tracking",
        "Real-time business analytics",
        "24/7 AI business assistant"
      ],
      pricing: "Contact for demo & pricing",
      highlight: true
    },
    {
      category: "Custom Website Development",
      description: "Professional websites tailored to your business needs",
      icon: <Code className="w-8 h-8 text-green-500" />,
      features: [
        "HTML/CSS static websites",
        "React dynamic applications", 
        "Mobile-responsive design",
        "SEO optimization included",
        "Custom functionality",
        "Professional design"
      ],
      pricing: "Starting at $500 (static) / $1,250 (React)",
      highlight: false
    },
    {
      category: "Web Hosting & Maintenance",
      description: "Reliable hosting with optional technical support",
      icon: <Server className="w-8 h-8 text-purple-500" />,
      features: [
        "Fast, secure hosting",
        "SSL certificates included",
        "Regular backups",
        "99.9% uptime guarantee",
        "Basic server maintenance option",
        "Technical support available"
      ],
      pricing: "$10/month basic • $30/month with maintenance",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Sophisticated background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            From cutting-edge business automation to custom web development, we help businesses of all sizes streamline operations and establish a strong online presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative group transform transition-all duration-300 hover:scale-105 ${
                service.highlight ? 'hover:scale-110' : ''
              }`}
            >
              {/* Ultra-sophisticated card with premium texture layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 to-slate-800/65 rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.06),transparent_65%)] rounded-2xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)] rounded-2xl"></div>
              
              {/* Premium multi-layer border system */}
              <div className={`absolute inset-0 rounded-2xl border-2 group-hover:border-slate-600/75 transition-all duration-500 shadow-inner ${
                service.highlight ? 'border-blue-500/60 group-hover:border-blue-400/80' : 'border-slate-700/60'
              }`}></div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/8 group-hover:ring-white/12 transition-all duration-300"></div>
              <div className={`absolute inset-0 rounded-2xl ring-1 transition-all duration-300 ${
                service.highlight ? 'ring-blue-500/30 group-hover:ring-blue-400/40' : 'ring-slate-600/20 group-hover:ring-blue-500/25'
              }`}></div>
              <div className="absolute inset-1 rounded-[14px] border border-slate-800/30 shadow-sm"></div>
              
              {/* Content container */}
              <div className="relative p-8 backdrop-blur-md">
              
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg ring-2 ring-blue-500/20">
                    <Zap className="w-4 h-4" />
                    Flagship Product
                  </div>
                </div>
              )}
              
              <div className="mb-6 relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full p-4 w-fit mb-4">
                  {React.cloneElement(service.icon, { className: "w-8 h-8 text-blue-400" })}
                </div>
                <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-white transition-colors duration-300">
                  {service.category}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mb-8 relative">
                <h4 className="font-semibold text-slate-50 mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  What&apos;s Included
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-300 flex items-start gap-2 group/item">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="group-hover/item:text-slate-200 transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-700/40 relative">
                <div className="text-center">
                  <p className="text-lg font-semibold text-slate-50 mb-4">
                    {service.pricing}
                  </p>
                  <a 
                    href={`/services#${index === 0 ? 'automation' : index === 1 ? 'web-development' : 'hosting'}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 relative ${
                      service.highlight 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl ring-2 ring-blue-500/20 hover:ring-blue-500/40' 
                        : 'bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-slate-200 hover:from-slate-700/60 hover:to-slate-600/40 hover:text-white border border-slate-600/50 backdrop-blur-sm'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    Learn More
                  </a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Every business is unique. Whether you need a custom automation solution, specialized web application, or hybrid approach combining multiple services, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Globe className="w-5 h-5" />
                View All Services
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-blue-300"
              >
                <Bot className="w-5 h-5" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;