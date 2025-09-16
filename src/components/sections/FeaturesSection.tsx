// File: src/components/sections/FeaturesSection.tsx
'use client';

import React from 'react';
import { Check, Users, Zap, FileText, Camera, Clock, BarChart3, Package, Route, CreditCard, PieChart } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative" aria-label="Features">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-700/50 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Everything you need to run your business in one place
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From customer relationships to financial tracking, inventory management to business analytics—Summit handles it all with AI. Get the complete business management suite that works 24/7 so you can focus on what matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Business Dashboard & Analytics",
              description: "See your business performance at a glance. Real-time metrics, growth tracking, cash flow analysis, and actionable insights that help you make smarter decisions faster.",
              features: [
                "Real-time business metrics", 
                "Customer growth tracking", 
                "Cash flow visualization", 
                "Revenue & expense analysis"
              ]
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "AI Receipt & Expense Management",
              description: "Take a photo of any receipt or invoice. Our AI instantly extracts vendor info, amounts, dates, and categorizes expenses. Plus automated recurring payment processing.",
              features: [
                "Instant photo-to-data conversion", 
                "Automatic expense categorization", 
                "Recurring payment automation", 
                "Financial reporting & insights"
              ]
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Smart CRM & Lead Management",
              description: "Track every conversation, follow-up, and opportunity in one organized place. AI helps generate leads, draft emails, and converts prospects into customers automatically.",
              features: [
                "AI-powered lead generation", 
                "Automated follow-up reminders", 
                "Email draft generation", 
                "Customer interaction tracking"
              ]
            },
            {
              icon: <Package className="w-8 h-8" />,
              title: "Inventory & Stock Management",
              description: "Never run out of stock again. Monitor inventory levels, get alerts when supplies are low, and track product performance with intelligent inventory management.",
              features: [
                "Real-time stock monitoring", 
                "Automated low-stock alerts", 
                "Product performance tracking", 
                "Inventory reporting & analytics"
              ]
            },
            {
              icon: <Route className="w-8 h-8" />,
              title: "Mileage & Trip Tracking",
              description: "Automatically track business trips and maximize tax deductions. Perfect for any business with mobile operations, client visits, or delivery services.",
              features: [
                "Automatic trip detection", 
                "Mileage calculation & logging", 
                "Tax-ready expense reports", 
                "Business vs personal categorization"
              ]
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Multi-User Team Collaboration",
              description: "Scale your operations with team access controls. Multiple users can collaborate securely with customized permissions for different business functions and roles.",
              features: [
                "Role-based access control", 
                "Team collaboration tools", 
                "Secure data sharing", 
                "Activity tracking & permissions"
              ]
            }
          ].map((feature, index) => (
            <div key={index} className="relative group transform transition-all duration-300 hover:scale-[1.02]">
              {/* Ultra-sophisticated card with multi-layer texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 to-slate-800/65 rounded-xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_70%)] rounded-xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)] rounded-xl"></div>
              
              {/* Premium multi-layer border system */}
              <div className="absolute inset-0 rounded-xl border-2 border-slate-700/60 group-hover:border-slate-600/75 transition-all duration-500 shadow-inner"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/8 group-hover:ring-white/12 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-slate-600/20 group-hover:ring-blue-500/30 transition-all duration-300"></div>
              <div className="absolute inset-1 rounded-[10px] border border-slate-800/30 shadow-sm"></div>
              
              {/* Content container */}
              <div className="relative p-8 backdrop-blur-md">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 rounded-lg p-4 w-fit mb-6">
                  {feature.icon}
                </div>
              
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional features grid */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Camera className="w-6 h-6" />,
              title: "Mobile-First Design",
              description: "Capture receipts, update leads, and manage your business from anywhere."
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Real-Time Updates",
              description: "See your business data update instantly across all your devices."
            },
            {
              icon: <PieChart className="w-6 h-6" />,
              title: "Advanced Analytics",
              description: "Expense breakdowns, customer insights, and growth tracking."
            },
            {
              icon: <CreditCard className="w-6 h-6" />,
              title: "Payment Processing",
              description: "Automated recurring payments and seamless transaction management."
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-muted/20 rounded-xl p-4 w-fit mx-auto mb-4">
                <div className="text-primary">
                  {item.icon}
                </div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;