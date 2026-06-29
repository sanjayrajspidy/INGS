import React from 'react';
import { motion as m } from 'framer-motion';
import { RoleSwitcher } from '../components/RoleSwitcher';
import { Button } from '../components/Button';
import { Terminal, Code2, ArrowDownCircle, Mail, FileText, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const codeString = `{
  "engineer": {
    "name": "Chegadapogu Sanjay",
    "focus": "Artificial Intelligence & Full-Stack",
    "accreditations": [
      "ServiceNow Certified System Administrator (CSA)",
      "ServiceNow Certified Application Developer (CAD)",
      "AWS Certified AI Practitioner"
    ],
    "expertise": [
      "Full Stack Development",
      "Real-time Web Apps",
      "Database Systems",
      "DBMS & Machine Learning Basics"
    ],
    "teamRole": "Algorand Blockchain Club Lead",
    "attributes": {
      "problemSolving": "Strong",
      "leadership": "Proven",
      "designMindset": "Premium UI/UX & Detail Oriented"
    }
  }
}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-radial from-purple-500/10 via-blue-500/5 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Brand Story & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-medium tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            ServiceNow CSA & CAD Certified
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.1]"
          >
            CHEGADAPOGU <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-500">
              SANJAY
            </span>
          </m.h1>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <RoleSwitcher />
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-neutral-400 text-sm sm:text-base md:text-lg font-light leading-relaxed"
          >
            Computer Science Engineering student specializing in Artificial Intelligence with hands-on experience in full-stack web development, real-time applications, and database systems. ServiceNow CSA & CAD certified with strong problem-solving, leadership, and software development skills.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full"
          >
            <Button
              variant="primary"
              isMagnetic={true}
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            
            <Button
              variant="secondary"
              isMagnetic={true}
              onClick={() => scrollToSection('contact')}
              className="gap-2"
            >
              <Mail className="w-4 h-4 text-neutral-400" />
              Contact Me
            </Button>

            <Button
              variant="glass"
              isMagnetic={true}
              onClick={() => scrollToSection('contact')}
              className="gap-2"
            >
              <FileText className="w-4 h-4 text-neutral-400" />
              Download Resume
            </Button>
          </m.div>
        </div>

        {/* Right Column: IDE Mockup */}
        <m.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-md glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/5 glow-card">
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/60 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                profile.json
              </div>
              <div className="w-12" /> {/* spacer */}
            </div>

            {/* Editor Workspace */}
            <div className="p-4 sm:p-6 bg-neutral-950/20 font-mono text-xs sm:text-[11px] md:text-xs text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre">
              <div className="flex gap-4">
                {/* Line Numbers */}
                <div className="text-neutral-600 text-right select-none pr-2 border-r border-white/5">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                {/* Code Body */}
                <div className="text-left">
                  <span className="text-purple-400">const</span> <span className="text-blue-300">sanjay</span> = <span className="text-neutral-300">{codeString}</span>;
                </div>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-neutral-950/60 border-t border-white/5 text-[10px] text-neutral-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-green-500/80">● Ready</span>
                <span>UTF-8</span>
              </div>
              <div className="flex items-center gap-1">
                <Code2 className="w-3 h-3 text-purple-400" />
                <span>JSON</span>
              </div>
            </div>
          </div>
        </m.div>
      </div>

      {/* Scroll Down Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        onClick={() => scrollToSection('journey')}
        className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors z-10"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
        <ArrowDownCircle className="w-4 h-4" />
      </m.div>
    </section>
  );
};
