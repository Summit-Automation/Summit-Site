import React from 'react';

interface TechCardProps {
    title: string;
    description: string;
}

const TechCard = ({title, description}: TechCardProps) => (
    <div className="relative group">
        {/* Professional card with texture and depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-2xl shadow-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-2xl"></div>
        
        {/* Enhanced border treatment */}
        <div className="absolute inset-0 rounded-2xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5"></div>
        
        {/* Content container */}
        <div className="relative p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    </div>);

export default TechCard;
