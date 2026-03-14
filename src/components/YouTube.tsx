import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Users, Video, ExternalLink } from 'lucide-react';
import { youtube } from '../data';

export default function YouTube() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-heading">Content Creation</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            <span className="gradient-text">YouTube</span> Channel
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm">
            Sharing dev tutorials, system design deep-dives, and full-stack building sessions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="dark-card corner-squares rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto text-center group"
        >
          <CornerSquares />
          <div className="relative z-10">
            {/* Channel icon */}
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
              <Play size={24} className="text-red-500 fill-red-500" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{youtube.channel}</h3>
            <p className="text-sm text-zinc-500 mb-6">{youtube.handle}</p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="flex items-center gap-1.5 justify-center text-zinc-400 mb-1">
                  <Users size={14} />
                  <span className="text-xs uppercase tracking-wider">Subscribers</span>
                </div>
                <div className="text-2xl font-bold text-white">{youtube.subscribers}</div>
              </div>
              <div className="w-[1px] h-10 bg-white/[0.06]" />
              <div className="text-center">
                <div className="flex items-center gap-1.5 justify-center text-zinc-400 mb-1">
                  <Video size={14} />
                  <span className="text-xs uppercase tracking-wider">Videos</span>
                </div>
                <div className="text-2xl font-bold text-white">{youtube.videos}</div>
              </div>
            </div>

            <a
              href={youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-medium text-white hover:bg-red-600 transition-colors duration-300"
            >
              <ExternalLink size={14} />
              Visit Channel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
