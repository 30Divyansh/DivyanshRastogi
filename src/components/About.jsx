// src/components/About.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import {
  FaGraduationCap, FaBrain, FaCode, FaRocket, FaAward,
  FaUserGraduate, FaLaptopCode, FaUsers, FaReact,
  FaPython, FaNode, FaDatabase, FaCloud
} from 'react-icons/fa';
import { SiTensorflow, SiJavascript, SiTailwindcss } from 'react-icons/si';

// ----- Updated Stats (no icons, new values) -----
const stats = [
  { label: 'Projects', value: 5, suffix: '+' },
  { label: 'Coding Problems', value: 600, suffix: '+' },
  { label: 'Leadership Roles', value: 4, suffix: '' },
];

const timeline = [
  { label: 'Student', icon: FaUserGraduate, desc: 'B.Tech CSE @ JIIT Noida' },
  { label: 'Developer', icon: FaLaptopCode, desc: 'Full Stack & AI/ML Projects' },
  { label: 'AI Engineer', icon: FaBrain, desc: 'Building Intelligent Systems' },
];

const techBadges = [
  { icon: FaReact, label: 'React', color: '#61DAFB' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: FaPython, label: 'Python', color: '#3776AB' },
  { icon: SiTensorflow, label: 'TensorFlow', color: '#FF6F00' },
  { icon: FaNode, label: 'Node.js', color: '#339933' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
];

// ----- Animated Counter Component -----
const AnimatedCounter = ({ value, suffix = '', prefix = '' }) => {
  const count = useSpring(0, { stiffness: 100, damping: 30 });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) count.set(value);
  }, [inView, count, value]);

  const display = useTransform(count, (v) => {
    if (Number.isInteger(value)) return Math.round(v);
    return v.toFixed(1);
  });

  return (
    <span ref={ref} className="inline-flex items-baseline gap-0.5">
      <span className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </span>
    </span>
  );
};

// ----- Floating Badge Component (gentle bobbing) -----
const FloatingBadge = ({ icon: Icon, label, color, delay = 0, xOffset = 0, yOffset = 0 }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ delay, duration: 0.8 }}
      style={{ x: xOffset, y: yOffset }}
    >
      <motion.div
        className="glass-premium p-2 rounded-xl border border-[var(--border-color)] flex items-center gap-1.5 shadow-lg backdrop-blur-sm"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4 + Math.random() * 2,
          delay: Math.random() * 2,
          ease: 'easeInOut',
        }}
      >
        <Icon style={{ color }} className="text-sm" />
        <span className="text-[10px] font-medium text-[var(--text-muted)]">{label}</span>
      </motion.div>
    </motion.div>
  );
};

// ----- Main Component -----
const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 md:py-16 relative overflow-hidden"
      id="about"
    >
      {/* Background floating blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.div
                className="inline-block px-4 py-1.5 rounded-full glass-light text-xs font-semibold tracking-wide text-[var(--accent-primary)] border border-[var(--border-color)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ✦ About Me
              </motion.div>
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I'm <span className="gradient-text">Divyansh Rastogi</span>
              </motion.h1>
              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="px-3 py-1.5 glass-light rounded-full text-xs font-medium text-[var(--text-muted)] border border-[var(--border-color)] flex items-center gap-1.5">
                  <FaBrain className="text-purple-400" /> AI/ML Engineer
                </span>
                <span className="px-3 py-1.5 glass-light rounded-full text-xs font-medium text-[var(--text-muted)] border border-[var(--border-color)] flex items-center gap-1.5">
                  <FaCode className="text-blue-400" /> Full Stack Developer
                </span>
                <span className="px-3 py-1.5 glass-light rounded-full text-xs font-medium text-[var(--text-muted)] border border-[var(--border-color)] flex items-center gap-1.5">
                  <FaGraduationCap className="text-emerald-400" /> B.Tech CSE
                </span>
              </motion.div>
            </div>

            <motion.p
              className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <strong>Passionate</strong> Computer Science undergraduate at <strong>JIIT Noida</strong>,
              specializing in <em>Artificial Intelligence</em> and <em>Full Stack Development</em>.
              I love building intelligent systems that solve real-world problems — from training
              neural networks to architecting scalable web platforms.
            </motion.p>

            {/* Timeline */}
            <motion.div
              className="relative pl-6 border-l-2 border-[var(--accent-primary)]/30 space-y-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + idx * 0.15 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
                    <item.icon className="text-sm" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">{item.label}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating tech badges */}
            <div className="relative h-0">
              {techBadges.map((badge, idx) => (
                <FloatingBadge
                  key={idx}
                  icon={badge.icon}
                  label={badge.label}
                  color={badge.color}
                  delay={0.2 + idx * 0.1}
                  xOffset={(idx % 3 - 1) * 60 + (idx % 2 === 0 ? 20 : -20)}
                  yOffset={(Math.floor(idx / 3) - 0.5) * 80}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Education Card with Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="glass-premium p-6 md:p-8 rounded-3xl border border-[var(--border-color)] relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_var(--glow-color)]"
              style={{
                transform: `perspective(800px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(79,172,254,0.15), transparent 70%)`,
                }}
              />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <FaGraduationCap className="text-indigo-400" /> Education
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">B.Tech Computer Science & Engineering</p>
                </div>
                <span className="px-3 py-1 glass-light rounded-full text-xs font-medium text-[var(--accent-primary)] border border-[var(--border-color)]">
                  2022 – 2026
                </span>
              </div>

              {/* Profile + University */}
              <div className="flex items-center gap-4 mb-4 p-3 glass-light rounded-xl border border-[var(--border-color)]">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(79,172,254,0.1)] overflow-hidden flex-shrink-0">
                  <img
                    src="/profile.jpg"
                    alt="Divyansh Rastogi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">JIIT Noida</p>
                  <p className="text-xs text-[var(--text-muted)]">CGPA: 8.7 / 10</p>
                </div>
              </div>

              {/* Stats Grid – no icons */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="glass-light p-3 rounded-xl border border-[var(--border-color)] text-center"
                    whileHover={{ scale: 1.03, borderColor: 'rgba(79,172,254,0.3)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-[10px] font-medium text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Expandable Details */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors flex items-center gap-1"
              >
                {isExpanded ? 'Show less ↑' : 'More about me ↓'}
              </button>

              <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-[var(--border-color)] space-y-3 mt-3">
                  <div className="flex items-start gap-2">
                    <FaAward className="text-yellow-400 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Certifications</p>
                      <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc list-inside">
                        <li>AI & ML Specialization – Coursera</li>
                        <li>Full Stack Web Development – Udemy</li>
                        <li>Data Structures & Algorithms – LeetCode</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaRocket className="text-emerald-400 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Leadership & Activities</p>
                      <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc list-inside">
                        <li>Lead Management Volunteer @ POWER 3.0</li>
                        <li>Volunteer @ CICE Hub</li>
                        <li>Delegate Affairs Team @ The JOUST</li>
                        <li>Community Teaching Volunteer @ STEM Outreach</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;