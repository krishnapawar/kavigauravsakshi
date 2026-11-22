import React from 'react';
import { ChevronUp, Facebook, Twitter, Instagram, Youtube, Heart, MapPin } from 'lucide-react';
import { poetData } from '../data/poetData';

export const Footer = ({ setCurrentPage, onOpenSubscribe }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050609] border-t border-gray-800 text-gray-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Navigation - Exact matching kumarvishwas.com */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm font-semibold text-gray-300">
          <button onClick={() => navTo('home')} className="hover:text-[#ed5434] transition-colors">Home</button>
          <span>|</span>
          <button onClick={() => navTo('about')} className="hover:text-[#ed5434] transition-colors">About</button>
          <span>|</span>
          <button onClick={() => navTo('event')} className="hover:text-[#ed5434] transition-colors">Event</button>
          <span>|</span>
          <button onClick={() => navTo('poetry')} className="hover:text-[#ed5434] transition-colors">Poetry</button>
          <span>|</span>
          <button onClick={() => navTo('book-show')} className="hover:text-[#ed5434] transition-colors">Book a Show</button>
          <span>|</span>
          <button onClick={() => navTo('contact')} className="hover:text-[#ed5434] transition-colors">Contact us</button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <a href={poetData.contact.socials.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-gray-700 hover:border-[#ed5434] hover:bg-[#ed5434] text-white flex items-center justify-center transition-all">
            <Facebook className="w-4 h-4" />
          </a>
          <a href={poetData.contact.socials.twitter} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-gray-700 hover:border-[#ed5434] hover:bg-[#ed5434] text-white flex items-center justify-center transition-all">
            <Twitter className="w-4 h-4" />
          </a>
          <a href={poetData.contact.socials.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-gray-700 hover:border-[#ed5434] hover:bg-[#ed5434] text-white flex items-center justify-center transition-all">
            <Instagram className="w-4 h-4" />
          </a>
          <a href={poetData.contact.socials.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-gray-700 hover:border-[#ed5434] hover:bg-[#ed5434] text-white flex items-center justify-center transition-all">
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        {/* Location Tag */}
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 mb-8">
          <MapPin className="w-3.5 h-3.5 text-[#ed5434]" />
          <span>Indore, Madhya Pradesh, India</span>
          <span>•</span>
          <span>Official Literary Secretariat</span>
        </div>

        {/* Copyright & ToTop - Exact kumarvishwas.com style */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p id="copy">
            © {new Date().getFullYear()} Kavi Gaurav Sakshi (Indore) - All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] text-gray-500">Official Portal</span>
            <button
              onClick={scrollToTop}
              id="toTop"
              className="p-2 rounded-full bg-white/10 hover:bg-[#ed5434] text-white transition-colors"
              title="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
