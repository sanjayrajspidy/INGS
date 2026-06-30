import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { RoleSwitcher } from '../components/RoleSwitcher';
import { Button } from '../components/Button';
import { Terminal, Code2, ArrowDownCircle, Mail, FileText, ChevronRight, Code } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero: React.FC = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  
  useEffect(() => {
  const lines = [
    "sanjay@node:~$ init_system --verbose",
    "[sys] Booting core kernel modules... OK",
    "[sys] Connecting SQLite databases... Connected",
    "[sys] Opening Socket.IO communication ports... OK",
    "[sys] Mounting ServiceNow CAD/CSA credentials... Verified",
    "[sys] Establishing Algorand network nodes... Online",
    "--------------------------------",
    "> system ready",
    "Projects Loaded ........ OK",
    "Skills Loaded .......... OK",
    "GitHub Connected ....... OK",
    "",
    "Status:",
    "Available for Internship",
    "--------------------------------",
    "sanjay@node:~$ "
  ];

  let currentLineIndex = 0;

  const interval = setInterval(() => {
    if (currentLineIndex >= lines.length) {
      clearInterval(interval);
      return;
    }

    // Store the value before incrementing
    const currentLine = lines[currentLineIndex];

    setTerminalLines(prev => [...prev, currentLine]);

    currentLineIndex++;
  }, 150);

  return () => clearInterval(interval);
}, []);

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
            AI • FULL STACK • PRODUCT DEVELOPMENT
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.1]"
          >
            Building software<br />
            that solves<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              real problems.
            </span>
          </m.h1>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase"
          >
            Chegadapogu Sanjay
          </m.div>

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
            I build full-stack web applications and AI-powered solutions that solve practical problems. I enjoy turning ideas into reliable software with clean architecture, intuitive user experiences, and continuous learning.
          </m.p>

          {/* Trust Indicators */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full"
          >
            {/* <div className="glass-panel-light text-[10px] sm:text-xs font-mono px-3.5 py-1.5 rounded-full border border-white/5 text-neutral-300 flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> 8+ Projects Built
            </div> */}
            <div className="glass-panel-light text-[10px] sm:text-xs font-mono px-3.5 py-1.5 rounded-full border border-white/5 text-neutral-300 flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> ServiceNow CSA & CAD Certified
            </div>
            <div className="glass-panel-light text-[10px] sm:text-xs font-mono px-3.5 py-1.5 rounded-full border border-white/5 text-neutral-300 flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> AWS AI Practitioner
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center lg:items-start gap-4 pt-2 w-full"
          >
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                isMagnetic={true}
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                Explore Projects
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
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3.5 pt-1">
              <a
                href="https://github.com/sanjayrajspidy"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 hover:border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 shadow-md"
                aria-label="GitHub"
              >
                <FaGithub className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/sanjay-raj-aa03482bb"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 hover:border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://leetcode.com/u/Sanjayraj_123/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 hover:border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 shadow-md"
                aria-label="LeetCode"
              >
                <Code className="w-4.5 h-4.5" />
              </a>
            </div>
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
                system_terminal
              </div>
              <div className="w-12" /> {/* spacer */}
            </div>

            {/* Editor Workspace */}
            <div className="p-4 sm:p-6 bg-neutral-950/20 font-mono text-[10px] sm:text-[11px] md:text-xs text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre min-h-[260px]">
              <div className="flex flex-col space-y-1">
                {terminalLines
                .filter((line): line is string => typeof line === "string")
                .map((line, idx) => (
                  <div key={idx} className="flex flex-wrap">
                    <span className={
                        line?.startsWith("sanjay")
                          ? "text-purple-400"
                          : line?.startsWith("[sys]")
                          ? "text-blue-300"
                          : line?.startsWith(">")
                          ? "text-emerald-400 font-semibold"
                          : "text-neutral-300"
                      }
                    >
                      {line}
                      {idx === terminalLines.length - 1 && (
                        <span className="animate-pulse inline-block w-1.5 h-4 bg-white/70 ml-1 align-middle" />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-neutral-950/60 border-t border-white/5 text-[10px] text-neutral-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-green-500/80">● Online</span>
                <span>tty1</span>
              </div>
              <div className="flex items-center gap-1">
                <Code2 className="w-3 h-3 text-purple-400" />
                <span>Bash</span>
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
