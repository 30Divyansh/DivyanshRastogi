// src/components/Footer.jsx
import React from 'react';
import SocialIcon from './SocialIcon';
import { SOCIAL_LINKS } from '../config/socialLinks';

const Footer = () => {
  const socialLinks = Object.values(SOCIAL_LINKS);

  return (
    <footer className="relative z-10 mt-16 border-t border-[var(--border-color)] py-8 text-center text-[var(--text-secondary)] text-sm glass-light backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[var(--accent-secondary)] font-medium tracking-wide">Building intelligent solutions for tomorrow.</p>
        <div className="flex justify-center gap-3 my-4">
          {socialLinks.map((social) => (
            <SocialIcon
              key={social.label}
              link={social.url}
              iconName={social.icon}
              label={social.label}
              ariaLabel={social.ariaLabel}
            />
          ))}
        </div>
        <p className="mt-2 text-xs opacity-75">© 2026 Divyansh Rastogi · crafted with React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;