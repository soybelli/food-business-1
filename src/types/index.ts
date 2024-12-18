import { LucideIcon } from 'lucide-react';

export interface CardItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type BackgroundColor = 'white' | 'gray' | 'black';