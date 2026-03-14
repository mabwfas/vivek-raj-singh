import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import { fiverrStats, fiverrReviews } from '../data';

export default function FiverrReviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-heading">Client Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            <span className="gradient-text">Fiverr</span> Client Feedback
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm">
            Real reviews from real clients. 100% five-star rating across 35+ projects.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-[#1dbf73] fill-[#1dbf73]" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">{fiverrStats.rating}</span>
          </div>
          <div className="w-[1px] h-5 bg-white/[0.06]" />
          <div className="text-sm">
            <span className="text-zinc-500">Reviews: </span>
            <span className="text-white font-semibold">{fiverrStats.reviews}</span>
          </div>
          <div className="w-[1px] h-5 bg-white/[0.06]" />
          <div className="text-sm">
            <span className="text-zinc-500">Response: </span>
            <span className="text-white font-semibold">{fiverrStats.responseTime}</span>
          </div>
          <div className="w-[1px] h-5 bg-white/[0.06]" />
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: 'rgba(29,191,115,0.12)', color: '#1dbf73', border: '1px solid rgba(29,191,115,0.2)' }}>
            {fiverrStats.level}
          </div>
        </motion.div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fiverrReviews.map((review, i) => (
            <motion.div
              key={review.username}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="dark-card corner-squares rounded-xl p-5 group hover:border-[#1dbf73]/20 transition-all duration-300"
            >
              <CornerSquares />
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-[#1dbf73] fill-[#1dbf73]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  "{review.quote}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{review.flag}</span>
                    <div>
                      <span className="text-xs text-white font-medium">{review.username}</span>
                      {review.repeat && (
                        <span className="ml-2 text-[10px] text-[#1dbf73] font-medium">Repeat Client</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-zinc-500">{review.price}</div>
                    <div className="text-[10px] text-zinc-600">{review.duration}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
