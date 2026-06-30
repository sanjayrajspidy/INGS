import React from 'react';
import { motion as m } from 'framer-motion';
import { Card } from '../components/Card';
import { Handshake, Calendar, Terminal } from 'lucide-react';

export const Leadership: React.FC = () => {
  const highlights = [
    'Algorand Blockchain Club Lead',
    'Organizing blockchain workshops',
    'Coordinating technical events',
    'Supporting fellow members',
    'Team collaboration',
    'Promoting innovation and learning'
  ];

  return (
    <section id="leadership" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-radial from-purple-500/5 to-transparent blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="text-center md:text-left mb-16 space-y-4">
        <m.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase font-mono block"
        >
          Extracurriculars
        </m.span>
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display"
        >
          Leading Beyond Code
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-400 font-light max-w-xl text-sm sm:text-base leading-relaxed"
        >
          True leadership is defined by collaboration, initiative, and creating meaningful opportunities through technology. Here is how I drive innovation and impact outside the classroom.
        </m.p>
      </div>

      {/* Single Premium Leadership Showcase Card */}
      <div className="max-w-3xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card 
            className="p-8 sm:p-10 flex flex-col justify-between w-full hover:-translate-y-1 transition-all duration-300 hover:border-white/15 hover:shadow-[0_10px_30px_rgba(192,132,252,0.06)]" 
            glowColor="rgba(192, 132, 252, 0.12)"
          >
            <div className="space-y-8">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 text-purple-300">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      2025 – Present
                    </span>
                    <span className="text-neutral-500">GPCET</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">Team Lead</h3>
                    <p className="text-sm font-semibold text-neutral-400 font-mono">Algorand Blockchain Club</p>
                  </div>
                </div>

                {/* Handshake Leadership Icon */}
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-purple-400 shadow-md shrink-0">
                  <Handshake className="w-5.5 h-5.5" aria-hidden="true" />
                </div>
              </div>

              {/* Achievement Highlights List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Key Core Pillars</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 shrink-0" aria-hidden="true">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inspirational quote separated by a subtle border */}
              <div className="pt-6 border-t border-white/5 text-center sm:text-left">
                <p className="text-xs sm:text-sm text-neutral-400 italic font-light">
                  "Great technology is built by great teams working toward a shared vision."
                </p>
              </div>
            </div>

            {/* Terminal Status bar footer */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-purple-400" aria-hidden="true" />
                <span>active_orchestration</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" aria-hidden="true" />
            </div>
          </Card>
        </m.div>
      </div>
    </section>
  );
};
