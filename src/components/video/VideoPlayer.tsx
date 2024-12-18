import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface Subtitle {
  label: string;
  srcLang: string;
  src: string;
  default?: boolean;
}

interface VideoPlayerProps {
  videoUrl: string;
  subtitles: Subtitle[];
}

export default function VideoPlayer({ videoUrl, subtitles }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const video = document.querySelector('video');
    if (video) {
      video.play();
    }
  };

  return (
    <div className="aspect-[9/16] max-w-sm mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
      <video
        className="w-full h-full object-cover"
        crossOrigin="anonymous"
        playsInline
        loop
        controls={isPlaying}
        controlsList="nodownload"
      >
        <source src={videoUrl} type="video/mp4" />
        {subtitles.map((subtitle, index) => (
          <track
            key={index}
            label={subtitle.label}
            kind="subtitles"
            srcLang={subtitle.srcLang}
            src={subtitle.src}
            default={subtitle.default}
          />
        ))}
      </video>
      
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <div className="text-white text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Cem's Success Story</h3>
            <p className="text-gray-200">Watch the full story</p>
          </div>
          <button
            onClick={handlePlay}
            className="w-16 h-16 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors flex items-center justify-center"
          >
            <Play className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}