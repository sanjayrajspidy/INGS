import React from 'react';
import { motion as m } from 'framer-motion';
import { Calendar, MapPin, Award, Terminal, Code2, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Card } from '../components/Card';

interface JourneyItem {
  id: number;
  period: string;
  stageTitle: string;
  location: string;
  description: string;
  keyAchievement: string;
  metricLabel: string;
  metricValue: string;
  iconType: 'start' | 'explore' | 'products' | 'leadership' | 'present';
}

const journeyData: JourneyItem[] = [
  {
    id: 5,
    period: '2026 – Present',
    stageTitle: 'Present Growth & Goals',
    location: 'Kurnool, Andhra Pradesh',
    description: 'Focusing on building production-grade full-stack web applications and scalable AI-powered solutions.',
    keyAchievement: 'Building AI-powered software and actively seeking Software Engineering opportunities.',
    metricLabel: 'Status',
    metricValue: 'Active',
    iconType: 'present',
  },
  {
    id: 4,
    period: '2025 – 2026',
    stageTitle: 'Leadership & Credentials',
    location: 'Kurnool, Andhra Pradesh',
    description: 'Directed blockchain learning tracks for peers and earned recognized cloud platform and AI practitioner certifications.',
    keyAchievement: 'Led the Algorand Blockchain Club and earned AWS + ServiceNow certifications.',
    metricLabel: 'Credentials',
    metricValue: 'ServiceNow/AWS',
    iconType: 'leadership',
  },
  {
    id: 3,
    period: '2025',
    stageTitle: 'Building Real Products',
    location: 'Kurnool, Andhra Pradesh',
    description: 'Shipped custom solutions solving real communication, automation, academic, and transit lookup issues.',
    keyAchievement: 'Developed Twaddle, Lyria, Railway Assistant and Dynamic Question Paper Generator.',
    metricLabel: 'Projects',
    metricValue: '4 Shipped',
    iconType: 'products',
  },
  {
    id: 2,
    period: '2024',
    stageTitle: 'Exploring Software Development',
    location: 'Kurnool, Andhra Pradesh',
    description: 'Dived into full-stack web architectures, server orchestration, local database integrations, and web sockets.',
    keyAchievement: 'Built my first full-stack applications.',
    metricLabel: 'Learning',
    metricValue: 'Full Stack',
    iconType: 'explore',
  },
  {
    id: 1,
    period: '2023',
    stageTitle: 'Started the Journey',
    location: 'Kurnool, Andhra Pradesh',
    description: 'Began college major in Artificial Intelligence and established strong programming fundamentals in C, Java, and Python.',
    keyAchievement: 'Built strong programming fundamentals.',
    metricLabel: 'Began',
    metricValue: 'Core CS',
    iconType: 'start',
  },
];

export const Journey: React.FC = () => {
  const getTimelineIcon = (type: JourneyItem['iconType']) => {
    switch (type) {
      case 'present':
        return <Zap className="w-4 h-4" aria-hidden="true" />;
      case 'leadership':
        return <ShieldCheck className="w-4 h-4" aria-hidden="true" />;
      case 'products':
        return <Sparkles className="w-4 h-4" aria-hidden="true" />;
      case 'explore':
        return <Code2 className="w-4 h-4" aria-hidden="true" />;
      case 'start':
        return <Terminal className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <section id="journey" className="py-24 px-4 relative max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center md:text-left mb-16 space-y-4">
        <m.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase font-mono block"
        >
          Milestones
        </m.span>
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display"
        >
          The Journey
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-400 font-light max-w-xl text-sm sm:text-base"
        >
          A timeline of my academic background and educational growth in computer science and artificial intelligence.
        </m.p>
      </div>

      {/* Timeline Layout */}
      <div className="relative pl-8 ml-4 sm:ml-6 md:ml-8 space-y-12">
        {/* Vertical timeline glowing line */}
        <div 
          className="absolute left-0 top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-purple-500/40 via-blue-500/20 to-purple-500/5 blur-[0.5px] pointer-events-none" 
          aria-hidden="true"
        />

        {journeyData.map((item, index) => (
          <m.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
            className="relative"
          >
            {/* Timeline node */}
            <m.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.15 + 0.1 }}
              className="absolute -left-[49px] top-1.5 w-[34px] h-[34px] rounded-full border border-purple-500/20 bg-neutral-950 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)] z-10"
            >
              {item.period.includes('Present') && (
                <span className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping pointer-events-none" aria-hidden="true" />
              )}
              {getTimelineIcon(item.iconType)}
            </m.div>

            <Card className="p-6 md:p-8" glowColor="rgba(96, 165, 250, 0.08)">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 text-purple-300">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-500">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                    {item.stageTitle}
                  </h3>

                  <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2 text-xs font-semibold text-purple-400 tracking-wide font-mono">
                    Key Achievement: <span className="text-neutral-300 font-normal">{item.keyAchievement}</span>
                  </div>
                </div>

                {/* Score badge */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 shrink-0 gap-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
                    {item.metricLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" aria-hidden="true" />
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight font-mono">
                      {item.metricValue}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </m.div>
        ))}
      </div>
    </section>
  );
};
