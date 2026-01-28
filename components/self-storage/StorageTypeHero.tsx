"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StorageTypeHeroProps {
    title: string;
    description: string;
}

const StorageTypeHero: React.FC<StorageTypeHeroProps> = ({ title, description }) => {
    return (
        <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-7xl font-black text-primary mb-8 leading-tight tracking-tighter">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-primary/70 leading-relaxed font-medium">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default StorageTypeHero;
