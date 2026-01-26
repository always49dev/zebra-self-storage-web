"use client";

import { CheckCircle2 } from "lucide-react";

export default function InsuranceSummary() {
    const points = [
        "Replacement as new basis",
        "Loss of keys and lock changes",
        "Alternative storage costs after a claim",
        "Legal expenses protection",
        "Broad range of perils covered",
        "Flexible policy limits up to £50,000"
    ];

    return (
        <section className="px-4 py-24 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <div className="w-full md:w-1/2 aspect-square rounded-3xl bg-secondary/10 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity" />
                    <img
                        src="https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/image004-1920w.jpg"
                        alt="Storage security"
                        className="w-full h-full object-cover grayscale-[0.3]"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-black text-primary mb-8 tracking-tight">
                        Summary of cover
                    </h2>
                    <ul className="space-y-5">
                        {points.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                                <span className="ml-4 text-slate-600 font-medium">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
