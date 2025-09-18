import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({icon, title, description}: FeatureCardProps) => (
    <div
        className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-700/50 group backdrop-blur-sm"
    >
        <div
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ring-2 ring-blue-500/20 group-hover:ring-blue-500/40">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-50 mb-3">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>);

export default FeatureCard;
