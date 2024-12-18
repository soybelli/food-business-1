import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import VideoPlayer from './video/VideoPlayer';
import Testimonial from './video/Testimonial';

export default function VideoSection() {
  return (
    <Section background="gray" id="how-it-works">
      <SectionTitle 
        title="Success Stories"
        subtitle="Watch how entrepreneurs like Cem turned their passion into a thriving food business"
        className="text-center"
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <VideoPlayer
          videoUrl="https://d4vfci8brg0ic.cloudfront.net/on-boarding/intro1.mp4"
          subtitles={[
            {
              label: "English",
              srcLang: "en",
              src: "https://d4vfci8brg0ic.cloudfront.net/on-boarding/intro1.en.vtt",
              default: true
            },
            {
              label: "Spanish",
              srcLang: "es",
              src: "https://d4vfci8brg0ic.cloudfront.net/on-boarding/intro1.es.vtt"
            }
          ]}
        />
        <Testimonial />
      </div>
    </Section>
  );
}