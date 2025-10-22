'use client';

import React, { useState, memo } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import MobileMenu from '@/components/layout/MobileMenu';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
    scrolled: boolean;
}

const Header = memo(({ scrolled }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogin = () => {
        // Redirect to dashboard subdomain
        window.location.href = 'https://dashboard.summitautomation.io';
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                mobileMenuOpen
                    ? scrolled
                        ? 'bg-primary shadow-md'
                        : 'bg-background shadow-sm'
                    : scrolled
                        ? 'bg-primary/95 backdrop-blur-lg shadow-md'
                        : 'bg-background/95 backdrop-blur-lg shadow-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo - Always on the left */}
                    <div className="flex-shrink-0 -ml-6">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/4_SVG.svg"
                                alt="Summit Automation - Custom business automation and integration services"
                                width={270}
                                height={73}
                                priority
                                className="transition-all duration-300 brightness-0 invert opacity-90"
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
                                            ? 'text-primary-foreground hover:text-accent-foreground' 
                                            : 'text-foreground/70 hover:text-primary'
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
                                            ? 'text-primary-foreground hover:text-accent-foreground' 
                                            : 'text-foreground/70 hover:text-primary'
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
                                    ? 'text-primary-foreground hover:bg-primary-foreground/10 border border-slate-700/40'
                                    : 'text-foreground/70 hover:bg-muted border border-border'
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
                                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
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
                                    ? 'text-primary-foreground hover:text-accent-foreground hover:bg-primary-foreground/10' 
                                    : 'text-foreground/70 hover:text-primary hover:bg-muted'
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
});

Header.displayName = 'Header';

export default Header;