import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: '#0c0805',
        borderTop: '1px solid rgba(201,169,110,0.06)',
        borderBottom: '1px solid rgba(201,169,110,0.06)',
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('images/wood-texture.jpg')",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      />

      <motion.div className="overflow-hidden" style={{ opacity }}>
        {/* Line 1 */}
        <motion.div
          className="flex items-center whitespace-nowrap mb-4 sm:mb-6"
          style={{ x: x1 }}
        >
          <span
            className="text-[#f5f0e8]/10 font-thin"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Premium&nbsp;
          </span>
          <span
            className="font-thin"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              letterSpacing: '-0.03em',
              WebkitTextStroke: '1px rgba(201,169,110,0.3)',
              color: 'transparent',
            }}
          >
            Quality
          </span>
          <span
            className="text-[#f5f0e8]/10 font-thin"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              letterSpacing: '-0.03em',
            }}
          >
            &nbsp;• Trusted Service •
          </span>
          <span
            className="font-thin"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              letterSpacing: '-0.03em',
              WebkitTextStroke: '1px rgba(201,169,110,0.2)',
              color: 'transparent',
            }}
          >
            &nbsp;Excellence
          </span>
        </motion.div>

        {/* Line 2 */}
        <motion.div
          className="flex items-center whitespace-nowrap"
          style={{ x: x2 }}
        >
          <span
            className="font-thin"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              letterSpacing: '-0.03em',
              WebkitTextStroke: '1px rgba(201,169,110,0.15)',
              color: 'transparent',
            }}
          >
            Laminates&nbsp;
          </span>
          <span
            className="text-[#c9a96e]/15 font-thin"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              letterSpacing: '-0.03em',
            }}
          >
            & Plywood •&nbsp;
          </span>
          <span
            className="text-[#f5f0e8]/10 font-thin"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Chennai • Authorized Dealer
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
