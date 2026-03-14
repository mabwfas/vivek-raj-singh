import { motion } from 'framer-motion';

interface PhoneMockupProps {
  color: string;
  appName: string;
  screens: ScreenElement[];
  className?: string;
}

export interface ScreenElement {
  type: 'header' | 'card' | 'list' | 'chart' | 'button' | 'nav' | 'search' | 'avatar' | 'image' | 'stats' | 'player';
}

function ScreenHeader({ color, title }: { color: string; title: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg" style={{ background: `${color}40` }} />
        <div className="text-[8px] font-semibold text-white/90">{title}</div>
      </div>
      <div className="flex gap-1">
        <div className="w-1 h-1 rounded-full bg-white/30" />
        <div className="w-1 h-1 rounded-full bg-white/30" />
        <div className="w-1 h-1 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

function ScreenSearch({ color }: { color: string }) {
  return (
    <div className="mx-3 my-1.5 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full border border-white/30" />
      <div className="h-1.5 w-16 rounded bg-white/10" />
    </div>
  );
}

function ScreenStats({ color }: { color: string }) {
  return (
    <div className="grid grid-cols-3 gap-1.5 mx-3 my-1.5">
      {[85, 60, 45].map((h, i) => (
        <div key={i} className="rounded-lg bg-white/5 border border-white/8 p-2 flex flex-col items-center">
          <div className="text-[7px] font-bold text-white/80">{['₹2.4L', '1.2K', '98%'][i]}</div>
          <div className="h-1 w-8 rounded bg-white/10 mt-1" />
        </div>
      ))}
    </div>
  );
}

function ScreenCard({ color }: { color: string }) {
  return (
    <div className="mx-3 my-1.5 rounded-xl bg-white/5 border border-white/8 p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg" style={{ background: `linear-gradient(135deg, ${color}60, ${color}20)` }} />
        <div className="flex-1">
          <div className="h-1.5 w-16 rounded bg-white/20 mb-1" />
          <div className="h-1 w-10 rounded bg-white/10" />
        </div>
        <div className="text-[7px] font-mono" style={{ color: `${color}` }}>+12.5%</div>
      </div>
      <div className="h-1 w-full rounded bg-white/5 mb-1" />
      <div className="h-1 w-3/4 rounded bg-white/5" />
    </div>
  );
}

function ScreenChart({ color }: { color: string }) {
  return (
    <div className="mx-3 my-1.5 rounded-xl bg-white/5 border border-white/8 p-3">
      <div className="flex items-end gap-1 h-12 justify-center">
        {[35, 50, 30, 65, 45, 80, 55, 70, 40, 60, 75, 50].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="w-1.5 rounded-t"
            style={{ background: `linear-gradient(to top, ${color}20, ${color}80)` }}
          />
        ))}
      </div>
    </div>
  );
}

function ScreenList({ color }: { color: string }) {
  return (
    <div className="mx-3 my-1 space-y-1.5">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2 rounded-lg bg-white/3 p-2">
          <div
            className="w-5 h-5 rounded-md shrink-0"
            style={{ background: `${color}${20 + i * 10}` }}
          />
          <div className="flex-1">
            <div className="h-1.5 rounded bg-white/15 mb-1" style={{ width: `${70 - i * 10}%` }} />
            <div className="h-1 rounded bg-white/8" style={{ width: `${50 - i * 5}%` }} />
          </div>
          <div className="w-6 h-4 rounded bg-white/5" />
        </div>
      ))}
    </div>
  );
}

function ScreenButton({ color }: { color: string }) {
  return (
    <div className="mx-3 my-2">
      <div
        className="rounded-xl py-2 text-center text-[8px] font-semibold text-white/90"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}90)` }}
      >
        Continue
      </div>
    </div>
  );
}

function ScreenNav({ color }: { color: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-2 px-4 bg-black/40 backdrop-blur-sm border-t border-white/5">
      {['●', '◆', '▲', '■'].map((icon, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <div
            className="w-3 h-3 rounded-sm"
            style={{ background: i === 0 ? `${color}` : 'rgba(255,255,255,0.15)' }}
          />
          <div className="h-0.5 w-4 rounded" style={{ background: i === 0 ? `${color}60` : 'rgba(255,255,255,0.08)' }} />
        </div>
      ))}
    </div>
  );
}

function ScreenImage({ color }: { color: string }) {
  return (
    <div
      className="mx-3 my-1.5 h-16 rounded-xl"
      style={{ background: `linear-gradient(135deg, ${color}30, ${color}10, ${color}20)` }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center">
          <div className="w-0 h-0 border-l-[5px] border-l-white/40 border-y-[3px] border-y-transparent ml-0.5" />
        </div>
      </div>
    </div>
  );
}

function ScreenPlayer({ color }: { color: string }) {
  return (
    <div className="mx-3 my-1.5 rounded-xl bg-white/5 border border-white/8 p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg" style={{ background: `linear-gradient(135deg, ${color}60, ${color}20)` }} />
        <div className="flex-1">
          <div className="h-1.5 w-20 rounded bg-white/20 mb-1" />
          <div className="h-1 w-12 rounded bg-white/10" />
        </div>
      </div>
      <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-2/3 rounded-full" style={{ background: color }} />
      </div>
      <div className="flex justify-between mt-1.5">
        <div className="text-[6px] text-white/30">2:34</div>
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-sm bg-white/20" />
          <div className="w-3 h-3 rounded-full" style={{ background: color }} />
          <div className="w-2 h-2 rounded-sm bg-white/20" />
        </div>
        <div className="text-[6px] text-white/30">4:12</div>
      </div>
    </div>
  );
}

function ScreenAvatar({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-2 mx-3 my-1.5">
      <div className="w-8 h-8 rounded-full" style={{ background: `linear-gradient(135deg, ${color}, ${color}60)` }} />
      <div>
        <div className="h-1.5 w-14 rounded bg-white/20 mb-1" />
        <div className="h-1 w-20 rounded bg-white/10" />
      </div>
    </div>
  );
}

const elementMap: Record<string, React.FC<{ color: string }>> = {
  header: () => null, // handled separately
  search: ScreenSearch,
  stats: ScreenStats,
  card: ScreenCard,
  chart: ScreenChart,
  list: ScreenList,
  button: ScreenButton,
  nav: ScreenNav,
  image: ScreenImage,
  player: ScreenPlayer,
  avatar: ScreenAvatar,
};

export default function PhoneMockup({ color, appName, screens, className = '' }: PhoneMockupProps) {
  return (
    <motion.div
      whileHover={{ y: -8, rotateY: 5 }}
      transition={{ duration: 0.4 }}
      className={`relative ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Phone frame */}
      <div className="relative w-[180px] h-[380px] rounded-[28px] border-2 border-white/10 bg-[#111] shadow-2xl shadow-black/50 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-20" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-4 pt-1.5 text-[6px] text-white/40 relative z-10">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-2.5 h-1.5 rounded-sm border border-white/30" />
          </div>
        </div>

        {/* Screen content */}
        <div className="relative h-full pt-1 pb-10 overflow-hidden">
          {/* Gradient background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: `radial-gradient(circle at 30% 20%, ${color}40, transparent 60%)` }}
          />

          <ScreenHeader color={color} title={appName} />

          {screens.map((screen, i) => {
            const Component = elementMap[screen.type];
            if (!Component || screen.type === 'header') return null;
            return <Component key={i} color={color} />;
          })}

          {screens.some(s => s.type === 'nav') && <ScreenNav color={color} />}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20" />
      </div>

      {/* Reflection */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full blur-xl opacity-20"
        style={{ background: color }}
      />
    </motion.div>
  );
}
