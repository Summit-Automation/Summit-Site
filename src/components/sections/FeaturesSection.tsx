// File: src/components/sections/FeaturesSection.tsx
'use client';

import React, { memo } from 'react';
import { Check, Users, Zap, FileText, Clock, BarChart3, Package, PieChart } from 'lucide-react';

// Move features array outside component to prevent recreation on every render
const FEATURES_DATA = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Custom API Integrations",
    description: "Connect your existing tools and systems seamlessly. We build custom integrations that allow your software to communicate and share data automatically, eliminating manual data entry.",
    features: [
      "Connect any software or platform",
      "Bi-directional data synchronization",
      "Real-time automation triggers",
      "Legacy system modernization"
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "AI Agents & Voice Bots",
    description: "Deploy intelligent AI agents that handle customer interactions, answer questions, and automate communications. From chatbots to voice agents, we build conversational AI tailored to your business.",
    features: [
      "Custom chatbots for websites",
      "Voice agents for phone systems",
      "Multi-channel messaging automation",
      "Natural language understanding"
    ]
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Intelligent Document Processing",
    description: "Automate document handling with AI. From invoice processing to data extraction, we build systems that understand your documents and automate the tedious work.",
    features: [
      "AI-powered data extraction",
      "Automatic categorization & filing",
      "Custom validation rules",
      "Multi-format document support"
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Workflow Automation",
    description: "Build sophisticated automated workflows that handle complex business logic. From multi-step approval chains to conditional routing, we create intelligent systems that adapt to your needs.",
    features: [
      "Complex multi-step workflows",
      "Conditional logic & decision trees",
      "Automated notifications & alerts",
      "Exception handling & escalation"
    ]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Task & Process Automation",
    description: "Eliminate repetitive manual tasks. We identify time-consuming processes in your workflow and build automation solutions that handle them automatically.",
    features: [
      "Scheduled task automation",
      "Event-driven automation triggers",
      "Data processing pipelines",
      "Error handling & recovery"
    ]
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Custom Business Tools",
    description: "Need a specific tool that doesn't exist? We build custom applications tailored to your exact requirements, designed to solve your unique business challenges.",
    features: [
      "Built for your specific needs",
      "Integrates with existing systems",
      "Scalable and maintainable",
      "Ongoing support & updates"
    ]
  }
] as const;

// Additional features data
const ADDITIONAL_FEATURES_DATA = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Development",
    description: "Fast turnaround times without sacrificing quality or customization."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Ongoing Support",
    description: "Continuous maintenance and updates to keep your automation running smoothly."
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Scalable Solutions",
    description: "Systems that grow with your business and adapt to changing needs."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Tailored Training",
    description: "We ensure your team knows how to use and maintain the systems we build."
  }
] as const;

// Type for feature data
type FeatureData = {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
};

// Memoized feature card component to prevent unnecessary re-renders
const FeatureCard = memo(({ feature }: { feature: FeatureData }) => (
  <div className="relative group transform transition-all duration-300 hover:scale-[1.02]">
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
          <li key={`${feature.title}-feature-${idx}`} className="flex items-start">
            <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-muted-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
));

// Type for additional feature data
type AdditionalFeatureData = {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
};

// Memoized additional feature item
const AdditionalFeatureItem = memo(({ item }: { item: AdditionalFeatureData }) => (
  <div className="text-center">
    <div className="bg-muted/20 rounded-xl p-4 w-fit mx-auto mb-4">
      <div className="text-primary">
        {item.icon}
      </div>
    </div>
    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
  </div>
));

const FeaturesSection = memo(() => {
  return (
    <section id="features" className="section-flow section-primary py-32 px-6" aria-label="Features">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>


      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-700/50 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Custom Automation Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Custom automation solutions built for your business
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We create tailored automation systems that integrate with your existing tools, optimize your workflows, and eliminate repetitive tasks. Every solution is designed specifically for your unique business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        {/* Additional features grid */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {ADDITIONAL_FEATURES_DATA.map((item) => (
            <AdditionalFeatureItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
});

// Add display names for better debugging
FeatureCard.displayName = 'FeatureCard';
AdditionalFeatureItem.displayName = 'AdditionalFeatureItem';
FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;