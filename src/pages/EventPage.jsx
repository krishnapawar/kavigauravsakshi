import React from 'react';
import { Calendar, MapPin, Clock, Ticket, Sparkles, CheckCircle2 } from 'lucide-react';
import { poetData } from '../data/poetData';

export const EventPage = ({ setCurrentPage, lang }) => {
  return (
    <div className="min-h-screen bg-[#080a0f] text-gray-200 pt-24 pb-20">
      
      {/* Banner */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-[#12141e] to-[#080a0f] border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#ed5434] font-bold block mb-2">
            Live Tour & Stage Gatherings • Indore & Nationwide
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4">
            {lang === 'hi' ? 'Upcoming Events: Experience Gaurav Sakshi Live' : 'Upcoming Events: Experience Gaurav Sakshi Live'}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
            {lang === 'hi' ? '“जहां शब्दों की गूंज और तालियों की बरसात एक हो जाती है।”' : '“Where poetic rhythm meets the electrifying roar of packed auditoriums.”'}
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-serif">
          Upcoming Events (आगामी कार्यक्रम)
        </h2>

        <div className="space-y-5 mb-20">
          {poetData.events.map((event) => (
            <div
              key={event.id}
              className="bg-[#10121a] p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-gray-700 transition-all shadow-xl"
            >
              <div className="flex items-start sm:items-center space-x-5">
                <div className="w-16 h-16 rounded-xl bg-gray-800/80 border border-gray-700 flex flex-col items-center justify-center text-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#ed5434] mb-1" />
                  <span className="text-xs font-bold text-white">{event.date.split('-')[2]}/{event.date.split('-')[1]}</span>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[11px] font-semibold text-[#ed5434] uppercase tracking-wider px-2 py-0.5 rounded bg-[#ed5434]/15">
                      {event.type}
                    </span>
                    <span className="text-xs text-amber-400 font-medium">
                      {lang === 'hi' ? event.badgeHi : event.badgeEn}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-serif">
                    {lang === 'hi' ? event.titleHi : event.titleEn}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ed5434]" />
                      <strong>{lang === 'hi' ? event.cityHi : event.cityEn}:</strong>
                      <span>{lang === 'hi' ? event.venueHi : event.venueEn}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      <span>{lang === 'hi' ? event.formattedDateHi : event.formattedDateEn}</span>
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentPage('book-show');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-full bg-[#ed5434] hover:bg-[#d94424] text-white font-bold text-xs uppercase tracking-wider self-start md:self-auto flex items-center space-x-2"
              >
                <Ticket className="w-4 h-4" />
                <span>Book Tickets</span>
              </button>
            </div>
          ))}
        </div>

        {/* Highlights of His Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif">
            Highlights of His Events (मंच की विशेषताएं)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#10121a] p-6 rounded-xl border border-gray-800">
              <span className="text-lg font-bold text-white block mb-2">श्रोताओं से आत्मीय जुड़ाव</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                गौरव साक्षी मंच पर आते ही श्रोताओं को अपने शब्दों की गहराइयों में ऐसे समेट लेते हैं कि हर कोई भावुक हो उठता है।
              </p>
            </div>
            <div className="bg-[#10121a] p-6 rounded-xl border border-gray-800">
              <span className="text-lg font-bold text-white block mb-2">हास्य और श्रृंगार का संतुलन</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                गंभीर प्रेम कविताओं के साथ-साथ उनके मंच संचालन में हल्की-फुल्की चुटीली बातें कार्यक्रम में ताजगी बनाए रखती हैं।
              </p>
            </div>
            <div className="bg-[#10121a] p-6 rounded-xl border border-gray-800">
              <span className="text-lg font-bold text-white block mb-2">अखिल भारतीय मंचों पर धाक</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                इंदौर से लेकर देश के हर बड़े शहर, कवि सम्मेलन उत्सव और शैक्षणिक संस्थानों में उनके नाम की गूंज सुनाई देती है।
              </p>
            </div>
          </div>
        </div>

        {/* Past Events Highlights Gallery - Uses easily swappable local demo images */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 font-serif">
            Past Events Highlights (विगत कार्यक्रमों की झलकियां)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-900 rounded-xl overflow-hidden border border-gray-800 relative group">
              <img
                src={poetData.images.stage1}
                alt="Indore Kavi Sammelan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-3 text-xs text-white font-semibold">
                Indore Kavi Sammelan (रवींद्र नाट्य गृह)
              </div>
            </div>

            <div className="aspect-square bg-gray-900 rounded-xl overflow-hidden border border-gray-800 relative group">
              <img
                src={poetData.images.stage2}
                alt="Stage Highlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-3 text-xs text-white font-semibold">
                Bhopal Sahitya Utsav
              </div>
            </div>

            <div className="aspect-square bg-gray-900 rounded-xl overflow-hidden border border-gray-800 relative group">
              <img
                src={poetData.images.stage3}
                alt="Stage Highlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-3 text-xs text-white font-semibold">
                IIT Roorkee Cultural Fest
              </div>
            </div>

            <div className="aspect-square bg-gray-900 rounded-xl overflow-hidden border border-gray-800 relative group">
              <img
                src={poetData.images.stage4}
                alt="Stage Highlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-3 text-xs text-white font-semibold">
                New Delhi All-India Kavi Sammelan
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
