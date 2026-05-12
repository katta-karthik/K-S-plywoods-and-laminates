import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Product Varieties', desc: 'Laminates & Plywood' },
  { number: '15+', label: 'Years in Business', desc: 'Trusted Since Day One' },
  { number: '1000+', label: 'Happy Clients', desc: 'Across Chennai' },
  { number: '100%', label: 'Genuine Products', desc: 'Authorized & Certified' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1410, #1a1616)',
        borderTop: '1px solid rgba(201,169,110,0.08)',
        borderBottom: '1px solid rgba(201,169,110,0.08)',
      }}
    >
      {/* Subtle wood texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('images/wood-texture.jpg')",
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Divider */}
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 hidden lg:block"
                  style={{ background: 'rgba(201,169,110,0.1)' }}
                />
              )}

              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  background: 'linear-gradient(135deg, #c9a96e, #e8c98a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.number}
              </div>
              <p className="text-[#f5f0e8]/70 text-xs sm:text-sm font-medium tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-[#f5f0e8]/30 text-[10px] tracking-widest uppercase">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
