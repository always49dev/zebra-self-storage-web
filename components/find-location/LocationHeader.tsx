"use client";

import { Search } from "lucide-react";

export default function LocationHeader() {
    return (
        <section className="px-4 pt-16 pb-8 max-w-2xl mx-auto w-full">
            <h1 className="text-[2.5rem] font-bold text-primary mb-10 tracking-tight">
                Find a location
            </h1>

            <div className="space-y-6">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Find a location"
                        className="w-full h-12 pl-4 pr-12 rounded-md border border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none font-medium text-primary transition-all bg-white"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
                        <Search className="w-5 h-5 stroke-[2.5px]" />
                    </div>
                </div>

                <button className="btn-navy w-full py-4 text-lg">
                    Use current location
                </button>
            </div>
        </section>
    );
}
