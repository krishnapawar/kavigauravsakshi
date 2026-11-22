import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeTicker = ({ lang }) => {
  const itemsHi = [
    "कवि गौरव साक्षी",
    "अखिल भारतीय कवि सम्मेलन",
    "50M+ डिजिटल श्रोता",
    "साहित्य तक फेम",
    "गीतकार एवं प्रख्यात युवा कवि",
    "200+ भव्य स्टेज शो",
    "प्रेम और संवेदना की आवाज़",
    "युवा दिलों की धड़कन"
  ];

  const itemsEn = [
    "KAVI GAURAV SAKSHI",
    "ALL INDIA KAVI SAMMELAN",
    "50M+ DIGITAL AUDIENCE",
    "SAHITYA TAK FAME",
    "RENOWNED HINDI POET & LYRICIST",
    "200+ LIVE STAGE CONCERTS",
    "VOICE OF ROMANTIC VERSES",
    "YOUTH LITERARY ICON"
  ];

  const items = lang === 'hi' ? itemsHi : itemsEn;

  return (
    <div className="relative w-full bg-gradient-to-r from-[#14120c] via-[#211a0d] to-[#14120c] border-y border-gold-500/30 py-3 overflow-hidden shadow-inner marquee-container">
      <div className="flex w-[200%] marquee-track animate-marquee whitespace-nowrap">
        {/* Repeat list twice to create seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6 space-x-4">
            <span className="text-gold-300 font-semibold tracking-wider text-xs sm:text-sm uppercase font-sans">
              {text}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-500/70" />
          </div>
        ))}
      </div>
    </div>
  );
};

