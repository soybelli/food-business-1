import React from 'react';

interface FeatureContentProps {
  title: string;
  description: string;
}

export default function FeatureContent({ title, description }: FeatureContentProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
    </div>
  );
}