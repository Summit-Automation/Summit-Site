'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';
import { Bot, Code, Zap, CheckCircle, CreditCard, MessageCircle, Users, Layout, Code2, Smartphone, Settings } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: "automation",
      category: "Custom Business Automation",
      tagline: "Tailored Solutions For Your Unique Workflow",
      description: "We build custom automation solutions designed specifically for your business. Whether you need to streamline existing processes, integrate disparate systems, or build entirely new workflows—we create solutions that fit your exact needs.",
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      pricing: "Custom Pricing",
      pricingDescription: "Contact us for a personalized consultation and quote based on your specific automation needs",
      highlight: true,
      features: [
        {
          title: "Process Automation & Integration",
          description: "Connect your existing tools and automate repetitive tasks",
          icon: <Zap className="w-6 h-6" />,
          details: [
            "Custom API integrations between your existing tools",
            "Automated workflows that eliminate manual data entry",
            "Business process optimization and streamlining",
            "Legacy system modernization and integration"
          ]
        },
        {
          title: "AI-Powered Custom Solutions",
          description: "Intelligent automation built for your specific use cases",
          icon: <Bot className="w-6 h-6" />,
          details: [
            "Custom AI agents for document processing",
            "Intelligent data extraction and categorization",
            "Automated decision-making systems",
            "Natural language processing for customer interactions"
          ]
        },
        {
          title: "AI Agents & Chatbots",
          description: "Intelligent conversational AI for customer interactions",
          icon: <Users className="w-6 h-6" />,
          details: [
            "Custom chatbots for your website or app",
            "Voice agents for phone automation",
            "Multi-channel messaging (SMS, email, chat)",
            "Natural language processing and understanding"
          ]
        },
        {
          title: "Workflow Optimization",
          description: "Streamline operations and eliminate bottlenecks",
          icon: <Settings className="w-6 h-6" />,
          details: [
            "Custom workflow design and implementation",
            "Team collaboration and approval systems",
            "Notification and alert automation",
            "Task scheduling and resource management"
          ]
        }
      ]
    },
    {
      id: "web-development",
      category: "Custom Website Development",
      tagline: "Professional Websites That Drive Results",
      description: "From simple business sites to complex web applications, we build websites that look great and perform even better. Hosting options available for all projects.",
      icon: <Code className="w-12 h-12 text-green-500" />,
      pricing: "Starting at $500",
      pricingDescription: "Static sites from $500, Dynamic React applications from $1,250. Hosting available starting at $10/month.",
      highlight: false,
      features: [
        {
          title: "Static HTML/CSS Websites",
          description: "Fast, secure, and search engine optimized websites",
          icon: <Layout className="w-6 h-6" />,
          details: [
            "Professional responsive design",
            "Lightning-fast loading speeds",
            "SEO-optimized structure and content",
            "Contact forms and basic interactions"
          ]
        },
        {
          title: "Dynamic React Applications",
          description: "Interactive web applications built with modern technology",
          icon: <Code2 className="w-6 h-6" />,
          details: [
            "Custom user interfaces and interactions",
            "Database integration and user accounts",
            "Real-time features and notifications",
            "API integrations and third-party services"
          ]
        },
        {
          title: "Mobile-Responsive Design",
          description: "Websites that work perfectly on all devices",
          icon: <Smartphone className="w-6 h-6" />,
          details: [
            "Mobile-first design approach",
            "Touch-friendly navigation and interactions",
            "Optimized performance on all devices",
            "Cross-browser compatibility testing"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Services - Summit Automation",
            "description": "Custom business automation and professional web development services tailored to your unique business needs. Transform your operations with solutions built specifically for you.",
            "url": "https://summitautomation.io/services"
          })
        }}
      />

      <Header scrolled={isClient ? scrolled : false} />

      {/* Hero Section */}
      <section className="section-flow section-hero pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/3 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-slate-700/50 backdrop-blur-sm shadow-lg">
            <Zap className="w-4 h-4 mr-2" />
            Complete Business Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-8 leading-tight">
            Services That <span className="text-blue-600">Transform</span> Your Business
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            From custom business automation to professional web development, we create tailored solutions designed specifically for your business needs and workflows.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-flow py-32 px-6 relative ${index % 2 === 0 ? 'section-primary' : 'section-alternate'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Service Overview */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2 lg:col-start-8' : 'lg:col-start-1'}`}>
                {/* Hero Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-600/10 rounded-2xl lg:rounded-3xl blur-lg lg:blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 w-fit border border-blue-500/30 backdrop-blur-sm">
                    {React.cloneElement(service.icon, { className: "w-12 h-12 lg:w-16 lg:h-16 text-blue-400" })}
                  </div>
                </div>

                {/* Typography */}
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 mb-3 leading-tight">
                      {service.category}
                    </h2>
                    <div className="w-16 sm:w-20 lg:w-24 h-0.5 lg:h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mb-4"></div>
                    <p className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-semibold mb-4">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing Card */}
                <div className="mt-6 lg:mt-8 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/15 rounded-2xl lg:rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-2xl lg:rounded-3xl border border-slate-700/50 group-hover:border-blue-500/50 backdrop-blur-xl shadow-xl transition-all duration-300">
                    <div className="p-6 lg:p-8">
                      <div className="flex items-start gap-4 lg:gap-6">
                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-3 border border-blue-500/30">
                          <CreditCard className="w-6 h-6 lg:w-8 lg:h-8 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                            {service.pricing}
                          </h3>
                          <p className="text-slate-300 leading-relaxed">
                            {service.pricingDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Details - Clean Grid */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-6'} mt-8 lg:mt-0`}>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="group">
                      <div className="h-full bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-xl border border-slate-700/50 group-hover:border-slate-600/70 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <div className="p-6 h-full flex flex-col">
                          {/* Feature Icon */}
                          <div className="mb-4">
                            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-3 w-fit border border-blue-500/30">
                              {React.cloneElement(feature.icon, { className: "w-6 h-6 text-blue-400" })}
                            </div>
                          </div>

                          <div className="flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                              {feature.title}
                            </h3>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                              {feature.description}
                            </p>

                            {/* Feature details */}
                            <div className="space-y-2 mt-auto">
                              {feature.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-start gap-3">
                                  <div className="bg-green-500/20 rounded-full p-1 mt-0.5 flex-shrink-0">
                                    <CheckCircle className="w-3 h-3 text-green-400" />
                                  </div>
                                  <span className="text-slate-300 text-sm leading-relaxed">
                                    {detail}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section id="contact" className="section-flow section-final py-32 px-6 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/3 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Get in touch to discuss how our services can help streamline your operations, improve your online presence, and accelerate your growth. Email us directly or schedule a meeting to get started.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ring-2 ring-blue-500/20 hover:ring-blue-500/40"
          >
            <MessageCircle className="w-5 h-5" />
            Email Us or Schedule a Meeting
          </Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}