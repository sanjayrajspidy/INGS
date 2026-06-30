import React from 'react';
import { motion as m } from 'framer-motion';
import { Card } from '../components/Card';
import { Mail, FileText, ChevronRight, MapPin, Clock } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-radial from-blue-500/5 to-transparent blur-[90px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Call to Action Headers */}
        <div className="lg:col-span-6 flex flex-col space-y-6 text-center md:text-left">
          <m.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-purple-400 uppercase font-mono block"
          >
            Get in Touch
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display leading-tight"
          >
            Let's Build Something Amazing Together.
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            I'm actively seeking Software Engineering internship and full-time opportunities where I can contribute, grow, and build impactful technology alongside passionate teams.
          </m.p>
        </div>

        {/* Right Column: Premium Glass Contact Card */}
        <m.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full"
        >
          <Card 
            className="p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 hover:border-white/15 hover:shadow-[0_12px_40px_rgba(192,132,252,0.06)]" 
            glowColor="rgba(192, 132, 252, 0.12)"
          >
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white font-display">Communication Channels</h3>

              {/* Clickable rows */}
              <div className="space-y-3.5">
                {/* Email row */}
                <a
                  href="mailto:sanjaychegadapogu@gmail.com"
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-neutral-900/30 hover:border-purple-500/20 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-950/20 transition-all">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Email Me</span>
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:text-purple-300 transition-colors">sanjaychegadapogu@gmail.com</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </a>

                {/* LinkedIn row */}
                <a
                  href="https://linkedin.com/in/sanjay-raj-aa03482bb"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-neutral-900/30 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-950/20 transition-all">
                      <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Connect</span>
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:text-blue-300 transition-colors">LinkedIn Profile</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </a>

                {/* GitHub row */}
                <a
                  href="https://github.com/sanjayrajspidy"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-neutral-900/30 hover:border-neutral-400/20 hover:bg-neutral-800/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-800/20 transition-all">
                      <FaGithub className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Follow</span>
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:text-neutral-300 transition-colors">GitHub Profile</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </a>

                {/* Resume row */}
                <button
                  onClick={() => alert('Resume Download portal.')}
                  className="w-full text-left group flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-neutral-900/30 hover:border-amber-500/20 hover:bg-amber-500/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-white/5 flex items-center justify-center text-amber-400 group-hover:bg-amber-950/20 transition-all">
                      <FileText className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Official Document</span>
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:text-amber-300 transition-colors">Download Resume</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </button>
              </div>

              {/* Stats Footer Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-6 text-xs font-mono text-neutral-400">
                <div className="space-y-1">
                  <span className="text-[9px] text-neutral-500 uppercase tracking-widest block">Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    Available for Internship
                  </span>
                </div>
                <div className="space-y-1 sm:pl-4 sm:border-l border-white/5">
                  <span className="text-[9px] text-neutral-500 uppercase tracking-widest block">Response Time</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" aria-hidden="true" />
                    &lt; 24 Hours
                  </span>
                </div>
                <div className="space-y-1 sm:pl-4 sm:border-l border-white/5">
                  <span className="text-[9px] text-neutral-500 uppercase tracking-widest block">Location</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" aria-hidden="true" />
                    Kurnool, Andhra Pradesh, India
                  </span>
                </div>
              </div>

              {/* Bottom Subtle Footer Line */}
              <div className="pt-4 border-t border-white/5 text-center">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block">
                  Currently available for Internships • Collaborations
                </span>
              </div>
            </div>
          </Card>
        </m.div>

      </div>
    </section>
  );
};
