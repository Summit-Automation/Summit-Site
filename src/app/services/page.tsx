'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';
import { Bot, Code, Server, Zap, CheckCircle, CreditCard, Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    // Ensure we're on the client before setting up scroll listener
    setIsClient(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set initial scroll state
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
          details: [
            "Automated lead scoring and qualification",
            "Smart follow-up scheduling and reminders",
            "Customer interaction history and insights", 
            "Predictive analytics for sales opportunities",
            "Automated email sequences and responses"
          ]
        },
        {
          title: "Automated Accounting & Invoicing",
          description: "Financial management that runs itself",
          details: [
            "Automatic expense categorization from receipts",
            "AI-powered invoice generation and sending",
            "Real-time profit & loss tracking",
            "Tax preparation assistance",
            "Cash flow forecasting and alerts"
          ]
        },
        {
          title: "Smart Inventory Tracking",
          description: "Never run out of stock or overorder again",
          details: [
            "Real-time stock level monitoring",
            "Automatic reorder point calculations",
            "Supplier management and comparison",
            "Cost analysis and profit margins",
            "Integration with sales and accounting systems"
          ]
        },
        {
          title: "Real-Time Business Analytics",
          description: "Make data-driven decisions with confidence",
          details: [
            "Live business performance dashboards",
            "Revenue and growth tracking",
            "Customer acquisition metrics",
            "Profitability analysis by service/product",
            "Predictive business insights"
          ]
        },
        {
          title: "24/7 AI Business Assistant",
          description: "Your virtual business partner that never sleeps",
          details: [
            "Natural language business queries",
            "Automated task scheduling and reminders",
            "Business performance insights and recommendations",
            "Integration with all platform modules",
            "Voice and text interaction capabilities"
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
          details: [
            "Professional responsive design",
            "Lightning-fast loading speeds",
            "SEO-optimized structure and content",
            "Contact forms and basic interactions",
            "Content management system integration"
          ]
        },
        {
          title: "Dynamic React Applications", 
          description: "Interactive web applications built with modern technology",
          details: [
            "Custom user interfaces and interactions",
            "Database integration and user accounts",
            "Real-time features and notifications",
            "API integrations and third-party services",
            "Advanced functionality and business logic"
          ]
        },
        {
          title: "E-commerce Solutions",
          description: "Full-featured online stores that convert visitors to customers",
          details: [
            "Product catalog and inventory management",
            "Secure payment processing integration",
            "Order management and fulfillment",
            "Customer accounts and order history",
            "Analytics and conversion tracking"
          ]
        },
        {
          title: "Mobile-Responsive Design",
          description: "Websites that work perfectly on all devices",
          details: [
            "Mobile-first design approach",
            "Touch-friendly navigation and interactions",
            "Optimized performance on all devices",
            "Cross-browser compatibility testing",
            "Progressive Web App capabilities"
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
          details: [
            "99.9% uptime guarantee with SLA",
            "SSD storage and CDN integration",
            "Automatic daily backups",
            "SSL certificates included",
            "DDoS protection and security monitoring"
          ]
        },
        {
          title: "Technical Maintenance Package",
          description: "Complete website care and optimization",
          details: [
            "Regular software updates and patches",
            "Performance optimization and monitoring",
            "Security scans and malware removal",
            "Content updates and minor changes",
            "Priority technical support"
          ]
        },
        {
          title: "Backup & Recovery Services",
          description: "Comprehensive data protection",
          details: [
            "Automated daily backups to multiple locations",
            "One-click restore functionality",
            "Version history and point-in-time recovery",
            "Disaster recovery planning",
            "Data migration services"
          ]
        },
        {
          title: "Performance Monitoring",
          description: "Proactive monitoring and optimization",
          details: [
            "24/7 uptime monitoring with alerts",
            "Page speed analysis and optimization",
            "Traffic analytics and reporting",
            "Resource usage monitoring",
            "Performance recommendations"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Schema */}
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
        {/* Sophisticated background effects */}
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
          className={`py-24 px-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Service Overview */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-8">
                  
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full p-6 w-fit mb-6">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
                    {service.category}
                  </h2>
                  
                  <p className="text-xl text-blue-600 font-semibold mb-4">
                    {service.tagline}
                  </p>
                  
                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="relative group transform transition-all duration-300 hover:scale-[1.02]">
                    {/* Ultra-sophisticated dark card with premium texture layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/70 rounded-xl shadow-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)] rounded-xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)] rounded-xl"></div>
                    
                    {/* Premium multi-layer border system */}
                    <div className="absolute inset-0 rounded-xl border-2 border-gray-700/60 group-hover:border-gray-600/75 transition-all duration-500 shadow-inner"></div>
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/8 group-hover:ring-white/12 transition-all duration-300"></div>
                    <div className="absolute inset-0 rounded-xl ring-1 ring-gray-600/20 group-hover:ring-blue-500/25 transition-all duration-300"></div>
                    <div className="absolute inset-1 rounded-[10px] border border-gray-800/30 shadow-sm"></div>
                    
                    {/* Content container */}
                    <div className="relative p-6 backdrop-blur-md">
                      <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-400" />
                        {service.pricing}
                      </h3>
                      <p className="text-slate-300">{service.pricingDescription}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Details */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="relative group transform transition-all duration-300 hover:scale-[1.02]">
                      {/* Ultra-sophisticated dark card with premium texture layers */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/70 rounded-xl shadow-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent rounded-xl"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)] rounded-xl"></div>
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)] rounded-xl"></div>
                      
                      {/* Premium multi-layer border system */}
                      <div className="absolute inset-0 rounded-xl border-2 border-gray-700/60 group-hover:border-gray-600/75 transition-all duration-500 shadow-inner"></div>
                      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/8 group-hover:ring-white/12 transition-all duration-300"></div>
                      <div className="absolute inset-0 rounded-xl ring-1 ring-gray-600/20 group-hover:ring-blue-500/25 transition-all duration-300"></div>
                      <div className="absolute inset-1 rounded-[10px] border border-gray-800/30 shadow-sm"></div>
                      
                      {/* Content container */}
                      <div className="relative p-6 backdrop-blur-md">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-slate-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
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
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Get in touch to discuss how our services can help streamline your operations, improve your online presence, and accelerate your growth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative group transform transition-all duration-300 hover:scale-[1.02]">
              {/* Ultra-sophisticated dark card with premium texture layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/70 rounded-xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)] rounded-xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)] rounded-xl"></div>
              
              {/* Premium multi-layer border system */}
              <div className="absolute inset-0 rounded-xl border-2 border-gray-700/60 group-hover:border-gray-600/75 transition-all duration-500 shadow-inner"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/8 group-hover:ring-white/12 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-gray-600/20 group-hover:ring-blue-500/25 transition-all duration-300"></div>
              <div className="absolute inset-1 rounded-[10px] border border-gray-800/30 shadow-sm"></div>
              
              {/* Content container */}
              <div className="relative p-6 backdrop-blur-md">
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
            </div>
            
            <div className="relative group transform transition-all duration-300 hover:scale-[1.02]">
              {/* Ultra-sophisticated dark card with premium texture layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/70 rounded-xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)] rounded-xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)] rounded-xl"></div>
              
              {/* Premium multi-layer border system */}
              <div className="absolute inset-0 rounded-xl border-2 border-gray-700/60 group-hover:border-gray-600/75 transition-all duration-500 shadow-inner"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/8 group-hover:ring-white/12 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-gray-600/20 group-hover:ring-blue-500/25 transition-all duration-300"></div>
              <div className="absolute inset-1 rounded-[10px] border border-gray-800/30 shadow-sm"></div>
              
              {/* Content container */}
              <div className="relative p-6 backdrop-blur-md">
              <div className="bg-green-900/20 rounded-full p-3 w-fit mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-slate-300 text-sm mb-3">Chat with our team now</p>
              <button className="text-green-400 hover:text-green-300 text-sm underline">
                Start Chat
              </button>
              </div>
            </div>
            
            <div className="relative group transform transition-all duration-300 hover:scale-[1.02]">
              {/* Ultra-sophisticated dark card with premium texture layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/70 rounded-xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)] rounded-xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)] rounded-xl"></div>
              
              {/* Premium multi-layer border system */}
              <div className="absolute inset-0 rounded-xl border-2 border-gray-700/60 group-hover:border-gray-600/75 transition-all duration-500 shadow-inner"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/8 group-hover:ring-white/12 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-gray-600/20 group-hover:ring-blue-500/25 transition-all duration-300"></div>
              <div className="absolute inset-1 rounded-[10px] border border-gray-800/30 shadow-sm"></div>
              
              {/* Content container */}
              <div className="relative p-6 backdrop-blur-md">
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
      
      {/* Flowise Chat Widget */}
      <ChatWidget />
    </div>
  );
}