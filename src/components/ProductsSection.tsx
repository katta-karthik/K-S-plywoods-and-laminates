import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const products = [
  {
    id: 1,
    category: 'Decorative Laminates',
    description:
      'Rich patterns and textures for sophisticated wall cladding, furniture surfaces, and cabinetry.',
    image: '/images/laminate-1.jpg',
    accent: '#c9a96e',
    number: '01',
    tag: 'Bestseller',
  },
  {
    id: 2,
    category: 'Premium Plywood',
    description:
      'High-grade marine and commercial ply for structural and decorative applications requiring strength and beauty.',
    image: '/images/laminate-2.jpg',
    accent: '#c9a96e',
    number: '02',
    tag: 'Premium',
  },
  {
    id: 3,
    category: 'Matte Finish Laminates',
    description:
      'Ultra-smooth matte surfaces delivering a refined, contemporary aesthetic for modern homes and offices.',
    image: '/images/laminate-3.jpg',
    accent: '#c9a96e',
    number: '03',
    tag: 'Trending',
  },
  {
    id: 4,
    category: 'Glossy Laminates',
    description:
      'High-gloss surfaces that reflect light beautifully, adding depth and luminosity to any space.',
    image: '/images/laminate-glossy.jpg',
    accent: '#c9a96e',
    number: '04',
    tag: 'New',
  },
  {
    id: 5,
    category: 'Wooden Textures',
    description:
      'Authentic wood-grain reproductions offering natural warmth without compromise on durability.',
    image: '/images/wood-texture.jpg',
    accent: '#c9a96e',
    number: '05',
    tag: 'Classic',
  },
  {
    id: 6,
    category: 'Designer Panels',
    description:
      'Exclusive designer panel collections for custom carpentry and structural installations.',
    image: '/images/gallery-1.jpg',
    accent: '#c9a96e',
    number: '06',
    tag: 'Exclusive',
  },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden group cursor-pointer"
      style={{
        background: '#1a1410',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <motion.img
          src={product.image}
          alt={product.category}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: hovered
              ? 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 100%)'
              : 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.1) 100%)',
          }}
        />

        {/* Tag */}
        <div
          className="absolute top-4 left-4 px-3 py-1 text-[9px] tracking-[0.3em] uppercase"
          style={{
            background: 'rgba(201,169,110,0.15)',
            border: '1px solid rgba(201,169,110,0.3)',
            color: '#c9a96e',
          }}
        >
          {product.tag}
        </div>

        {/* Number */}
        <div
          className="absolute top-4 right-4 text-5xl font-thin opacity-20"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a96e' }}
        >
          {product.number}
        </div>

        {/* Bottom content on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3
            className="text-[#f5f0e8] font-light text-xl mb-2"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {product.category}
          </h3>

          <motion.p
            className="text-[#f5f0e8]/60 text-xs leading-relaxed"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {product.description}
          </motion.p>

          <motion.div
            className="flex items-center gap-2 mt-4"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <span className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase">Explore</span>
            <div className="w-6 h-px bg-[#c9a96e]" />
          </motion.div>
        </div>
      </div>

      {/* Bottom border glow on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        animate={{
          background: hovered
            ? 'linear-gradient(90deg, transparent, #c9a96e, transparent)'
            : 'transparent',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#0c0805' }}
    >
      {/* Background wood texture strip */}
      <div
        className="absolute left-0 top-0 w-1 h-full opacity-60"
        style={{ background: 'linear-gradient(to bottom, transparent, #c9a96e, transparent)' }}
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
                Our Collection
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
              Premium{' '}
              <em className="text-[#c9a96e] not-italic">Plywood &</em>
              <br />
              Laminates
            </motion.h2>
          </div>

          <motion.p
            className="text-[#f5f0e8]/50 max-w-xs leading-relaxed text-sm lg:text-right"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Curated selection of premium ISI-certified laminates and plywood for maximum durability.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}
            className="group flex items-center gap-4 px-10 py-4 border border-[#c9a96e]/30 hover:border-[#c9a96e] transition-all duration-300 text-[#f5f0e8]/70 hover:text-[#c9a96e] text-xs tracking-[0.25em] uppercase"
          >
            Download Laminate Catalog (PDF)
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
