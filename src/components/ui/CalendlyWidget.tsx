'use client';

import React from 'react';
import Script from 'next/script';
import { Calendar } from 'lucide-react';

interface CalendlyWidgetProps {
  className?: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ className = '' }) => {
  return (
    <>
      {/* Load Calendly script with Next.js Script component */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className={`relative group ${className}`}>
        {/* Professional card with texture and depth - matching ContactSection style */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>

        {/* Enhanced border treatment */}
        <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>

        {/* Content container */}
        <div className="relative backdrop-blur-sm rounded-xl overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-slate-700/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg p-2">
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 group-hover:text-white transition-colors duration-300">
                Schedule a Meeting
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Book a 30-minute consultation to discuss your business automation needs
            </p>
          </div>

          {/* Calendly inline widget - perfectly sized container */}
          <div
            className="relative overflow-hidden"
            style={{
              height: '680px',
              borderRadius: '0 0 0.75rem 0.75rem',
              maxWidth: '100%',
              contain: 'layout style'
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/admin-summitautomation/30min?hide_event_type_details=1&background_color=0f172a&text_color=e2e8f0&primary_color=3b82f6"
              style={{
                width: '100%',
                height: '680px',
                border: 'none',
                borderRadius: '0 0 0.75rem 0.75rem',
                display: 'block',
                margin: '0',
                padding: '0',
                backgroundColor: '#0f172a'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendlyWidget;