import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    material: 'Plywood',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Bulk Quote Request*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Material:* ${form.material}\n*Quantity:* ${form.quantity}\n*Details:* ${form.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917947128081?text=${encodedText}`, '_blank');
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openQuoteModal', handleOpen);
    return () => window.removeEventListener('openQuoteModal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-[101] bg-[#14100c] border border-[#c9a96e]/30 p-6 sm:p-8 rounded-xl shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#f5f0e8]/50 hover:text-[#c9a96e] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h3 className="text-2xl sm:text-3xl text-[#c9a96e] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Request a Bulk Quote
            </h3>
            <p className="text-[#f5f0e8]/60 text-sm mb-6">
              Fill out the details below and we will get back to you with our best wholesale pricing instantly via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#0c0805] border border-[#c9a96e]/20 px-4 py-3 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-colors rounded-md"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full bg-[#0c0805] border border-[#c9a96e]/20 px-4 py-3 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-colors rounded-md"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select
                  className="w-full bg-[#0c0805] border border-[#c9a96e]/20 px-4 py-3 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-colors rounded-md appearance-none"
                  value={form.material}
                  onChange={(e) => setForm({ ...form, material: e.target.value })}
                >
                  <option value="Plywood">Plywood</option>
                  <option value="Laminates">Laminates</option>
                  <option value="Veneers">Veneers</option>
                  <option value="Hardware">Hardware & Adhesives</option>
                  <option value="Multiple">Multiple Items</option>
                </select>
                <input
                  type="text"
                  required
                  placeholder="Quantity (e.g. 50 sheets)"
                  className="w-full bg-[#0c0805] border border-[#c9a96e]/20 px-4 py-3 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-colors rounded-md"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                />
              </div>

              <textarea
                rows={3}
                placeholder="Any specific brands or thickness required? (Optional)"
                className="w-full bg-[#0c0805] border border-[#c9a96e]/20 px-4 py-3 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-colors rounded-md resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full py-4 mt-2 text-[#0c0805] text-sm tracking-widest uppercase font-semibold transition-transform hover:scale-[1.02] rounded-md flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c98a)' }}
              >
                <span>Get Price on WhatsApp</span>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
