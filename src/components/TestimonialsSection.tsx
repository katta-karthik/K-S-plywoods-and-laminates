import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Krishnamurthy',
    role: 'Contractor, Chennai',
    text: 'K S Plywoods has been my go-to partner for every premium project. The quality of their laminates is simply unmatched in Chennai. My clients always notice the difference, and the service is impeccable.',
    rating: 5,
    initials: 'PK',
  },
  {
    id: 2,
    name: 'Arjun Ramaswamy',
    role: 'Architect & Builder',
    text: 'I have been sourcing premium plywood and laminates from K S Plywoods for over 8 years. Their product range, combined with honest pricing and expert guidance, makes them the best dealer in the city.',
    rating: 5,
    initials: 'AR',
  },
  {
    id: 3,
    name: 'Meenakshi Sundaram',
    role: 'Homeowner, Anna Nagar',
    text: 'We renovated our entire home using materials from K S Plywoods. The team helped us choose the perfect plywood and laminates for our wardrobes and cabinets. The quality is outstanding!',
    rating: 5,
    initials: 'MS',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#c9a96e]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#14100c' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/wood-texture.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.92)' }} />
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)' }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Testimonials
            </span>
            <div className="w-12 h-px bg-[#c9a96e]" />
          </motion.div>

          <motion.h2
            className="font-light text-[#f5f0e8] leading-[1.1]"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            What Our{' '}
            <em className="text-[#c9a96e] not-italic">Clients Say</em>
          </motion.h2>
        </div>

        {/* Testimonials Display */}
        <div className="relative">
          {/* Large quote mark */}
          <div
            className="absolute -top-4 left-0 text-[10rem] sm:text-[14rem] font-thin opacity-[0.04] leading-none pointer-events-none select-none"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a96e' }}
          >
            "
          </div>

          {/* Active Testimonial */}
          <div className="relative min-h-[300px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="relative p-8 sm:p-10 lg:p-14 max-w-4xl mx-auto"
                  style={{
                    background: 'rgba(20,20,20,0.7)',
                    border: '1px solid rgba(201,169,110,0.12)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Top gold line */}
                  <div
                    className="absolute top-0 left-10 right-10 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent)' }}
                  />

                  <StarRating count={testimonials[active].rating} />

                  <p
                    className="text-[#f5f0e8]/80 leading-relaxed my-6 sm:my-8"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                      fontStyle: 'italic',
                    }}
                  >
                    "{testimonials[active].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium text-[#0c0805] flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c98a)' }}
                    >
                      {testimonials[active].initials}
                    </div>
                    <div>
                      <p
                        className="text-[#f5f0e8] font-medium"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}
                      >
                        {testimonials[active].name}
                      </p>
                      <p className="text-[#c9a96e]/70 text-xs tracking-wider">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 border border-[#c9a96e]/20 hover:border-[#c9a96e] flex items-center justify-center text-[#f5f0e8]/50 hover:text-[#c9a96e] transition-all duration-300"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? '28px' : '6px',
                    height: '2px',
                    background: i === active ? '#c9a96e' : 'rgba(201,169,110,0.25)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 border border-[#c9a96e]/20 hover:border-[#c9a96e] flex items-center justify-center text-[#f5f0e8]/50 hover:text-[#c9a96e] transition-all duration-300"
            >
              →
            </button>
          </div>

          {/* All cards preview - mobile */}
          <div className="grid grid-cols-3 gap-3 mt-10 lg:hidden">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="p-3 text-left transition-all duration-300"
                style={{
                  background: i === active ? 'rgba(201,169,110,0.08)' : 'rgba(20,20,20,0.5)',
                  border: `1px solid ${i === active ? 'rgba(201,169,110,0.3)' : 'rgba(255,255,255,0.05)'}`,
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-medium text-[#0c0805] mb-2"
                  style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c98a)' }}
                >
                  {t.initials}
                </div>
                <p className="text-[#f5f0e8]/70 text-[9px] font-medium truncate">{t.name}</p>
                <p className="text-[#c9a96e]/50 text-[8px] truncate">{t.role.split(',')[0]}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
