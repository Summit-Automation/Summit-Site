'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from '@/components/layout/MobileMenu';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
    scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-blue-600/95 backdrop-blur-lg shadow-md'
                    : 'bg-white/95 backdrop-blur-lg shadow-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2 z-10">
                            <Image
                                src="/images/4_SVG.svg"
                                alt="Summit Automation Logo"
                                width={180}
                                height={48}
                                priority
                                className={`transition-all duration-300 ${
                                    scrolled 
                                        ? 'brightness-0 invert' 
                                        : 'brightness-0'
                                }`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {[
                            { label: 'Features', href: '#features' },
                            { label: 'About', href: '#about' },
                            { label: 'Waitlist', href: '#waitlist' },
                        ].map(({ label, href }) => (
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
                        ))}
                    </nav>

                    {/* Call to Action */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="#waitlist"
                            className={`ml-6 inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-105 ${
                                scrolled
                                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        >
                            Join Waitlist
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`transition-colors ${
                                scrolled 
                                    ? 'text-white hover:text-teal-300' 
                                    : 'text-gray-700 hover:text-blue-600'
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