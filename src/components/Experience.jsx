// src/components/Experience.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import {
  FaUsers, FaHandsHelping, FaTrophy, FaChalkboardTeacher,
  FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp,
  FaStar, FaRocket, FaAward, FaBriefcase, FaGraduationCap
} from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    title: 'Lead Management Volunteer',
    org: 'POWER 3.0',
    duration: 'Jan 2024 – Apr 2024',
    location: 'Noida, India',
    icon: FaUsers,
    color: '#4facfe',
    gradient: 'from-blue-500 to-cyan-400',
    metrics: ['20+ Volunteers', '5 Events', '200+ Attendees'],
    description: 'Led a team of 20+ volunteers, coordinated event logistics, and managed operations for a series of technical workshops. Ensured seamless execution and high participant engagement.',
    achievements: [
      'Increased event participation by 40%',
      'Streamlined volunteer onboarding process',
      'Received "Best Team Lead" award'
    ],
    impact: 'Built a strong volunteer network and delivered impactful events that empowered 200+ students.'
  },
  {
    id: 2,
    title: 'Volunteer',
    org: 'CICE Hub',
    duration: 'Jun 2023 – Dec 2023',
    location: 'Noida, India',
    icon: FaHandsHelping,
    color: '#a855f7',
    gradient: 'from-purple-500 to-pink-400',
    metrics: ['10+ Workshops', '300+ Students', '5 Hackathons'],
    description: 'Assisted in organizing technical workshops, hackathons, and community outreach programs. Collaborated with team members to deliver high-quality learning experiences.',
    achievements: [
      'Co-organized 5 hackathons with 100+ participants each',
      'Developed workshop materials on AI/ML',
      'Mentored 30+ students in project development'
    ],
    impact: 'Helped create a vibrant tech community and inspired students to pursue innovative projects.'
  },
  {
    id: 3,
    title: 'Delegate Affairs Team Member',
    org: 'The JOUST',
    duration: 'Aug 2023 – Nov 2023',
    location: 'Delhi, India',
    icon: FaTrophy,
    color: '#f97316',
    gradient: 'from-orange-500 to-amber-400',
    metrics: ['50+ Delegates', '10+ Countries', '6 Committees'],
    description: 'Managed delegate relations, coordinated schedules, and ensured a smooth experience for participants from diverse backgrounds. Handled communications and conflict resolution.',
    achievements: [
      'Resolved 95% of delegate queries within 2 hours',
      'Implemented a digital check-in system',
      'Received "Outstanding Delegate Affairs" recognition'
    ],
    impact: 'Delivered a world-class conference experience and fostered international collaboration.'
  },
  {
    id: 4,
    title: 'Community Teaching Volunteer',
    org: 'STEM Outreach',
    duration: 'Sep 2022 – May 2023',
    location: 'Online',
    icon: FaChalkboardTeacher,
    color: '#10b981',
    gradient: 'from-emerald-500 to-green-400',
    metrics: ['50+ Students', '4 Courses', '10 Schools'],
    description: 'Taught programming and computer science fundamentals to high school students from underserved communities. Designed interactive lessons and mentored students in project building.',
    achievements: [
      'Developed a 4-week Python curriculum',
      '60% of students built their first project',
      'Received "Most Inspiring Teacher" award'
    ],
    impact: 'Empowered 50+ students with essential digital skills and ignited their passion for technology.'
  }
];

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '' }) => {
  const count = useSpring(0, { stiffness: 100, damping: 30 });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      count.set(value);
    }
  }, [inView, count, value]);

  const display = useTransform(count, (v) => Math.round(v));

  return (
    <span ref={ref} className="inline-block">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 md:py-16 relative overflow-hidden"
      id="experience"
    >
      {/* Floating background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">Experience & Leadership</h2>
          <span className="text-[var(--text-muted)] text-sm hidden md:block font-medium tracking-wide">
            {experiences.length} roles
          </span>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center connector line - hidden on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-color)] transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot with Icon - Desktop */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br shadow-lg border-2 border-white/20 backdrop-blur-sm"
                       style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)` }}>
                    <exp.icon className="text-white text-lg" />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className={`glass-premium rounded-3xl p-6 md:p-8 w-full md:w-[calc(50%-3rem)] relative overflow-hidden transition-all duration-300 border border-[var(--border-color)] hover:shadow-[0_20px_60px_var(--glow-color)] hover:border-[rgba(79,172,254,0.3)] hover:-translate-y-1`}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Gradient accent bar */}
                    <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${exp.gradient} rounded-l-full`} />

                    {/* Mobile dot indicator */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br shadow-md" style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)` }}>
                        <exp.icon className="text-white text-sm" />
                      </div>
                      <span className="text-xs font-medium text-[var(--text-muted)]">{exp.duration}</span>
                    </div>

                    <div className="ml-0 md:ml-0">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">{exp.title}</h3>
                          <p className="text-[var(--accent-primary)] font-semibold">{exp.org}</p>
                        </div>
                        <span className="hidden md:inline-block text-xs font-medium text-[var(--text-muted)] bg-[var(--glass-bg)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-3">
                        <FaMapMarkerAlt className="text-xs" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Metrics with Animated Counters */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {exp.metrics.map((metric, idx) => {
                          const parts = metric.split(' ');
                          const number = parseInt(parts[0]) || 0;
                          const label = parts.slice(1).join(' ');
                          return (
                            <div key={idx} className="glass-light px-3 py-1.5 rounded-full text-xs font-medium text-[var(--text-primary)] border border-[var(--border-color)] flex items-center gap-1">
                              <AnimatedCounter value={number} suffix={label.startsWith('+') ? '+' : ''} />
                              <span>{label.replace(/^\+/, '')}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Expandable Details */}
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-[var(--border-color)] space-y-4">
                          {/* Achievements */}
                          <div>
                            <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                              <FaStar className="text-yellow-400" /> Key Achievements
                            </h4>
                            <ul className="mt-2 space-y-1.5">
                              {exp.achievements.map((ach, i) => (
                                <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                                  <span className="text-[var(--accent-primary)] text-xs mt-1">▸</span>
                                  {ach}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Impact */}
                          <div>
                            <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                              <FaRocket className="text-emerald-400" /> Impact
                            </h4>
                            <p className="text-sm text-[var(--text-secondary)] mt-1">{exp.impact}</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Expand/Collapse Toggle */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <FaChevronUp /> Show less
                          </>
                        ) : (
                          <>
                            <FaChevronDown /> View details
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;