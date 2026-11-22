import React from 'react';
import { Bell } from 'lucide-react';

export const FloatingSubscribeBtn = ({ onClick }) => {
  return (
    <div id="subscribeNow" className="fixed bottom-6 right-6 z-40 group">
      <button
        onClick={onClick}
        className="flex items-center space-x-2.5 px-5 py-3 rounded-full bg-[#ed5434] hover:bg-[#d94424] text-white font-bold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <Bell className="w-4 h-4" />
        <span className="hidden sm:inline">Subscribe now for GS exclusive</span>
        <span className="sm:hidden">Exclusive</span>
      </button>
    </div>
  );
};

