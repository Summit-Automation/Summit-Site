import React from 'react';

interface TechCardProps {
    title: string;
    description: string;
}

const TechCard = ({title, description}: TechCardProps) => (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>);

export default TechCard;
