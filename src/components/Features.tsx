import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import FeatureGrid from './features/FeatureGrid';
import { features } from '../data/features';

export default function Features() {
  return (
    <Section>
      <SectionTitle 
        title="Build Your Food Empire"
        subtitle="Take control of your future with our proven three-step process to culinary success"
        className="text-center"
      />
      <FeatureGrid features={features} />
    </Section>
  );
}