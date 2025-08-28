// File: src/components/sections/ProblemSection.tsx
'use client';

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            You didn&apos;t start a business to become a 
            <span className="text-blue-600"> data entry clerk</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Most business owners spend 20+ hours a week on paperwork, follow-ups, and administrative tasks. 
            That&apos;s time stolen from growing your business and serving customers.
          </p>
        </div>

        {/* Clean time visualization */}
        <div className="mb-16 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Where Your Week Goes</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">6h</div>
              <div className="text-sm text-blue-700">Manual data entry</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">5h</div>
              <div className="text-sm text-blue-700">Client follow-ups</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">4h</div>
              <div className="text-sm text-blue-700">Financial tracking</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">5h</div>
              <div className="text-sm text-blue-700">Inventory & planning</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left items-center">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-gray-900 mb-4">Without Summit</h3>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Manual expense entry and bookkeeping
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Clients falling through the cracks
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Poor business performance visibility
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Inventory stockouts and overstock
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Scattered business tools and data
              </li>
            </ul>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-blue-600 rounded-full p-4 shadow-lg">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-blue-900 mb-4">With Summit</h3>
            <ul className="text-blue-700 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                AI-powered expense and financial tracking
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Automated lead nurturing and CRM
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Real-time business analytics dashboard
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Smart inventory and stock management
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Everything integrated in one platform
              </li>
            </ul>
          </div>
        </div>

        {/* Clean ROI section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Real Cost of Manual Work</h3>
            <p className="text-gray-600 mb-6">
              If your time is worth $50/hour, those 20 hours of admin work represent 
              <span className="font-bold text-blue-600"> $1,000 per week</span> in lost revenue potential.
            </p>
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm border border-blue-200">
              <span className="text-gray-700">That&apos;s </span>
              <span className="font-bold text-blue-600 mx-2 text-xl">$52,000</span>
              <span className="text-gray-700"> per year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;