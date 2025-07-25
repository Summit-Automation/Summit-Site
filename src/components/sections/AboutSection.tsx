'use client';

import React from 'react';
import TechCard from '@/components/ui/TechCard';

const techDetails = [
    {
        title: 'Next.js + React',
        description:
            'Our frontend is blazing-fast and highly responsive, using React and the App Router from Next.js. Whether you’re on desktop or mobile, the experience just feels right.',
    },
    {
        title: 'Supabase',
        description:
            'SOC 2 Type 2 compliant. All customer data is encrypted at rest with AES-256 and in transit via TLS. We enforce Row-Level Security policies on all database access.',
    },
    {
        title: 'AI Agents',
        description:
            'We integrate intelligent LLM agents to streamline CRM tasks, automate accounting, and deliver insights tailored to the way you work.',
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-950 text-white border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Infrastructure, Built for Trust</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We’ve built Summit Automation on a rock-solid, modern tech stack to ensure speed, security,
                        and intelligence — without compromise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {techDetails.map((tech, idx) => (
                        <TechCard key={idx} title={tech.title} description={tech.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
