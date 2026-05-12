import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function OwnerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#14100c' }}
    >
      {/* Background accents */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.15), transparent)' }}
        />
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.06), transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16 sm:mb-20"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-[#c9a96e]" />
          <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">Our Legacy</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Owner Image Side */}
          <motion.div
            className="relative lg:col-span-4 lg:col-start-2 max-w-sm mx-auto w-full"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer frame decoration */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-[#c9a96e]/15"
              style={{ zIndex: 0 }}
            />
            <div
              className="absolute -top-8 -left-8 w-20 h-20 border-t border-l border-[#c9a96e]/40"
              style={{ zIndex: 1 }}
            />
            <div
              className="absolute -bottom-8 -right-8 w-20 h-20 border-b border-r border-[#c9a96e]/40"
              style={{ zIndex: 1 }}
            />

            {/* Image container */}
            <div className="relative overflow-hidden" style={{ zIndex: 2 }}>
              <motion.div
                className="absolute inset-0 bg-[#c9a96e]/20"
                initial={{ scaleX: 1 }}
                animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                style={{ transformOrigin: 'right' }}
              />
              <motion.img
                src="/images/owner-portrait.jpg"
                alt="K. Srinivasarao – Founder"
                className="w-full object-cover"
                style={{
                  aspectRatio: '4/5',
                  filter: 'contrast(1.05) saturate(0.9)',
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              {/* Image overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 40%)',
                }}
              />
              {/* Bottom name plate */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)' }}
              >
                <p
                  className="text-2xl text-[#f5f0e8] font-light"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  K. Srinivasarao
                </p>
                <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mt-1">
                  Owner
                </p>
              </div>
            </div>

            {/* Glassmorphism badge */}
            <motion.div
              className="absolute -right-4 sm:-right-8 top-12 p-4 sm:p-5"
              style={{
                background: 'rgba(10,10,10,0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(201,169,110,0.2)',
                zIndex: 10,
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <span
                  className="text-3xl sm:text-4xl font-light text-[#c9a96e]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  15+
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#f5f0e8]/50 uppercase mt-1">
                  Years
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            className="flex flex-col lg:col-span-6"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-light text-[#f5f0e8] leading-[1.1] mb-6"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              }}
            >
              A Legacy Built on{' '}
              <em className="text-[#c9a96e] not-italic">Trust</em> &{' '}
              <em className="text-[#c9a96e] not-italic">Excellence</em>
            </h2>

            <div className="w-12 h-px bg-[#c9a96e]/50 mb-8" />

            <p
              className="text-[#f5f0e8]/60 leading-relaxed mb-6"
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
            >
              With years of industry expertise, K S Plywoods & Laminates has built a reputation
              for delivering premium quality materials, trusted service, and durable plywood
              and laminate supplies across Chennai.
            </p>

            <p
              className="text-[#f5f0e8]/50 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
            >
              As an authorized dealer of premium laminates, we bring together the finest materials
              from leading manufacturers, curated for the discerning homeowner, contractor, and
              builder who demands nothing but the best.
            </p>

            {/* Feature pillars */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                { label: 'Authorized Dealer', icon: '✦' },
                { label: 'Premium Quality', icon: '✦' },
                { label: 'Expert Guidance', icon: '✦' },
                { label: 'Chennai Based', icon: '✦' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-[#c9a96e] text-xs">{item.icon}</span>
                  <span className="text-[#f5f0e8]/70 text-xs tracking-[0.1em] uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="p-6 relative"
              style={{
                background: 'rgba(201,169,110,0.04)',
                borderLeft: '2px solid rgba(201,169,110,0.4)',
              }}
            >
              <p
                className="italic text-[#f5f0e8]/70 leading-relaxed"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                }}
              >
                "Our mission is simple — to provide materials that stand the test of time.
                Quality is not just our product, it's our promise."
              </p>
              <p className="text-[#c9a96e] text-xs tracking-widest uppercase mt-4">
                — K. Srinivasarao
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
