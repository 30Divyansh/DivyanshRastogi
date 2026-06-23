// src/components/CursorTrail.jsx
import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, trail = [];
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Also track touch for mobile
    const onTouchMove = (e) => {
      const touch = e.touches[0];
      if (touch) {
        mouseX = touch.clientX;
        mouseY = touch.clientY;
      }
    };
    window.addEventListener('touchmove', onTouchMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Soft background glow
      const grd = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, Math.min(width, height) * 0.6
      );
      grd.addColorStop(0, 'rgba(79, 172, 254, 0.06)');
      grd.addColorStop(0.5, 'rgba(245, 87, 108, 0.03)');
      grd.addColorStop(1, 'rgba(15, 20, 40, 0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      // Rainbow trail
      trail.push({ x: mouseX, y: mouseY });
      if (trail.length > 80) trail.shift();

      for (let i = 0; i < trail.length - 1; i++) {
        const p1 = trail[i];
        const p2 = trail[i + 1];
        const progress = i / trail.length;
        const hue = (progress * 360 + Date.now() * 0.02) % 360;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${0.2 + progress * 0.5})`;
        ctx.lineWidth = 1.5 + progress * 4;
        ctx.shadowColor = `hsla(${hue}, 80%, 65%, 0.4)`;
        ctx.shadowBlur = 25;
        ctx.stroke();
      }

      // Glow dot at cursor
      const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 30);
      glow.addColorStop(0, 'rgba(255,255,255,0.15)');
      glow.addColorStop(0.5, 'rgba(79,172,254,0.1)');
      glow.addColorStop(1, 'rgba(79,172,254,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(mouseX - 30, mouseY - 30, 60, 60);

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ position: 'fixed', top: 0, left: 0 }}
    />
  );
};

export default CursorTrail;