import React, { useState } from 'react';
import { Award, Heart, Mic2, Compass, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import { poetData } from '../data/poetData';

export const AboutSection = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <section id="about" className="py-24 relative bg-[#090a0e] border-t border-gold-500/10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -left-48 top-1/3 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-48 bottom-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block mb-2 font-sans">
            {lang === 'hi' ? 'जीवन एवं साहित्यिक परिचय' : 'About Dr & Kavi Gaurav Sakshi'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text devanagari-font mb-4">
            {lang === 'hi' ? 'शब्दों के जादूगर: कवि गौरव साक्षी' : 'The Voice of Contemporary Hindi Poetry'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4" />
          <p className="text-gray-300 font-serif italic text-base sm:text-lg">
            {lang === 'hi' ? '“कविता मेरी सांसों का संगीत है और श्रोता मेरे दिल की धड़कन।”' : '“Poetry is the music of my soul, and every listener is its heartbeat.”'}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-md">
              {/* Outer Golden Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold-500 via-amber-600 to-crimson-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative bg-[#10121a] rounded-2xl overflow-hidden border border-gold-500/30 p-2 shadow-2xl">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                    alt="Kavi Gaurav Sakshi"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Floating Identity Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0d0f15]/85 backdrop-blur-md p-4 rounded-xl border border-gold-400/25 text-left">
                    <p className="text-gold-300 font-bold text-lg devanagari-font">
                      {lang === 'hi' ? poetData.name.hi : poetData.name.en}
                    </p>
                    <p className="text-xs text-gray-300">
                      {lang === 'hi' ? 'मंच संचालक, गीतकार एवं प्रख्यात युवा कवि' : 'Stage Performer, Lyricist & Leading Hindi Poet'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Highlights Pill */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300 font-medium flex items-center space-x-1.5">
                <Heart className="w-3.5 h-3.5 text-crimson-500" />
                <span>{lang === 'hi' ? 'श्रृंगार एवं विरह रस' : 'Romantic & Soulful Verses'}</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300 font-medium flex items-center space-x-1.5">
                <Mic2 className="w-3.5 h-3.5 text-gold-400" />
                <span>{lang === 'hi' ? 'अखिल भारतीय मंच' : 'National Stages'}</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300 font-medium flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'hi' ? 'साहित्य तक फेम' : 'Sahitya Tak Fame'}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Milestones Tabs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Short & Long Bio */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold-500/20">
              <h3 className="text-2xl font-bold text-gold-200 mb-4 font-serif flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-gold-400" />
                <span>{lang === 'hi' ? 'हृदयों को जीतने वाली काव्य यात्रा' : 'Journey Through Hearts & Verses'}</span>
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                {lang === 'hi' ? poetData.about.short.hi : poetData.about.short.en}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {lang === 'hi' ? poetData.about.full.hi : poetData.about.full.en}
              </p>
            </div>

            {/* Live Stats Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {poetData.about.stats.map((stat, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl border border-gold-500/20 text-center hover:border-gold-400/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text devanagari-font">
                    {stat.count}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 font-medium">
                    {lang === 'hi' ? stat.labelHi : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Milestones Accordion / Timeline */}
            <div className="bg-[#12141c] p-6 rounded-2xl border border-gold-500/20">
              <h4 className="text-sm uppercase tracking-wider text-gold-400 font-bold mb-4 flex items-center space-x-2">
                <Compass className="w-4 h-4" />
                <span>{lang === 'hi' ? 'साहित्यिक मील के पत्थर' : 'Key Career Milestones'}</span>
              </h4>

              <div className="space-y-4">
                {poetData.about.milestones.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 pb-3 border-b border-gray-800 last:border-0 last:pb-0">
                    <span className="px-2.5 py-1 rounded bg-gold-500/10 border border-gold-500/30 text-gold-400 font-mono text-xs font-bold">
                      {item.year}
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-200">
                        {lang === 'hi' ? item.titleHi : item.titleEn}
                      </h5>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {lang === 'hi' ? item.descHi : item.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

