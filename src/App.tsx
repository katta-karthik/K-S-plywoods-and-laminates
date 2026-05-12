import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Cursor from './components/Cursor';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeBanner from './components/MarqueeBanner';
import OwnerSection from './components/OwnerSection';
import StatsSection from './components/StatsSection';
import ProductsSection from './components/ProductsSection';
import GallerySection from './components/GallerySection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import ProductShowcase from './components/ProductShowcase';
import ParallaxStatement from './components/ParallaxStatement';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded after loading screen duration
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0c0805' }}>
      {/* Premium cursor */}
      <Cursor />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Quote Modal */}
      <QuoteModal />

      {/* Loading screen */}
      <LoadingScreen />

      {/* Main content */}
      <SmoothScroll>
        <div
          className="relative"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          {/* Floating Navbar */}
          <Navbar />

          {/* Page sections */}
          <main>
            {/* 1. Hero */}
            <HeroSection />

            {/* Marquee */}
            <MarqueeBanner />

            {/* 2. Owner Spotlight */}
            <OwnerSection />

            {/* Stats */}
            <StatsSection />

            {/* 3. Products */}
            <ProductsSection />

            {/* Showcase */}
            <ProductShowcase />

            {/* 4. Gallery */}
            <GallerySection />

            {/* Parallax statement */}
            <ParallaxStatement />

            {/* 5. Why Choose Us */}
            <WhyChooseUs />

            {/* 6. Testimonials */}
            <TestimonialsSection />

            {/* FAQ */}
            <FaqSection />

            {/* 7. Contact */}
            <ContactSection />
          </main>

          {/* 8. Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </div>
  );
}
