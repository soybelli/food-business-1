import { Flame, HandshakeIcon, Scale, CreditCard } from 'lucide-react';
import type { CardItem } from '../types';

export const requirements: CardItem[] = [
  {
    title: 'PASSION',
    icon: Flame,
    description: 'A burning desire to succeed and make an impact.'
  },
  {
    title: 'COMMITMENT',
    icon: HandshakeIcon,
    description: 'Dedication to your goals and the process.'
  },
  {
    title: 'LEGAL RIGHT',
    icon: Scale,
    description: 'Eligible to work and operate in your location.'
  },
  {
    title: 'PAYMENT',
    icon: CreditCard,
    description: 'Required investment to begin your journey.'
  }
];