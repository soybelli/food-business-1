import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative h-[60vh]">
      <div className="absolute inset-0">
        <img
          src="https://nhcvbybrekeljwjewkxo.supabase.co/storage/v1/object/public/listings/food-hero.JPG"
          alt="Food Business"
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              START YOUR FOOD BUSINESS
            </h1>
            <p className="text-xl text-pink-400 font-semibold mb-4">
              BE YOUR OWN BOSS
            </p>
            <p className="text-gray-300 mb-8 max-w-xl text-base">
              Join our community of successful food entrepreneurs. We provide the blueprint 
              and support you need to build a thriving culinary business.
            </p>
            <Button icon={ArrowRight}>
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}