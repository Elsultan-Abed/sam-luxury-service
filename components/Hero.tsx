
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  t: {
    ctaPhone: string;
    ctaWhatsApp: string;
    ctaReservation: string;
    slides: {
      title: string;
      subtitle: string;
      cta: string;
    }[];
  };
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Map images to 6 specific slides
  const images = [
    '/assets/mercedes-v-class.png',              // Slide 1: Premium Chauffeur (MAS Museum)
    '/assets/mercedes-v-class-interior-7.png',   // Slide 2: Executive Interior (7-Seat)
    '/assets/brussels-airport-branded.png',      // Slide 3: Airport Transfer
    '/assets/antwerp-luxury.png',                // Slide 4: Antwerp Authority (Station)
    '/assets/mercedes-v-class-interior-6.png',   // Slide 5: Mobile Office (Conference)
    '/assets/grand-place-branded.png'            // Slide 6: Serving All Belgium (Brussels)
  ];

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  return (
    <section
      className="relative h-screen min-h-[700px] bg-black overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          {/* Background Image */}
          <img
            src={images[currentSlide]}
            alt="Luxury Chauffeur Service"
            className="w-full h-full object-cover"
          />

          {/* Premium Dark Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-12 flex flex-col justify-center pb-32 lg:pb-0">
        <AnimatePresence mode='wait'>
          <div key={`content-${currentSlide}`} className="max-w-4xl space-y-8">

            {/* Animated Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-5xl lg:text-8xl font-serif-display text-white leading-[0.9] drop-shadow-2xl"
            >
              {t.slides[currentSlide].title}
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <p className="text-xl lg:text-2xl text-white/90 font-light italic tracking-wide drop-shadow-lg">
                {t.slides[currentSlide].subtitle}
              </p>
            </motion.div>

            {/* Slide-Specific Secondary CTA (Optional/Contextual) */}
            <motion.div
              initial={{ opacity: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6"
            >
              <span className="text-white/50 text-xs uppercase tracking-[0.3em] border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                {t.slides[currentSlide].cta}
              </span>
            </motion.div>

          </div>
        </AnimatePresence>
      </div>

      {/* ALWAYS VISIBLE PRIMARY CTA BAR - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 pb-8 lg:pb-12 px-8">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">

          {/* Slide Indicators - Integrated into bottom bar */}
          <div className="flex gap-3 order-2 lg:order-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-[#D4AF37]' : 'w-4 bg-white/20 hover:bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto order-1 lg:order-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/32478617101"
              className="flex items-center justify-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366] text-white border border-[#25D366]/30 hover:border-[#25D366] px-6 py-4 rounded-sm transition-all duration-300 group/btn"
            >
              <i className="fab fa-whatsapp text-xl group-hover/btn:text-white transition-colors"></i>
              <span className="uppercase tracking-widest text-xs font-bold">{t.ctaWhatsApp}</span>
            </a>

            {/* Call */}
            <a
              href="tel:+32478617101"
              className="flex items-center justify-center gap-3 bg-white text-black hover:bg-[#D4AF37] px-6 py-4 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <i className="fas fa-phone-alt text-sm"></i>
              <span className="uppercase tracking-widest text-xs font-black">{t.ctaPhone}</span>
            </a>

            {/* Reservation */}
            <a
              href="#booking"
              className="flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-6 py-4 rounded-sm transition-all duration-300"
            >
              <i className="fas fa-calendar-check text-sm text-[#D4AF37]"></i>
              <span className="uppercase tracking-widest text-xs font-bold text-[#D4AF37] group-hover:text-white">{t.ctaReservation}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Autoplay Progress Line (Subtle at very bottom) */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] z-40">
          <motion.div
            key={currentSlide}
            className="h-full bg-[#D4AF37]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            style={{ width: "100%" }}
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
