// src/components/Contact.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
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
      className="py-10 md:py-16"
      id="contact"
    >
      <div className="glass p-6 md:p-12 rounded-3xl">
        <h2 className="section-title">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* --- LEFT: Form --- */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-tertiary)] transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-tertiary)] transition"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="w-full p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-tertiary)] transition resize-none"
            />
            <button
              type="submit"
              className="w-full md:w-auto btn-primary py-3 md:py-4"
            >
              Send Message
            </button>
          </form>

          {/* --- RIGHT: Contact Info Card --- */}
          <div className="glass-light p-6 md:p-8 rounded-3xl border border-[var(--border-color)] space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">Let’s Connect</h3>
              <p className="text-[var(--text-muted)] text-sm mt-1">
                Reach out through any of these channels
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition group"
              >
                <span className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/20 transition">
                  <FaPhone className="text-lg" />
                </span>
                <span className="text-sm md:text-base">{CONTACT_INFO.phone}</span>
              </a>

              {/* Email */}
              <a
                href={SOCIAL_LINKS.email.url}
                className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition group"
              >
                <span className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/20 transition">
                  <FaEnvelope className="text-lg" />
                </span>
                <span className="text-sm md:text-base">{CONTACT_INFO.email}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={SOCIAL_LINKS.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-green-500 transition group"
              >
                <span className="p-3 rounded-xl bg-green-500/10 text-green-500 group-hover:bg-green-500/20 transition">
                  <FaWhatsapp className="text-lg" />
                </span>
                <span className="text-sm md:text-base">Chat on WhatsApp</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/divyanshrastogi30"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition group"
              >
                <span className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/20 transition">
                  <FaLinkedinIn className="text-lg" />
                </span>
                <span className="text-sm md:text-base">divyanshrastogi30</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/30Divyansh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition group"
              >
                <span className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/20 transition">
                  <FaGithub className="text-lg" />
                </span>
                <span className="text-sm md:text-base">30Divyansh</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;