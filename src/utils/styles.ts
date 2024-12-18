import type { BackgroundColor } from '../types';

export const getBackgroundColor = (background: BackgroundColor): string => {
  switch (background) {
    case 'gray': return 'bg-gray-50';
    case 'black': return 'bg-black text-white';
    default: return 'bg-white';
  }
};

export const getIconSize = (size: 'sm' | 'lg'): string => {
  return size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
};