import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import { projects } from '../data';
import { Star, TrendingUp, Smartphone, Activity, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projectImages: Record<string, string[]> = {
  'Clear Edge Hauling': ['/projects/clearedge-1.jpg', '/projects/clearedge-2.jpg', '/projects/clearedge-3.jpg'],
  'Curioh Pets': ['/projects/curioh-1.jpg', '/projects/curioh-2.jpg', '/projects/curioh-3.jpg'],
  'Tandoore': ['/projects/tandoore-1.jpg', '/projects/tandoore-2.jpg', '/projects/tandoore-3.jpg', '/projects/tandoore-4.jpg'],
  'SquadBurn': ['/projects/squadburn-1.jpg', '/projects/squadburn-2.jpg', '/projects/squadburn-3.jpg'],
};

/* ── Image Carousel with auto-play and manual nav ── */
function ImageCarousel({ images, title, color, isHovered }: { images: string[]; title: string; color: string; isHovered: boolean }) {
  const [current, setCurrent] = useState(0);
  const [validImages, setValidImages] = useState<string[]>(images);

  // Filter out broken images on mount
  useEffect(() => {
    const check = async () => {
      const valid: string[] = [];
      for (const src of images) {
        const img = new Image();
        img.src = src;
        try {
          await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject();
          });
          valid.push(src);
        } catch {
          // skip broken image
        }
      }
      if (valid.length > 0) setValidImages(valid);
    };
    check();
  }, [images]);

  // Auto-advance every 4s when not hovered
  useEffect(() => {
    if (validImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % validImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [validImages.length]);

  if (validImages.length === 0) return null;

  const goTo = (dir: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) =>
      dir === 'next'
        ? (prev + 1) % validImages.length
        : (prev - 1 + validImages.length) % validImages.length,
    );
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={validImages[current]}
          src={validImages[current]}
          alt={`${title} screenshot ${current + 1}`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 w-full max-w-[220px] md:max-w-[260px] h-auto rounded-2xl"
          style={{
            boxShadow: `0 25px 60px rgba(0,0,0,0.5), 0 0 40px ${color}10`,
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        />
      </AnimatePresence>

      {/* Nav arrows — show on hover when multiple images */}
      {validImages.length > 1 && isHovered && (
        <>
          <button
            type="button"
            onClick={(e) => goTo('prev', e)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${color}30` }}
          >
            <ChevronLeft size={14} style={{ color }} />
          </button>
          <button
            type="button"
            onClick={(e) => goTo('next', e)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${color}30` }}
          >
            <ChevronRight size={14} style={{ color }} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {validImages.length > 1 && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {validImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i === current ? color : 'rgba(255,255,255,0.2)',
                boxShadow: i === current ? `0 0 6px ${color}60` : 'none',
                transform: i === current ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Small carousel for regular project cards ── */
function SmallImageCarousel({ images, title, color, isHovered }: { images: string[]; title: string; color: string; isHovered: boolean }) {
  const [current, setCurrent] = useState(0);
  const [validImages, setValidImages] = useState<string[]>(images);

  useEffect(() => {
    const check = async () => {
      const valid: string[] = [];
      for (const src of images) {
        const img = new Image();
        img.src = src;
        try {
          await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject();
          });
          valid.push(src);
        } catch {
          // skip
        }
      }
      if (valid.length > 0) setValidImages(valid);
    };
    check();
  }, [images]);

  useEffect(() => {
    if (validImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % validImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [validImages.length]);

  if (validImages.length === 0) return null;

  return (
    <div className="relative z-[1] flex items-start justify-center h-full pt-4 px-3">
      <AnimatePresence mode="wait">
        <motion.img
          key={validImages[current]}
          src={validImages[current]}
          alt={`${title} screenshot ${current + 1}`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: isHovered ? 1.04 : 1, y: isHovered ? -4 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-[200px] h-auto rounded-xl"
          style={{
            boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${color}08`,
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        />
      </AnimatePresence>
      {/* Dot indicators */}
      {validImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {validImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i === current ? color : 'rgba(255,255,255,0.2)',
                boxShadow: i === current ? `0 0 6px ${color}60` : 'none',
                transform: i === current ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Corner squares — 21st.dev Dark Grid ── */
function CornerSquares() {
  return (
    <>
      <span className="sq sq-tl" />
      <span className="sq sq-tr" />
      <span className="sq sq-bl" />
      <span className="sq sq-br" />
    </>
  );
}

/* ── Decorative grid lines inside featured cards ── */
function GridLines({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Horizontal lines */}
      {[25, 50, 75].map((pos) => (
        <div
          key={`h-${pos}`}
          className="absolute left-0 right-0 h-[1px] opacity-[0.04]"
          style={{ top: `${pos}%`, background: color }}
        />
      ))}
      {/* Vertical lines */}
      {[33, 66].map((pos) => (
        <div
          key={`v-${pos}`}
          className="absolute top-0 bottom-0 w-[1px] opacity-[0.04]"
          style={{ left: `${pos}%`, background: color }}
        />
      ))}
    </div>
  );
}

/* ── Floating stat widget (glass card overlay) ── */
function FloatingWidget({
  icon: Icon,
  label,
  value,
  color,
  delay,
  position,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  delay: number;
  position: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`absolute z-20 ${position}`}
    >
      <div
        className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 backdrop-blur-xl border"
        style={{
          background: 'rgba(8, 8, 8, 0.75)',
          borderColor: `${color}20`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${color}08`,
        }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}15`, border: `1px solid ${color}25` }}
        >
          <Icon size={13} style={{ color }} />
        </div>
        <div>
          <div className="text-[11px] sm:text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{label}</div>
          <div className="text-sm sm:text-xs font-bold text-white">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Mini sparkline chart (decorative) ── */
function MiniSparkline({ color, delay, metric }: { color: string; delay: number; metric?: string }) {
  const points = [40, 55, 35, 65, 45, 70, 50, 75, 60, 80, 55, 85, 70, 90];
  const width = 100;
  const height = 32;
  const stepX = width / (points.length - 1);
  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${i * stepX},${height - (p / 100) * height}`)
    .join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="absolute bottom-6 right-6 z-20"
    >
      <div
        className="rounded-xl px-3.5 py-3 backdrop-blur-xl border"
        style={{
          background: 'rgba(8, 8, 8, 0.75)',
          borderColor: `${color}20`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.4)`,
        }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] sm:text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Growth</span>
          <span className="text-[11px] sm:text-[10px] font-bold" style={{ color }}>{metric || '+127%'}</span>
        </div>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
          <defs>
            <linearGradient id={`sparkGrad-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${d} L${width},${height} L0,${height} Z`} fill={`url(#sparkGrad-${color})`} />
          <motion.path
            d={d}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: delay + 0.3, duration: 1.2, ease: 'easeOut' }}
          />
          {/* Glowing endpoint */}
          <circle cx={width} cy={height - (points[points.length - 1] / 100) * height} r="2.5" fill={color}>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURED PROJECT CARD — rich hero layout with overlays
   ═══════════════════════════════════════════════════════════ */
function FeaturedProjectCard({
  project,
  index,
  variant = 'left',
}: {
  project: (typeof projects)[0];
  index: number;
  variant?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--mouse-x', `${x}%`);
    ref.current.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  const imgSrcs = projectImages[project.title] || [];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="dark-card corner-squares rounded-2xl overflow-hidden group cursor-default relative"
      style={{ minHeight: '480px' }}
    >
      <CornerSquares />
      <GridLines color={project.color} />

      {/* ── Animated top accent border ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-10">
        <motion.div
          className="h-full"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, ${project.color}80, transparent)`,
            transformOrigin: variant === 'left' ? 'left' : 'right',
          }}
        />
      </div>

      {/* ── Main layout: image + content side by side ── */}
      <div className={`flex flex-col ${variant === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} h-full`}>
        {/* ── Image section — carousel showcase ── */}
        <div className="relative md:w-[48%] flex-shrink-0 overflow-hidden">
          {/* Deep layered background */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at ${variant === 'left' ? '70% 30%' : '30% 30%'}, ${project.color}12 0%, transparent 50%),
                radial-gradient(ellipse at ${variant === 'left' ? '30% 80%' : '70% 80%'}, ${project.color}08 0%, transparent 50%),
                linear-gradient(135deg, #0a0a0a, #080808, #0a0a0a)
              `,
            }}
          />

          {/* Subtle dot grid behind image */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, ${project.color}15 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Image carousel */}
          <div className="relative z-10 flex items-center justify-center h-full py-6 px-4 md:px-6">
            {imgSrcs.length > 0 && (
              <motion.div
                className="relative"
                animate={{
                  y: isHovered ? -6 : 0,
                  rotateY: isHovered ? (variant === 'left' ? 3 : -3) : 0,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ perspective: '800px' }}
              >
                {/* Frame glow */}
                <div
                  className="absolute -inset-3 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `${project.color}15` }}
                />

                <ImageCarousel images={imgSrcs} title={project.title} color={project.color} isHovered={isHovered} />

                {/* Reflection effect */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-2xl blur-xl opacity-10"
                  style={{
                    background: `linear-gradient(to bottom, ${project.color}20, transparent)`,
                    transform: 'translateX(-50%) scaleY(-0.3) translateY(60%)',
                  }}
                />
              </motion.div>
            )}
          </div>

          {/* Gradient fade to content side */}
          <div
            className={`absolute inset-y-0 w-24 z-10 ${variant === 'left' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} from-[#0c0c0c] to-transparent hidden md:block`}
          />
          {/* Bottom fade for mobile */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0c0c0c] to-transparent md:hidden z-10" />
        </div>

        {/* ── Content section ── */}
        <div className="relative flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10 z-10">
          {/* Ambient glow behind content */}
          <div
            className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-[0.04]"
            style={{ background: project.color }}
          />

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="mb-5"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider"
              style={{
                color: project.color,
                background: `${project.color}08`,
                border: `1px solid ${project.color}20`,
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: project.color }}
                />
                <span
                  className="relative inline-flex rounded-full h-1.5 w-1.5"
                  style={{ background: project.color }}
                />
              </span>
              {project.metric}
            </span>
          </motion.div>

          {/* Category */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[1px]" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
            <span className="text-[11px] sm:text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-mono">{project.tech[0]}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-light transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[13px] sm:text-sm text-zinc-500 mb-4 font-medium">{project.subtitle}</p>
          <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed mb-6 max-w-md">{project.description}</p>

          {/* Tech tags — staggered appearance */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t, ti) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + ti * 0.06, duration: 0.4 }}
                className="text-[11px] sm:text-[10px] font-mono rounded-md px-2.5 py-1.5 transition-all duration-300"
                style={{
                  background: isHovered ? `${project.color}10` : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isHovered ? `${project.color}25` : 'rgba(255,255,255,0.05)'}`,
                  color: isHovered ? project.color : 'rgb(113, 113, 122)',
                  transitionDelay: `${ti * 30}ms`,
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
                  { icon: Activity, label: 'Live & Active' },
                  { icon: Smartphone, label: 'Responsive Design' },
                  { icon: Star, label: 'Client Approved' },
                  { icon: TrendingUp, label: project.metric },
                ].map((feat, fi) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + fi * 0.08 }}
                className="flex items-center gap-2 text-xs sm:text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors"
              >
                <feat.icon size={12} style={{ color: `${project.color}90` }} />
                <span>{feat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Action row — role & client attribution */}
          <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-white/[0.04]">
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}90)` }}
              >
                VR
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-[11px] text-zinc-400 font-medium block leading-tight">{project.role}</span>
                <span className="text-[10px] text-zinc-600 font-mono">Client: {project.client}</span>
              </div>
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.color}40`;
                  e.currentTarget.style.background = `${project.color}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <ExternalLink size={14} className="text-zinc-400" />
                <div className="leading-none">
                  <div className="text-[8px] text-zinc-500 uppercase tracking-wider">VIEW</div>
                  <div className="text-[11px] font-semibold text-zinc-300">Live Site</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Floating stat widgets (only on desktop) ── */}
      <div className="hidden md:block">
        <FloatingWidget
          icon={Activity}
          label="Result"
          value={project.metric}
          color={project.color}
          delay={0.8}
          position="top-5 left-5 md:top-auto md:bottom-20 md:right-[38%]"
        />
        <MiniSparkline color={project.color} delay={0.9} metric={project.metric} />
      </div>

      {/* ── Scanline overlay on hover ── */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 pointer-events-none z-[5]"
            style={{
              background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)`,
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   REGULAR PROJECT CARD — compact vertical layout
   ═══════════════════════════════════════════════════════════ */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--mouse-x', `${x}%`);
    ref.current.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  const imgSrcs = projectImages[project.title] || [];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="dark-card corner-squares rounded-2xl overflow-hidden group cursor-default"
    >
      <CornerSquares />

      {/* Top gradient accent bar */}
      <div
        className="h-[2px] w-full opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      {/* Image section */}
      <div className="relative overflow-hidden aspect-[4/5] max-h-[380px]">
        {/* Layered background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 30%, ${project.color}10 0%, transparent 60%),
              #080808
            `,
          }}
        />

        {imgSrcs.length > 0 ? (
          <SmallImageCarousel images={imgSrcs} title={project.title} color={project.color} isHovered={isHovered} />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, ${project.color}05, ${project.color}10)`,
            }}
          />
        )}

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-[2]" />
        <div
          className="absolute inset-0 opacity-20 z-[2]"
          style={{ background: `radial-gradient(circle at 30% 70%, ${project.color}30, transparent 60%)` }}
        />

        {/* Floating metric badge */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="absolute top-4 left-4 z-10"
        >
          <span
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-[10px] font-mono font-semibold rounded-full px-3 py-1.5 backdrop-blur-xl"
            style={{
              color: project.color,
              background: 'rgba(0,0,0,0.6)',
              border: `1px solid ${project.color}30`,
              boxShadow: `0 0 20px ${project.color}15`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.color }} />
            {project.metric}
          </span>
        </motion.div>

        {/* Scan line overlay on hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[3]"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)',
          }}
        />
      </div>

      {/* Content section */}
      <div className="relative p-6">
        {/* Category line */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[1px]" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
          <span className="text-[11px] sm:text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">{project.tech[0]}</span>
        </div>

        <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-brand-light transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[13px] sm:text-xs text-zinc-500 mb-3 font-medium">{project.subtitle}</p>
        <p className="text-sm text-zinc-400 leading-relaxed mb-5 line-clamp-2">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, ti) => (
            <span
              key={t}
              className="text-[11px] sm:text-[10px] font-mono rounded-md px-2.5 py-1 transition-all duration-300"
              style={{
                background: isHovered ? `${project.color}12` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${isHovered ? `${project.color}25` : 'rgba(255,255,255,0.05)'}`,
                color: isHovered ? project.color : 'rgb(113, 113, 122)',
                transitionDelay: `${ti * 30}ms`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action row — role & client attribution */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}90)` }}
            >
              VR
            </div>
            <div className="min-w-0">
              <span className="text-[11px] sm:text-[10px] text-zinc-400 font-medium block leading-tight">{project.role}</span>
              <span className="text-[9px] text-zinc-600 font-mono">Client: {project.client}</span>
            </div>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${project.color}40`;
                e.currentTarget.style.background = `${project.color}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              <ExternalLink size={12} className="text-zinc-400" />
              <div className="leading-none">
                <div className="text-[7px] text-zinc-500 uppercase tracking-wider">VIEW</div>
                <div className="text-[10px] font-semibold text-zinc-300">Live Site</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS SECTION
   ═══════════════════════════════════════════════════════════ */
export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden noise-overlay">
      {/* Layered background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-brand/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[400px] h-[300px] rounded-full bg-pink-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-12 h-[1px] bg-gradient-to-r from-brand to-transparent origin-left"
            />
            <p className="section-heading mb-0">Portfolio</p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-500 max-w-xl leading-relaxed"
          >
            Full-stack platforms and SaaS products built by Vivek Raj Singh — generating $12M+ in client revenue worldwide.
            Each project built with obsessive attention to performance, accessibility, and delight.
          </motion.p>
        </motion.div>

        {/* Featured projects — full-width showcase cards */}
        <div className="space-y-6 mb-8">
          {featured.map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={index}
              variant={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>

        {/* Rest of projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + 2}
            />
          ))}
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-white/[0.06]" />
          <span className="text-[11px] sm:text-[10px] font-mono tracking-widest animated-shiny-text">AND MORE IN PROGRESS</span>
          <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-white/[0.06]" />
        </motion.div>
      </div>
    </section>
  );
}
