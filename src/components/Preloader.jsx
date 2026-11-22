import React from 'react';

export const Preloader = () => {
  return (
    <div id="preloader" className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0f15] transition-opacity duration-500">
      <div className="relative w-14 h-14">
        {/* Animated circle-side loader like kumarvishwas.com */}
        <div className="w-14 h-14 rounded-full border-4 border-white/10 border-t-[#ed5434] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-[#ed5434] font-bold text-xs">
          GS
        </div>
      </div>
    </div>
  );
};

