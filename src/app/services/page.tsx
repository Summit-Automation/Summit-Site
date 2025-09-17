'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';
import { Bot, Code, Server, Zap, CheckCircle, CreditCard, Mail, Phone, MessageCircle, Users, Calculator, Package, TrendingUp, Headphones, Layout, Code2, Smartphone, Settings, Shield, Activity } from 'lucide-react';
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
      category: "Business Automation Platform",
      tagline: "Your Complete Business Management Suite",
      description: "Transform your business operations with our AI-powered platform that handles everything from customer relationships to financial management.",
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      pricing: "Custom Pricing",
      pricingDescription: "Contact us for a personalized demo and quote based on your business needs",
      highlight: true,
      features: [
        {
          title: "AI-Powered CRM System",
          description: "Intelligent customer relationship management that learns from your interactions",
          icon: <Users className="w-6 h-6" />,
          details: [
            "Automated lead scoring and qualification",
            "Smart follow-up scheduling and reminders",
            "Customer interaction history and insights",
            "Predictive analytics for sales opportunities"
          ]
        },
        {
          title: "Automated Accounting & Invoicing",
          description: "Financial management that runs itself",
          icon: <Calculator className="w-6 h-6" />,
          details: [
            "Automatic expense categorization from receipts",
            "AI-powered invoice generation and sending",
            "Real-time profit & loss tracking",
            "Tax preparation assistance"
          ]
        },
        {
          title: "Smart Inventory Tracking",
          description: "Never run out of stock or overorder again",
          icon: <Package className="w-6 h-6" />,
          details: [
            "Real-time stock level monitoring",
            "Automatic reorder point calculations",
            "Supplier management and comparison",
            "Cost analysis and profit margins"
          ]
        },
        {
          title: "Real-Time Business Analytics",
          description: "Make data-driven decisions with confidence",
          icon: <TrendingUp className="w-6 h-6" />,
          details: [
            "Live business performance dashboards",
            "Revenue and growth tracking",
            "Customer acquisition metrics",
            "Profitability analysis by service/product"
          ]
        }
      ]
    },
    {
      id: "web-development",
      category: "Custom Website Development",
      tagline: "Professional Websites That Drive Results",
      description: "From simple business sites to complex web applications, we build websites that look great and perform even better.",
      icon: <Code className="w-12 h-12 text-green-500" />,
      pricing: "Starting at $500",
      pricingDescription: "Static sites from $500, Dynamic React applications from $1,250",
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
    },
    {
      id: "hosting",
      category: "Web Hosting & Maintenance",
      tagline: "Reliable Hosting with Expert Support",
      description: "Keep your website running smoothly with our secure hosting and optional technical maintenance services.",
      icon: <Server className="w-12 h-12 text-purple-500" />,
      pricing: "Starting at $10/month",
      pricingDescription: "Basic hosting $10/month, Full maintenance package $30/month",
      highlight: false,
      features: [
        {
          title: "High-Performance Hosting",
          description: "Fast, secure hosting infrastructure",
          icon: <Zap className="w-6 h-6" />,
          details: [
            "99.9% uptime guarantee with SLA",
            "SSD storage and CDN integration",
            "Automatic daily backups",
            "SSL certificates included"
          ]
        },
        {
          title: "Technical Maintenance Package",
          description: "Complete website care and optimization",
          icon: <Settings className="w-6 h-6" />,
          details: [
            "Regular software updates and patches",
            "Performance optimization and monitoring",
            "Security scans and malware removal",
            "Content updates and minor changes"
          ]
        },
        {
          title: "Backup & Recovery Services",
          description: "Comprehensive data protection",
          icon: <Shield className="w-6 h-6" />,
          details: [
            "Automated daily backups to multiple locations",
            "One-click restore functionality",
            "Version history and point-in-time recovery",
            "Disaster recovery planning"
          ]
        },
        {
          title: "Performance Monitoring",
          description: "Proactive monitoring and optimization",
          icon: <Activity className="w-6 h-6" />,
          details: [
            "24/7 uptime monitoring with alerts",
            "Page speed analysis and optimization",
            "Traffic analytics and reporting",
            "Resource usage monitoring"
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
            "description": "Professional business automation, web development, and hosting services. Transform your business operations and online presence.",
            "url": "https://summitautomation.io/services"
          })
        }}
      />

      <Header scrolled={isClient ? scrolled : false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
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
            From AI-powered business automation to custom web development and reliable hosting, we provide the complete technology stack your business needs to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="py-32 px-6 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
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
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Get in touch to discuss how our services can help streamline your operations, improve your online presence, and accelerate your growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-xl border border-slate-700/50 p-6 backdrop-blur-sm shadow-lg">
              <div className="bg-blue-900/20 rounded-full p-3 w-fit mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300 text-sm mb-3 break-all">clientservices@summitautomation.io</p>
              <a
                href="mailto:clientservices@summitautomation.io"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Send Message
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-xl border border-slate-700/50 p-6 backdrop-blur-sm shadow-lg">
              <div className="bg-green-900/20 rounded-full p-3 w-fit mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-slate-300 text-sm mb-3">Chat with our team now</p>
              <button className="text-green-400 hover:text-green-300 text-sm underline">
                Start Chat
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-xl border border-slate-700/50 p-6 backdrop-blur-sm shadow-lg">
              <div className="bg-purple-900/20 rounded-full p-3 w-fit mx-auto mb-4">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Schedule Call</h3>
              <p className="text-slate-300 text-sm mb-3">Book a consultation</p>
              <a
                href="mailto:clientservices@summitautomation.io?subject=Schedule%20Consultation&body=Hi%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20my%20business%20needs.%20Please%20let%20me%20know%20your%20availability."
                className="text-purple-400 hover:text-purple-300 text-sm underline"
              >
                Book Now
              </a>
            </div>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}