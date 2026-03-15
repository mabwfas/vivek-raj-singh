import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { skills, techStack } from '../data';

/* Radial skill gauge — editorial alternative to progress bars */
function SkillGauge({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [isHovered, setIsHovered] = useState(false);

  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;

  const categoryColors: Record<string, string> = {
    frontend: '#0ea5e9',
    backend: '#10b981',
    design: '#f59e0b',
  };
  const color = categoryColors[skill.category] || '#0ea5e9';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="dark-card corner-squares rounded-xl p-4 flex flex-col items-center gap-3 group cursor-default glass-glow gauge-shine"
    >
      <span className="sq sq-tl" /><span className="sq sq-tr" />
      <span className="sq sq-bl" /><span className="sq sq-br" />

      {/* Circular gauge */}
      <div className="relative w-[76px] h-[76px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 76 76">
          {/* Background track */}
          <circle
            cx="38" cy="38" r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="3"
          />
          {/* Progress arc */}
          <motion.circle
            cx="38" cy="38" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              filter: isHovered ? `drop-shadow(0 0 6px ${color}60)` : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </svg>
        {/* Center value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-sm font-bold font-mono transition-colors duration-300"
            style={{ color: isHovered ? color : 'rgba(255,255,255,0.8)' }}
          >
            {skill.level}
          </span>
        </div>
      </div>

      <span className="text-xs text-zinc-400 text-center leading-tight group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
}

function TechTag({ tech, color, delay }: { tech: string; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="dark-card rounded-lg px-4 py-2.5 text-sm text-zinc-300 cursor-default inline-flex items-center gap-2"
    >
      <span
        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
        style={{
          background: isHovered ? color : 'rgba(255,255,255,0.15)',
          boxShadow: isHovered ? `0 0 8px ${color}50` : 'none',
        }}
      />
      <span className="group-hover:text-white transition-colors">{tech}</span>
    </motion.div>
  );
}

const categoryColors: Record<string, string> = {
  frontend: '#0ea5e9',
  backend: '#10b981',
  tools: '#f59e0b',
};

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-12 h-[1px] bg-gradient-to-r from-brand to-transparent origin-left"
            />
            <p className="section-heading mb-0">Expertise</p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-500 max-w-lg leading-relaxed"
          >
            Mastery across web applications, Shopify stores, and full-stack development — from
            pixel-perfect frontends to scalable backends and cloud infrastructure.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Radial skill gauges */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-mono mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand/60" />
              <div className="w-6 h-[1px] bg-brand/40" />
              Proficiency
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <SkillGauge key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tech stack with categories */}
          <div className="space-y-8">
            {Object.entries(techStack).map(([category, techs], ci) => (
              <div key={category}>
                <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-mono mb-4 flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: `${categoryColors[category]}80` }}
                  />
                  <div
                    className="w-6 h-[1px]"
                    style={{ background: `${categoryColors[category]}60` }}
                  />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, ti) => (
                    <TechTag
                      key={tech}
                      tech={tech}
                      color={categoryColors[category] || '#0ea5e9'}
                      delay={ci * 0.1 + ti * 0.04}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech ticker / marquee */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
          <div className="marquee-track">
            {Array.from({ length: 3 }, () => Object.values(techStack).flat())
              .flat()
              .map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="text-xs text-zinc-600 font-mono whitespace-nowrap flex items-center gap-6"
                >
                  {tech}
                  <span className="w-1 h-1 rounded-full bg-zinc-700/60" />
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
