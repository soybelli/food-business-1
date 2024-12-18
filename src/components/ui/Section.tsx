import React, { ReactNode } from 'react';
import type { BackgroundColor } from '../../types';
import { getBackgroundColor } from '../../utils/styles';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: BackgroundColor;
}

export default function Section({ children, className = '', background = 'white' }: SectionProps) {
  return (
    <div className={`py-24 ${getBackgroundColor(background)} ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}