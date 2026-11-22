import React, { useState } from 'react';
import { Play, Pause, Copy, Check, Sparkles, Music, Share2, Volume2, BookOpen } from 'lucide-react';
import { poetData } from '../data/poetData';

export const PoetrySection = ({ lang, activeAudioId, onToggleAudio }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showEnglishTranslation, setShowEnglishTranslation] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    { id: 'all', labelHi: 'समस्त रचनाएं', labelEn: 'All Verses' },
    { id: 'shringaar', labelHi: 'प्रेम एवं श्रृंगार', labelEn: 'Romantic Verses' },
    { id: 'virah', labelHi: 'विरह व दर्द', labelEn: 'Longing & Separation' },
    { id: 'geet', labelHi: 'मंच के लोकप्रिय गीत', labelEn: 'Stage Anthems' },
  ];

  const handleCopyPoem = (poem) => {
    const text = `${poem.titleHi}\n\n${poem.versesHi.join('\n')}\n\n— कवि गौरव साक्षी (Kavi Gaurav Sakshi)`;
    navigator.clipboard.writeText(text);
    setCopiedId(poem.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleTranslation = (id) => {
    setShowEnglishTranslation(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="poetry" className="py-24 relative bg-[#0b0c11] border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block mb-2 font-sans">
            {lang === 'hi' ? 'काव्य एवं रचना संसार' : 'Signature Poetry & Ghazals'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text devanagari-font mb-4">
            {lang === 'hi' ? 'कलम से निकली अमर पंक्तियां' : 'Soul-Stirring Verses & Lyrics'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4" />
          <p className="text-gray-300 font-serif italic text-base sm:text-lg">
            {lang === 'hi' ? '“हर एक लफ्ज़ में धड़कता है किसी न किसी का दिल।”' : '“In every syllable whispers a beat of someone’s yearning heart.”'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-black shadow-lg shadow-gold-500/20 scale-105'
                  : 'bg-[#151722] text-gray-300 hover:text-gold-300 border border-gold-500/20 hover:border-gold-500/40'
              }`}
            >
              {lang === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Poetry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {poetData.poems.map((poem) => {
            const isPlaying = activeAudioId === poem.id;
            const isTranslated = showEnglishTranslation[poem.id];

            return (
              <div
                key={poem.id}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
                        {lang === 'hi' ? poem.categoryHi : poem.categoryEn}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mt-2 font-serif">
                        {lang === 'hi' ? poem.titleHi : poem.titleEn}
                      </h3>
                    </div>

                    {/* Audio Play Trigger */}
                    <button
                      onClick={() => onToggleAudio(poem.id, poem.audioUrl, poem.titleHi)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isPlaying
                          ? 'bg-gradient-to-r from-amber-500 to-gold-400 text-black shadow-lg shadow-gold-500/40 animate-pulse'
                          : 'bg-gold-500/15 border border-gold-500/35 text-gold-400 hover:bg-gold-500/25 hover:scale-105'
                      }`}
                      title={isPlaying ? 'Pause recitations' : 'Play audio narration'}
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </button>
                  </div>

                  {/* Poetry Verses in Hindi */}
                  <div className="my-6 space-y-3">
                    {poem.versesHi.map((line, idx) => (
                      <p
                        key={idx}
                        className="text-lg sm:text-xl text-amber-50 font-serif leading-relaxed devanagari-font"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* English Translation Toggle Section */}
                  {isTranslated && (
                    <div className="mt-4 pt-4 border-t border-gray-800/80 bg-black/30 p-4 rounded-xl text-gray-300 text-sm italic font-serif leading-relaxed animate-fadeIn">
                      <p className="text-xs text-gold-400/80 uppercase tracking-wider font-sans font-semibold mb-2">
                        English Translation:
                      </p>
                      {poem.versesEn.map((line, idx) => (
                        <p key={idx} className="mb-1 text-gray-300">{line}</p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 mt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                  <button
                    onClick={() => toggleTranslation(poem.id)}
                    className="text-gold-400 hover:text-gold-300 font-medium underline-offset-4 hover:underline"
                  >
                    {isTranslated ? (lang === 'hi' ? 'अंग्रेजी अनुवाद छिपाएं' : 'Hide Translation') : (lang === 'hi' ? 'अंग्रेजी अनुवाद पढ़ें' : 'View English Meaning')}
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleCopyPoem(poem)}
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                      title="रचना कॉपी करें"
                    >
                      {copiedId === poem.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400 font-medium">{lang === 'hi' ? 'कॉपी हुआ!' : 'Copied!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{lang === 'hi' ? 'शेयर/कॉपी' : 'Share'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Literary Footnote */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            {lang === 'hi'
              ? 'समस्त रचनाएं कॉपीराइट के अधीन हैं। किसी भी व्यावसायिक उपयोग के लिए पूर्व अनुमति अनिवार्य है।'
              : 'All compositions are registered under copyright law. Prior authorization required for commercial reproduction.'}
          </p>
        </div>

      </div>
    </section>
  );
};

