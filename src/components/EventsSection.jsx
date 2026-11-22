import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Sparkles, CheckCircle2, ChevronRight, Mic } from 'lucide-react';
import { poetData } from '../data/poetData';

export const EventsSection = ({ lang, onSelectEventForBooking }) => {
  const [filter, setFilter] = useState('upcoming');

  const scrollToBook = () => {
    const el = document.getElementById('book-show');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="events" className="py-24 relative bg-[#090a0f] border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block mb-2 font-sans">
            {lang === 'hi' ? 'लाइव टूर एवं काव्य सम्मेलन' : 'Upcoming Stage Tours & Shows'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text devanagari-font mb-4">
            {lang === 'hi' ? 'अनुभव करें गौरव साक्षी का सजीव मंच' : 'Experience Gaurav Sakshi Live on Stage'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4" />
          <p className="text-gray-300 font-serif italic text-base sm:text-lg">
            {lang === 'hi' ? '“जहां शब्दों की गूंज और तालियों की बरसात एक हो जाती है।”' : '“Where poetic echoes and thunderous applause unite into timeless memories.”'}
          </p>
        </div>

        {/* Tour Dates List */}
        <div className="space-y-4 max-w-5xl mx-auto mb-16">
          {poetData.events.map((event) => (
            <div
              key={event.id}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#151722]"
            >
              {/* Date & City Badge */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-gold-600/25 to-royal-800 border border-gold-500/40 flex flex-col items-center justify-center text-center">
                  <Calendar className="w-5 h-5 text-gold-400 mb-0.5" />
                  <span className="text-[11px] font-bold text-gray-200 tracking-wider">
                    {event.date.split('-')[1]}/{event.date.split('-')[0]}
                  </span>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 font-semibold">
                      {event.type}
                    </span>
                    <span className="text-xs text-amber-400 font-medium">
                      {lang === 'hi' ? event.badgeHi : event.badgeEn}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-100 mt-1 font-serif group-hover:text-gold-300 transition-colors">
                    {lang === 'hi' ? event.titleHi : event.titleEn}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <strong className="text-gray-300">{lang === 'hi' ? event.cityHi : event.cityEn}:</strong>
                      <span>{lang === 'hi' ? event.venueHi : event.venueEn}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <span>{lang === 'hi' ? event.formattedDateHi : event.formattedDateEn}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-end flex-shrink-0 pt-2 md:pt-0 border-t md:border-0 border-gray-800">
                <button
                  onClick={() => onSelectEventForBooking(event)}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-black font-semibold text-xs sm:text-sm shadow-md hover:shadow-gold-500/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <Ticket className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'पास एवं आमंत्रण' : 'Book Passes / Invite'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Want to host in your city banner (like Kumar Vishwas) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#17140f] via-[#261f13] to-[#17140f] border border-gold-500/40 p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl sm:text-3xl font-extrabold gold-gradient-text devanagari-font mb-3">
            {lang === 'hi' ? 'क्या आप अपने शहर या संस्था में शो आयोजित करना चाहते हैं?' : 'Want to Host Kavi Gaurav Sakshi in Your City or Campus?'}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            {lang === 'hi'
              ? 'अखिल भारतीय कवि सम्मेलन, कॉलेज एनुअल फेस्ट, कॉरपोरेट गाला या व्यक्तिगत सांस्कृतिक संध्या के लिए हमारी टीम से संपर्क करें।'
              : 'Directly connect with the official management to block dates for Kavi Sammelans, College Fests, and Corporate Galas.'}
          </p>

          <button
            onClick={scrollToBook}
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-black font-bold text-sm sm:text-base shadow-xl shadow-gold-500/25 hover:scale-105 transition-all"
          >
            <Mic className="w-4 h-4" />
            <span>{lang === 'hi' ? 'आयोजन की तारीख बुक करें' : 'Reserve Event Date Now'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};

