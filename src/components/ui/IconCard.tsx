import React from 'react';
import type { CardItem } from '../../types';
import { getIconSize } from '../../utils/styles';

interface IconCardProps extends CardItem {
  iconSize?: 'sm' | 'lg';
}

export default function IconCard({ icon: Icon, title, description, iconSize = 'sm' }: IconCardProps) {
  if (!Icon) return null;
  
  return (
    <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
      <div className="mb-6">
        <div className="p-5 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
          <Icon className={`${getIconSize(iconSize)} text-pink-500`} />
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}