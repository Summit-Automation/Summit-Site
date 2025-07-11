'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          You didn&apos;t start a business to become a data entry clerk
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Most business owners spend 20+ hours a week on paperwork, follow-ups, and administrative tasks. 
          That&apos;s time stolen from growing your business and serving customers.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-2">The current way</h3>
            <ul className="text-red-700 space-y-2">
              <li>• Manual data entry from receipts</li>
              <li>• Clients fall through the cracks</li>
              <li>• No visibility into cash flow</li>
              <li>• Buried in spreadsheets</li>
            </ul>
          </div>
          
          <div className="flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-gray-400" />
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">The Summit way</h3>
            <ul className="text-green-700 space-y-2">
              <li>• AI extracts data automatically</li>
              <li>• Smart lead generation & tracking</li>
              <li>• Real-time financial insights</li>
              <li>• Everything in one place</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;