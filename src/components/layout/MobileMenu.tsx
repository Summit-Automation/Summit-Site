'use client';

import React from 'react';
import { LogIn } from 'lucide-react';

const MobileMenu = () => {
    const handleLogin = () => {
        // Redirect to dashboard subdomain
        window.location.href = 'https://dashboard.summitautomation.io';
    };

    return (
        <div
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 shadow-2xl"
            style={{WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)'}}
        >
            <div className="px-4 pt-4 pb-6 space-y-2">
                {[
                    {label: 'Features', href: '#features'}, 
                    {label: 'About', href: '#about'}, 
                    {label: 'Waitlist', href: '#waitlist'}
                ].map(({label, href}) => (
                    <a
                        key={label}
                        href={href}
                        className="block text-white text-base font-medium px-3 py-2 rounded-lg hover:bg-white/10 hover:text-teal-300 transition-all duration-150"
                    >
                        {label}
                    </a>
                ))}

                {/* Login Button */}
                <button
                    onClick={handleLogin}
                    className="block w-full text-left text-white text-base font-medium px-3 py-2 rounded-lg hover:bg-white/10 hover:text-teal-300 transition-all duration-150 flex items-center gap-2"
                >
                    <LogIn className="w-4 h-4" />
                    Login
                </button>

                {/* Join Waitlist Button */}
                <a
                    href="#waitlist"
                    className="block w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base px-4 py-2 rounded-xl text-center transition-all"
                >
                    Join Waitlist
                </a>
            </div>
        </div>
    );
};

export default MobileMenu;