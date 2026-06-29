import React from 'react';
import { motion as m } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card } from '../components/Card';

interface JourneyItem {
  id: number;
  period: string;
  institution: string;
  location: string;
  degree: string;
  metricLabel: string;
  metricValue: string;
  type: 'college' | 'intermediate' | 'school';
}

const journeyData: JourneyItem[] = [
  {
    id: 1,
    period: '2023 – Present',
    institution: 'G. Pullaiah College of Engineering and Technology',
    location: 'Kurnool, Andhra Pradesh',
    degree: 'B.Tech in Computer Science Engineering - Artificial Intelligence',
    metricLabel: 'CGPA',
    metricValue: '8.05',
    type: 'college',
  },
  {
    id: 2,
    period: '2021 – 2023',
    institution: 'Sri Masters Junior College',
    location: 'Kurnool, Andhra Pradesh',
    degree: 'Intermediate Education',
    metricLabel: 'CGPA',
    metricValue: '9.61',
    type: 'intermediate',
  },
  {
    id: 3,
    period: '2021',
    institution: 'Montessori Indus E.M High School',
    location: 'Kurnool, Andhra Pradesh',
    degree: 'SSC (Secondary School Certificate)',
    metricLabel: 'Percentage',
    metricValue: '86%',
    type: 'school',
  },
];

export const Journey: React.FC = () => {
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
      <div className="relative border-l border-white/5 pl-8 ml-4 sm:ml-6 md:ml-8 space-y-12">
        {journeyData.map((item, index) => (
          <m.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
          >
            {/* Timeline node */}
            <div className="absolute -left-[45px] top-1.5 w-[34px] h-[34px] rounded-full border border-white/10 bg-neutral-950 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.1)]">
              <GraduationCap className="w-4 h-4" />
            </div>

            <Card className="p-6 md:p-8" glowColor="rgba(96, 165, 250, 0.08)">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 text-purple-300">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-500">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                    {item.institution}
                  </h3>

                  <p className="text-neutral-400 text-sm sm:text-base font-light">
                    {item.degree}
                  </p>
                </div>

                {/* Score badge */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 shrink-0 gap-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
                    {item.metricLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
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
