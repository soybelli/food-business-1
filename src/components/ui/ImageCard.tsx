import React from 'react';
import type { CardItem } from '../../types';

interface ImageCardProps extends Omit<CardItem, 'icon'> {
  className?: string;
}

export default function ImageCard({ image, title, description, className = '' }: ImageCardProps) {
  return (
    <div className={`group hover:transform hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
        <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
}