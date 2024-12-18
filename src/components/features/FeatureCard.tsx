import React from 'react';
import type { CardItem } from '../../types';
import FeatureImage from './FeatureImage';
import FeatureContent from './FeatureContent';

interface FeatureCardProps extends Omit<CardItem, 'icon'> {
  className?: string;
}

export default function FeatureCard({ image, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`group relative h-64 ${className}`}>
      <FeatureImage 
        src={image || ''} 
        alt={title} 
        className="h-full"
      />
      <FeatureContent 
        title={title}
        description={description}
      />
    </div>
  );
}