"use client";

import { CheckCircle2 } from "lucide-react";

export default function SizingHero() {
    const items = [
        "Archives / Boxes", "Kitchen items", "1-2 Bedroom house", "3-4 Bedroom house",
        "Garden furniture", "Office equipment", "Hobby / Sports gear", "Full garage"
    ];

    return (
        <section className="px-4 pt-16 pb-12 max-w-4xl mx-auto">
            <h1 className="text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-8">
                Sizing guide
            </h1>

            <div className="space-y-6 mb-16">
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                    Not sure how much space you need? Our sizing guide helps you visualize different unit sizes. Use our suggestion tool below or browse the carousel to find your perfect fit.
                </p>
                <div className="h-1 w-20 bg-primary" />
            </div>

            <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 text-white">
                <h3 className="text-xl font-bold mb-8">What are you storing?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-10">
                    {items.map((item, idx) => (
                        <label key={idx} className="flex items-center gap-4 cursor-pointer group">
                            <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                                <div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </div>
                            <span className="text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                        </label>
                    ))}
                </div>
                <button className="bg-white text-primary px-10 py-3 rounded-full font-black text-sm hover:bg-slate-50 transition-all active:scale-95">
                    Suggest a size
                </button>
            </div>
        </section>
    );
}
