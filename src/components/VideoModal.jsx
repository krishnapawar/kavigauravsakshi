import React from 'react';
import { X, Youtube, Share2, Volume2 } from 'lucide-react';

export const VideoModal = ({ video, onClose, lang }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#10121a] rounded-2xl border border-gold-500/40 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#161822]">
          <div className="flex items-center space-x-2">
            <Youtube className="w-5 h-5 text-red-500" />
            <h3 className="text-sm sm:text-base font-bold text-gray-100 truncate max-w-md">
              {lang === 'hi' ? video.titleHi : video.titleEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.titleHi}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Info Footer */}
        <div className="p-4 sm:p-5 bg-[#12141c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-300">
          <div>
            <span className="font-semibold text-gold-400 mr-2">{video.platform}</span>
            <span>{video.caption}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <span>Views: <strong className="text-gray-200">{video.views}</strong></span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert(lang === 'hi' ? 'लिंक कॉपी हो गया!' : 'Link copied to clipboard!');
              }}
              className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-200 flex items-center space-x-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'शेयर' : 'Share'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

