'use client';

import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';
import {
    BarChart3,
    Clock,
    Users,
    Smartphone,
    TrendingUp,
    Zap,
} from 'lucide-react';

const features = [
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: 'Smart Job Tracking',
        description: 'Track every project from estimate to completion with AI that learns your workflow.',
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: 'Automated Invoicing',
        description: 'Capture time, materials, and expenses automatically while you work.',
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: 'Client Relationship Manager',
        description: 'Pipeline tools, intelligent reminders, and follow-up tracking built in.',
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'Mobile-First Design',
        description: 'Update progress, capture photos, and chat with clients on the job site.',
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: 'Business Intelligence',
        description: 'Track profit, seasonality, and trends with actionable insights.',
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: 'No-Nonsense Setup',
        description: 'Import your data, customize your workflow, and launch in minutes.',
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 bg-gray-950 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Built for the Way You Actually Work
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Summit Automation helps your team work smarter by automating repetitive workflows using
                        reliable, explainable AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
