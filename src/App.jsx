import React, { useState, useEffect, useRef } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventPage } from './pages/EventPage';
import { BookShowPage } from './pages/BookShowPage';
import { PoetryPage } from './pages/PoetryPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { SubscribeModal } from './components/SubscribeModal';
import { FloatingSubscribeBtn } from './components/FloatingSubscribeBtn';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { poetData } from './data/poetData';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('hi');
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Audio Player State
  const [activeAudio, setActiveAudio] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef(null);

  // Preloader timeout (exact like kumarvishwas.com #preloader)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Listen to hash changes if user uses back/forward or direct URLs
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'event', 'poetry', 'book-show', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  const handleToggleAudio = (id, url, title) => {
    if (activeAudio && activeAudio.id === id) {
      if (isPlayingAudio) {
        audioRef.current?.pause();
        setIsPlayingAudio(false);
      } else {
        audioRef.current?.play().catch(() => {});
        setIsPlayingAudio(true);
      }
    } else {
      setActiveAudio({ id, url, title });
      setIsPlayingAudio(true);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const handleStopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setActiveAudio(null);
    setIsPlayingAudio(false);
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-gray-100 font-sans relative selection:bg-[#ed5434] selection:text-white">
      {/* 1. Preloader */}
      {loading && <Preloader />}

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlayingAudio(false)}
        preload="auto"
      />

      {/* 2. Top Header (Logo, Nav, Lang, Book a Show CTA) */}
      <Header
        currentPage={currentPage}
        setCurrentPage={changePage}
        lang={lang}
        setLang={setLang}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
      />

      {/* 3. Main Page Switcher (Normal website experience like kumarvishwas.com) */}
      <main>
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={changePage}
            lang={lang}
            onOpenVideo={(vid) => setSelectedVideo(vid)}
            onToggleAudio={handleToggleAudio}
            isPlayingAudio={isPlayingAudio}
            onOpenSubscribe={() => setIsSubscribeOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            setCurrentPage={changePage}
            lang={lang}
            onOpenSubscribe={() => setIsSubscribeOpen(true)}
          />
        )}

        {currentPage === 'event' && (
          <EventPage
            setCurrentPage={changePage}
            lang={lang}
          />
        )}

        {currentPage === 'poetry' && (
          <PoetryPage
            lang={lang}
            activeAudioId={isPlayingAudio ? activeAudio?.id : null}
            onToggleAudio={handleToggleAudio}
          />
        )}

        {currentPage === 'book-show' && (
          <BookShowPage
            lang={lang}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            lang={lang}
          />
        )}
      </main>

      {/* 4. Footer */}
      <Footer
        setCurrentPage={changePage}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
      />

      {/* 5. Floating Subscribe Button (#subscribeNow like kumarvishwas.com) */}
      <FloatingSubscribeBtn
        onClick={() => setIsSubscribeOpen(true)}
      />

      {/* 6. Subscribe Modal (#modal like kumarvishwas.com) */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />

      {/* 7. Video Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        lang={lang}
      />

      {/* 8. Floating Bottom Audio Player */}
      <AudioPlayerBar
        activeAudio={activeAudio}
        isPlaying={isPlayingAudio}
        onTogglePlay={() => {
          if (isPlayingAudio) {
            audioRef.current?.pause();
            setIsPlayingAudio(false);
          } else {
            audioRef.current?.play().catch(() => {});
            setIsPlayingAudio(true);
          }
        }}
        onStop={handleStopAudio}
        lang={lang}
      />
    </div>
  );
}
