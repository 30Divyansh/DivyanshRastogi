// src/components/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaUniversity, FaRobot, FaLaptopCode, FaUsers, FaRocket } from 'react-icons/fa';

const events = [
  { label: 'School', icon: <FaSchool />, desc: 'Foundation in STEM & coding' },
  { label: 'JIIT Noida', icon: <FaUniversity />, desc: 'B.Tech CSE · AI/ML focus' },
  { label: 'AI/ML Learning', icon: <FaRobot />, desc: 'Deep Learning, NLP, CV' },
  { label: 'Projects Development', icon: <FaLaptopCode />, desc: 'Full-stack & AI systems' },
  { label: 'Open Source & Leadership', icon: <FaUsers />, desc: 'Community & orgs' },
  { label: 'Software Engineering Career', icon: <FaRocket />, desc: 'Building for impact' },
];

const Timeline = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12"
      id="timeline"
    >
      <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mb-8">
        Journey
      </h2>
      <div className="relative flex flex-col gap-5 pl-6 border-l-2 border-[var(--border-color)]">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="text-indigo-300 text-xl -ml-[1.35rem] p-2 rounded-full bg-indigo-500/10">{e.icon}</span>
            <div className="glass-light p-5 rounded-3xl flex-1 border border-[var(--border-color)]">
              <h4 className="text-[var(--text-primary)] font-semibold">{e.label}</h4>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Timeline;