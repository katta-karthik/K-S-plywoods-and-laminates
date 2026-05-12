import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const showcaseItems = [
  {
    title: 'Craft the Perfect Kitchen',
    subtitle: 'High-gloss & matte laminates for modern kitchens',
    image: '/images/gallery-2.jpg',
    accent: '#c9a96e',
    tag: 'Kitchen Spaces',
  },
  {
    title: 'Define Your Living Room',
    subtitle: 'Wood-grain panels that transform ordinary walls',
    image: '/images/gallery-1.jpg',
    accent: '#c9a96e',
    tag: 'Living Areas',
  },
  {
    title: 'Create Bedroom Serenity',
    subtitle: 'Warm walnut tones for intimate bedrooms',
    image: '/images/gallery-3.jpg',
    accent: '#c9a96e',
    tag: 'Bedrooms',
  },
];

function ShowcaseCard({
  item,
  index,
}: {
  item: (typeof showcaseItems)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      className="relative flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[45vw] xl:w-[38vw] overflow-hidden group cursor-pointer"
      style={{ height: 'clamp(380px, 60vh, 600px)' }}
      initial={{ opacity: 0, x: 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.5) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(201,169,110,0.08), transparent)',
        }}
      />

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ border: '1px solid rgba(201,169,110,0)' }}
        whileHover={{ borderColor: 'rgba(201,169,110,0.25)' }}
        transition={{ duration: 0.3 }}
      />

      {/* Tag */}
      <div
        className="absolute top-5 left-5 px-3 py-1 text-[9px] tracking-[0.3em] uppercase"
        style={{
          background: 'rgba(201,169,110,0.12)',
          border: '1px solid rgba(201,169,110,0.25)',
          color: '#c9a96e',
          backdropFilter: 'blur(10px)',
        }}
      >
        {item.tag}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h3
          className="font-light text-[#f5f0e8] mb-2 leading-tight"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {item.title}
        </h3>
        <p className="text-[#f5f0e8]/60 text-xs sm:text-sm mb-4">{item.subtitle}</p>

        <motion.div
          className="flex items-center gap-3 text-[#c9a96e]"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase">Explore</span>
          <motion.div
            className="h-px bg-[#c9a96e]"
            initial={{ width: 16 }}
            whileHover={{ width: 40 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: '#1a1410' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)' }}
      />

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="px-4 sm:px-8 lg:px-16 mb-12 sm:mb-16">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Spaces We Transform
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <motion.h2
              className="font-light text-[#f5f0e8] leading-[1.1]"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Every Room,{' '}
              <em className="text-[#c9a96e] not-italic">Elevated</em>
            </motion.h2>

            <motion.p
              className="text-[#f5f0e8]/40 text-xs tracking-widest uppercase hidden sm:block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Scroll to explore →
            </motion.p>
          </div>
        </div>

        {/* Horizontal scroll area */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 horizontal-scroll"
          style={{
            paddingLeft: 'max(1rem, min(4rem, 4vw))',
            paddingRight: 'max(1rem, min(4rem, 4vw))',
          }}
        >
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={item.title} item={item} index={index} />
          ))}

          {/* End card */}
          <motion.div
            className="flex-shrink-0 w-[40vw] sm:w-[25vw] lg:w-[20vw] flex flex-col items-center justify-center gap-4"
            style={{ height: 'clamp(380px, 60vh, 600px)' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div
              className="w-16 h-16 flex items-center justify-center"
              style={{ border: '1px solid rgba(201,169,110,0.3)' }}
            >
              <span className="text-[#c9a96e] text-xl">→</span>
            </div>
            <p className="text-[#f5f0e8]/40 text-xs tracking-widest uppercase text-center">
              Contact Us<br />for More
            </p>
          </motion.div>
        </div>

        {/* Scroll progress */}
        <div className="px-4 sm:px-8 lg:px-16 mt-4">
          <div className="w-full h-px bg-white/5">
            <motion.div
              className="h-full bg-[#c9a96e]"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
