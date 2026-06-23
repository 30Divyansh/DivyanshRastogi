// src/components/TechRadial.jsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  SiReact, SiTailwindcss, SiPython, SiTensorflow,
  SiJavascript, SiNodedotjs, SiMongodb, SiGit,
  SiDocker, SiKubernetes, SiGraphql, SiPostgresql,
  SiTypescript, SiNextdotjs, SiVercel, SiSupabase
} from 'react-icons/si';

const techIcons = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiTensorflow, label: 'TensorFlow', color: '#FF6F00' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiGit, label: 'Git', color: '#F05032' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiKubernetes, label: 'Kubernetes', color: '#326CE5' },
  { icon: SiGraphql, label: 'GraphQL', color: '#E10098' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiNextdotjs, label: 'Next.js', color: '#000000' },
  { icon: SiVercel, label: 'Vercel', color: '#000000' },
  { icon: SiSupabase, label: 'Supabase', color: '#3ECF8E' },
];

const orbitTransition = {
  repeat: Infinity,
  duration: 32,
  ease: 'linear',
};

const TechRadial = () => {
  const [radius, setRadius] = useState(180);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 640) setRadius(90);
      else if (w < 1024) setRadius(140);
      else setRadius(260);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const count = techIcons.length;
  const selectedTech = selectedIndex !== null ? techIcons[selectedIndex] : null;

  const handleIconClick = (index) => {
    setSelectedIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative w-full py-12 md:py-16 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.12),_transparent_42%)]" />
      <div className="relative w-[520px] h-[520px] max-w-full max-h-[80vh] flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border border-[var(--border-color)]"
          animate={{ rotate: 360 }}
          transition={orbitTransition}
        />

        <AnimatePresence>
          {selectedTech && (
            <motion.div
              key="selected-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none px-4"
            >
              <div className="glass-premium p-6 rounded-[36px] border border-[var(--border-color)] shadow-[0_0_90px_rgba(79,70,229,0.18)] max-w-[340px] text-center">
                <div className="mx-auto w-24 h-24 rounded-[32px] flex items-center justify-center bg-[var(--glass-bg)] border border-[var(--border-color)] shadow-[inset_0_0_28px_rgba(79,70,229,0.1)]">
                  <selectedTech.icon className="text-5xl" style={{ color: selectedTech.color }} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--text-primary)]">
                  {selectedTech.label}
                </h3>
                <p className="mt-3 text-[var(--text-secondary)] text-sm leading-6">
                  Focused tech spotlight. Tap the icon again to close and continue exploring the orbit.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={orbitTransition}>
          {techIcons.map((tech, index) => {
            const angle = (index / count) * 2 * Math.PI - Math.PI / 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle) * 0.8;
            const isSelected = selectedIndex === index;
            const isDimmed = selectedIndex !== null && !isSelected;

            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => handleIconClick(index)}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-tertiary)] ${
                  isSelected ? 'z-50' : 'z-20'
                }`}
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: isSelected ? 1.45 : 1,
                  filter: isDimmed ? 'grayscale(70%) brightness(0.75)' : 'none',
                }}
                transition={{ type: 'spring', stiffness: 160, damping: 16, duration: 0.7, delay: index * 0.025 }}
                whileHover={{ scale: isSelected ? 1.55 : 1.15 }}
                whileTap={{ scale: isSelected ? 1.5 : 1.05 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-2 rounded-[28px] p-3 backdrop-blur-[18px] border border-[var(--border-color)] bg-[var(--glass-bg)] shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className={`flex items-center justify-center rounded-3xl p-4 transition-all duration-300 ${
                      isSelected
                        ? 'bg-white/95 dark:bg-white/10 shadow-[0_0_35px_rgba(79,70,229,0.24)]'
                        : 'bg-white/15 dark:bg-white/5'
                    }`}
                  >
                    <tech.icon className="text-3xl md:text-4xl" style={{ color: tech.color || '#fff' }} />
                  </div>
                  <span className={`text-[10px] tracking-[0.22em] uppercase ${
                    isSelected ? 'text-[var(--accent-secondary)]' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {tech.label}
                  </span>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechRadial;
