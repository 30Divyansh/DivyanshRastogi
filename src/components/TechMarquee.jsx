// src/components/TechMarquee.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiPython, SiTensorflow, 
  SiJavascript, SiNodedotjs, SiMongodb, SiGit,
  SiDocker, SiKubernetes, SiGraphql, SiPostgresql,
  SiTypescript, SiNextdotjs, SiVercel, SiSupabase
} from 'react-icons/si';

const techIcons = [
  { icon: SiReact, label: 'React' },
  { icon: SiTailwindcss, label: 'Tailwind' },
  { icon: SiPython, label: 'Python' },
  { icon: SiTensorflow, label: 'TensorFlow' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiGit, label: 'Git' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiKubernetes, label: 'Kubernetes' },
  { icon: SiGraphql, label: 'GraphQL' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiVercel, label: 'Vercel' },
  { icon: SiSupabase, label: 'Supabase' },
];

const TechMarquee = () => {
  // Duplicate for seamless loop
  const allIcons = [...techIcons, ...techIcons];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-[var(--bg-secondary)] dark:bg-[#0d1323] border-t border-b border-[var(--border-color)]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {allIcons.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <tech.icon className="text-3xl md:text-4xl" />
            <span className="text-sm font-light hidden sm:inline">{tech.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;