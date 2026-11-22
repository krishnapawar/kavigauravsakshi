import React, { useState } from 'react';
import { Volume2, Copy, Check, Play, Pause, Sparkles, BookOpen } from 'lucide-react';
import { poetData } from '../data/poetData';

export const PoetryPage = ({ lang, activeAudioId, onToggleAudio }) => {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCopy = (poem) => {
    const text = `${poem.titleHi}\n\n${poem.versesHi.join('\n')}\n\n— कवि गौरव साक्षी (Kavi Gaurav Sakshi)`;
    navigator.clipboard.writeText(text);
    setCopiedId(poem.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-gray-200 pt-24 pb-20">
      
      {/* Banner */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-[#12141e] to-[#080a0f] border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#ed5434] font-bold block mb-2">
            Literary Creations & Verses
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4">
            {lang === 'hi' ? 'Poetry: कालजयी रचनाएं एवं गीत' : 'Signature Poetry & Ghazals'}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
            {lang === 'hi'
              ? '“हर एक लफ्ज़ में धड़कता है किसी न किसी का दिल।”'
              : '“Soul-stirring poetry blending classical Hindi heritage with modern sensibilities.”'}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {poetData.poems.map((poem) => {
            const isPlaying = activeAudioId === poem.id;

            return (
              <div
                key={poem.id}
                className="bg-[#10121a] rounded-2xl p-6 sm:p-8 border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ed5434] px-2.5 py-0.5 rounded bg-[#ed5434]/15">
                        {lang === 'hi' ? poem.categoryHi : poem.categoryEn}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-serif">
                        {lang === 'hi' ? poem.titleHi : poem.titleEn}
                      </h3>
                    </div>

                    <button
                      onClick={() => onToggleAudio(poem.id, poem.audioUrl, poem.titleHi)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isPlaying
                          ? 'bg-[#ed5434] text-white shadow-lg animate-pulse'
                          : 'bg-white/10 hover:bg-[#ed5434] text-white'
                      }`}
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </button>
                  </div>

                  <div className="space-y-3 my-6">
                    {poem.versesHi.map((line, idx) => (
                      <p key={idx} className="text-lg text-amber-50 font-serif leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-800/60 text-xs text-gray-400 italic">
                    {poem.versesEn.map((line, idx) => (
                      <p key={idx} className="mb-1">{line}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                  <span>Duration: {poem.duration}</span>
                  <button
                    onClick={() => handleCopy(poem)}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 transition-colors"
                  >
                    {copiedId === poem.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === poem.id ? 'Copied!' : 'Copy Verse'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
};

