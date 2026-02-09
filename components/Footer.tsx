
import React from 'react';

interface FooterProps {
  t: {
    quote: string;
    services: string;
    headquarters: string;
    directLine: string;
    officialInquiries: string;
    copyright: string;
  };
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-black text-white py-48 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 lg:gap-40">
          <div className="col-span-1 md:col-span-2 space-y-12">
            <div className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="SAM Luxury Service"
                className="h-24 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-white/30 max-w-sm font-light leading-relaxed text-sm italic">
              "{t.quote}"
            </p>
            <div className="flex space-x-12">
              {['whatsapp', 'facebook-f', 'instagram'].map((icon) => (
                <a key={icon} href="#" className="text-white/20 hover:text-[#D4AF37] transition-all text-sm group">
                  <i className={`fab fa-${icon} group-hover:scale-125 transition-transform duration-500`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">{t.services}</h4>
            <ul className="space-y-6 text-white/30 text-[10px] font-bold uppercase tracking-[0.4em]">
              <li><a href="#" className="hover:text-white transition-colors">Brussels Airport</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paris Executive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Port of Antwerp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VIP Concierge</a></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">{t.headquarters}</h4>
            <div className="space-y-10">
              <div className="flex flex-col gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">{t.directLine}</span>
                <a href="tel:+32478617101" className="text-xl text-white font-serif-display italic hover:text-[#D4AF37] transition-colors">+32 478 61 71 01</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">{t.officialInquiries}</span>
                <a href="mailto:info@samluxuryservice.be" className="text-sm font-light text-white/60 hover:text-white transition-colors">info@samluxuryservice.be</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-48 pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <p className="text-[9px] text-white/10 uppercase tracking-[0.6em] font-black">
            Copyright © {new Date().getFullYear()} SAM Luxury Service · {t.copyright}
          </p>
          <div className="flex items-center gap-16 opacity-10">
            <i className="fab fa-cc-visa text-2xl"></i>
            <i className="fab fa-cc-mastercard text-2xl"></i>
            <i className="fab fa-apple-pay text-3xl"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
