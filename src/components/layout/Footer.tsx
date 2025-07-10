import React from 'react';

const Footer = () => (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
                <div className="flex flex-col justify-center h-full text-center">
                    <img src="/logo.svg" alt="Summit Automation Logo" className="h-16 w-auto mb-3" />
                    <p className="text-gray-400">Peak Performance.</p>
                    <p className="text-gray-400">Seamlessly Automated.</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-white">Product</h3>
                    <ul className="space-y-2">
                        <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-white">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-white">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p>&copy; 2025 Summit Automation. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
