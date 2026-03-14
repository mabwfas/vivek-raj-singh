import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = links.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="relative group">
          <span className="text-xl font-bold tracking-tight text-shimmer">SS</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand group-hover:w-full transition-all duration-300" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.04] border border-white/[0.06] rounded-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
          <div className="w-[1px] h-5 bg-white/[0.06] mx-2" />
          <a
            href="/portfolio/"
            className="flex items-center gap-1.5 rounded-full glass-raised px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:border-brand/30 transition-all duration-300 ml-1"
          >
            <FileText size={13} />
            <span className="relative z-10">Portfolio</span>
          </a>
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full glass-raised px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:border-brand/30 transition-all duration-300 ml-1"
          >
            <FileText size={13} />
            <span className="relative z-10">CV</span>
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-light transition-all duration-300 glow-brand shine-sweep ml-1"
          >
            <span className="relative z-10">Hire Me</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center dark-card"
        >
          {mobileOpen ? <X size={18} className="text-zinc-400" /> : <Menu size={18} className="text-zinc-400" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-t border-white/[0.04] overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm text-zinc-400 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/[0.03] transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="h-[1px] bg-white/[0.04] my-2" />
              <a
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg glass-raised px-5 py-3 text-sm font-medium text-zinc-300 text-center hover:text-white transition-colors mt-1"
              >
                <FileText size={14} />
                View CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white text-center hover:bg-brand-light transition-colors mt-1"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 21st.dev: Scroll progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{
          scaleX: scrollProgress,
          transformOrigin: '0% 50%',
          background: 'linear-gradient(90deg, #0ea5e9, #06b6d4, #ec4899)',
        }}
      />
    </motion.nav>
  );
}
