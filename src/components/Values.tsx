import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import IconCard from './ui/IconCard';
import { values } from '../data/values';

export default function Values() {
  return (
    <Section background="gray">
      <SectionTitle 
        title="Core Values That Drive Success"
        subtitle="Join a community of entrepreneurs who share your passion for excellence and innovation"
        className="text-center"
      />
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <IconCard
              key={index}
              {...value}
              iconSize="lg"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}