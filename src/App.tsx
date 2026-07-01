import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { GridBackground } from './components/GridBackground';
import { LandingScreen } from './components/LandingScreen';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Projects } from './sections/Projects';
import { Toolbox } from './sections/Toolbox';
import { Certifications } from './sections/Certifications';
import { Leadership } from './sections/Leadership';
import { Contact } from './sections/Contact';
import { Terminal, Menu, X, ArrowUpCircle, Sun, Moon, Sparkles, Check } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

const navItems = [
  { label: 'Journey', id: 'journey' },
  { label: 'What I Build', id: 'projects' },
  { label: 'Toolbox', id: 'toolbox' },
  { label: 'Credentials', id: 'certifications' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Contact', id: 'contact' },
];

const App: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
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

      <AnimatePresence mode="wait">
        {showLanding ? (
          <LandingScreen key="landing-screen" onEnter={() => setShowLanding(false)} />
        ) : (
          <m.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full h-full"
          >
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
                  className="flex items-center gap-2 text-white font-display font-bold tracking-tight text-sm sm:text-base cursor-pointer animate-[fadeIn_0.5s_ease-out]"
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

                {/* Desktop Theme & Action Panel */}
                <div className="hidden md:flex items-center gap-3">
                  {/* Theme Switcher Desktop Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                      className="glass-panel-light p-2.5 rounded-full hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer flex items-center justify-center text-neutral-400 hover:text-white"
                      aria-label="Toggle Theme Menu"
                    >
                      {theme === 'midnight' && <Moon className="w-4 h-4" />}
                      {theme === 'frost' && <Sun className="w-4 h-4" />}
                      {theme === 'neon' && <Sparkles className="w-4 h-4" />}
                    </button>
                    
                    <AnimatePresence>
                      {themeMenuOpen && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setThemeMenuOpen(false)} />
                          <m.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                            className="absolute right-0 mt-2 w-48 rounded-xl glass-panel p-3 shadow-2xl border border-white/5 z-20 space-y-2"
                          >
                            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-550 font-mono font-bold px-2 py-1 text-neutral-500">
                              Appearance
                            </div>
                            <div className="space-y-1">
                              <button
                                onClick={() => { setTheme('midnight'); setThemeMenuOpen(false); }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer text-left ${
                                  theme === 'midnight' ? 'bg-white/5 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                                }`}
                              >
                                <span className="flex items-center gap-2">🌙 Midnight</span>
                                {theme === 'midnight' && <Check className="w-3.5 h-3.5 text-purple-400" />}
                              </button>
                              <button
                                onClick={() => { setTheme('frost'); setThemeMenuOpen(false); }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer text-left ${
                                  theme === 'frost' ? 'bg-white/5 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                                }`}
                              >
                                <span className="flex items-center gap-2">☀ Frost</span>
                                {theme === 'frost' && <Check className="w-3.5 h-3.5 text-purple-400" />}
                              </button>
                              <button
                                onClick={() => { setTheme('neon'); setThemeMenuOpen(false); }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer text-left ${
                                  theme === 'neon' ? 'bg-white/5 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                                }`}
                              >
                                <span className="flex items-center gap-2">💜 Neon</span>
                                {theme === 'neon' && <Check className="w-3.5 h-3.5 text-purple-400" />}
                              </button>
                            </div>
                          </m.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact Direct button */}
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
                    {/* Appearance Segment Selector on Mobile */}
                    <div className="border-t border-white/5 pt-4 mt-2">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono font-bold px-1 mb-2">
                        Appearance
                      </div>
                      <div className="grid grid-cols-3 gap-2 bg-neutral-950/40 p-1 rounded-xl border border-white/5">
                        <button
                          onClick={() => setTheme('midnight')}
                          className={`py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer flex flex-col items-center gap-1 ${
                            theme === 'midnight' ? 'bg-white/5 text-white border border-white/5 shadow-md' : 'text-neutral-400 border border-transparent'
                          }`}
                        >
                          <span>🌙</span>
                          <span>Midnight</span>
                        </button>
                        <button
                          onClick={() => setTheme('frost')}
                          className={`py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer flex flex-col items-center gap-1 ${
                            theme === 'frost' ? 'bg-white/5 text-white border border-white/5 shadow-md' : 'text-neutral-400 border border-transparent'
                          }`}
                        >
                          <span>☀</span>
                          <span>Frost</span>
                        </button>
                        <button
                          onClick={() => setTheme('neon')}
                          className={`py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer flex flex-col items-center gap-1 ${
                            theme === 'neon' ? 'bg-white/5 text-white border border-white/5 shadow-md' : 'text-neutral-400 border border-transparent'
                          }`}
                        >
                          <span>💜</span>
                          <span>Neon</span>
                        </button>
                      </div>
                    </div>

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
                <m.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                >
                  <Hero />
                </m.div>
              </div>
              <Journey />
              <Projects />
              <Toolbox />
              <Certifications />
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
              >
                <Leadership />
              </m.div>
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
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
