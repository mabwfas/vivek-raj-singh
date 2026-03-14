import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
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
          <span className="section-heading">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            What <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm">
            Real feedback from real clients. Every project delivered on time, on budget, and beyond expectations.
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
                <Star key={i} size={14} className="text-brand fill-brand" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
          </div>
          <div className="w-[1px] h-5 bg-white/[0.06]" />
          <div className="text-sm">
            <span className="text-zinc-500">Projects: </span>
            <span className="text-white font-semibold">40+</span>
          </div>
          <div className="w-[1px] h-5 bg-white/[0.06]" />
          <div className="text-sm">
            <span className="text-zinc-500">Retention: </span>
            <span className="text-white font-semibold">100%</span>
          </div>
          <div className="w-[1px] h-5 bg-white/[0.06]" />
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: 'rgba(14,165,233,0.12)', color: '#0ea5e9', border: '1px solid rgba(14,165,233,0.2)' }}>
            Verified Clients
          </div>
        </motion.div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="dark-card corner-squares rounded-xl p-6 group hover:border-brand/20 transition-all duration-300"
            >
              <CornerSquares />
              <div className="relative z-10">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote size={20} className="text-brand/40" />
                </div>

                {/* Quote */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
                  >
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <span className="text-sm text-white font-medium block">{testimonial.author}</span>
                    <span className="text-[11px] text-zinc-500">{testimonial.role}</span>
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
