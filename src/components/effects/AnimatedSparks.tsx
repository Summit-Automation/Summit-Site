'use client';

import React from 'react';

const AnimatedSparks = () => {
    return (
        <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
            {[...Array(20)].map((_, i) => (<div
                    key={`spark-${i}`}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                    style={{
                        left: `${(i * 5) % 100}%`,
                        top: `${(i * 13) % 100}%`,
                        animationDelay: `${(i % 5) * 0.2}s`,
                        animationDuration: `${2 + (i % 3)}s`
                    }}
                />))}
        </div>
    );
};

export default AnimatedSparks;
