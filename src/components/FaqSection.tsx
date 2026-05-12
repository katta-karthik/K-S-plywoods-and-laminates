import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqs = [
  {
    question: 'What are the different types of plywood?',
    answer: 'There are various types of plywood such as softwood plywood, hardwood plywood, tropical plywood, aircraft plywood, decorative plywood, etc.',
  },
  {
    question: 'Why is plywood a popular choice among people?',
    answer: 'Plywood is a popular choice among people due to its various properties such as water and chemical resistance, flexibility, high strength, fire resistance, etc.',
  },
  {
    question: 'What is plywood used for?',
    answer: 'Plywood is used for various purposes such as partitions, ceilings, furniture, sheathing etc. To receive more information about the same, it is recommended to speak with a plywood dealer.',
  },
  {
    question: 'Is there a landmark to reach K S Plywood & Laminates in Choolai?',
    answer: 'K S Plywood & Laminates in Choolai, Chennai is located Near Natraj Theater.',
  },
  {
    question: 'Does K S Plywood & Laminates sell waterproof plywood?',
    answer: 'Plywood dealers usually sell waterproof plywood. Thus, it is recommended to connect with K S Plywood & Laminates and ask for the availability of the same.',
  },
  {
    question: 'Can the plywood be painted?',
    answer: 'Some plywood sheets can be painted and laminated. Many plywood dealers provide this service. Get in touch with K S Plywood & Laminates to know if they offer this service too.',
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: '#14100c' }}
    >
      <div className="relative max-w-[1000px] mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">Inquiries</span>
            <div className="w-12 h-px bg-[#c9a96e]" />
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#f5f0e8]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border border-[#c9a96e]/20 rounded-sm overflow-hidden"
                style={{ backgroundColor: isOpen ? '#1a1410' : 'transparent' }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-[#1a1410]"
                >
                  <span
                    className="text-[#f5f0e8] text-lg sm:text-xl pr-8"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="relative w-4 h-4 flex-shrink-0 flex items-center justify-center text-[#c9a96e]"
                  >
                    <motion.span
                      className="absolute w-full h-px bg-current"
                    />
                    <motion.span
                      className="absolute h-full w-px bg-current"
                      animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-[#f5f0e8]/60 text-sm leading-relaxed font-inter">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
