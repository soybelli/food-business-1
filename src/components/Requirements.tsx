import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { requirements } from '../data/requirements';

export default function Requirements() {
  return (
    <Section>
      <SectionTitle 
        title="Getting Started"
        subtitle="Four essential elements that will set you up for success in your culinary journey"
        className="text-center"
      />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((requirement, index) => {
            const Icon = requirement.icon;
            return (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-pink-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{requirement.title}</h3>
                  <p className="text-gray-600">{requirement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}