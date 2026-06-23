// src/components/MainPortfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import TechRadial from './TechRadial';      // New radial tech icons
import Projects from './Projects';
import Experience from './Experience';
import CodingProfiles from './CodingProfiles';
import Timeline from './Timeline';
import Contact from './Contact';
import Footer from './Footer';
import ParticlesBg from './ParticlesBg';
import TechMarquee from './TechMarquee';

const MainPortfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-x-hidden"
    >
      <ParticlesBg />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <Hero />
     
        <About />
        <Skills />
        <TechRadial />          {/* 🌟 Premium radial tech icons */}
        <Projects />
        <Experience />
        <CodingProfiles />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default MainPortfolio;