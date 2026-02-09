
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  t: { home: string; services: string; booking: string; contact: string };
}

const Header: React.FC<HeaderProps> = ({ currentLang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass-morphism border-b border-white/10 py-2' : 'bg-transparent py-4 lg:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center h-full">
            <a href="#" className="flex items-center h-12 lg:h-16">
              <img
                src="/assets/logo.png"
                alt="SAM Luxury Service"
                className="h-full w-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            {[
              { label: t.home, href: '#' },
              { label: t.services, href: '#fleet' },
              { label: t.booking, href: '#booking' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-[0.3em] font-bold uppercase text-white/60 hover:text-[#D4AF37] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {(['nl', 'en', 'fr', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 lg:px-4 py-2 rounded-full text-[10px] font-black uppercase transition-all tracking-widest ${currentLang === l ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                >
                  {l.substring(0, 2)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
