import React, { useState } from 'react';
import { Mic, BookOpen, Calendar, Volume2, Copy, Check, Play, Sparkles, ArrowRight } from 'lucide-react';
import { poetData } from '../data/poetData';

export const HeroSection = ({ lang, onPlayQuote, isPlayingQuote, onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `${poetData.dailyQuote.coupletHi}\n${poetData.dailyQuote.themeHi} | Kavi Gaurav Sakshi`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Lighting & Stage Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-80" />
      
      {/* Atmospheric Stage Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0b0f]/80 to-[#08090b] z-10" />
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=80"
          alt="Stage Atmosphere"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125 scale-105 transform animate-pulse-subtle"
        />
        {/* Golden spotlight beam simulation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-gold-500/15 via-gold-600/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Elegant Top Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-medium tracking-wide mb-6 backdrop-blur-md shadow-lg shadow-gold-500/5">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>{lang === 'hi' ? 'अखिल भारतीय कवि एवं गीतकार' : 'All-India Poet & Lyricist'}</span>
        </div>

        {/* Main Grand Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 devanagari-font">
          <span className="block gold-gradient-text drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
            {lang === 'hi' ? poetData.name.hi : poetData.name.en}
          </span>
        </h1>

        {/* Tagline / Subtitle */}
        <p className="max-w-3xl text-lg sm:text-2xl text-gray-200 font-light mb-8 font-serif leading-relaxed italic">
          "{lang === 'hi' ? poetData.tagline.hi : poetData.tagline.en}"
        </p>

        {/* CTA Buttons - Modeled after Kumar Vishwas's site */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollTo('book-show')}
            className="flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-black font-bold text-base shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Mic className="w-5 h-5" />
            <span>{lang === 'hi' ? 'शो के लिए बुक करें' : 'Book For Your Event'}</span>
          </button>

          <button
            onClick={() => scrollTo('poetry')}
            className="flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#161822]/80 hover:bg-[#202230] border border-gold-500/40 text-gold-300 font-medium text-base backdrop-blur-md shadow-lg hover:border-gold-400 transition-all duration-200"
          >
            <BookOpen className="w-5 h-5 text-gold-400" />
            <span>{lang === 'hi' ? 'रचनाएं सुनें व पढ़ें' : 'Explore Poetry'}</span>
          </button>

          <button
            onClick={() => scrollTo('events')}
            className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 text-base font-medium transition-all duration-200"
          >
            <Calendar className="w-5 h-5 text-gray-400" />
            <span>{lang === 'hi' ? 'आगामी शोज़' : 'Tour Dates'}</span>
          </button>
        </div>

        {/* Featured Daily Couplet Card (Sher-o-Shayari) */}
        <div className="w-full max-w-2xl bg-gradient-to-r from-[#17140f]/90 via-[#231d13]/90 to-[#17140f]/90 border border-gold-500/35 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-2xl relative text-left">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gold-500/20">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'पंक्तियां जो दिलों में बस गईं' : 'Featured Couplet'}</span>
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={onPlayQuote}
                className="flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300 hover:bg-gold-500/30 border border-gold-500/30 transition-all"
                title="काव्य ध्वनि सुनें"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingQuote ? 'text-amber-400 animate-bounce' : ''}`} />
                <span>{isPlayingQuote ? (lang === 'hi' ? 'चल रहा है...' : 'Playing...') : (lang === 'hi' ? 'सुनिए' : 'Listen')}</span>
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-all"
                title="शेर कॉपी करें"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'hi' ? 'कॉपी हुआ!' : 'Copied!') : (lang === 'hi' ? 'शेयर' : 'Copy')}</span>
              </button>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gold-100 font-serif leading-relaxed whitespace-pre-line italic">
            "{lang === 'hi' ? poetData.dailyQuote.coupletHi : poetData.dailyQuote.coupletEn}"
          </p>
          <p className="text-xs text-gold-400/80 mt-2 font-medium">
            {lang === 'hi' ? poetData.dailyQuote.themeHi : poetData.dailyQuote.themeEn}
          </p>
        </div>

      </div>

      {/* Subtle bottom scroll indicator */}
      <button 
        onClick={() => scrollTo('about')} 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gold-400 flex flex-col items-center space-y-1 transition-colors z-20"
      >
        <span className="text-[10px] tracking-widest uppercase">{lang === 'hi' ? 'स्क्रॉल करें' : 'Scroll Down'}</span>
        <div className="w-5 h-8 border-2 border-gold-500/40 rounded-full flex justify-center pt-1">
          <div className="w-1.5 h-2 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
};

