'use client';

import React from 'react';
import { LogIn, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MobileMenu = () => {
    const handleLogin = () => {
        // Redirect to dashboard subdomain
        window.location.href = 'https://dashboard.summitautomation.io';
    };

    return (
        <div className="md:hidden">
            {/* Backdrop overlay - positioned below header */}
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" style={{ top: '80px' }} />
            
            {/* Menu content */}
            <div 
                className="relative bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl z-45"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                }}
            >
                <div className="px-6 py-6 space-y-1">
                    {/* Navigation Links */}
                    {[
                        { label: 'Features', href: '/#features' }, 
                        { label: 'Services', href: '/services' },
                        { label: 'How It Works', href: '/#how-it-works' }, 
                        { label: 'Blog', href: '/#blog' },
                        { label: 'FAQ', href: '/faq' }
                    ].map(({ label, href }) => (
                        href.startsWith('/') ? (
                            <Link
                                key={label}
                                href={href}
                                className="group flex items-center justify-between text-gray-700 hover:text-blue-600 text-base font-medium px-4 py-3 rounded-xl hover:bg-blue-50/80 transition-all duration-200 border border-transparent hover:border-blue-100"
                            >
                                <span>{label}</span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200" />
                            </Link>
                        ) : (
                            <a
                                key={label}
                                href={href}
                                className="group flex items-center justify-between text-gray-700 hover:text-blue-600 text-base font-medium px-4 py-3 rounded-xl hover:bg-blue-50/80 transition-all duration-200 border border-transparent hover:border-blue-100"
                            >
                                <span>{label}</span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200" />
                            </a>
                        )
                    ))}

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="group flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-base font-medium px-4 py-3 rounded-xl hover:bg-blue-50/80 transition-all duration-200 border border-transparent hover:border-blue-100"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 rounded-lg p-2 group-hover:bg-blue-200 transition-colors duration-200">
                                <LogIn className="w-4 h-4 text-blue-600" />
                            </div>
                            <span>Login</span>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200" />
                    </button>

                    {/* Get Started Button */}
                    <div className="pt-4">
                        <a
                            href="#contact"
                            className="group flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-base px-6 py-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-500/20"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </a>
                    </div>
                </div>
                
                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
            </div>
        </div>
    );
};

export default MobileMenu;