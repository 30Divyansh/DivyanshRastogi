// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaVolumeUp, FaVolumeMute, FaSun, FaMoon } from 'react-icons/fa';
import IntroVideo from './components/IntroVideo';
import MainPortfolio from './components/MainPortfolio';
import CursorTrail from './components/CursorTrail';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [bgVideoMuted, setBgVideoMuted] = useState(true);
  const bgVideoRef = useRef(null);

  // --- Theme handling ---
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') setIsDark(false);
    else if (storedTheme === 'dark') setIsDark(true);
    else setIsDark(true);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // --- Intro check ---
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) setShowIntro(false);
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  // --- Background video mute toggle ---
  const toggleBgVideoMute = () => {
    setBgVideoMuted(prev => !prev);
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !bgVideoRef.current.muted;
    }
  };

  return (
    <>
      {/* Global cursor trail */}
      <CursorTrail />

      {/* --- LAYER 1: Background Video (fixed, lowest z-index) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted={bgVideoMuted}
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.85) saturate(1.1)' }}
        >
          {/* Use the same intro video file as background */}
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Adaptive overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: isDark
              ? 'rgba(10, 17, 37, 0.55)'
              : 'rgba(253, 246, 227, 0.55)',
          }}
        />
      </div>

      {/* --- LAYER 2: All website content (above video) --- */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {showIntro ? (
            <IntroVideo
              key="intro"
              onComplete={handleIntroComplete}
              onSkip={handleIntroComplete}
            />
          ) : (
            <MainPortfolio key="portfolio" />
          )}
        </AnimatePresence>
      </div>

      {/* --- Controls: ONLY ONE mute/unmute button for the background video --- */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        onClick={toggleBgVideoMute}
        aria-label={bgVideoMuted ? 'Unmute background video' : 'Mute background video'}
        className="fixed bottom-6 left-6 z-[1100] flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--text-primary)] shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-[var(--glass-bg)] hover:shadow-[0_0_30px_var(--glow-color)]"
      >
        {bgVideoMuted ? (
          <FaVolumeMute className="h-5 w-5 text-red-400" />
        ) : (
          <FaVolumeUp className="h-5 w-5 text-emerald-400" />
        )}
        <span className="font-medium tracking-[0.08em]">
          {bgVideoMuted ? 'Muted' : 'Sound On'}
        </span>
      </motion.button>

      {/* Theme toggle (bottom-right) */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="fixed bottom-6 right-6 z-[1100] flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--text-primary)] shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-[var(--glass-bg)] hover:shadow-[0_0_30px_var(--glow-color)]"
      >
        {isDark ? (
          <FaSun className="h-5 w-5 text-yellow-400" />
        ) : (
          <FaMoon className="h-5 w-5 text-indigo-400" />
        )}
        <span className="font-medium tracking-[0.08em]">
          {isDark ? 'Light' : 'Dark'}
        </span>
      </motion.button>
    </>
  );
}

export default App;