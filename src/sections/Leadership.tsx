import React from 'react';
import { motion as m } from 'framer-motion';
import { Card } from '../components/Card';
import { Users, Calendar, Trophy, Zap, Terminal } from 'lucide-react';

export const Leadership: React.FC = () => {
  const points = [
    {
      title: 'Activity Orchestration',
      description: 'Led all club activities and organized multiple technical and non-technical events in college.',
      icon: <Trophy className="w-4 h-4 text-purple-400" />
    },
    {
      title: 'Team Coordination',
      description: 'Coordinated cross-functional student teams and managed complex event execution timelines effectively.',
      icon: <Users className="w-4 h-4 text-blue-400" />
    },
    {
      title: 'Strategic Leadership',
      description: 'Defined club learning directions, focusing on blockchain protocols, decentralized applications, and consensus design.',
      icon: <Zap className="w-4 h-4 text-amber-400" />
    }
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
          Leadership & Impact
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-400 font-light max-w-xl text-sm sm:text-base"
        >
          Coordinating communities and fostering collaborative tech learning outside the traditional classroom framework.
        </m.p>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Summary Card */}
        <m.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex"
        >
          <Card className="p-8 flex flex-col justify-between w-full" glowColor="rgba(192, 132, 252, 0.1)">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 text-purple-300">
                  <Calendar className="w-3.5 h-3.5" />
                  2025 – Present
                </span>
                <span className="text-neutral-500">GPCET</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-display">Team Lead</h3>
                <p className="text-sm font-semibold text-neutral-400 font-mono">Algorand Blockchain Club</p>
              </div>

              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                As the Team Lead for the Algorand Blockchain Club at GPCET, I coordinate and direct activities centered on blockchain education, organizing campus events, and encouraging students to build decentralized software.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>active_leadership</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
            </div>
          </Card>
        </m.div>

        {/* Right Side: Key Pillars & Bullet Points */}
        <m.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col justify-between gap-6"
        >
          {points.map((point) => (
            <div
              key={point.title}
              className="flex-1 glass-panel rounded-xl p-6 flex gap-4 items-start border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
                {point.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-white text-sm sm:text-base tracking-tight font-display">
                  {point.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </m.div>
      </div>

    </section>
  );
};
