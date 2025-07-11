'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import AnimatedSparks from '@/components/effects/AnimatedSparks';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-800 to-blue-900 text-white pt-20 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-blue-900/10 to-transparent z-0 w-full"/>

            <AnimatedSparks />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Image src="/images/4_SVG.svg" alt="Summit Automation Logo" width={350} height={75} className="mx-auto mb-3 pt-6" priority />
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        We&apos;re Building the Future of Contractor Ops
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                        AI-powered CRM and invoicing designed for real contractors. Join our pre-release waitlist.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            Join the Waitlist <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
