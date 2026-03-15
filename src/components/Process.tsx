import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code2, TestTube2, Rocket } from 'lucide-react';
import { processSteps } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={20} />,
  Palette: <Palette size={20} />,
  Code2: <Code2 size={20} />,
  TestTube2: <TestTube2 size={20} />,
  Rocket: <Rocket size={20} />,
};

export default function Process() {
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
          <span className="section-heading">Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            My <span className="gradient-text">Process</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm">
            A proven 5-step methodology for delivering high-quality web projects on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="dark-card corner-squares rounded-xl p-5 text-center group relative"
            >
              <CornerSquares />
              <div className="relative z-10">
                {/* Step number */}
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">
                  Step {step.step}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-3 text-brand group-hover:bg-brand/20 transition-colors duration-300">
                  {iconMap[step.icon]}
                </div>

                <h3 className="text-sm font-semibold text-white mb-1.5">{step.title}</h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector arrow (hidden on last item and mobile) */}
              {i < processSteps.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 text-zinc-700">
                  &#8594;
                </div>
              )}
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
