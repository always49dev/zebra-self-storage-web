"use client";

import React from 'react';
import { motion } from 'framer-motion';

const StorageClosingCTA = () => {
    return (
        <div className="mt-80 bg-white py-32 border-t border-primary/5 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/[0.01] -skew-y-3" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-primary mb-12 tracking-tighter">Get started today</h2>
                    <p className="text-xl md:text-2xl text-primary/60 font-medium mb-16 max-w-2xl mx-auto">
                        Join thousands of happy customers who trust Zebra for their personal storage needs.
                    </p>
                    <button className="group relative px-24 py-6 rounded-full bg-primary text-white font-black text-xl hover:bg-primary/95 transition-all shadow-2xl shadow-primary/30 active:scale-95 overflow-hidden">
                        <span className="relative z-10">Get a free quote</span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default StorageClosingCTA;
