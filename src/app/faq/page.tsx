'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FAQSection from '@/components/sections/FAQSection';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header scrolled={true} />
      
      <main className="pt-24 pb-0">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </nav>
        </div>
        
        {/* Use the existing FAQSection component but remove the outer padding */}
        <div className="pb-16">
          <FAQSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}