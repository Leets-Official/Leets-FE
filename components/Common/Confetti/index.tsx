'use client';

import { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const COLORS = ['#3584FB', '#6EA7FC', '#A8CAFD', '#FD8AF1', '#10DAB2', '#8658EA', '#FFD700', '#FF6B6B', '#FFFFFF'];
const PARTICLE_COUNT = 150;
const DURATION = 3.5;

interface Particle {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
  size: number;
  delay: number;
  rotation: number;
  shape: 'rect' | 'circle';
}

const generateParticles = (): Particle[] =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const spread = Math.random() * 50 + 10;
    return {
      id: i,
      startX: 50 + (Math.random() - 0.5) * 10,
      startY: 15 + (Math.random() - 0.5) * 10,
      endX: 50 + Math.cos(angle) * spread,
      endY: 15 + Math.sin(angle) * spread + Math.random() * 60,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 10 + 3,
      delay: Math.random() * 0.4,
      rotation: Math.random() * 1080 - 540,
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
    };
  });

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

const Confetti = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setParticles(generateParticles());
    const timer = setTimeout(() => setVisible(false), (DURATION + 2) * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <Overlay>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{
                left: `${p.startX}vw`,
                top: `${p.startY}vh`,
                rotate: 0,
                opacity: 1,
                scale: 0,
              }}
              animate={{
                left: `${p.endX}vw`,
                top: `${p.endY}vh`,
                rotate: p.rotation,
                opacity: [0, 1, 1, 0.6, 0],
                scale: [0, 1.5, 1, 0.6],
              }}
              transition={{
                duration: DURATION + Math.random() * 1.5,
                delay: p.delay,
                ease: [0.2, 0.8, 0.4, 1],
              }}
              style={{
                position: 'absolute',
                width: p.size,
                height: p.shape === 'rect' ? p.size * 1.8 : p.size,
                backgroundColor: p.color,
                borderRadius: p.shape === 'circle' ? '50%' : '2px',
              }}
            />
          ))}
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default memo(Confetti);
