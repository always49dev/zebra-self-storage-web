"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Hero() {
    const [activeCity, setActiveCity] = useState("Nearest");
    const cities = ["Nearest", "London", "Manchester", "Birmingham", "Glasgow"];

    return (
        <section className="bg-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Real Copy Headlines - Clean */}
                <h1 className="text-responsive-h1 font-black text-primary mb-4 tracking-tight">
                    Self storage for <br className="hidden sm:block" />
                    every milestone.
                </h1>
                <p className="text-lg sm:text-xl font-bold text-primary/70 mb-10 max-w-2xl">
                    Secure, flexible, and affordable units for when life needs a little more space.
                </p>

                {/* Search Box - Clean & Interactive */}
                <div className="w-full max-w-2xl relative mb-8">
                    <div className="relative flex items-center bg-white border-2 border-primary/20 rounded-2xl p-2 sm:p-3 group focus-within:border-primary transition-all">
                        <input
                            type="text"
                            placeholder="Enter your city or postcode..."
                            className="flex-grow outline-none px-4 text-base sm:text-lg text-primary font-medium placeholder:text-primary/30"
                        />
                        <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary/90 active:scale-95 transition-all">
                            <Search className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* City Pills - Clean & Interactive */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {cities.map((city) => (
                        <button
                            key={city}
                            onClick={() => setActiveCity(city)}
                            className={`px-5 py-2 rounded-full text-xs font-bold border-2 transition-all ${activeCity === city
                                ? 'bg-primary border-primary text-white'
                                : 'border-primary/20 text-primary hover:border-primary'
                                }`}
                        >
                            {city}
                        </button>
                    ))}
                    <button className="px-5 py-2 text-primary/50 hover:text-primary text-xs font-bold underline underline-offset-4 transition-colors">
                        View all
                    </button>
                </div>

                {/* USPs - Clean */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 w-full text-[10px] font-black text-primary/40 uppercase tracking-widest">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        No deposit required
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Price match guarantee
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Instant online booking
                    </div>
                </div>
            </div>
        </section>
    );
}
