// src/components/CodingProfiles.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const profiles = [
  { platform: 'LeetCode', icon: <SiLeetcode />, stats: '400+ DSA problems', link: '#' },
  { platform: 'GitHub', icon: <FaGithub />, stats: '15+ open source contributions', link: '#' },
  { platform: 'LinkedIn', icon: <FaLinkedin />, stats: 'Technical projects & network', link: '#' },
];

const CodingProfiles = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mb-8">
        Coding Profiles
      </h2>
      <div className="grid sm:grid-cols-3 gap-5">
        {profiles.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="glass p-6 rounded-3xl text-center glow-card block"
          >
            <div className="text-4xl text-indigo-300 mb-3">{p.icon}</div>
            <h4 className="text-[var(--text-primary)] font-semibold">{p.platform}</h4>
            <p className="text-[var(--text-secondary)] text-sm mt-2">{p.stats}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default CodingProfiles;