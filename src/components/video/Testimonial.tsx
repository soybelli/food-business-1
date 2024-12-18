import React from 'react';

export default function Testimonial() {
  return (
    <div className="space-y-6">
      <blockquote className="text-lg font-medium text-gray-900">
        <p className="mb-4">
          "Starting my food business was a dream come true. The support and guidance
          I received made it possible to turn my passion for food into a thriving venture.
          Now I'm my own boss, creating amazing food experiences every day."
        </p>
        <footer className="text-gray-600">
          <cite className="font-bold not-italic">Cem K.</cite>
          <p className="text-sm">Business Owner since 2023</p>
        </footer>
      </blockquote>
    </div>
  );
}