import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { experience } from '../data';

function TimelineItem({ item, index }: { item: (typeof experience)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    ref.current.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  const companyColors: Record<string, string> = {
    'Self-Employed': '#10b981',
    Freshworks: '#0ea5e9',
    'Zoho Corporation': '#f59e0b',
    Infosys: '#8b5cf6',
  };

  const color = companyColors[item.company] || '#0ea5e9';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-10 pb-14 last:pb-0 group"
    >
      {/* Timeline vertical line */}
      <div className="absolute left-[7px] top-3 bottom-0 w-[1px]">
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: '100%' } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          style={{
            background: `linear-gradient(to bottom, ${color}60, ${color}20, transparent)`,
          }}
          className="w-full"
        />
      </div>

      {/* Timeline dot with ring */}
      <div className="absolute left-0 top-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.12 }}
          className="relative"
        >
          <div
            className="w-[15px] h-[15px] rounded-full border-2"
            style={{
              borderColor: color,
              background: `${color}20`,
              boxShadow: isHovered ? `0 0 15px ${color}40` : 'none',
              transition: 'box-shadow 0.3s ease',
            }}
          />
          {isHovered && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
              style={{ border: `1px solid ${color}40` }}
            />
          )}
        </motion.div>
      </div>

      {/* Card */}
      <div
        className="dark-card corner-squares rounded-xl overflow-hidden glass-glow"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top accent */}
        <div
          className="h-[1px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}50, transparent)`,
            opacity: isHovered ? 1 : 0.3,
            transition: 'opacity 0.4s ease',
          }}
        />

        <span className="sq sq-tl" /><span className="sq sq-tr" />
        <span className="sq sq-bl" /><span className="sq sq-br" />

        <div className="p-6">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: color }}
                />
                <span
                  className="text-[12px] sm:text-[10px] font-mono uppercase tracking-[0.15em]"
                  style={{ color }}
                >
                  {item.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-light transition-colors duration-300">
                {item.role}
              </h3>
              <p className="text-sm font-medium" style={{ color }}>{item.company}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm sm:text-xs text-zinc-500 font-mono">{item.period}</p>
              <p className="text-xs sm:text-[11px] text-zinc-600">{item.location}</p>
            </div>
          </div>

          {/* Highlights with staggered animation */}
          <ul className="space-y-2.5">
            {item.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 + i * 0.08 }}
                className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed flex gap-3 group/item"
              >
                <span
                  className="mt-1.5 w-1 h-1 rounded-full shrink-0 group-hover/item:scale-150 transition-transform"
                  style={{ background: color }}
                />
                <span className="group-hover/item:text-zinc-300 transition-colors duration-200">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  return (
    <section id="experience" className="relative py-28 px-6">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-4xl relative z-10" ref={sectionRef}>
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
            <p className="section-heading mb-0">Career</p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Where I've <span className="gradient-text">Built</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-500 max-w-lg leading-relaxed"
          >
            From Infosys to Freshworks to building my own SaaS — 6+ years of
            solving complex problems at India's best tech companies and beyond.
          </motion.p>
        </motion.div>

        <div className="relative">
          {experience.map((item, index) => (
            <TimelineItem key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
