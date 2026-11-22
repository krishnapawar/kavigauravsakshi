import React from 'react';
import { Play, Eye, Youtube, Award, ExternalLink, Sparkles } from 'lucide-react';
import { poetData } from '../data/poetData';

export const VideoMediaSection = ({ lang, onOpenVideoModal }) => {
  return (
    <section id="media" className="py-24 relative bg-[#0b0c11] border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block mb-2 font-sans">
            {lang === 'hi' ? 'वीडियो एवं मीडिया कवरेज' : 'Videos & Media Highlights'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text devanagari-font mb-4">
            {lang === 'hi' ? 'मंच की जीवंत झलकियां' : 'Viral Recitations & TV Appearances'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4" />
          <p className="text-gray-300 font-serif italic text-base sm:text-lg">
            {lang === 'hi' ? '“साहित्य तक और प्रमुख मंचों पर करोड़ों दर्शकों द्वारा पसंद की गई प्रस्तुतियां।”' : '“Cherished by millions across Sahitya Tak and premier national broadcast stages.”'}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {poetData.videos.map((vid) => (
            <div
              key={vid.id}
              className="glass-panel rounded-2xl overflow-hidden border border-gold-500/25 group hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Thumbnail with Play Overlay */}
              <div
                onClick={() => onOpenVideoModal(vid)}
                className="relative aspect-video overflow-hidden cursor-pointer bg-black"
              >
                <img
                  src={vid.thumbnail}
                  alt={vid.titleHi}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Big Golden Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gold-500 to-amber-400 text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Platform Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 border border-gold-500/30 text-gold-300 text-xs font-semibold flex items-center space-x-1.5">
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  <span>{vid.platform}</span>
                </div>

                {/* Views Counter Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-black/80 text-gray-200 text-xs font-medium flex items-center space-x-1">
                  <Eye className="w-3 h-3 text-gold-400" />
                  <span>{vid.views}</span>
                </div>
              </div>

              {/* Video Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-100 group-hover:text-gold-300 transition-colors font-serif leading-snug">
                    {lang === 'hi' ? vid.titleHi : vid.titleEn}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                    {vid.caption}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-800 flex items-center justify-between">
                  <button
                    onClick={() => onOpenVideoModal(vid)}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center space-x-1"
                  >
                    <span>{lang === 'hi' ? 'पूरा वीडियो देखें' : 'Watch Full Recitation'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-gray-500">Official Release</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media & Press Accolades */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold-500/20 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4" />
            <span>{lang === 'hi' ? 'समीक्षकों एवं मीडिया की दृष्टि में' : 'Critical Acclaim & Media Praise'}</span>
          </div>
          <p className="text-base sm:text-lg text-gray-200 font-serif italic max-w-2xl mx-auto">
            “गौरव साक्षी की कविताओं में वह दुर्लभ सादगी है, जो सीधे श्रोता के हृदय में घर बना लेती है। वे आज के युवाओं को हिंदी साहित्य के रस से पुनः जोड़ने का कार्य कर रहे हैं।”
          </p>
          <span className="block text-xs text-gold-300/80 font-semibold mt-3">
            — साहित्य समीक्षक, राष्ट्रीय दैनिक
          </span>
        </div>

      </div>
    </section>
  );
};

