import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-2.235-.61-4.33-1.674-6.123A11.959 11.959 0 0112 3c-1.466 0-2.874.265-4.172.744" />
      </svg>
    ),
    title: 'Authorized Dealer',
    desc: 'Certified and trusted dealer of premium laminates and plywood brands ensuring guaranteed quality.',
    number: '01',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Premium Quality',
    desc: 'Every product in our collection is handpicked for superior finish, durability, and aesthetic excellence.',
    number: '02',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Wide Variety',
    desc: '500+ laminate and plywood options spanning matte, gloss, textured, and designer finishes.',
    number: '03',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Elegant Finishes',
    desc: 'From natural wood grains to contemporary abstracts — every finish tells a story of refinement.',
    number: '04',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Competitive Pricing',
    desc: 'Premium materials at honest prices. We believe luxury should be accessible to all.',
    number: '05',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Customer First',
    desc: '1000+ satisfied clients trust us for expert guidance, timely service, and post-purchase support.',
    number: '06',
  },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={cardRef}
      className="relative group p-6 sm:p-8 overflow-hidden"
      style={{
        background: 'rgba(20,20,20,0.8)',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      {/* Large background number */}
      <div
        className="absolute -right-3 -top-4 text-8xl sm:text-9xl font-thin opacity-[0.04] pointer-events-none select-none"
        style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a96e' }}
      >
        {feature.number}
      </div>

      {/* Top border on hover */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-[#c9a96e] to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4 }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        style={{
          background: 'rgba(201,169,110,0.08)',
          border: '1px solid rgba(201,169,110,0.2)',
        }}
      >
        <span className="text-[#c9a96e]">{feature.icon}</span>
      </div>

      {/* Content */}
      <h3
        className="text-[#f5f0e8] font-light mb-3 group-hover:text-[#c9a96e] transition-colors duration-300"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
        }}
      >
        {feature.title}
      </h3>

      <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{feature.desc}</p>

      {/* Bottom accent */}
      <div className="flex items-center gap-3 mt-6">
        <div className="w-6 h-px bg-[#c9a96e]/30 group-hover:w-12 transition-all duration-300 group-hover:bg-[#c9a96e]" />
        <span className="text-[#c9a96e]/40 text-[9px] tracking-widest uppercase group-hover:text-[#c9a96e]/70 transition-colors">
          {feature.number}
        </span>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#0c0805' }}
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(201,169,110,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,169,110,0.04) 0%, transparent 50%)',
        }}
      />

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
              Why Choose Us
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
            The{' '}
            <em className="text-[#c9a96e] not-italic">KS Difference</em>
          </motion.h2>

          <motion.p
            className="text-[#f5f0e8]/50 max-w-xl mx-auto mt-4 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Decades of expertise, thousands of satisfied clients, and an unwavering commitment
            to quality — that's what sets us apart.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
