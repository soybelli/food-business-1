import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import JourneySection from './components/JourneySection';
import Values from './components/Values';
import Requirements from './components/Requirements';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <VideoSection />
      <JourneySection />
      <Values />
      <Requirements />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;