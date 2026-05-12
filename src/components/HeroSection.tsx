import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [_mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(201, 169, 110, 0.08), transparent 50%)`;
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (hero) hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{ backgroundColor: '#0c0805' }}
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src="/images/hero-bg.jpg"
            alt="Premium Plywood and Laminates"
            className="w-full h-full object-cover"
            style={{ opacity: 0.45 }}
          />
        </motion.div>

        {/* Multi-layer dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.5) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.2) 50%, rgba(10,10,10,0.6) 100%)',
          }}
        />

        {/* Wood texture accent */}
        <div
          className="absolute right-0 top-0 w-1/3 h-full opacity-10"
          style={{
            backgroundImage: "url('/images/wood-texture.jpg')",
            backgroundSize: 'cover',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)',
          }}
        />
      </div>

      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{ zIndex: 2 }}
      />

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
        {/* Top right diamond */}
        <motion.div
          className="absolute top-20 right-12 sm:right-24 lg:right-48 w-16 h-16 sm:w-20 sm:h-20 border border-[#c9a96e]/20"
          style={{ transform: 'rotate(45deg)' }}
          animate={{
            rotate: [45, 50, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Bottom left circle */}
        <motion.div
          className="absolute bottom-32 left-8 sm:left-16 w-32 h-32 sm:w-48 sm:h-48 rounded-full border border-[#c9a96e]/10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Vertical line accent */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-transparent via-[#c9a96e]/30 to-transparent hidden lg:block"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Gold orb glow */}
        <motion.div
          className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
            right: '10%',
            top: '20%',
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <div
        className="relative flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto w-full pt-28 pb-24"
        style={{ zIndex: 5 }}
      >
        {/* Top badge */}
        <motion.div
          className="flex items-center gap-3 mb-8 sm:mb-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <div className="w-8 h-px bg-[#c9a96e]" />
          <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
            Authorized Dealer — Laminates
          </span>
          <div className="w-8 h-px bg-[#c9a96e]/40" />
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-4 sm:mb-6">
          <motion.h1
            className="font-light leading-[0.9] text-[#f5f0e8]"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              letterSpacing: '-0.02em',
            }}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Supplying
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-4 sm:mb-6">
          <motion.h1
            className="font-light leading-[0.9]"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              letterSpacing: '-0.02em',
              color: '#c9a96e',
            }}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8 sm:mb-10">
          <motion.h1
            className="font-light leading-[0.9] text-[#f5f0e8]"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              letterSpacing: '-0.02em',
            }}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Wood Solutions
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          className="max-w-lg text-[#f5f0e8]/60 font-light leading-relaxed mb-10 sm:mb-12"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.7 }}
        >
          Premium plywood and laminate supplies designed for superior durability.
          Providing strength and reliability to every project.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.9 }}
        >
          <button
            onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}
            className="group relative overflow-hidden px-8 sm:px-10 py-4 text-xs tracking-[0.25em] uppercase font-medium text-[#0c0805] transition-transform duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c98a)' }}
          >
            <span className="relative z-10">Get Bulk Quote</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #e8c98a, #c9a96e)' }} />
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="group px-8 sm:px-10 py-4 text-xs tracking-[0.25em] uppercase font-medium text-[#f5f0e8] border border-[#f5f0e8]/20 hover:border-[#c9a96e]/60 transition-all duration-300 hover:text-[#c9a96e]"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-8 mt-16 sm:mt-20 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.1 }}
        >
          {[
            { num: '500+', label: 'Products' },
            { num: '15+', label: 'Years Experience' },
            { num: '1000+', label: 'Happy Clients' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="text-3xl sm:text-4xl font-light text-[#c9a96e]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {stat.num}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#f5f0e8]/40 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.6 }}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#c9a96e]/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a96e]/50 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[#c9a96e]"
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Bottom diagonal cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom right, transparent 49%, #0c0805 50%)',
          zIndex: 6,
        }}
      />
    </section>
  );
}
