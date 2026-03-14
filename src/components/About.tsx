import { motion, useInView } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { Award, GraduationCap, Quote, Shield } from 'lucide-react';
import { profile, education, awards, testimonials, certifications } from '../data';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InteractiveCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    ref.current.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`dark-card corner-squares rounded-xl overflow-hidden glass-glow ${className}`}
    >
      <span className="sq sq-tl" /><span className="sq sq-tr" />
      <span className="sq sq-bl" /><span className="sq sq-br" />
      {children}
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-12 h-[1px] bg-gradient-to-r from-brand to-transparent origin-left"
            />
            <p className="section-heading mb-0">About</p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Solving Complex <span className="gradient-text">Problems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-500 max-w-xl leading-relaxed mb-14"
          >
            6+ years of building platforms that generate real revenue — from SaaS products to enterprise systems, fintech to e-commerce.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left — Bio + Testimonials */}
          <FadeIn delay={0.1}>
            <p className="text-zinc-400 leading-[1.8] text-sm sm:text-[15px] mb-8">{profile.bio}</p>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <InteractiveCard key={i} className="p-5">
                  <div className="relative z-10">
                    <Quote size={14} className="text-brand/60 mb-3" />
                    <p className="text-[13px] sm:text-sm text-zinc-300 italic leading-relaxed mb-3">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-[1px] bg-gradient-to-r from-brand/40 to-transparent" />
                      <div>
                        <p className="text-xs sm:text-[11px] text-zinc-300 font-mono">{t.author}</p>
                        <p className="text-[11px] sm:text-[10px] text-zinc-600 font-mono">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </FadeIn>

          {/* Right — Education, Awards, Certs */}
          <div className="space-y-8">
            {/* Education */}
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
                  <GraduationCap size={16} className="text-brand" />
                </div>
                <h3 className="text-base font-semibold">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <InteractiveCard key={i} className="p-5">
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-1.5">
                        <h4 className="text-sm font-semibold text-white pr-4">{edu.degree}</h4>
                        <span className="text-[11px] sm:text-[10px] text-zinc-500 font-mono shrink-0 bg-white/[0.03] rounded-md px-2 py-0.5">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-[13px] sm:text-sm text-brand-light mb-1">{edu.school}</p>
                      <p className="text-xs sm:text-[11px] text-zinc-500 leading-relaxed">{edu.details}</p>
                    </div>
                  </InteractiveCard>
                ))}
              </div>
            </FadeIn>

            {/* Awards */}
            <FadeIn delay={0.3}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Award size={16} className="text-amber-500" />
                </div>
                <h3 className="text-base font-semibold">Awards & Recognition</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {awards.map((award, i) => (
                  <InteractiveCard key={i} className="p-4">
                    <div className="relative z-10">
                      <h4 className="text-sm sm:text-xs font-semibold text-white mb-1.5">{award.title}</h4>
                      <p className="text-xs sm:text-[11px] text-zinc-500 leading-relaxed">{award.detail}</p>
                    </div>
                  </InteractiveCard>
                ))}
              </div>
            </FadeIn>

            {/* Certifications */}
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Shield size={16} className="text-emerald-500" />
                </div>
                <h3 className="text-base font-semibold">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    whileHover={{ y: -2, borderColor: 'rgba(16, 185, 129, 0.3)' }}
                    className="text-xs sm:text-[11px] dark-card rounded-lg px-3 py-2 text-zinc-400 cursor-default"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
