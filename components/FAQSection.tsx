
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

interface FAQItem {
    q: string;
    a: string;
}

interface FAQSectionProps {
    faqs: FAQItem[];
    lang: string;
}

const HEADINGS: Record<string, { badge: string; title: string; subtitle: string }> = {
    nl: {
        badge: 'Veelgestelde Vragen',
        title: 'Alles wat u\nmoet weten.',
        subtitle: 'Transparantie is de basis van vertrouwen. Hieronder vindt u antwoorden op de meest gestelde vragen over onze premium chauffeursdienst in Antwerpen.',
    },
    fr: {
        badge: 'Questions Fréquentes',
        title: 'Tout ce que\nvous devez savoir.',
        subtitle: 'La transparence est la base de la confiance. Retrouvez ci-dessous les réponses aux questions les plus fréquentes sur notre service de chauffeur premium à Anvers.',
    },
    en: {
        badge: 'Frequently Asked Questions',
        title: 'Everything you\nneed to know.',
        subtitle: 'Transparency is the foundation of trust. Below you will find answers to the most common questions about our premium chauffeur service in Antwerp.',
    },
    es: {
        badge: 'Preguntas Frecuentes',
        title: 'Todo lo que\nnecesita saber.',
        subtitle: 'La transparencia es la base de la confianza. Encuentre respuestas a las preguntas más frecuentes sobre nuestro servicio de chófer premium en Amberes.',
    },
};

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, lang }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const h = HEADINGS[lang] || HEADINGS.en;

    return (
        <section
            id="faq"
            aria-label="Frequently Asked Questions"
            className="py-24 lg:py-40 bg-[#050505] relative overflow-hidden"
        >
            {/* Decorative background accent */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left: Heading */}
                    <ScrollReveal>
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] block">
                                {h.badge}
                            </span>
                            <h2 className="text-4xl lg:text-6xl font-serif-display text-white leading-tight whitespace-pre-line">
                                {h.title}
                            </h2>
                            <p className="text-white/50 font-light leading-relaxed text-sm">
                                {h.subtitle}
                            </p>
                            {/* CTA */}
                            <a
                                href="tel:+32478617101"
                                className="inline-flex items-center gap-3 text-[#D4AF37] text-sm font-bold uppercase tracking-widest hover:gap-5 transition-all duration-300"
                            >
                                <i className="fas fa-phone-alt text-xs" />
                                +32 478 61 71 01
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Right: FAQ accordion */}
                    <div className="space-y-0">
                        {faqs.map((item, i) => (
                            <ScrollReveal key={i} delay={0.05 * i}>
                                <div className="border-b border-white/10">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                                        aria-expanded={openIndex === i}
                                    >
                                        <span className="text-white/90 font-light text-base leading-snug group-hover:text-white transition-colors pr-4">
                                            {item.q}
                                        </span>
                                        <motion.span
                                            animate={{ rotate: openIndex === i ? 45 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-white/20 rounded-full text-[#D4AF37] mt-0.5"
                                        >
                                            <i className="fas fa-plus text-[10px]" />
                                        </motion.span>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-7 text-white/50 font-light text-sm leading-relaxed">
                                                    {item.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
