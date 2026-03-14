import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MapPin, Globe, Sparkles, FileText, Star } from 'lucide-react';
import { profile, stats } from '../data';

function FloatingOrb({ color, size, x, y, delay }: { color: string; size: number; x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none blob"
      style={{
        width: `min(${size}px, ${Math.round(size * 0.5)}vw)`,
        height: `min(${size}px, ${Math.round(size * 0.5)}vw)`,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color}15, ${color}05, transparent)`,
        filter: `blur(${size / 3}px)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

/* 21st.dev: Animated count-up effect for stats */
function AnimatedCounter({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) { setDisplay(value); return; }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Floating organic orbs */}
      <FloatingOrb color="#0ea5e9" size={600} x="10%" y="20%" delay={0} />
      <FloatingOrb color="#06b6d4" size={400} x="70%" y="60%" delay={2} />
      <FloatingOrb color="#34d399" size={300} x="80%" y="15%" delay={4} />
      <FloatingOrb color="#0284c7" size={250} x="5%" y="70%" delay={1} />

      {/* Radial center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Decorative orbiting dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none opacity-20">
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const radius = 120 + i * 15;
          return (
            <motion.div
              key={deg}
              className="absolute w-1 h-1 rounded-full bg-brand"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
            >
              <div
                className="w-1 h-1 rounded-full bg-brand/60"
                style={{ transform: `translateX(${radius}px)` }}
              />
            </motion.div>
          );
        })}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-4xl w-full"
      >
        {/* Badge — blur-in reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="inline-flex items-center gap-2.5 rounded-full glass-raised px-5 py-2.5 mb-6 glass-glow"
        >
          <Globe size={13} className="text-brand" />
          <span className="text-xs sm:text-[11px] text-zinc-400 font-mono tracking-[0.2em] uppercase">
            Full-Stack Problem Solver
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: 'spring', bounce: 0.3 }}
          className="mb-6"
        >
          <div className="relative w-28 h-28 mx-auto rounded-full p-[3px]" style={{ background: 'conic-gradient(from 0deg, #0ea5e9, #06b6d4, #34d399, #fbbf24, #0ea5e9, #0ea5e9)' }}>
            {/* Fallback initials */}
            <div className="w-full h-full rounded-full flex items-center justify-center text-3xl font-bold" style={{ background: '#0a0a0a' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400">
                {profile.initials}
              </span>
            </div>
            {/* Real photo — overlays initials when loaded */}
            <img
              src="/vivek.jpg"
              alt={profile.name}
              className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </motion.div>

        {/* Name — blur-in with staggered reveal */}
        {/* 21st.dev: Cinematic letter-by-letter blur reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, type: 'spring', bounce: 0.2 }}
          className="text-[clamp(2.25rem,7vw,7rem)] font-bold tracking-tight leading-[0.95] mb-6 relative"
        >
          {/* Dramatic glow behind name */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-[60%] h-[120%] rounded-full bg-gradient-to-r from-sky-500/[0.08] via-cyan-500/[0.06] to-emerald-500/[0.04] blur-[60px]" />
          </div>
          <span>
            {profile.name.split(' ').slice(0, -1).join(' ').split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block text-shimmer"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          <br />
          <span className="text-white/90">
            {profile.name.split(' ').slice(-1)[0].split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 0.9, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Title with decorative line — blur-in */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="flex items-center justify-center gap-4 mb-3"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hidden sm:block w-16 h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-brand/20 origin-right"
          />
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl px-2">
            {profile.title}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hidden sm:block w-16 h-[1px] bg-gradient-to-l from-transparent via-brand/50 to-brand/20 origin-left"
          />
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-zinc-600 text-sm mb-4"
        >
          <MapPin size={12} />
          <span>{profile.location}</span>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full glass-raised px-3.5 py-1.5 text-[11px]">
            <Star size={11} className="text-brand fill-brand" />
            <span className="text-zinc-400">Client Rating</span>
            <span className="text-white font-semibold">5.0/5.0</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full glass-raised px-3.5 py-1.5 text-[11px]">
            <span className="text-brand">&#9733;</span>
            <span className="text-zinc-400">$12M+ Revenue Generated</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full glass-raised px-3.5 py-1.5 text-[11px]">
            <span className="text-emerald-400">&#10003;</span>
            <span className="text-zinc-400">100% Client Retention</span>
          </div>
        </motion.div>

        {/* Stats — floating cards with perspective */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-14"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="dark-card corner-squares rounded-xl p-4 text-center group glass-glow backdrop-blur-sm"
            >
              <CornerSquaresMini />
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-display group-hover:text-brand-light transition-colors duration-300">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-[11px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-mono group-hover:text-zinc-400 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white hover:bg-brand-light transition-all duration-300 glow-brand shine-sweep"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={14} />
              View My Work
            </span>
          </a>
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full glass-raised px-8 py-3.5 text-sm font-medium text-zinc-300 hover:text-white hover:border-brand/30 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <FileText size={14} />
              View CV
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full glass-raised px-8 py-3.5 text-sm font-medium text-zinc-300 hover:text-white hover:border-brand/30 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — capsule with pulsing dot */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[11px] sm:text-[9px] font-mono text-zinc-600 tracking-widest uppercase">Scroll</span>
        <div className="scroll-capsule" />
      </motion.div>
    </section>
  );
}

function CornerSquaresMini() {
  return (
    <>
      <span className="sq sq-tl" />
      <span className="sq sq-tr" />
      <span className="sq sq-bl" />
      <span className="sq sq-br" />
    </>
  );
}
