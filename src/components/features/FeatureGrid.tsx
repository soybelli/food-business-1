import React from 'react';
import FeatureCard from './FeatureCard';
import type { CardItem } from '../../types';

interface FeatureGridProps {
  features: CardItem[];
  className?: string;
}

export default function FeatureGrid({ features, className = '' }: FeatureGridProps) {
  return (
    <div className={`grid md:grid-cols-3 gap-8 max-w-7xl mx-auto ${className}`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          {...feature}
        />
      ))}
    </div>
  );
}