import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ta';

interface Translations {
  [key: string]: {
    en: string;
    ta: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', ta: 'முகப்பு' },
  'nav.about': { en: 'About Us', ta: 'எங்களை பற்றி' },
  'nav.products': { en: 'Products', ta: 'பொருட்கள்' },
  'nav.gallery': { en: 'Gallery', ta: 'தொகுப்பு' },
  'nav.contact': { en: 'Contact', ta: 'தொடர்பு' },
  'nav.cta': { en: 'Get In Touch', ta: 'தொடர்பு கொள்ள' },
  
  // Hero
  'hero.supplying': { en: 'Supplying', ta: 'வழங்கும்' },
  'hero.premium': { en: 'Premium', ta: 'உயர்தர' },
  'hero.wood': { en: 'Wood Solutions', ta: 'மரப் பொருட்கள்' },
  'hero.sub': { 
    en: 'Premium plywood and laminate supplies designed for superior durability. Providing strength and reliability to every project.', 
    ta: 'உயர்ந்த ஆயுளுக்காக வடிவமைக்கப்பட்ட பிரீமியம் பிளைவுட் மற்றும் லாமினேட்ஸ். ஒவ்வொரு திட்டத்திற்கும் வலிமை மற்றும் நம்பகத்தன்மை.' 
  },
  'hero.explore': { en: 'Explore Collection', ta: 'தொகுப்பை காண்க' },
  'hero.contact': { en: 'Contact Us', ta: 'தொடர்பு கொள்க' },

  // Shared
  'authorized.dealer': { en: 'Authorized Dealer', ta: 'அங்கீகரிக்கப்பட்ட வியாபாரி' },
  'premium.quality': { en: 'Premium Quality', ta: 'உயர்தர தரம்' },
  'expert.guidance': { en: 'Expert Guidance', ta: 'வல்லுனர் வழிகாட்டல்' },
  'chennai.based': { en: 'Chennai Based', ta: 'சென்னை நிறுவனம்' },

  // Products
  'products.title1': { en: 'Premium', ta: 'உயர்தர' },
  'products.title2': { en: 'Plywood &', ta: 'பிளைவுட் &' },
  'products.title3': { en: 'Laminates', ta: 'லாமினேட்ஸ்' },
  'products.view_all': { en: 'View Full Catalogue', ta: 'முழு பட்டியலை காண்க' },

  // Contact
  'contact.title1': { en: 'Begin Your', ta: 'தொடங்குங்கள்' },
  'contact.title2': { en: 'Project Journey', ta: 'உங்கள் திட்டத்தை' },
  'contact.send': { en: 'Send Inquiry', ta: 'விசாரணை அனுப்பு' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('ks_lang') as Language;
    if (saved && (saved === 'en' || saved === 'ta')) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === 'en' ? 'ta' : 'en';
      localStorage.setItem('ks_lang', newLang);
      return newLang;
    });
  };

  const t = (key: string) => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key; // fallback to key
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
