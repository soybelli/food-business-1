import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  icon: Icon, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all';
  const variantStyles = {
    primary: 'bg-pink-500 hover:bg-pink-600 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-gray-900'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}