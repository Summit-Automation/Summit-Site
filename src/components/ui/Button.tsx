import React from 'react';
import {ArrowRight} from 'lucide-react';
import clsx from 'clsx';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    icon?: boolean;
    className?: string;
    type?: 'button' | 'submit';
}

const Button = ({label, onClick, icon = false, className = '', type = 'button'}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx('bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow', 'flex items-center gap-2 justify-center', className)}
        >
            {label}
            {icon && <ArrowRight className="w-5 h-5"/>}
        </button>
    );
};

export default Button;
