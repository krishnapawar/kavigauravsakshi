import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Mic, Feather } from 'lucide-react';
import { poetData } from '../data/poetData';

export const Header = ({ currentPage, setCurrentPage, lang, setLang, onOpenSubscribe }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', labelHi: 'Home', labelEn: 'Home' },
    { id: 'about', labelHi: 'About', labelEn: 'About' },
    { id: 'event', labelHi: 'Event', labelEn: 'Event' },
    { id: 'poetry', labelHi: 'Poetry', labelEn: 'Poetry' },
    { id: 'newsletter', labelHi: 'Newsletter', labelEn: 'Newsletter' },
    { id: 'contact', labelHi: 'Contact', labelEn: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setMobileOpen(false);
    if (id === 'newsletter') {
      onOpenSubscribe();
    } else {
      setCurrentPage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-[#0f1118]/95 backdrop-blur-md shadow-xl py-3 border-b border-gray-800'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Modeled like KV Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ed5434] to-[#f97316] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              GS
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">
                {lang === 'hi' ? 'कवि गौरव साक्षी' : 'Kavi Gaurav Sakshi'}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#ed5434] font-semibold -mt-1">
                Official Website
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  currentPage === item.id
                    ? 'text-[#ed5434] border-b-2 border-[#ed5434] pb-1'
                    : 'text-gray-200 hover:text-[#ed5434]'
                }`}
              >
                {lang === 'hi' ? item.labelHi : item.labelEn}
              </button>
            ))}
          </nav>

          {/* Right Action: Language Switcher + Book a Show Button */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Lang switch */}
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gray-700 hover:border-gray-500 text-xs text-gray-300 font-medium transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#ed5434]" />
              <span>{lang === 'hi' ? 'EN' : 'हिन्दी'}</span>
            </button>

            {/* Book a Show CTA - Exact kumarvishwas.com style */}
            <button
              onClick={() => handleNavClick('book-show')}
              className="px-6 py-2.5 rounded-full bg-[#ed5434] hover:bg-[#d94424] text-white font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-[#ed5434]/25 hover:shadow-[#ed5434]/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {lang === 'hi' ? 'Book a Show' : 'Book a Show'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="px-2.5 py-1 rounded border border-gray-700 text-xs text-gray-200"
            >
              {lang === 'hi' ? 'EN' : 'हिन्दी'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white hover:text-[#ed5434] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#10131d] border-b border-gray-800 px-6 py-5 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-base font-semibold ${
                  currentPage === item.id ? 'text-[#ed5434]' : 'text-gray-200 hover:text-[#ed5434]'
                }`}
              >
                {lang === 'hi' ? item.labelHi : item.labelEn}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-800">
              <button
                onClick={() => handleNavClick('book-show')}
                className="w-full py-3 rounded-full bg-[#ed5434] text-white font-bold text-center tracking-wide uppercase shadow-md"
              >
                Book a Show
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

