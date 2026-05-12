import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    title: 'Living Room Elegance',
    category: 'Wood Work',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    title: 'Kitchen Sophistication',
    category: 'Kitchen Design',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: '/images/hero-bg.jpg',
    title: 'Premium Showroom',
    category: 'Showroom',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: '/images/gallery-3.jpg',
    title: 'Bedroom Luxury',
    category: 'Bedroom Design',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    src: '/images/laminate-1.jpg',
    title: 'Material Artistry',
    category: 'Laminates',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: '/images/wood-texture.jpg',
    title: 'Natural Wood Grain',
    category: 'Wood Textures',
    span: 'col-span-1 row-span-1',
  },
];

function GalleryModal({
  image,
  onClose,
}: {
  image: (typeof galleryImages)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(20px)' }}
      />

      <motion.div
        className="relative max-w-4xl w-full"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-[#f5f0e8]/60 hover:text-[#c9a96e] transition-colors text-xs tracking-widest uppercase flex items-center gap-2 z-10"
        >
          Close
          <span className="text-lg">×</span>
        </button>

        <img
          src={image.src}
          alt={image.title}
          className="w-full object-cover"
          style={{ maxHeight: '80vh' }}
        />

        <div className="p-5 flex items-center justify-between" style={{ background: '#1a1410' }}>
          <div>
            <h3
              className="text-[#f5f0e8] text-xl font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {image.title}
            </h3>
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mt-1">
              {image.category}
            </p>
          </div>
          <div className="w-8 h-px bg-[#c9a96e]/40" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: (typeof galleryImages)[0];
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={itemRef}
      className={`relative overflow-hidden cursor-pointer ${image.span}`}
      style={{ minHeight: '200px' }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6"
        animate={{
          background: hovered
            ? 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)'
            : 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)',
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[#c9a96e] text-[9px] tracking-[0.3em] uppercase mb-1">
            {image.category}
          </p>
          <h3
            className="text-[#f5f0e8] font-light"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
            }}
          >
            {image.title}
          </h3>
        </motion.div>

        {/* View indicator */}
        <motion.div
          className="flex items-center gap-2 mt-3"
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-5 h-5 border border-[#c9a96e]/60 flex items-center justify-center">
            <span className="text-[#c9a96e] text-xs">↗</span>
          </div>
          <span className="text-[#c9a96e] text-xs tracking-widest uppercase">View</span>
        </motion.div>
      </motion.div>

      {/* Corner glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: hovered ? 'inset 0 0 0 1px rgba(201,169,110,0.3)' : 'inset 0 0 0 0px transparent',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#14100c' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)' }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
                Showroom Gallery
              </span>
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
              Plywood{' '}
              <em className="text-[#c9a96e] not-italic">Applications</em>
            </motion.h2>
          </div>

          <motion.p
            className="text-[#f5f0e8]/50 max-w-xs leading-relaxed text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore real-world applications of our premium plywood and laminates in modern homes and offices across Chennai.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px] sm:auto-rows-[260px]">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
