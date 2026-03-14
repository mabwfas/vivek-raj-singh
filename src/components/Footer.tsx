import { motion } from 'framer-motion';
import { Twitter } from 'lucide-react';

const socials = [
  { icon: Twitter, href: 'https://twitter.com/vivekrajdev', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-10 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-brand/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-shimmer">VR</span>
            <div className="w-[1px] h-4 bg-white/[0.06]" />
            <p className="text-xs sm:text-[11px] text-zinc-600 font-mono">
              &copy; {new Date().getFullYear()} Vivek Raj Singh
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="w-[1px] h-3 bg-white/[0.04]" />
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
