
import React, { useEffect, useState, RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingCTAProps {
    t: {
        ctaPhone: string;
        ctaWhatsApp: string;
    };
    heroRef: RefObject<HTMLElement>;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ t, heroRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // If ref is not yet available, we can retry (though usually it is available on effect)
        // Or just rely on the effect dependency if we pass ref.current (but ref.current is mutable)
        // We'll trust that by the time this effect runs, the Hero has mounted.

        // However, if Hero mounts LATER, we need to be careful.
        // Setting up observer

        const checkVisibility = () => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            setIsVisible(rect.bottom < 0);
        };

        if (!heroRef.current) {
            console.warn('[FloatingCTA] heroRef is null on mount');
            // Retry once quickly just in case
            setTimeout(checkVisibility, 200);
        } else {
            console.log('[FloatingCTA] heroRef found, observing');
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Show if not intersecting and top is negative (scrolled past)
                const isPast = !entry.isIntersecting && entry.boundingClientRect.top < 0;
                setIsVisible(isPast);
            },
            { threshold: 0 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        window.addEventListener('scroll', checkVisibility);

        // Initial check
        checkVisibility();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', checkVisibility);
        };
    }, [heroRef]); // Re-run if ref object changes (unlikely)

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    id="floating-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-[15px] right-[15px] lg:bottom-[30px] lg:right-[30px] flex flex-col gap-3 z-[100] pointer-events-auto"
                >
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/32478617101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 lg:w-auto lg:h-auto lg:px-6 lg:py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 group"
                        aria-label="WhatsApp"
                    >
                        <i className="fab fa-whatsapp text-2xl lg:text-xl"></i>
                        <span className="hidden lg:block ml-2 text-sm font-bold uppercase tracking-wider">{t.ctaWhatsApp}</span>
                    </a>

                    {/* Call Button */}
                    <a
                        href="tel:+32478617101"
                        className="flex items-center justify-center w-14 h-14 lg:w-auto lg:h-auto lg:px-6 lg:py-3 rounded-full bg-black text-white border border-white/10 shadow-lg shadow-black/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 group"
                        aria-label="Call Now"
                    >
                        <i className="fas fa-phone-alt text-xl lg:text-sm"></i>
                        <span className="hidden lg:block ml-2 text-sm font-bold uppercase tracking-wider">{t.ctaPhone}</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
