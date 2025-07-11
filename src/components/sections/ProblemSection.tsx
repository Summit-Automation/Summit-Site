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
            <h3 className="font-semibold text-red-900 mb-2">Without Summit Suite</h3>
            <ul className="text-red-700 space-y-2">
              <li>• Manual expense entry from receipts</li>
              <li>• Clients falling through the cracks</li>
              <li>• Low cashflow visibility</li>
              <li>• Buried in hours of monotonous administrative tasks</li>
            </ul>
          </div>
          
          <div className="flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-gray-400" />
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">With Summit Suite</h3>
            <ul className="text-green-700 space-y-2">
              <li>• AI powered expense tracking</li>
              <li>• Automated lead generation, follow up, and tracking</li>
              <li>• Real-time financial insights</li>
              <li>• Hours of tasks completed in minutes, letting you reclaim your time to spend it on what matters most</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;