import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const products = [
  'Decorative Laminates',
  'Premium Plywood',
  'Wooden Textures',
  'Matte Finish',
  'Glossy Laminates',
  'Designer Panels',
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0a0704' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)' }}
      />

      {/* Background wood texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('images/wood-texture.jpg')",
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top footer area */}
        <div className="py-16 sm:py-20 lg:py-24">
          {/* Large brand statement */}
          <div className="mb-16 sm:mb-20 overflow-hidden">
            <motion.h2
              className="font-thin text-[#f5f0e8]/10 leading-none"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 8vw, 10rem)',
                letterSpacing: '-0.02em',
              }}
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Crafted with Excellence
            </motion.h2>
          </div>

          {/* Main footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <div
                    className="absolute inset-0 border border-[#c9a96e]/40"
                    style={{ transform: 'rotate(45deg)' }}
                  />
                  <span
                    className="text-xs font-bold text-[#c9a96e] tracking-wider"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    KS
                  </span>
                </div>
                <div>
                  <p
                    className="text-[#f5f0e8] text-sm tracking-widest uppercase"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                  >
                    K S Plywoods
                  </p>
                  <p className="text-[#c9a96e]/50 text-[9px] tracking-[0.3em] uppercase">
                    & Laminates
                  </p>
                </div>
              </div>

              <p className="text-[#f5f0e8]/40 text-xs leading-relaxed mb-6">
                Authorized dealer of premium laminates and plywood. Supplying high-quality materials
                across Chennai for over 15 years.
              </p>

              {/* Social icons */}
              <div className="flex gap-3">
                {['FB', 'IG', 'WA'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center text-[#f5f0e8]/40 hover:text-[#c9a96e] transition-all duration-300 hover:border-[#c9a96e]/40 text-[10px] font-medium tracking-wider"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase mb-6">
                Navigate
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-[#f5f0e8]/50 hover:text-[#c9a96e] text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#c9a96e] group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase mb-6">
                Products
              </h3>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product}>
                    <button
                      onClick={() => scrollToSection('#products')}
                      className="text-[#f5f0e8]/50 hover:text-[#c9a96e] text-sm transition-colors duration-300 text-left flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#c9a96e] group-hover:w-4 transition-all duration-300" />
                      {product}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#f5f0e8]/30 text-[9px] tracking-widest uppercase mb-1">
                    Address
                  </p>
                  <p className="text-[#f5f0e8]/60 text-xs leading-relaxed">
                    No.32 (Old No.44),<br />
                    Periya Thambi Street,<br />
                    Choolai, Chennai – 600112
                  </p>
                </div>
                <div>
                  <p className="text-[#f5f0e8]/30 text-[9px] tracking-widest uppercase mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:07947128081"
                    className="text-[#c9a96e] text-sm hover:text-[#e8c98a] transition-colors"
                  >
                    07947128081
                  </a>
                </div>
                <div>
                  <p className="text-[#f5f0e8]/30 text-[9px] tracking-widest uppercase mb-1">
                    Hours
                  </p>
                  <p className="text-[#f5f0e8]/50 text-xs">
                    Mon – Sat: 9:00 AM – 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-[#f5f0e8]/25 text-[10px] tracking-widest">
            © {currentYear} K S Plywoods & Laminates. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#c9a96e]/40" />
            <p className="text-[#f5f0e8]/20 text-[10px] tracking-widest">
              Authorized Laminates Dealer — Chennai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
