
import React from 'react';
import { motion } from 'framer-motion';

const TrustIndicators: React.FC = () => {
    const features = [
        {
            icon: "fas fa-car",
            title: "Dedicated Vehicle",
            desc: "Always the same premium Mercedes V-Class. No surprises."
        },
        {
            icon: "fas fa-user-tie",
            title: "Personal Chauffeur",
            desc: "Professional, discreet, and multilingual driver."
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Antwerp Based",
            desc: "Local expertise with European reach."
        },
        {
            icon: "fas fa-clock",
            title: "Always On Time",
            desc: "Flight tracking and precise scheduling."
        }
    ];

    return (
        <section className="bg-neutral-900 py-16 px-8 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center space-y-4 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-2 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                                <i className={`${feature.icon} text-2xl text-[#D4AF37]`}></i>
                            </div>
                            <h3 className="text-white font-serif text-lg tracking-wide">{feature.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;
