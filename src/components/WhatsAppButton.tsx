import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[90] flex flex-col items-end gap-3"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            {/* Direct Dial Button */}
            <a
              href="tel:07947128081"
              className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-[#007AFF] hover:bg-[#0066CC] transition-colors"
              title="Call Us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>

            {/* WhatsApp API Button */}
            <a
              href="https://wa.me/917947128081?text=Hello%2C%20I%20am%20interested%20in%20your%20plywood%20and%20laminates."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20b858] transition-colors"
              title="WhatsApp Us"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-[1px] mt-[1px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
        style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c98a)' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#c9a96e' }}></span>
        
        {/* Contact/Message Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0c0805" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </motion.button>
    </div>
  );
}
