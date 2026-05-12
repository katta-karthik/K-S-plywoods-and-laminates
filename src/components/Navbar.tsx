import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                <div
                  className="absolute inset-0 border border-[#c9a96e]/60 group-hover:border-[#c9a96e] transition-colors duration-300"
                  style={{ transform: 'rotate(45deg)' }}
                />
                <span
                  className="text-xs font-bold text-[#c9a96e] tracking-wider"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  KS
                </span>
              </div>
              <div className="hidden sm:block">
                <p
                  className="text-[#f5f0e8] text-sm leading-tight tracking-widest uppercase"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                >
                  K S Plywoods
                </p>
                <p className="text-[#c9a96e]/60 text-[9px] tracking-[0.3em] uppercase">
                  & Laminates
                </p>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-[#f5f0e8]/70 hover:text-[#c9a96e] text-xs tracking-[0.2em] uppercase transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase text-[#0c0805] font-medium transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c98a)' }}
              >
                Get In Touch
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 group"
                aria-label="Toggle menu"
              >
                <span
                  className="block w-6 h-px bg-[#f5f0e8] transition-all duration-300"
                  style={{
                    transform: mobileOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
                    backgroundColor: mobileOpen ? '#c9a96e' : undefined,
                  }}
                />
                <span
                  className="block w-4 h-px bg-[#f5f0e8] transition-all duration-300"
                  style={{
                    opacity: mobileOpen ? 0 : 1,
                    width: mobileOpen ? 0 : undefined,
                  }}
                />
                <span
                  className="block w-6 h-px bg-[#f5f0e8] transition-all duration-300"
                  style={{
                    transform: mobileOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
                    backgroundColor: mobileOpen ? '#c9a96e' : undefined,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] lg:hidden flex flex-col"
            style={{ backgroundColor: '#0c0805' }}
            initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Wood texture overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url('images/wood-texture.jpg')`,
                backgroundSize: 'cover',
              }}
            />

            <div className="relative flex flex-col justify-center h-full px-8 pt-24">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-4 border-b border-white/5"
                  >
                    <span
                      className="text-4xl sm:text-5xl font-light text-[#f5f0e8] hover:text-[#c9a96e] transition-colors"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {link.label}
                    </span>
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-8 py-4 text-xs tracking-[0.2em] uppercase text-[#0c0805] font-medium"
                  style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c98a)' }}
                >
                  Get In Touch
                </button>
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-[#c9a96e]/40 text-xs tracking-widest uppercase">
                  07947128081
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
