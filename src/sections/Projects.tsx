import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ExternalLink, FileText, Send, Mic, Sparkles, Wand2, RefreshCw, Train, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  overview: string;
  purpose: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  renderMock: () => React.ReactNode;
}

interface AccentConfig {
  color: string;
  text: string;
  bg: string;
  border: string;
  glow: string;
  shadow: string;
  hoverBorder: string;
  hoverText: string;
  dot: string;
}

const projectAccents: Record<number, AccentConfig> = {
  1: { // Twaddle -> Purple
    color: '#c084fc',
    text: 'text-purple-400',
    bg: 'bg-purple-500',
    border: 'border-purple-500/20',
    glow: 'rgba(192, 132, 252, 0.15)',
    shadow: 'rgba(192, 132, 252, 0.06)',
    hoverBorder: 'hover:border-purple-400/30',
    hoverText: 'hover:text-purple-300',
    dot: 'bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.5)]'
  },
  2: { // Question Paper Generator -> Amber
    color: '#fbbf24',
    text: 'text-amber-400',
    bg: 'bg-amber-500',
    border: 'border-amber-500/20',
    glow: 'rgba(251, 191, 36, 0.15)',
    shadow: 'rgba(251, 191, 36, 0.06)',
    hoverBorder: 'hover:border-amber-400/30',
    hoverText: 'hover:text-amber-300',
    dot: 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
  },
  3: { // Lyria -> Emerald
    color: '#34d399',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500',
    border: 'border-emerald-500/20',
    glow: 'rgba(52, 211, 153, 0.15)',
    shadow: 'rgba(52, 211, 153, 0.06)',
    hoverBorder: 'hover:border-emerald-400/30',
    hoverText: 'hover:text-emerald-300',
    dot: 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]'
  },
  4: { // Railway Assistant -> Blue
    color: '#60a5fa',
    text: 'text-blue-400',
    bg: 'bg-blue-500',
    border: 'border-blue-500/20',
    glow: 'rgba(96, 165, 250, 0.15)',
    shadow: 'rgba(96, 165, 250, 0.06)',
    hoverBorder: 'hover:border-blue-400/30',
    hoverText: 'hover:text-blue-300',
    dot: 'bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.5)]'
  }
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};

