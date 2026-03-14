import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-10 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-brand/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-shimmer">SS</span>
            <div className="w-[1px] h-4 bg-white/[0.06]" />
            <p className="text-xs sm:text-[11px] text-zinc-600 font-mono">
              &copy; {new Date().getFullYear()} Vivek Raj Singh
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs sm:text-[11px] text-zinc-600">
              <span>Designed with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="text-brand text-sm"
              >
                &#9829;
              </motion.span>
              <span>in Lucknow</span>
            </div>
            <div className="w-[1px] h-3 bg-white/[0.04]" />
            <span className="text-[11px] sm:text-[10px] text-zinc-700 font-mono">React + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
