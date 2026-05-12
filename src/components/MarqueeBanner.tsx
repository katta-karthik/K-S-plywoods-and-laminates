import { motion } from 'framer-motion';

const items = [
  'Greenply',
  '✦',
  'CenturyPly',
  '✦',
  'Merino Laminates',
  '✦',
  'Greenlam',
  '✦',
  'Royale Touche',
  '✦',
  'Action TESA',
  '✦',
  'Kitply',
  '✦',
];

export default function MarqueeBanner() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4 sm:py-5"
      style={{
        background: 'linear-gradient(135deg, #c9a96e, #e8c98a, #c9a96e)',
        borderTop: '1px solid rgba(201,169,110,0.2)',
        borderBottom: '1px solid rgba(201,169,110,0.2)',
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-block mx-4 sm:mx-6 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#0c0805] font-medium"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
