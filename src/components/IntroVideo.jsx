// src/components/IntroVideo.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroVideo = ({ onComplete, onSkip, onVideoReady }) => {
  const videoRef = useRef(null);
  const [showLogo, setShowLogo] = useState(false);
  const [showVolumeHint, setShowVolumeHint] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          onVideoReady?.(video.currentTime);
          setShowVolumeHint(false);
        })
        .catch(() => {
          setShowVolumeHint(true);
        });
    }

    const hintTimeout = window.setTimeout(() => setShowVolumeHint(false), 3000);
    const logoTimeout = window.setTimeout(() => setShowLogo(true), 8000);

    const handleEnded = () => onComplete(video.currentTime);
    video.addEventListener('ended', handleEnded);

    return () => {
      window.clearTimeout(hintTimeout);
      window.clearTimeout(logoTimeout);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete, onVideoReady]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video?.duration && video.currentTime >= video.duration - 0.5 && !showLogo) {
      setShowLogo(true);
    }
  };

  const handleSkip = () => {
    const currentTime = videoRef.current?.currentTime ?? 0;
    onSkip(currentTime);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[1000] bg-[#0a0c1a] overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          onTimeUpdate={handleTimeUpdate}
          style={{ background: '#0a0c1a' }}
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-light tracking-wider text-white/90"
              >
                Divyansh
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-thin text-indigo-300/80 mt-2 tracking-[0.3em]"
              >
                RASTOGI
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05, color: '#818cf8' }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSkip}
        className="absolute top-6 right-6 z-30 text-gray-400 hover:text-indigo-300 text-sm font-light tracking-wider transition-all duration-300 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 hover:border-indigo-400/40 shadow-lg"
      >
        Skip Intro →
      </motion.button>

      <AnimatePresence>
        {showVolumeHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs text-gray-200 tracking-[0.2em]"
          >
            Audio is playing in the background. Use the sound control to mute.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 10, ease: 'linear' }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500/30 via-indigo-400/50 to-indigo-500/30 origin-left z-20"
        style={{ transformOrigin: 'left' }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/10 text-[10px] tracking-[0.3em] font-light"
      >
        00:00 / 00:10
      </motion.div>
    </motion.div>
  );
};

export default IntroVideo;
