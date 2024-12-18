import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

export default function JourneySection() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Your Journey to Success</h2>
              <p className="text-gray-600 mb-6">
                Join hundreds of food entrepreneurs who have already taken control of their future 
                through our comprehensive program. We guide you through every step of the process, 
                from initial concept to successful launch.
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Start Your Journey
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i}`}
                        alt="Entrepreneur"
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Join Our Community</p>
                    <p className="text-sm text-gray-600">150+ entrepreneurs this year</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p className="text-gray-600">Comprehensive training program</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p className="text-gray-600">Ongoing support and mentorship</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p className="text-gray-600">Access to successful entrepreneurs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}