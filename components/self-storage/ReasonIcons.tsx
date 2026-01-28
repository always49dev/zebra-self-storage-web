"use client";

import React from 'react';
import { ShieldCheck, Clock, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
    {
        icon: ShieldCheck,
        title: "24/7 Security",
        description: "Round-the-clock monitoring and CCTV."
    },
    {
        icon: Clock,
        title: "Flexible Terms",
        description: "Weekly or monthly rolling contracts."
    },
    {
        icon: Key,
        title: "Easy Access",
        description: "Access your unit whenever you need."
    }
];

const ReasonIcons = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-start gap-8 md:gap-16">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 md:gap-6 bg-primary/[0.03] p-6 rounded-2xl border border-primary/5 hover:bg-primary/[0.05] transition-colors group cursor-default"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-primary mb-1 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-sm font-bold text-primary/50 leading-tight">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReasonIcons;
