import React from 'react';
import { Store } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Store className={`w-8 h-8 text-pink-500`} />
      <span className={`text-xl font-bold ${textColor}`}>
        FoodBiz Launch
      </span>
    </div>
  );
}