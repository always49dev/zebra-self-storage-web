"use client";

import { Check, X } from "lucide-react";

export default function InsuranceFeatures() {
    const covered = [
        "Fire, Lightning, & Explosion",
        "Earthquake & Aircraft Impact",
        "Storm, Flood, & Burst Pipes",
        "Theft (following forced entry)",
        "Impact by vehicle or animal",
        "Vandalism and malicious damage"
    ];

    const notCovered = [
        "Money, bonds, and securities",
        "Jewellery, watches, or precious gems",
        "Damage due to gradual deterioration",
        "Mechanical or electrical collapse",
        "War, terrorism, or radioactive contamination",
        "Any damage excluding physical loss"
    ];

    return (
        <section className="px-4 py-24 bg-slate-50 border-b border-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Whats Covered */}
                    <div className="bg-white rounded-[2rem] p-10 border border-slate-200 h-full flex flex-col">
                        <div className="w-full aspect-[16/6] bg-slate-100 rounded-2xl mb-8 overflow-hidden">
                            <img
                                src="https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2024-07-30-11-37-34-1920w.jpg"
                                alt="Covered items"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl font-black text-primary mb-8 tracking-tight">Whats covered</h2>
                        <ul className="space-y-4">
                            {covered.map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-600 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-green-600 stroke-[3px]" />
                                    </div>
                                    <span className="ml-4">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Not Covered */}
                    <div className="bg-white/50 rounded-[2rem] p-10 border border-slate-200 h-full">
                        <h2 className="text-2xl font-black text-slate-400 mb-8 tracking-tight">Not covered</h2>
                        <ul className="space-y-4">
                            {notCovered.map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-400 font-medium line-through decoration-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                        <X className="w-3.5 h-3.5 text-slate-300 stroke-[3px]" />
                                    </div>
                                    <span className="ml-4">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                            <p className="text-sm text-primary/70 italic leading-relaxed">
                                * Please refer to your policy document for the full list of inclusions and exclusions.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
