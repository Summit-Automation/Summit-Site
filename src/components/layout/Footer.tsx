import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
    <footer className="bg-background text-muted-foreground py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
                <div className="flex flex-col justify-center h-full text-center">
                    <Image 
                        src="/images/4_SVG.svg" 
                        alt="Summit Automation - Custom business automation solutions for Pittsburgh, PA businesses" 
                        width={160}
                        height={160}
                        className="mx-auto mb-3"
                        loading="lazy"
                    />
                    <p className="text-muted-foreground">Peak Performance.</p>
                    <p className="text-muted-foreground">Seamlessly Automated.</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-foreground">Product</h3>
                    <ul className="space-y-2">
                        <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
                        <li><Link href="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
                        <li><Link href="/services" className="hover:text-foreground transition-colors">Services</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-foreground">Support</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/faq" className="hover:text-foreground transition-colors">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <a href="mailto:admin@summitautomation.io" className="hover:text-foreground transition-colors">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-foreground transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                    <ul className="space-y-2">
                        <li><Link href="/#about" className="hover:text-foreground transition-colors">About</Link></li>
                        <li>
                            <Link href="/blog" className="hover:text-foreground transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li><Link href="/#problem" className="hover:text-foreground transition-colors">Why Summit?</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center">
                <p>&copy; 2025 Summit Automation. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;