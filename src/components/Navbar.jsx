import React, { useState, useEffect } from 'react';
import { Feather, Menu, X, Globe, Calendar, Mic, Sparkles, Bell } from 'lucide-react';

export const Navbar = ({ lang, setLang, activeSection, onOpenNewsletter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', labelHi: 'होम', labelEn: 'Home' },
    { id: 'about', labelHi: 'परिचय', labelEn: 'About' },
    { id: 'poetry', labelHi: 'काव्य एवं रचनाएं', labelEn: 'Poetry' },
    { id: 'events', labelHi: 'आगामी शोज़', labelEn: 'Events' },
    { id: 'media', labelHi: 'वीडियो व मीडिया', labelEn: 'Media' },
    { id: 'book-show', labelHi: 'शो बुक करें', labelEn: 'Book a Show' },
    { id: 'contact', labelHi: 'संपर्क', labelEn: 'Contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090b]/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Poet Branding */}
          <button 
            onClick={() => scrollTo('hero')} 
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-gold-400/50 flex items-center justify-center bg-gradient-to-tr from-gold-600/30 via-royal-800 to-transparent shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Feather className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors" />
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold tracking-tight gold-gradient-text devanagari-font">
                {lang === 'hi' ? 'कवि गौरव साक्षी' : 'Kavi Gaurav Sakshi'}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 -mt-1 font-sans">
                {lang === 'hi' ? 'गीतकार एवं प्रख्यात कवि' : 'Poet • Lyricist • Performer'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-gold-400 bg-gold-500/10 border-b-2 border-gold-400'
                    : 'text-gray-300 hover:text-gold-300 hover:bg-white/5'
                }`}
              >
                {lang === 'hi' ? item.labelHi : item.labelEn}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gold-500/30 text-xs font-semibold text-gold-300 hover:bg-gold-500/15 transition-all"
              title={lang === 'hi' ? 'Switch to English' : 'हिंदी में देखें'}
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>

            {/* Newsletter Button */}
            <button
              onClick={onOpenNewsletter}
              className="p-2 rounded-full border border-gold-500/30 text-gold-300 hover:bg-gold-500/15 transition-all relative"
              title={lang === 'hi' ? 'विशेष सूचनाएं' : 'VIP Alerts'}
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </button>

            {/* Direct Book Show CTA */}
            <button
              onClick={() => scrollTo('book-show')}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-black font-semibold text-sm shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <Mic className="w-4 h-4" />
              <span>{lang === 'hi' ? 'शो बुक करें' : 'Book a Show'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="px-2.5 py-1 rounded border border-gold-500/30 text-xs font-semibold text-gold-300"
            >
              {lang === 'hi' ? 'EN' : 'हिन्दी'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-gold-400 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-gold-500/20 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:bg-gold-500/10 hover:text-gold-400 transition-colors"
              >
                {lang === 'hi' ? item.labelHi : item.labelEn}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-800 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNewsletter();
                }}
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg border border-gold-500/40 text-gold-300 font-medium"
              >
                <Bell className="w-4 h-4" />
                <span>{lang === 'hi' ? 'विशेष सदस्य क्लब (VIP Alerts)' : 'Join VIP Fan Club'}</span>
              </button>
              <button
                onClick={() => scrollTo('book-show')}
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-amber-500 text-black font-bold shadow-lg"
              >
                <Mic className="w-5 h-5" />
                <span>{lang === 'hi' ? 'इवेंट के लिए बुक करें' : 'Book a Show'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

