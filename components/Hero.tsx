
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  t: {
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

  // Map images to slides
  const images = [
    '/assets/mercedes-interior-hero.png',        // Slide 1: Executive Interior
    '/assets/brussels-airport-branded.png',      // Slide 2: Airport
    '/assets/mercedes-v-class.png',              // Slide 3: Chauffeur/Action
    '/assets/mercedes-v-class-exterior.png'      // Slide 4: Exterior
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
      className="relative h-screen min-h-[600px] bg-black overflow-hidden"
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
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Background Image */}
          <img
            src={images[currentSlide]}
            alt="Luxury Journey"
            className="w-full h-full object-cover"
          />

          {/* Dark Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-12 flex flex-col justify-center">
        <AnimatePresence mode='wait'>
          <div key={`content-${currentSlide}`} className="max-w-3xl space-y-6">

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-4xl lg:text-7xl font-serif-display text-white leading-tight drop-shadow-lg"
            >
              {t.slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-lg lg:text-2xl text-white/80 font-light italic leading-relaxed max-w-2xl drop-shadow-md"
            >
              {t.slides[currentSlide].subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="pt-4"
            >
              <a href="#booking" className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-extrabold py-4 px-10 text-xs uppercase tracking-[0.25em] hover:bg-white transition-all duration-300 shadow-xl rounded-sm">
                {t.slides[currentSlide].cta}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>

          </div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-[#D4AF37]' : 'w-4 bg-white/30 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar for Autoplay */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] z-20">
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
