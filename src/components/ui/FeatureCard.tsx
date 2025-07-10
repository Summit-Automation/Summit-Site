import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({icon, title, description}: FeatureCardProps) => (
    <div
        className="bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 group"
    >
        <div
            className="bg-gradient-to-br from-blue-600 to-teal-500 text-white rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>);

export default FeatureCard;
