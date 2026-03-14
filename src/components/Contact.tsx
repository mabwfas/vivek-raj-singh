import { motion, useInView } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { profile } from '../data';

function InteractiveCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    ref.current.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`dark-card corner-squares rounded-xl overflow-hidden ${className}`}
    >
      <span className="sq sq-tl" /><span className="sq sq-tr" />
      <span className="sq sq-bl" /><span className="sq sq-br" />
      {children}
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand/[0.04] blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-4xl relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand/40 origin-right"
            />
            <p className="section-heading mb-0">Contact</p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-12 h-[1px] bg-gradient-to-l from-transparent to-brand/40 origin-left"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Let's Build <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-500 max-w-md mx-auto leading-relaxed"
          >
            Available for freelance projects, consulting, and full-time opportunities.
            Let's create something extraordinary.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <InteractiveCard className="p-6 glass-glow">
              <div className="relative z-10 space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: '#0ea5e9' },
                  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, color: '#10b981' },
                  { icon: MapPin, label: 'Location', value: profile.location, href: undefined, color: '#f59e0b' },
                ].map(({ icon: Icon, label, value, href, color }) => {
                  const Wrapper = href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={label}
                      {...(href ? { href } : {})}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: `${color}10`,
                          border: `1px solid ${color}20`,
                        }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <p className="text-[11px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-mono">{label}</p>
                        <p className="text-[13px] sm:text-sm text-zinc-300 group-hover:text-white transition-colors">{value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </InteractiveCard>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/919876543213`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="dark-card corner-squares rounded-xl p-5 flex items-center gap-4 group block glass-glow"
            >
              <span className="sq sq-tl" /><span className="sq sq-tr" />
              <span className="sq sq-bl" /><span className="sq sq-br" />
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                style={{ background: '#25D36610', border: '1px solid #25D36620' }}
              >
                <MessageCircle size={16} style={{ color: '#25D366' }} />
              </div>
              <div>
                <p className="text-[11px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-mono">WhatsApp</p>
                <p className="text-[13px] sm:text-sm text-zinc-300 group-hover:text-white transition-colors">Message me directly</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InteractiveCard className="p-6">
              <form className="relative z-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
                {[
                  { label: 'Name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ label, type, placeholder }) => (
                  <div key={label} className="input-glow">
                    <label className="text-[11px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono mb-2 block">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand/40 focus:bg-white/[0.04] transition-all duration-300"
                    />
                  </div>
                ))}
                <div className="input-glow">
                  <label className="text-[11px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand/40 focus:bg-white/[0.04] transition-all duration-300 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-brand py-3.5 text-sm font-medium text-white hover:bg-brand-light transition-all duration-300 glow-brand shine-sweep flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send size={14} />
                    Send Message
                  </span>
                </motion.button>
              </form>
            </InteractiveCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
