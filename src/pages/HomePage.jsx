import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Calendar, MapPin, Play, Volume2, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { poetData } from '../data/poetData';

export const HomePage = ({ setCurrentPage, lang, onOpenVideo, onToggleAudio, isPlayingAudio, onOpenSubscribe }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyQuote = () => {
    const text = `${poetData.dailyQuote.coupletHi}\n${poetData.dailyQuote.themeHi} | Kavi Gaurav Sakshi`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-[#e2e8f0]">
      
      {/* 1. HERO VIDEO SECTION - Identical to kumarvishwas.com */}
      <section className="relative w-full h-[95vh] sm:h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Full-bleed HTML5 looping video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poetData.images.stageHero}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.45] contrast-110 pointer-events-none"
        >
          <source src="/video/banner-video.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center flex flex-col items-center pt-12">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs tracking-widest uppercase text-gray-200 mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#ed5434]" />
            <span>{lang === 'hi' ? 'अखिल भारतीय मंच • इंदौर' : 'Official Portal • Indore (MP)'}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-2xl mb-3 font-serif">
            <strong>{lang === 'hi' ? poetData.name.hi : poetData.name.en}</strong>
          </h1>

          <p className="text-lg sm:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mb-6 font-serif">
            {lang === 'hi' ? 'The Voice of a Generation | भावनाओं के शिल्पी' : 'The Voice of a Generation'}
          </p>

          {/* Social Icons - Identical to #social in kumarvishwas.com */}
          <div className="flex items-center space-x-4 mb-8">
            <a
              href={poetData.contact.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-black/60 border border-white/30 hover:border-[#ed5434] hover:bg-[#ed5434] text-white flex items-center justify-center transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={poetData.contact.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-black/60 border border-white/30 hover:border-[#ed5434] hover:bg-[#ed5434] text-white flex items-center justify-center transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={poetData.contact.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-black/60 border border-white/30 hover:border-[#ed5434] hover:bg-[#ed5434] text-white flex items-center justify-center transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={poetData.contact.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-black/60 border border-white/30 hover:border-[#ed5434] hover:bg-[#ed5434] text-white flex items-center justify-center transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage('book-show')}
              className="px-8 py-3.5 rounded-full bg-[#ed5434] hover:bg-[#d94424] text-white font-bold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              {lang === 'hi' ? 'शो के लिए संपर्क करें (Book a Show)' : 'Book a Show'}
            </button>
            <button
              onClick={() => setCurrentPage('poetry')}
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/25 transition-all"
            >
              {lang === 'hi' ? 'काव्य एवं रचनाएं' : 'Explore Poetry'}
            </button>
          </div>

        </div>

        {/* Hero Bottom Marquee - Exact count class from kumarvishwas.com */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/85 border-t border-gray-800 py-3 overflow-hidden">
          <div className="flex w-[200%] animate-marquee whitespace-nowrap">
            {[1, 2].map((k) => (
              <div key={k} className="flex items-center space-x-8 text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-300 mx-4">
                <span>Poet</span>
                <span className="text-[#ed5434]">|</span>
                <span>Lyricist & Geetkar</span>
                <span className="text-[#ed5434]">|</span>
                <span>Stage Performer</span>
                <span className="text-[#ed5434]">|</span>
                <span>Motivational Speaker</span>
                <span className="text-[#ed5434]">|</span>
                <span>Voice of Romance & Longing</span>
                <span className="text-[#ed5434]">|</span>
                <span>200+ Live Stage Concerts</span>
                <span className="text-[#ed5434]">|</span>
                <span>Sahitya Tak Fame</span>
                <span className="text-[#ed5434]">|</span>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* 2. CONTAINER STYLED 1 (ABOUT CARD) - Exact containerone from kumarvishwas.com */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-[#000000] rounded-2xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col md:flex-row">
          
          {/* Image Div */}
          <div className="md:w-1/2 bg-gray-900 relative min-h-[360px] sm:min-h-[440px]">
            <img
              src={poetData.images.profile}
              alt="Kavi Gaurav Sakshi"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
          </div>

          {/* Text Div */}
          <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-serif">
              {lang === 'hi' ? 'About Kavi Gaurav Sakshi' : 'About Kavi Gaurav Sakshi'}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {lang === 'hi' ? poetData.about.short.hi : poetData.about.short.en}
              {' '}
              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[#337ab7] hover:underline font-semibold ml-1 cursor-pointer"
              >
                Know More
              </button>
            </p>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span className="uppercase tracking-widest font-semibold text-[#ed5434]">
                Official Literary Secretariat
              </span>
              <span>Indore, Madhya Pradesh</span>
            </div>
          </div>

        </div>
      </section>


      {/* 3. FEATURED COUPLET WIDGET (आज का शेर) */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[#141620] via-[#1c1f2e] to-[#141620] rounded-2xl p-6 sm:p-8 border border-gray-800 text-center relative shadow-xl">
          <span className="text-xs uppercase tracking-widest text-[#ed5434] font-bold block mb-2">
            ★ {lang === 'hi' ? 'रचना संसार: आज का शेर' : 'Couplet of the Day'} ★
          </span>
          <p className="text-lg sm:text-2xl font-serif text-white italic leading-relaxed whitespace-pre-line my-4">
            "{lang === 'hi' ? poetData.dailyQuote.coupletHi : poetData.dailyQuote.coupletEn}"
          </p>
          <p className="text-xs text-gray-400 font-medium">
            {lang === 'hi' ? poetData.dailyQuote.themeHi : poetData.dailyQuote.themeEn}
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <button
              onClick={() => onToggleAudio(1, poetData.poems[0].audioUrl, 'तुम्हारी याद का मौसम')}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#ed5434]/20 border border-[#ed5434]/40 text-[#ed5434] text-xs font-semibold hover:bg-[#ed5434]/30 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>{isPlayingAudio ? (lang === 'hi' ? 'चल रहा है...' : 'Playing...') : (lang === 'hi' ? 'स्वर सुनें' : 'Listen Verse')}</span>
            </button>
            <button
              onClick={handleCopyQuote}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </section>


      {/* 4. VIRAL RECITATIONS & VIDEOS FEED (Swiper style) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#ed5434] font-bold block">
              Featured Performances
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              {lang === 'hi' ? 'मंच की लोकप्रिय प्रस्तुतियां' : 'Viral Stage Recitations'}
            </h3>
          </div>
          <button
            onClick={() => {
              setCurrentPage('event');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-[#ed5434] hover:underline flex items-center space-x-1"
          >
            <span>View All Shows</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {poetData.videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => onOpenVideo(vid)}
              className="bg-[#12141d] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all cursor-pointer group shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={vid.thumbnail}
                  alt={vid.titleHi}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#ed5434] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[11px] text-gray-200">
                  {vid.views}
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-white group-hover:text-[#ed5434] transition-colors line-clamp-1">
                  {lang === 'hi' ? vid.titleHi : vid.titleEn}
                </h4>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {vid.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. UPCOMING EVENTS SPOTLIGHT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-gray-800">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#ed5434] font-bold block mb-1">
            Tour Calendar
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            {lang === 'hi' ? 'आगामी कवि सम्मेलन एवं शोज़' : 'Upcoming Live Shows'}
          </h3>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {poetData.events.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="bg-[#12141d] p-5 rounded-xl border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-lg bg-gray-800 border border-gray-700 flex flex-col items-center justify-center flex-shrink-0 text-center">
                  <span className="text-xs text-gray-400 font-semibold uppercase">{event.date.split('-')[1]}</span>
                  <span className="text-lg font-bold text-white leading-none">{event.date.split('-')[2]}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-serif">
                    {lang === 'hi' ? event.titleHi : event.titleEn}
                  </h4>
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ed5434]" />
                      <span>{lang === 'hi' ? event.cityHi : event.cityEn}</span>
                    </span>
                    <span>•</span>
                    <span>{lang === 'hi' ? event.formattedDateHi : event.formattedDateEn}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentPage('book-show');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-[#ed5434] text-white text-xs font-semibold transition-all self-start sm:self-auto"
              >
                Book Passes
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* 6. WANT TO HOST BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#ed5434] to-[#f97316] p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold mb-3 font-serif">
            {lang === 'hi' ? 'Want To Host A Show In Your City?' : 'Want To Host A Show In Your City?'}
          </h3>
          <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-6">
            {lang === 'hi'
              ? 'अखिल भारतीय कवि सम्मेलन, कॉलेज यूथ फेस्ट या कॉरपोरेट एनुअल मीट के लिए सीधे संपर्क करें।'
              : 'Connect with the official secretariat in Indore for booking Kavi Gaurav Sakshi for your event.'}
          </p>
          <button
            onClick={() => {
              setCurrentPage('book-show');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full bg-black hover:bg-gray-900 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
          >
            {lang === 'hi' ? 'आयोजन बुक करें (Book a Show)' : 'Book a Show Now'}
          </button>
        </div>
      </section>

    </div>
  );
};
