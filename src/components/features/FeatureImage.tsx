import React from 'react';

interface FeatureImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function FeatureImage({ src, alt, className = '' }: FeatureImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
    </div>
  );
}