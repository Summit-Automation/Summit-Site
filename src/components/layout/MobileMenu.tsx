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
        <div className="md:hidden fixed inset-0 z-[60] isolate" style={{ top: '64px' }}>
            {/* Backdrop overlay */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-none" />

            {/* Menu content */}
            <div className="absolute top-0 left-0 right-0 bg-slate-900 border-t border-slate-700 shadow-2xl isolate">
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
                                className="group flex items-center justify-between text-slate-200 hover:text-white text-base font-medium px-4 py-3 rounded-xl hover:bg-slate-800/60 transition-all duration-200 border border-transparent hover:border-slate-600/50"
                            >
                                <span>{label}</span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200" />
                            </Link>
                        ) : (
                            <a
                                key={label}
                                href={href}
                                className="group flex items-center justify-between text-slate-200 hover:text-white text-base font-medium px-4 py-3 rounded-xl hover:bg-slate-800/60 transition-all duration-200 border border-transparent hover:border-slate-600/50"
                            >
                                <span>{label}</span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200" />
                            </a>
                        )
                    ))}

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="group flex items-center justify-between w-full text-slate-200 hover:text-white text-base font-medium px-4 py-3 rounded-xl hover:bg-slate-800/60 transition-all duration-200 border border-transparent hover:border-slate-600/50"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/20 rounded-lg p-2 group-hover:bg-primary/30 transition-colors duration-200">
                                <LogIn className="w-4 h-4 text-primary" />
                            </div>
                            <span>Login</span>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200" />
                    </button>

                    {/* Get Started Button */}
                    <div className="pt-4">
                        <a
                            href="#contact"
                            className="group flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-6 py-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-border/40"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </a>
                    </div>
                </div>
                
                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/80"></div>
            </div>
        </div>
    );
};

export default MobileMenu;