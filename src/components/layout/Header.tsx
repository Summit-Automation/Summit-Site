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
                    : 'bg-transparent'
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
                                className="text-white text-sm font-medium hover:text-teal-300 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Call to Action */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="#waitlist"
                            className="ml-6 inline-flex items-center rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-teal-600"
                        >
                            Join Waitlist
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white hover:text-teal-300 transition-colors"
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
