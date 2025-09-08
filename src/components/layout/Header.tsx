'use client';

import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import MobileMenu from '@/components/layout/MobileMenu';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
    scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogin = () => {
        // Redirect to dashboard subdomain
        window.location.href = 'https://dashboard.summitautomation.io';
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-blue-600/95 backdrop-blur-lg shadow-md'
                    : 'bg-white/95 backdrop-blur-lg shadow-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo - Always on the left */}
                    <div className="flex-shrink-0 -ml-6">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/4_SVG.svg"
                                alt="Summit Automation - Business automation software for Pittsburgh Pennsylvania"
                                width={270}
                                height={73}
                                priority
                                className={`transition-all duration-300 ${
                                    scrolled 
                                        ? 'brightness-0 invert' 
                                        : 'brightness-0'
                                }`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav - Hidden on mobile */}
                    <nav className="hidden md:flex items-center gap-6">
                        {[
                            { label: 'Features', href: '/#features' },
                            { label: 'Services', href: '/services' },
                            { label: 'How It Works', href: '/#how-it-works' },
                            { label: 'Blog', href: '/#blog' },
                            { label: 'FAQ', href: '/faq' },
                        ].map(({ label, href }) => (
                            href.startsWith('/') ? (
                                <Link
                                    key={label}
                                    href={href}
                                    className={`text-sm font-medium transition-colors ${
                                        scrolled 
                                            ? 'text-white hover:text-teal-300' 
                                            : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                >
                                    {label}
                                </Link>
                            ) : (
                                <a
                                    key={label}
                                    href={href}
                                    className={`text-sm font-medium transition-colors ${
                                        scrolled 
                                            ? 'text-white hover:text-teal-300' 
                                            : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                >
                                    {label}
                                </a>
                            )
                        ))}
                    </nav>

                    {/* Desktop Call to Action Buttons - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Login Button */}
                        <button
                            onClick={handleLogin}
                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                                scrolled
                                    ? 'text-white hover:bg-white/10 border border-white/20'
                                    : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            <LogIn className="w-4 h-4" />
                            Login
                        </button>

                        {/* Get Started Button */}
                        <a
                            href="#contact"
                            className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-105 ${
                                scrolled
                                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button - Always visible on mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2 rounded-lg transition-colors ${
                                scrolled 
                                    ? 'text-white hover:text-teal-300 hover:bg-white/10' 
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                            }`}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && <MobileMenu />}
        </header>
    );
};

export default Header;