import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import { caseStudy } from '../data';

export default function CaseStudy() {
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
          <span className="section-heading">Deep Dive</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            <span className="gradient-text">Case Study:</span> {caseStudy.project}
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm">
            {caseStudy.role} — Built for {caseStudy.client}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="dark-card corner-squares rounded-xl p-6"
          >
            <CornerSquares />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertTriangle size={16} className="text-red-400" />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Problem</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{caseStudy.problem}</p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="dark-card corner-squares rounded-xl p-6"
          >
            <CornerSquares />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Lightbulb size={16} className="text-emerald-400" />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Solution</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{caseStudy.solution}</p>
            </div>
          </motion.div>
        </div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="dark-card corner-squares rounded-xl p-6 mb-8"
        >
          <CornerSquares />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Wrench size={16} className="text-amber-400" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Technical Challenges</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.challenges.map((challenge, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="text-brand mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <TrendingUp size={16} className="text-brand" />
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Results</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {caseStudy.results.map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
                className="dark-card corner-squares rounded-xl p-4 text-center group"
              >
                <CornerSquares />
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-brand-light transition-colors duration-300">
                    {result.value}
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-mono">
                    {result.label}
                  </div>
                </div>
              </motion.div>
            ))}
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
