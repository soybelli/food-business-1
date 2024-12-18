import React from 'react';
import Logo from './ui/Logo';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white hover:text-pink-500 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-white hover:text-pink-500 transition-colors">
              How It Works
            </a>
            <a href="#requirements" className="text-white hover:text-pink-500 transition-colors">
              Requirements
            </a>
            <Button variant="secondary">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}