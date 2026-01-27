"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface SizeItem {
    size: string;
    equivalent: string;
    description: string;
    price: string;
    imageUrl: string;
}

const sizes: SizeItem[] = [
    {
        size: "10 ft² / 0.9 m²",
        equivalent: "Equivalent to a locker",
        description: "Perfect for a few boxes, sports equipment, or seasonal items. Think of a large hallway closet.",
        price: "£10.50",
        imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2025-11-27-14-45-44-1920w.jpg"
    },
    {
        size: "25 ft² / 2.3 m²",
        equivalent: "Equivalent to a shed",
        description: "Fits the contents of a small garden shed or about 50 standard storage boxes.",
        price: "£18.00",
        imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/Paignton+10-1920w.jpg"
    },
    {
        size: "50 ft² / 4.6 m²",
        equivalent: "Equivalent to a large van",
        description: "Ideal for the contents of a one-bedroom flat, including some larger furniture items.",
        price: "£28.00",
        imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2024-07-15-08-27-50-1920w.jpg"
    },
    {
        size: "75 ft² / 7.0 m²",
        equivalent: "Equivalent to 1.5 garages",
        description: "Great for a two-bedroom house move or significant business inventory storage.",
        price: "£35.00",
        imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2023-08-23-10-08-22-1920w.jpg"
    },
    {
        size: "100 ft² / 9.3 m²",
        equivalent: "Equivalent to a double garage",
        description: "Fits the contents of a typical three-bedroom home or large office relocation.",
        price: "£45.00",
        imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2024-07-30-11-37-34-1920w.jpg"
    }
];

export default function SizeCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 overflow-hidden bg-slate-50/50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4">

                {/* Carousel Container */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex">
                        {sizes.map((item, index) => (
                            <div key={index} className="embla__slide flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] px-4 min-w-0">
                                <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full group transition-all duration-500 hover:shadow-xl hover:border-primary/20 cursor-pointer">
                                    {/* Video/Image Placeholder */}
                                    <div className="aspect-video bg-secondary/20 relative flex items-center justify-center overflow-hidden">
                                        <img src={item.imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={item.size} />
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                                        <div className="relative w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-2xl font-black text-primary mb-2 tracking-tight">
                                            {item.size}
                                        </h3>
                                        <p className="text-lg font-bold text-slate-400 mb-6 italic">
                                            {item.equivalent}
                                        </p>
                                        <div className="space-y-4 mb-10">
                                            <div className="h-2 w-full bg-slate-100 rounded-full" />
                                            <div className="h-2 w-full bg-slate-100 rounded-full" />
                                            <div className="h-2 w-2/3 bg-slate-100 rounded-full" />
                                        </div>
                                        <div className="mt-auto flex items-center justify-between">
                                            <button className="px-6 py-2 rounded-full border border-primary text-primary font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                                Select
                                            </button>
                                            <div className="text-right">
                                                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">From</span>
                                                <span className="text-lg font-black text-primary">{item.price} <small className="text-[10px] opacity-40 uppercase">/wk</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-16">
                    <button
                        onClick={scrollPrev}
                        className="flex items-center gap-3 px-8 py-3 rounded-full border-2 border-primary text-primary font-black text-sm hover:bg-primary hover:text-white transition-all group"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Smaller</span>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="flex items-center gap-3 px-8 py-3 rounded-full border-2 border-primary text-primary font-black text-sm hover:bg-primary hover:text-white transition-all group"
                    >
                        <span>Bigger</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
}
