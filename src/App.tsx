import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { GridBackground } from './components/GridBackground';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Projects } from './sections/Projects';
import { Toolbox } from './sections/Toolbox';
import { Certifications } from './sections/Certifications';
import { Leadership } from './sections/Leadership';
import { Contact } from './sections/Contact';
import { Terminal, Menu, X, ArrowUpCircle } from 'lucide-react';

const navItems = [
  { label: 'Journey', id: 'journey' },
  { label: 'What I Build', id: 'projects' },
  { label: 'Toolbox', id: 'toolbox' },
  { label: 'Credentials', id: 'certifications' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Contact', id: 'contact' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background navigation blur state
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ['hero', ...navItems.map((item) => item.id)];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-neutral-200 selection:bg-purple-500/30 selection:text-white bg-bg-darker antialiased">
      {/* Dynamic Background Setup */}
      <GridBackground />

      {/* Global Navigation Bar */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'glass-panel py-3.5 border-white/5 shadow-2xl'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 text-white font-display font-bold tracking-tight text-sm sm:text-base cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-purple-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span>CH.SANJAY</span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-950/40 border border-white/5 rounded-full p-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium font-mono tracking-wider transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-white bg-white/5 border border-white/5'
                    : 'text-neutral-400 hover:text-white border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Direct button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('contact')}
              className="glass-panel-light text-xs font-semibold px-4.5 py-2.5 rounded-full hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-400 hover:text-white rounded-lg border border-white/5 hover:bg-neutral-950/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden glass-panel border-b border-white/5 shadow-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium font-mono border ${
                    activeSection === item.id
                      ? 'text-white bg-white/5 border-white/5'
                      : 'text-neutral-400 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="w-full bg-white text-black text-center py-2.5 rounded-lg text-sm font-semibold mt-2 hover:bg-neutral-200 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Sections Wrapper */}
      <main className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <Journey />
        <Projects />
        <Toolbox />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-neutral-950/40 relative z-10 text-center text-xs font-mono text-neutral-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p>© 2026 Chegadapogu Sanjay. Built with React, Vite & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/sanjayrajspidy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sanjay-raj-aa03482bb" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:sanjaychegadapogu@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Scroll Top button */}
      <AnimatePresence>
        {scrolled && (
          <m.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollTo('hero')}
            className="fixed bottom-8 right-8 z-50 p-2.5 rounded-full glass-panel text-neutral-400 hover:text-white hover:border-white/15 transition-all shadow-xl cursor-pointer"
          >
            <ArrowUpCircle className="w-5 h-5" />
          </m.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
