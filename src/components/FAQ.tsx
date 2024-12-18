import React from 'react';
import { ChevronDown } from 'lucide-react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { faqs } from '../data/faqs';

export default function FAQ() {
  return (
    <Section background="black">
      <SectionTitle 
        title="Common Questions"
        subtitle="Everything you need to know about starting your food business"
        className="text-center text-white"
      />
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-gray-700 pb-4">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}