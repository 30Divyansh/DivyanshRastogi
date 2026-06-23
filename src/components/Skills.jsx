// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Programming', skills: ['C++', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Frontend', skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'MongoDB'] },
  { title: 'AI / ML', skills: ['TensorFlow', 'Scikit-Learn', 'Hugging Face', 'OpenCV'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'VS Code'] },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      className="py-12"
      id="skills"
    >
      <h2 className="section-title">
        Skills
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              scale: 1.02, 
              borderColor: 'rgba(79, 172, 254, 0.5)',
              boxShadow: '0 20px 60px -15px rgba(79, 172, 254, 0.3)'
            }}
            className="glass-premium p-6 rounded-2xl transition-all duration-300 border border-white/5"
          >
            <h3 className="text-cyan-200 font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-purple-400" />
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 glass-premium rounded-xl text-sm text-gray-200 border border-white/5 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,172,254,0.15)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;