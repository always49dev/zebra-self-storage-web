"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface StorageDetailSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    reverse?: boolean;
}

const StorageDetailSection: React.FC<StorageDetailSectionProps> = ({ title, description, imageUrl, reverse = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}
        >
            <div className="flex-1 w-full relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="flex-1 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight leading-none group-hover:text-primary/90 transition-colors">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-primary/70 leading-relaxed font-medium max-w-xl">
                    {description}
                </p>
                <div className="pt-4">
                    <button className="px-8 py-3 rounded-full border-2 border-primary/10 text-primary font-black text-sm hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95">
                        Find out more
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default StorageDetailSection;
