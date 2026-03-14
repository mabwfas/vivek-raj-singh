import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { pricingPlans } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Starter: <Zap size={20} />,
  Professional: <Crown size={20} />,
  Enterprise: <Rocket size={20} />,
};

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" ref={ref} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-heading">Investment</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            <span className="gradient-text">Pricing</span> Plans
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm">
            Transparent pricing for every stage of your product. All plans include source code handover.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
              className={`dark-card corner-squares rounded-xl p-6 relative group ${
                plan.highlighted
                  ? 'ring-1 ring-brand/40 bg-brand/[0.03]'
                  : ''
              }`}
            >
              <CornerSquares />
              <div className="relative z-10">
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-[10px] font-semibold text-white uppercase tracking-wider">
                    Recommended
                  </div>
                )}

                <div className="flex items-center gap-2 mb-4 mt-1">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      plan.highlighted
                        ? 'bg-brand/20 text-brand border border-brand/30'
                        : 'bg-white/[0.04] text-zinc-400 border border-white/[0.06]'
                    }`}
                  >
                    {iconMap[plan.name]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{plan.name}</h3>
                    <p className="text-[10px] text-zinc-600">{plan.period}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                </div>

                <p className="text-xs text-zinc-500 mb-5 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-zinc-400">
                      <Check
                        size={14}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-brand' : 'text-zinc-600'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center rounded-lg py-2.5 text-sm font-medium transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-brand text-white hover:bg-brand-light'
                      : 'glass-raised text-zinc-300 hover:text-white hover:border-brand/30'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-zinc-600 mt-6"
        >
          Custom quotes available for unique requirements. All prices in USD.
        </motion.p>
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
