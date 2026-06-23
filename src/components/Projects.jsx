// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'AI Image Generator',
    subtitle: 'AI Tools',
    desc: 'MERN-based AI Image Generator integrating DALL-E APIs, Cloudinary, and modern UI features.',
    tech: ['React', 'Node.js', 'MongoDB', 'DALL-E'],
    color: '#4facfe',
    gradient: 'from-blue-500 to-cyan-400',
    img: 'https://placehold.co/600x400/1a1f3a/4facfe?text=AI+Image',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Quantum Prediction Model',
    subtitle: 'Quantum AI',
    desc: 'Advanced AI techniques for prediction and analysis using modern machine learning methodologies.',
    tech: ['Python', 'TensorFlow', 'Scikit-Learn'],
    color: '#a855f7',
    gradient: 'from-purple-500 to-pink-400',
    img: 'https://placehold.co/600x400/1a1f3a/a855f7?text=Quantum+AI',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Tech Charades',
    subtitle: 'Gaming',
    desc: 'Interactive React-based multiplayer technical game with rounds, scoring, and responsive design.',
    tech: ['React', 'Tailwind', 'Socket.io'],
    color: '#f97316',
    gradient: 'from-orange-500 to-amber-400',
    img: 'https://placehold.co/600x400/1a1f3a/f97316?text=Tech+Charades',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    subtitle: 'UI/UX',
    desc: 'Personal portfolio showcasing projects, achievements, technical skills, and experience.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer'],
    color: '#10b981',
    gradient: 'from-emerald-500 to-green-400',
    img: 'https://placehold.co/600x400/1a1f3a/10b981?text=Portfolio',
    live: '#',
    github: '#',
  },
];

const Projects = () => {
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 md:py-16"
      id="projects"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">Projects</h2>
        <span className="text-[var(--text-muted)] text-sm hidden md:block font-medium tracking-wide">
          {projects.length} featured works
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="perspective-1000 h-full"
            onMouseEnter={() => handleFlip(project.id)}
            onMouseLeave={() => handleFlip(null)}
          >
            <div
              className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d ${
                flippedId === project.id ? 'rotate-y-180' : ''
              }`}
              style={{ minHeight: '440px' }}
            >
              {/* FRONT – Project Preview */}
              <div className="flip-card-front absolute inset-0 glass-premium rounded-3xl overflow-hidden backface-hidden flex flex-col border border-[var(--border-color)] hover:border-[rgba(79,172,254,0.3)] transition-all duration-300">
                {/* Image / Hero area */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 mix-blend-overlay`} />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-premium text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-color)] backdrop-blur-sm">
                    {project.subtitle}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full glass-premium text-xs font-medium text-[var(--text-muted)] border border-[var(--border-color)] backdrop-blur-sm">
                    {project.tech.length} tools
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm md:text-base mt-2 leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 glass-light rounded-xl text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] border border-[var(--border-color)] hover:border-[rgba(79,172,254,0.3)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                    <span className="text-[10px] text-[var(--text-muted)] tracking-wider font-medium">
                      Hover to flip →
                    </span>
                    <FaRocket className="text-[var(--text-muted)] text-sm opacity-50" />
                  </div>
                </div>
              </div>

              {/* BACK – Detailed Info / Actions */}
              <div className="flip-card-back absolute inset-0 glass-premium rounded-3xl overflow-hidden backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 md:p-10 text-center border border-[var(--border-color)]">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center mb-6`}>
                  <FaCode className="text-3xl text-white/80" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mt-3 max-w-xs leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 glass-light rounded-full text-[10px] font-medium text-[var(--text-muted)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 text-[10px] font-medium text-[var(--text-muted)]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.a
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79,172,254,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white text-sm font-semibold transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 glass-premium rounded-xl text-[var(--text-primary)] text-sm font-semibold border border-[var(--border-color)] transition hover:bg-[var(--glass-bg)]"
                  >
                    <FaGithub /> Code
                  </motion.a>
                </div>

                <p className="text-[10px] text-[var(--text-muted)] mt-4 tracking-wider">
                  Click to flip back
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;