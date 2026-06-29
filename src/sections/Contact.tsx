import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Mail, Phone, Send, CheckCircle2, ArrowUpRight, Code } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-radial from-blue-500/5 to-transparent blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="text-center md:text-left mb-16 space-y-4">
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display"
        >
          Let's Build Something Amazing
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-400 font-light max-w-xl text-sm sm:text-base"
        >
          Have a question, feedback, or a project in mind? Reach out directly via the form or my social channels.
        </m.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Direct info & links */}
        <m.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          <div className="space-y-6">
            
            {/* Email Card */}
            <a
              href="mailto:sanjaychegadapogu@gmail.com"
              className="group block border border-white/5 bg-neutral-900/30 backdrop-blur-md rounded-xl p-5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Email Me</span>
                  <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                    sanjaychegadapogu@gmail.com
                  </span>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+917013693200"
              className="group block border border-white/5 bg-neutral-900/30 backdrop-blur-md rounded-xl p-5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-blue-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Call Me</span>
                  <span className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                    +91 7013693200
                  </span>
                </div>
              </div>
            </a>

            {/* Socials & Profiles */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/sanjayrajspidy"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center border border-white/5 bg-neutral-900/30 rounded-xl py-4 hover:border-white/10 hover:bg-neutral-900/50 text-neutral-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 mb-1.5" />
                <span className="text-[10px] font-mono tracking-wider">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sanjay-raj-aa03482bb"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center border border-white/5 bg-neutral-900/30 rounded-xl py-4 hover:border-white/10 hover:bg-neutral-900/50 text-neutral-400 hover:text-white transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5 mb-1.5" />
                <span className="text-[10px] font-mono tracking-wider">LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/Sanjayraj_123/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center border border-white/5 bg-neutral-900/30 rounded-xl py-4 hover:border-white/10 hover:bg-neutral-900/50 text-neutral-400 hover:text-white transition-all duration-300"
              >
                <Code className="w-5 h-5 mb-1.5" />
                <span className="text-[10px] font-mono tracking-wider">LeetCode</span>
              </a>
            </div>

          </div>

          {/* Bottom Card: Resume download */}
          <div className="border border-white/5 bg-neutral-900/20 rounded-xl p-6 flex flex-col justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Credentials Booklet</h4>
              <p className="text-xs text-neutral-400 font-light">
                Verify academic metrics, certifications, and project experience in PDF format.
              </p>
            </div>
            <Button
              variant="glass"
              onClick={() => alert('Resume Download Placeholder - Document loaded directly from source resume content.')}
              className="w-full justify-between group"
            >
              <span>Download Official Resume</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

        </m.div>

        {/* Right Column: Contact form */}
        <m.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <Card className="p-8 h-full" glowColor="rgba(96, 165, 250, 0.08)">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <m.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white font-display">Send a Transmission</h3>
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-neutral-950/60 border border-white/5 focus:border-purple-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-neutral-950/60 border border-white/5 focus:border-purple-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your inquiry..."
                      className="w-full bg-neutral-950/60 border border-white/5 focus:border-purple-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full py-3 text-sm font-semibold justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        Transmit Message
                      </>
                    )}
                  </Button>
                </m.form>
              ) : (
                <m.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center items-center text-center space-y-6 py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircle2 className="w-7 h-7 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-display">Transmission Completed</h3>
                    <p className="text-sm text-neutral-400 max-w-sm font-light">
                      Your message has been verified and securely transmitted. I will respond to your provided address shortly.
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    onClick={() => setIsSuccess(false)}
                    className="text-xs px-5 py-2 font-mono"
                  >
                    Reset Connection
                  </Button>
                </m.div>
              )}
            </AnimatePresence>
          </Card>
        </m.div>

      </div>
    </section>
  );
};
