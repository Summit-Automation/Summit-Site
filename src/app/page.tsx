'use client';

import useScrollEffect from '@/hooks/useScrollEffect';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import WaitlistSection from '@/components/sections/WaitlistSection';

export default function HomePage() {
    const scrolled = useScrollEffect();

    return (
        <div className="min-h-screen">
            <Header scrolled={scrolled} />
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <WaitlistSection />
            <Footer />
        </div>
    );
}
