import React from 'react';
import { motion as m } from 'framer-motion';
import { Card } from '../components/Card';
import { Code2, Layout, Database, Cpu, Sparkles, ShieldCheck } from 'lucide-react';

interface ToolCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  glowColor: string;
  hoverShadow: string;
}

const toolboxData: ToolCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-5 h-5 text-purple-400" aria-hidden="true" />,
    skills: ['Python', 'Java', 'C', 'JavaScript', 'PHP'],
    glowColor: 'rgba(192, 132, 252, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(192,132,252,0.06)]',
  },
  {
    title: 'Frontend Development',
    icon: <Layout className="w-5 h-5 text-blue-400" aria-hidden="true" />,
    skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'Vite'],
    glowColor: 'rgba(96, 165, 250, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(96,165,250,0.06)]',
  },
  {
    title: 'Backend Development',
    icon: <Cpu className="w-5 h-5 text-rose-400" aria-hidden="true" />,
    skills: ['Node.js', 'Express.js', 'Socket.IO'],
    glowColor: 'rgba(251, 113, 133, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(251,113,133,0.06)]',
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5 text-amber-400" aria-hidden="true" />,
    skills: ['MySQL', 'SQLite', 'MongoDB'],
    glowColor: 'rgba(251, 191, 36, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(251,191,36,0.06)]',
  },
  {
    title: 'Artificial Intelligence',
    icon: <Sparkles className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    skills: ['Python', 'Google Gemini API', 'FAISS', 'Sentence Transformers', 'Prompt Engineering'],
    glowColor: 'rgba(34, 211, 238, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)]',
  },
  {
    title: 'Cloud & Developer Tools',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
    skills: ['Git', 'GitHub', 'VS Code', 'AWS', 'ServiceNow', 'Vercel'],
    glowColor: 'rgba(52, 211, 153, 0.12)',
    hoverShadow: 'hover:shadow-[0_8px_30px_rgba(52,211,153,0.06)]',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 25,
    },
  },
} as const;

export const Toolbox: React.FC = () => {
  return (
    <section id="toolbox" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-radial from-blue-500/5 to-transparent blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center md:text-left mb-16 space-y-4 relative z-10">
        <m.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase font-mono block"
        >
          Stack & Methodologies
        </m.span>
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display"
        >
          Engineering Toolbox
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-400 font-light max-w-xl text-sm sm:text-base"
        >
          No arbitrary graphs. Here is a direct categorization of programming languages, tools, frameworks, and database engines I leverage.
        </m.p>
      </div>

      {/* Cards Grid */}
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {toolboxData.map((category) => (
          <m.div
            key={category.title}
            variants={itemVariants}
            className="h-full"
          >
            <Card
              className={`p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:border-white/15 ${category.hoverShadow}`}
              glowColor={category.glowColor}
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-white text-base sm:text-lg tracking-tight font-display">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono bg-neutral-950/60 border border-white/5 text-neutral-300 hover:text-white hover:border-white/15 px-3 py-1.5 rounded-md transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Subtle Accent Line */}
              <div className="w-12 h-[1px] bg-white/10 mt-6 group-hover:w-20 group-hover:bg-purple-400/40 transition-all duration-300" aria-hidden="true" />
            </Card>
          </m.div>
        ))}
      </m.div>
    </section>
  );
};
