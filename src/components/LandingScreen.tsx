import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import portraitImg from '../assets/portrait.png';

interface LandingScreenProps {
  onEnter: () => void;
}

const subtitles = ['Software Engineer', 'AI Developer', 'Full Stack Developer'];

export const LandingScreen: React.FC<LandingScreenProps> = ({ onEnter }) => {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotate subtitles
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEnter]);

  // Framer Motion animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
    exit: { 
      opacity: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } 
    }
  } as const;

  const portraitVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' as const } 
    },
    exit: { 
      scale: 1.12, 
      opacity: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } 
    }
  } as const;

  const backgroundNameVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.06, 
      transition: { duration: 1.5, delay: 0.4 } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.7, ease: 'easeInOut' as const } 
    }
  } as const;

  return (
    <m.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 w-full h-full flex flex-col items-center justify-center z-50 overflow-hidden bg-neutral-950/40 select-none"
    >
      {/* Background Ambient Glow */}
      <m.div 
        className="absolute w-[450px] h-[450px] rounded-full bg-radial from-purple-500/10 to-transparent blur-[120px] pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
          transition: 'transform 0.2s ease-out',
        }}
        exit={{
          scale: 1.5,
          opacity: 0,
          transition: { duration: 0.7, ease: 'easeOut' }
        }}
      />

      {/* Large Background Name */}
      <m.h1
        variants={backgroundNameVariants}
        className="absolute text-[7.5vw] font-extrabold uppercase tracking-tighter text-white font-display text-center leading-none select-none pointer-events-none z-0 whitespace-nowrap"
        style={{
          transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 0)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        Chegadapogu Sanjay
      </m.h1>

      {/* Main Content Area */}
      <div 
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl mx-auto space-y-8"
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {/* Circular Portrait Frame */}
        <m.div
          variants={portraitVariants}
          className="relative group w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full pointer-events-auto"
        >
          {/* Pulse Glow Backing */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-[15px] animate-pulse" aria-hidden="true" />
          
          {/* Animated Ring */}
          <svg className="absolute inset-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] animate-[spin_10s_linear_infinite]" aria-hidden="true">
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Portrait Image Container */}
          <div className="w-full h-full rounded-full border border-white/10 bg-neutral-900/40 backdrop-blur-md overflow-hidden p-1.5 shadow-2xl relative">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src={portraitImg}
                alt="Chegadapogu Sanjay"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                draggable={false}
              />
            </div>
          </div>
        </m.div>

        {/* Name and Titles block */}
        <div className="space-y-3.5">
          <m.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display"
          >
            CHEGADAPOGU <span className="text-purple-400">SANJAY</span>
          </m.h2>

          {/* Rotating Subtitle Card */}
          <div className="h-6 flex justify-center items-center relative overflow-hidden" aria-live="polite">
            <AnimatePresence mode="wait">
              <m.span
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-neutral-400 font-semibold uppercase tracking-widest text-[10px] sm:text-xs font-mono absolute"
              >
                {subtitles[index]}
              </m.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Tagline */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-neutral-400 font-light text-xs sm:text-sm md:text-base leading-relaxed max-w-md"
        >
          Building intelligent software, creating meaningful digital experiences, and solving real-world problems through technology.
        </m.p>

        {/* CTA Enter Button */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-4 pointer-events-auto"
        >
          <Button
            variant="primary"
            onClick={onEnter}
            className="px-8 py-3.5 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 relative group font-mono text-xs tracking-wider"
          >
            ENTER PORTFOLIO →
          </Button>
        </m.div>
      </div>
    </m.div>
  );
};
