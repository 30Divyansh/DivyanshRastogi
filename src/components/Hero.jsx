// src/components/Hero.jsx
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaDownload, FaPaperPlane, FaGithub, FaLinkedinIn, FaEnvelope,
  FaReact, FaPython, FaNode
} from 'react-icons/fa';
import { SiTensorflow, SiTailwindcss } from 'react-icons/si';

// ----- DATA -----
const stats = [
  { label: 'Projects', value: 12, suffix: '+' },
  { label: 'Coding Problems', value: 400, suffix: '+' },
];

const techIcons = [
  { icon: FaReact, color: '#61DAFB' },
  { icon: FaPython, color: '#3776AB' },
  { icon: SiTensorflow, color: '#FF6F00' },
  { icon: FaNode, color: '#339933' },
  { icon: SiTailwindcss, color: '#06B6D4' },
];

// ----- ORBITING ICONS -----
const OrbitingIcons = () => {
  const radius = 110;
  const count = techIcons.length;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {techIcons.map((tech, i) => {
        const angle = (i / count) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              x: [0, x, 0, -x, 0],
              y: [0, y, 0, -y, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.8,
            }}
            style={{ width: 36, height: 36 }}
          >
            <div className="glass-premium p-2 rounded-full border border-[var(--border-color)] shadow-md backdrop-blur-sm flex items-center justify-center">
              <tech.icon className="text-lg" style={{ color: tech.color }} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// ----- MAIN HERO -----
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setMousePosition({ x: dx / rect.width, y: dy / rect.height });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMagnetic = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx * 0.15);
    y.set(dy * 0.15);
  };

  const resetMagnetic = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12"
      id="hero"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl" />
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[var(--accent-primary)]/5"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light border border-[var(--border-color)] text-xs font-medium text-[var(--accent-primary)] tracking-wider"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight"
            >
              I'm <span className="gradient-text">Divyansh Rastogi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light text-[var(--text-secondary)] h-12"
            >
              <TypeAnimation
                sequence={[
                  'AI Engineer',
                  1200,
                  'Full Stack Developer',
                  1200,
                  'Problem Solver',
                  1200,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="text-cyan-400 dark:text-cyan-300 font-medium"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[var(--text-secondary)] text-base md:text-lg max-w-xl leading-relaxed"
            >
              B.Tech CSE student at <strong>JIIT Noida</strong>. Passionate about AI,
              full‑stack development, and crafting intelligent systems that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6 pt-2"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="/resume.pdf"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold"
                style={{ x: springX, y: springY }}
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Resume
              </motion.a>

              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-premium border border-[var(--border-color)] text-[var(--text-primary)] font-semibold"
                style={{ x: springX, y: springY }}
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane /> Contact
              </motion.a>

              <div className="flex gap-2 ml-2">
                <a href="#" className="social-icon-wrapper" aria-label="GitHub">
                  <FaGithub className="social-icon" />
                </a>
                <a href="#" className="social-icon-wrapper" aria-label="LinkedIn">
                  <FaLinkedinIn className="social-icon" />
                </a>
                <a href="#" className="social-icon-wrapper" aria-label="Email">
                  <FaEnvelope className="social-icon" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE – Interactive Profile Card with Image */}
          <div
            className="lg:col-span-2 relative flex justify-center"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="glass-premium p-8 rounded-3xl border border-[var(--border-color)] w-full max-w-sm relative overflow-hidden"
              style={{
                transform: `perspective(800px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Spotlight gradient */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(79,172,254,0.15), transparent 70%)`,
                }}
              />

              <OrbitingIcons />

              {/* Profile image – updated with your photo */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/20 flex items-center justify-center border-2 border-cyan-400/30 shadow-[0_0_60px_rgba(79,172,254,0.15)] overflow-hidden">
                  <img
                    src="/profile.jpg"   /* ← replace with your image path */
                    alt="Divyansh Rastogi"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="mt-4 text-xl font-bold text-[var(--text-primary)]">Divyansh Rastogi</h3>
                <p className="text-sm text-[var(--text-muted)]">B.Tech CSE · JIIT Noida</p>

                <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full glass-light border border-[var(--border-color)] text-xs font-medium text-[var(--accent-primary)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to work
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 w-full">
                  <div className="glass-light p-2 rounded-lg text-center border border-[var(--border-color)]">
                    <p className="text-xs text-[var(--text-muted)]">CGPA</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">8.9</p>
                  </div>
                  <div className="glass-light p-2 rounded-lg text-center border border-[var(--border-color)]">
                    <p className="text-xs text-[var(--text-muted)]">Projects</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">12+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;