'use client';

import React from 'react';
import Button from '@/components/ui/Button';

const WaitlistSection = () => {
    return (
        <section
            id="waitlist"
            className="py-20 bg-gray-900 text-white text-center border-t border-gray-800"
        >
            <div className="max-w-xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold">Join the Waitlist</h2>
                <p className="text-lg text-gray-400">
                    Be the first to try Summit Automation. Get updates, early access, and behind-the-scenes content.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input
                        type="email"
                        placeholder="you@company.com"
                        className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 w-full sm:w-80 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        required
                    />
                    <Button label="Join Now" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default WaitlistSection;
