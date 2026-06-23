// src/components/ParticlesBg.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
        particles: {
          color: { value: '#818cf8' },
          links: { color: '#4f46e5', distance: 150, enable: true, opacity: 0.08, width: 1 },
          move: { direction: 'none', enable: true, outModes: 'out', speed: 0.6, random: true },
          number: { density: { enable: true, area: 1000 }, value: 90 },
          opacity: { value: 0.15 },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;