import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 600);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0c0805' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated logo mark */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Geometric frame */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 border border-[#c9a96e]"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 45 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.div
                className="absolute inset-3 border border-[#c9a96e]/40"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <span
                className="text-2xl font-bold tracking-widest z-10"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a96e' }}
              >
                KS
              </span>
            </div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a96e]/60 mb-1">
              Est. Premium Plywood
            </p>
            <h1
              className="text-xl tracking-[0.2em] uppercase text-[#f5f0e8]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              K S Plywoods & Laminates
            </h1>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-48 sm:w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-[10px] tracking-widest text-[#c9a96e]/40 uppercase">Loading</span>
              <span className="text-[10px] tracking-widest text-[#c9a96e]/40">
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
            <div className="h-px w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full origin-left"
                style={{
                  background: 'linear-gradient(90deg, #c9a96e, #e8c98a)',
                  scaleX: Math.min(progress, 100) / 100,
                  transformOrigin: 'left center',
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
