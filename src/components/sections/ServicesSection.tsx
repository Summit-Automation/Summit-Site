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
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From cutting-edge business automation to custom web development, we help businesses of all sizes streamline operations and establish a strong online presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                service.highlight ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Flagship Product
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <div className="bg-gray-100 rounded-full p-4 w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.category}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  What&apos;s Included
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    {service.pricing}
                  </p>
                  <a 
                    href={`/services#${index === 0 ? 'automation' : index === 1 ? 'web-development' : 'hosting'}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      service.highlight 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    Learn More
                  </a>
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