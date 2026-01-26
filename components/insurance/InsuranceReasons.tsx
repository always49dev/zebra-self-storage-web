"use client";

import { ShieldCheck, Clock, Zap, HeartHandshake } from "lucide-react";

export default function InsuranceReasons() {
    const reasons = [
        {
            icon: ShieldCheck,
            title: "Reason 1",
            description: "Full value protection for all your stored household and business items."
        },
        {
            icon: Clock,
            title: "Reason 2",
            description: "Immediate cover available from the moment you move in."
        },
        {
            icon: Zap,
            title: "Reason 3",
            description: "Fast-track claims process handled by our dedicated storage experts."
        },
        {
            icon: HeartHandshake,
            title: "Reason 4",
            description: "No hidden fees or long-term commitments, just clear cover."
        }
    ];

    return (
        <section className="px-4 py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="bg-white p-8 group hover:bg-primary transition-colors duration-300">
                            <div className="mb-6 p-3 rounded-2xl bg-slate-50 w-fit group-hover:bg-white/10 transition-colors">
                                <reason.icon className="w-8 h-8 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary group-hover:text-white mb-3 tracking-tight">
                                {reason.title}
                            </h3>
                            <p className="text-slate-500 group-hover:text-white/80 leading-relaxed text-sm">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
