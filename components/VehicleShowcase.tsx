
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '../types';

interface VehicleShowcaseProps {
    t: Translations['fleet'];
}

const VehicleShowcase: React.FC<VehicleShowcaseProps> = ({ t }) => {
    const [activeTab, setActiveTab] = useState<'exterior' | 'interior7' | 'interior6'>('exterior');

    const content = {
        exterior: {
            image: '/assets/mercedes-v-class-exterior.png',
            label: t.exteriorLabel,
            desc: "Discreet black metallic finish with privacy glass."
        },
        interior7: {
            image: '/assets/mercedes-v-class-interior-7.png',
            label: t.interior7Label,
            desc: "Face-to-face executive seating for productive meetings."
        },
        interior6: {
            image: '/assets/mercedes-v-class-interior-6.png',
            label: t.interior6Label,
            desc: "Maximum legroom conference setup for VIP travel."
        }
    };

    return (
        <section id="vehicle-showcase" className="py-24 bg-[#0a0a0b] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 lg:px-12">

                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] block mb-4"
                    >
                        {t.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-serif-display text-white mb-6"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg font-light leading-relaxed"
                    >
                        {t.description}
                    </motion.p>
                </div>

                {/* Interactive Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Controls / Tabs */}
                    <div className="lg:col-span-4 space-y-2">
                        {(['exterior', 'interior7', 'interior6'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full text-left p-6 border-l-2 transition-all duration-500 group ${activeTab === tab
                                        ? 'border-[#D4AF37] bg-white/5'
                                        : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                                    }`}
                            >
                                <span className={`text-xs font-bold uppercase tracking-widest block mb-2 ${activeTab === tab ? 'text-[#D4AF37]' : 'text-white/40 group-hover:text-white/60'}`}>
                                    0{tab === 'exterior' ? '1' : tab === 'interior7' ? '2' : '3'}
                                </span>
                                <span className={`text-xl font-serif block ${activeTab === tab ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                                    {content[tab].label}
                                </span>
                            </button>
                        ))}

                        {/* Specs List */}
                        <div className="pt-12 space-y-4">
                            {t.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 text-white/60">
                                    <i className="fas fa-check text-[#D4AF37] text-xs"></i>
                                    <span className="text-sm tracking-wide">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Display Area */}
                    <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-auto lg:h-[600px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full rounded-sm overflow-hidden border border-white/10"
                            >
                                <img
                                    src={content[activeTab].image}
                                    alt={content[activeTab].label}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-white/80 italic font-light">{content[activeTab].desc}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default VehicleShowcase;