export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projectsData: Project[] = [
    {
      id: 1,
      title: 'Twaddle',
      subtitle: 'Real-Time Communication Platform',
      overview: 'An instant messaging platform designed to support secure real-time messaging, collaborative channels, and low-latency file sharing.',
      purpose: 'Engineered to support seamless real-time communication with instant delivery, secure OTP verification, and dynamic typing states.',
      technologies: ['Node.js', 'Express.js', 'Socket.IO', 'SQLite', 'HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Secure OTP-based user authentication',
        'Real-time message transmission & collaborative channels',
        'Dynamic typing indicators & presence state tracking',
        'Responsive speech-to-text voice input integrations',
        'Custom interactive chat themes and styling presets',
        'Persistent storage optimized via local SQLite database'
      ],
      githubUrl: 'https://github.com/sanjayrajspidy',
      renderMock: () => (
        <div className="w-full h-72 rounded-xl bg-neutral-950 border border-white/5 overflow-hidden flex flex-col relative" aria-label="Twaddle Chat Client Mockup">
          {/* Header */}
          <div className="bg-neutral-900 px-4 py-2.5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide font-mono text-neutral-300">twaddle_chat_v1.0</span>
            </div>
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-white/10" />
              <span className="w-2 h-2 rounded-full bg-white/10" />
            </div>
          </div>
          {/* Chat Interface */}
          <div className="flex-1 p-4 space-y-3.5 overflow-y-auto text-[10px] font-sans">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[9px]">S</div>
              <div className="bg-neutral-900 border border-white/5 text-neutral-200 px-2.5 py-1.5 rounded-lg max-w-[70%]">
                Hey team! Testing the socket connection and voice inputs.
              </div>
            </div>
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-purple-900/40 border border-purple-500/20 text-neutral-100 px-2.5 py-1.5 rounded-lg max-w-[70%] text-right">
                Connection established. Typing indicator works flawlessly.
              </div>
              <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[9px]">U</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[9px]">S</div>
              <div className="bg-neutral-900 border border-white/5 text-neutral-300 px-2.5 py-1.5 rounded-lg max-w-[70%] flex items-center gap-1.5">
                <Mic className="w-3 h-3 text-red-400 animate-pulse" aria-hidden="true" />
                <span className="italic">Audio message (0:14)</span>
              </div>
            </div>
            {/* Typing Indicator */}
            <div className="flex items-center gap-1.5 text-neutral-500 pl-8 text-[9px]">
              <span>User is typing</span>
              <span className="flex gap-0.5" aria-hidden="true">
                <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" />
                <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.4s]" />
              </span>
            </div>
          </div>
          {/* Footer Input Bar */}
          <div className="p-2.5 bg-neutral-900/60 border-t border-white/5 flex items-center gap-2">
            <div className="flex-1 bg-neutral-950 rounded-md border border-white/5 px-2.5 py-1.5 text-[9px] text-neutral-500 flex items-center justify-between">
              <span>Write message...</span>
              <div className="flex gap-2 text-neutral-400">
                <Mic className="w-3.5 h-3.5 hover:text-white cursor-pointer" aria-label="Microphone" />
                <Send className="w-3.5 h-3.5 hover:text-white cursor-pointer" aria-label="Send" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Dynamic Question Paper Generator',
      subtitle: 'Automated Curriculum Evaluation Platform',
      overview: 'An automated examination generation platform designed to help faculty members programmatically construct and format balanced assessment papers from structured question databases.',
      purpose: 'Developed to eliminate repetitive manual formatting chores and automate balanced difficulty-curve selection for academic staff.',
      technologies: ['PHP', 'HTML5', 'CSS3', 'SQL'],
      features: [
        'Automated paper generation and formatting for faculty members',
        'Subject-centric structured question banking system',
        'Algorithmic weight balancing based on difficulty rules',
        'Standardized export-ready examination templates',
        'Drastically reduced administrative prep time by 80%'
      ],
      githubUrl: 'https://github.com/sanjayrajspidy',
      renderMock: () => (
        <div className="w-full h-72 rounded-xl bg-neutral-950 border border-white/5 overflow-hidden flex flex-col relative p-4 space-y-3 justify-center" aria-label="Question Paper Generator Console">
          {/* Grid visual */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-purple-400" aria-hidden="true" />
              <span className="text-xs font-semibold text-neutral-200 font-display">Exam Generator Portal</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">v1.2.0</span>
          </div>

          <div className="grid grid-cols-3 gap-3 flex-1">
            <div className="col-span-1 border border-white/5 bg-neutral-900/60 rounded-lg p-2.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[8px] font-mono text-neutral-500 uppercase">Step 1: Scope</span>
                <div className="text-[10px] font-semibold text-neutral-300">Data Structures</div>
              </div>
              <div className="space-y-1">
                <span className="text-[8px] font-mono text-neutral-500 uppercase">Step 2: Balance</span>
                <div className="text-[10px] text-neutral-400">30% Easy, 50% Medium, 20% Hard</div>
              </div>
              <button className="w-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 py-1 rounded text-[9px] font-mono flex items-center justify-center gap-1 mt-2 cursor-pointer transition-colors" aria-label="Re-generate Question Paper">
                <RefreshCw className="w-3 h-3 animate-spin-slow" aria-hidden="true" />
                Generate
              </button>
            </div>
            
            <div className="col-span-2 border border-white/5 bg-neutral-900/40 rounded-lg p-3 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-[9px] font-mono text-neutral-400">Generated_Paper_2026.pdf</span>
                <span className="text-[8px] bg-green-500/10 text-green-400 border border-green-500/20 px-1 rounded">Formatted</span>
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-1.5 py-2 font-mono text-[8px] text-neutral-500">
                <div className="text-neutral-400">Q1. Explain the differences between BST and AVL trees. [10M]</div>
                <div>Q2. Implement a circular queue utilizing array-based storage. [5M]</div>
                <div>Q3. Formulate the time complexity analysis of heap sort. [10M]</div>
              </div>
              <div className="w-full flex justify-end">
                <span className="text-[8px] text-neutral-500">Total Weight: 100 Marks</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Lyria',
      subtitle: 'Intelligent Academic Assistant',
      overview: 'An AI-powered academic assistant that helps students learn through intelligent conversations and contextual responses.',
      purpose: 'Engineered to deliver real-time, context-aware educational guidance and support personalized learning paths.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Speech API', 'AI Tools'],
      features: [
        'Intelligent conversations with contextual explanations',
        'Personalized student learning paths and interactive query support',
        'Voice-enabled interface with low-latency client-side speech API',
        'Seamless state management for persistent learning sessions',
        'Sleek, premium minimalist dashboard UI'
      ],
      githubUrl: 'https://github.com/sanjayrajspidy',
      renderMock: () => (
        <div className="w-full h-72 rounded-xl bg-neutral-950 border border-white/5 overflow-hidden flex flex-col justify-between relative p-4" aria-label="Lyria Conversational AI Interface">
          {/* Top Panel */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span className="text-xs font-semibold text-neutral-200 font-display">Lyria Academic AI</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full text-[8px] font-mono">
              <Wand2 className="w-2.5 h-2.5" aria-hidden="true" />
              AI Active
            </div>
          </div>

          {/* Voice Spectrum representation */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-4">
            <div className="flex items-center justify-center gap-1.5 h-12 w-full">
              {[0.3, 0.7, 0.5, 0.9, 0.4, 0.8, 0.6, 0.9, 0.4, 0.7, 0.3].map((val, i) => (
                <m.div
                  key={i}
                  animate={{ height: [12, val * 48, 12] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1 + Math.random(),
                    ease: 'easeInOut'
                  }}
                  className="w-1 bg-gradient-to-t from-blue-600 via-purple-400 to-indigo-300 rounded-full"
                />
              ))}
            </div>
            <div className="text-center space-y-1">
              <div className="text-[10px] text-neutral-400 font-mono">Conversing on Academic Topic...</div>
              <div className="text-xs font-medium text-white italic">"Explain the time complexity of quicksort..."</div>
            </div>
          </div>

          {/* Transcript Preview */}
          <div className="bg-neutral-900/60 border border-white/5 p-2 rounded-lg flex items-center justify-between text-[9px] font-mono text-neutral-400">
            <span>Context: Algorithm Analysis</span>
            <span className="text-blue-400">Response time: 140ms</span>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Railway Assistant',
      subtitle: 'Conversational AI & Info Retrieval Platform',
      overview: 'A conversational AI agent engineered for real-time railway information retrieval, scheduling updates, and user support.',
      purpose: 'Developed to simplify travel planning by providing instant, low-latency conversational access to railway schedules and route statuses.',
      technologies: ['Node.js', 'Express.js', 'Socket.IO', 'SQLite', 'Web Speech API'],
      features: [
        'Conversational interface for instant railway query resolution',
        'Real-time schedule indexing and route tracking',
        'Integrated speech-to-text input capability',
        'Optimized data pipeline for rapid database query execution',
        'Responsive layout with a premium live-ticker visualization'
      ],
      githubUrl: 'https://github.com/sanjayrajspidy',
      renderMock: () => (
        <div className="w-full h-72 rounded-xl bg-neutral-950 border border-white/5 overflow-hidden flex flex-col justify-between relative p-4" aria-label="Railway Info System Dashboard">
          {/* Top Panel */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-1.5">
              <Train className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <span className="text-xs font-semibold text-neutral-200 font-display">Railway Info Agent</span>
            </div>
            <div className="flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full text-[8px] font-mono">
              <Clock className="w-2.5 h-2.5" aria-hidden="true" />
              Live Tracker
            </div>
          </div>

          {/* Console Dialogue & Tracker */}
          <div className="flex-1 flex flex-col justify-center space-y-3 py-2 text-[10px] font-mono">
            {/* Terminal Text lines */}
            <div className="space-y-2">
              <div className="flex items-start gap-1 text-neutral-400">
                <span className="text-purple-400 font-bold">&gt;</span>
                <span>Query: Train 12626 running status?</span>
              </div>
              <div className="bg-neutral-900/80 border border-white/5 rounded-lg p-2 text-neutral-200">
                <div className="text-neutral-400 text-[9px] uppercase tracking-wider mb-1 font-semibold text-amber-400/90">Agent Response</div>
                Train 12626 (Kerala Express) is active and running. Next Halting: Nagpur (NGP) at 15:40 (On Time).
              </div>
            </div>

            {/* Visual Progress Bar of Train */}
            <div className="border border-white/5 bg-neutral-900/40 rounded-lg p-2 space-y-1.5">
              <div className="flex justify-between text-[8px] text-neutral-500">
                <span>New Delhi (NDLS)</span>
                <span>Trivandrum (TVC)</span>
              </div>
              <div className="w-full bg-neutral-950 rounded-full h-1.5 relative border border-white/5">
                {/* Completed Line */}
                <div className="bg-amber-400 h-full w-[45%] rounded-full" />
                {/* Animated train dot */}
                <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 border border-neutral-950 flex items-center justify-center">
                  <span className="absolute w-full h-full bg-amber-400 rounded-full animate-ping opacity-75" aria-hidden="true" />
                </div>
              </div>
              <div className="flex justify-between text-[8px] text-neutral-400">
                <span>Completed: 45%</span>
                <span>ETA: 19h 20m</span>
              </div>
            </div>
          </div>

          {/* Footer Info bar */}
          <div className="bg-neutral-900/60 border border-white/5 p-2 rounded-lg flex items-center justify-between text-[9px] font-mono text-neutral-400">
            <span>SQLite DB Indexed</span>
            <span className="text-amber-400">Sync status: OK</span>
          </div>
        </div>
      )
    }
  ];

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const project = projectsData[activeIndex];
  const activeAccent = projectAccents[project.id];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-transparent to-neutral-950/40 relative">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="text-center md:text-left space-y-4">
          <m.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-purple-400 uppercase font-mono block"
          >
            Engineering Portfolio
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display"
          >
            What I Build
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 font-light max-w-xl text-sm sm:text-base"
          >
            Presenting my core development work as products, emphasizing clean architectural layout, scalability, and technical detail.
          </m.p>
        </div>

        {/* Project Carousel Wrapper */}
        <div className="relative w-full">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 }
              }}
              className="w-full"
            >
              <Card
                className="p-6 sm:p-10 md:p-12 bg-neutral-950/40 glow-card w-full border transition-all duration-500"
                style={{
                  borderColor: `${activeAccent.color}20`,
                  boxShadow: `0 0 50px -10px ${activeAccent.shadow}`
                }}
                glowColor={activeAccent.glow}
              >
                <article
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                  aria-labelledby={`project-title-${project.id}`}
                >
                  {/* Content Panel */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-2">
                      <span className={`text-xs font-mono font-semibold uppercase tracking-wider transition-colors duration-500 ${activeAccent.text}`}>
                        Product {project.id}
                      </span>
                      <h3
                        id={`project-title-${project.id}`}
                        className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-neutral-400 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">Overview</h4>
                        <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
                          {project.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">Purpose</h4>
                        <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed">
                          {project.purpose}
                        </p>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Key Pillars</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-400">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className={`transition-colors duration-500 shrink-0 mt-0.5 ${activeAccent.text}`} aria-hidden="true">▪</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`bg-neutral-900 border border-white/5 rounded-full px-3 py-1 text-[10px] font-mono text-neutral-400 hover:text-white transition-all duration-300 ${activeAccent.hoverBorder}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-2">
                      {project.githubUrl && (
                        <Button
                          variant="secondary"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className={`gap-2 px-5 py-2 transition-all duration-300 ${activeAccent.hoverBorder} ${activeAccent.hoverText}`}
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <FaGithub className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                          Code Repository
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="primary"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="gap-2 px-5 py-2"
                          aria-label={`View live blueprint for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4 text-black" aria-hidden="true" />
                          Live Blueprint
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Mock Visual representation Panel */}
                  <div className="lg:col-span-6 w-full">
                    <Card
                      className="p-1.5 sm:p-2 bg-neutral-950/40 glow-card transition-all duration-500"
                      glowColor={activeAccent.glow}
                      style={{
                        borderColor: `${activeAccent.color}15`
                      }}
                    >
                      {project.renderMock()}
                    </Card>
                  </div>
                </article>
              </Card>
            </m.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <button
              onClick={handlePrev}
              className={`p-2 rounded-full border border-white/5 bg-neutral-900/40 text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer ${activeAccent.hoverBorder} ${activeAccent.hoverText}`}
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2.5">
              {projectsData.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeIndex
                      ? `${activeAccent.dot} w-6`
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className={`p-2 rounded-full border border-white/5 bg-neutral-900/40 text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer ${activeAccent.hoverBorder} ${activeAccent.hoverText}`}
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
