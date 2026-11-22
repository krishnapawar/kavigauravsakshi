import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, X } from 'lucide-react';

export const AudioPlayerBar = ({ activeAudio, isPlaying, onTogglePlay, onStop, lang }) => {
  const [muted, setMuted] = useState(false);

  if (!activeAudio) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-xl bg-[#10121a]/95 backdrop-blur-md border border-gold-500/40 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-between gap-3 animate-slideUp">
      {/* Track Icon & Animated Soundwave */}
      <div className="flex items-center space-x-3 overflow-hidden">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-amber-600 text-black flex items-center justify-center flex-shrink-0">
          <Music className="w-5 h-5" />
        </div>

        <div className="truncate">
          <span className="block text-xs uppercase tracking-wider text-gold-400 font-semibold font-sans">
            {lang === 'hi' ? 'काव्य ध्वनि प्रसारण' : 'Poetry Recital Audio'}
          </span>
          <h4 className="text-sm font-bold text-gray-100 truncate font-serif">
            {activeAudio.title}
          </h4>
        </div>
      </div>

      {/* Animated Wave Bars */}
      <div className="hidden sm:flex items-center space-x-1 h-5 px-2">
        <span className={`w-1 bg-gold-400 rounded-full ${isPlaying ? 'h-5 animate-pulse' : 'h-2'}`} />
        <span className={`w-1 bg-gold-400 rounded-full ${isPlaying ? 'h-3 animate-bounce' : 'h-1.5'}`} />
        <span className={`w-1 bg-gold-400 rounded-full ${isPlaying ? 'h-6 animate-pulse' : 'h-2'}`} />
        <span className={`w-1 bg-gold-400 rounded-full ${isPlaying ? 'h-4 animate-bounce' : 'h-1.5'}`} />
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-2 flex-shrink-0">
        <button
          onClick={onTogglePlay}
          className="w-10 h-10 rounded-full bg-gold-500 text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md shadow-gold-500/20"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        <button
          onClick={onStop}
          className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          title="Close player"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

