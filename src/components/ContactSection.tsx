import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Call Us',
    value: '07947128081',
    action: 'tel:07947128081',
    cta: 'Click to Call',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Visit Us',
    value: 'No.32 Periya Thambi St, Choolai, Chennai – 600112',
    action: 'https://maps.google.com/?q=Periya+Thambi+Street+Choolai+Chennai',
    cta: 'Get Directions',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Chat with us directly',
    action: 'https://wa.me/917947128081?text=Hello%2C%20I%20am%20interested%20in%20your%20laminates%20and%20plywood.',
    cta: 'Open WhatsApp',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message
    const text = `Hello! New Inquiry:\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Message:* ${form.message}`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/917947128081?text=${encodedText}`;
    
    // Open in new tab
    window.open(waUrl, '_blank');

    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#0c0805' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)' }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 50%, rgba(201,169,110,0.04) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">Get In Touch</span>
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
            Begin Your{' '}
            <em className="text-[#c9a96e] not-italic">Project Journey</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Cards */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact cards */}
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.action}
                target={item.action.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-start gap-5 p-5 sm:p-6 transition-all duration-300"
                style={{
                  background: 'rgba(20,20,20,0.8)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                whileHover={{ x: 4, borderColor: 'rgba(201,169,110,0.3)' }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0 text-[#c9a96e] group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'rgba(201,169,110,0.08)',
                    border: '1px solid rgba(201,169,110,0.2)',
                  }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#f5f0e8] font-light leading-snug text-sm mb-2">
                    {item.value}
                  </p>
                  <span className="text-[#f5f0e8]/40 text-xs tracking-wider group-hover:text-[#c9a96e] transition-colors">
                    {item.cta} →
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Map placeholder */}
            <motion.div
              className="relative overflow-hidden"
              style={{
                height: '200px',
                background: '#1a1410',
                border: '1px solid rgba(201,169,110,0.1)',
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2!2d80.2707!3d13.0878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzE2LjEiTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 opacity-60 grayscale"
                loading="lazy"
                title="K S Plywoods Location"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(to top, rgba(10,10,10,0.4), transparent)',
              }} />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="text-[#c9a96e] text-[9px] tracking-widest uppercase mb-1 drop-shadow-md">
                  Choolai, Chennai
                </span>
                <a
                  href="https://maps.google.com/?q=Periya+Thambi+Street+Choolai+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#c9a96e] text-[#0c0805] text-[10px] tracking-widest uppercase font-semibold hover:bg-[#b0925c] transition-colors shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="p-8 sm:p-10"
              style={{
                background: 'rgba(20,20,20,0.8)',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3
                className="text-2xl sm:text-3xl font-light text-[#f5f0e8] mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Send an Inquiry
              </h3>
              <p className="text-[#f5f0e8]/40 text-xs tracking-wider mb-8">
                We'll respond within 24 hours
              </p>

              {submitted ? (
                <motion.div
                  className="py-16 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4"
                    style={{ border: '1px solid rgba(201,169,110,0.4)', background: 'rgba(201,169,110,0.08)' }}>
                    <svg className="w-8 h-8 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#f5f0e8] text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Thank You!
                  </p>
                  <p className="text-[#f5f0e8]/50 text-sm mt-2">We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]/60 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/20 outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        placeholder="Your full name"
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(201,169,110,0.4)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]/60 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/20 outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        placeholder="+91 XXXXX XXXXX"
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(201,169,110,0.4)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]/60 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/20 outline-none"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      placeholder="your@email.com"
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(201,169,110,0.4)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]/60 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/20 outline-none resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      placeholder="Tell us about your project and requirements..."
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(201,169,110,0.4)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs tracking-[0.25em] uppercase font-medium text-[#0c0805] hover:scale-[1.02] transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c98a)' }}
                  >
                    Send Inquiry
                  </button>

                  <p className="text-[#f5f0e8]/20 text-[10px] text-center">
                    Or reach us directly at{' '}
                    <a href="tel:07947128081" className="text-[#c9a96e]/60 hover:text-[#c9a96e]">
                      07947128081
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
