
import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

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

// Map images to 6 specific slides - Defined outside component for stability
const images = [
  '/assets/mercedes-v-class.png',              // Slide 1: Premium Chauffeur (MAS Museum)
  '/assets/mercedes-v-class-interior-7.png',   // Slide 2: Executive Interior (7-Seat)
  '/assets/brussels-airport-branded.png',      // Slide 3: Airport Transfer
  '/assets/antwerp-luxury.png',                // Slide 4: Antwerp Authority (Station)
  '/assets/mercedes-v-class-interior-6.png',   // Slide 5: Mobile Office (Conference)
  '/assets/grand-place-branded.png'            // Slide 6: Serving All Belgium (Brussels)
];

const Hero = forwardRef<HTMLElement, HeroProps>(({ t }, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Memoized navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) {
      nextSlide();
    } else if (info.offset.x > 40) {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  // Robust Auto-play logic - ALWAYS ACTIVE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, [nextSlide, currentSlide]);
  // Dependency on currentSlide ensures timer resets on every slide change (manual or auto)
  // This prevents immediate double-jumps if user clicks right before interval fires

  // Remove swipe hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[700px] bg-black overflow-hidden group select-none"
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {/* Background Image */}
          <img
            src={images[currentSlide]}
            alt="Luxury Chauffeur Service"
            className="w-full h-full object-cover pointer-events-none"
          />

          {/* Premium Dark Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-12 flex flex-col justify-center pb-32 lg:pb-0 pointer-events-none">
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

            {/* Slide-Specific Secondary CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6 pointer-events-auto"
            >
              <span className="text-white/50 text-xs uppercase tracking-[0.3em] border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                {t.slides[currentSlide].cta}
              </span>
            </motion.div>

          </div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Desktop Only) */}
      <div className="hidden lg:flex absolute inset-0 justify-between items-center px-8 pointer-events-none z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="pointer-events-auto bg-black/20 hover:bg-black/50 backdrop-blur-sm text-white/70 hover:text-[#D4AF37] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="pointer-events-auto bg-black/20 hover:bg-black/50 backdrop-blur-sm text-white/70 hover:text-[#D4AF37] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* ALWAYS VISIBLE PRIMARY CTA BAR - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 pb-8 lg:pb-12 px-8">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">

          {/* New Animated Progress Bars */}
          <div className="flex gap-2 w-full lg:w-1/3 order-2 lg:order-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDotClick(index);
                }}
                className="flex-1 h-[2px] bg-white/20 relative overflow-hidden group/bar transition-all hover:h-[4px]"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Fill Animation */}
                <motion.div
                  className="absolute inset-0 bg-[#D4AF37]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: index === currentSlide ? "100%" : index < currentSlide ? "100%" : "0%"
                  }}
                  transition={
                    index === currentSlide
                      ? { duration: 6, ease: "linear" } // Active slide: fill over 6s
                      : { duration: 0 } // Others: instant set
                  }
                />
              </button>
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

      {/* Mobile Swipe Hint */}
      <AnimatePresence>
        {showSwipeHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-32 left-0 w-full text-center pointer-events-none lg:hidden z-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              <i className="fas fa-arrow-left text-[10px] text-white/50 animate-pulse"></i>
              <span className="text-[10px] uppercase tracking-widest text-white/80">Swipe to explore</span>
              <i className="fas fa-arrow-right text-[10px] text-white/50 animate-pulse"></i>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
});

// Add display name for debugging
Hero.displayName = 'Hero';

export default Hero;
