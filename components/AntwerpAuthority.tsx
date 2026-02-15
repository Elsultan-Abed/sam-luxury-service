
import React from 'react';
import { motion } from 'framer-motion';

const AntwerpAuthority: React.FC = () => {
    const cities = ["Brussels", "Ghent", "Bruges", "Liège", "Charleroi", "Amsterdam", "Paris", "Düsseldorf"];

    return (
        <section className="py-24 px-8 bg-black relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/5 blur-3xl rounded-full translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Local Excellence
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
                            Premium Chauffeur Service <br /> Based in <span className="italic text-white/50">Antwerp</span>
                        </h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed">
                            We specialize in executive chauffeur services starting from Antwerp to all major cities in Belgium and Europe.
                            Whether for business, airport transfers, or private events, we provide a seamless connection between the capital of cool and the rest of the world.
                        </p>
                    </motion.div>

                    {/* City Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {cities.map((city, index) => (
                            <motion.div
                                key={city}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                                <span className="text-white/80 font-light tracking-wide">{city}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual / Map Placeholder (Creative) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-white/10 glass-morphism p-2">
                        <img
                            src="/assets/antwerp-luxury.png"
                            alt="Antwerp Central Station"
                            className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-1">HQ Location</p>
                            <p className="text-white text-2xl font-serif">Antwerp, Belgium</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AntwerpAuthority;
