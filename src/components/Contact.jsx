// src/components/Contact.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import SocialIcon from './SocialIcon';
import { SOCIAL_LINKS, CONTACT_INFO } from '../config/socialLinks';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Error sending message.'));
  };

  const socialLinksArray = Object.values(SOCIAL_LINKS);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12"
      id="contact"
    >
      <div className="glass p-8 md:p-12 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mb-6">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input type="text" name="user_name" placeholder="Your Name" className="w-full p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-tertiary)]" />
            <input type="email" name="user_email" placeholder="Email" className="w-full p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-tertiary)]" />
            <textarea name="message" rows="5" placeholder="Message" className="w-full p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-tertiary)]" />
            <button type="submit" className="btn-primary">Send</button>
          </form>

          <div className="glass-light p-6 rounded-3xl border border-[var(--border-color)] space-y-5">
            <h3 className="text-xl font-semibold text-white">Let's Connect</h3>
            <p className="text-gray-400 text-sm">Reach out through any of these channels</p>

            <div className="space-y-3">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-indigo-300 transition group">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-300 group-hover:bg-indigo-500/20 transition"><FaPhone /></span>
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={SOCIAL_LINKS.email.url} className="flex items-center gap-3 text-gray-300 hover:text-indigo-300 transition group">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-300 group-hover:bg-indigo-500/20 transition"><FaEnvelope /></span>
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a href={SOCIAL_LINKS.whatsapp.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition group">
                <span className="p-2 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition"><FaWhatsapp /></span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-gray-400 text-xs mb-3">Social Profiles</p>
              <div className="flex flex-wrap gap-2">
                {socialLinksArray.map((social) => (
                  <SocialIcon
                    key={social.label}
                    link={social.url}
                    iconName={social.icon}
                    label={social.label}
                    ariaLabel={social.ariaLabel}
                    className="!p-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;