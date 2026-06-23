// src/components/SocialIcon.jsx
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';

const SocialIcon = ({ link, iconName, label, ariaLabel, className = '' }) => {
  const IconComponent = Icons[iconName];
  if (!IconComponent) return null;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || label}
      className={`social-icon-wrapper ${className}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IconComponent className="social-icon text-xl md:text-2xl" />
      <span className="social-tooltip">{label}</span>
    </motion.a>
  );
};

export default SocialIcon;