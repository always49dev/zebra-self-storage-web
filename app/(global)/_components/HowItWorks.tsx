"use client";

import { Play, MapPin, Minimize, Quote, MousePointerClick, Package, CheckCircle } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        { icon: MapPin, title: "Choose Location", desc: "Find your nearest Zebra facility with our easy store locator search." },
        { icon: Minimize, title: "Choose a Size", desc: "Use our online calculator to pick the perfect unit for your belongings." },
        { icon: Quote, title: "Get an Instant Quote", desc: "No phone calls required. Get transparent, real-time pricing instantly." },
        { icon: MousePointerClick, title: "Book in One Click", desc: "Reserve your unit online in under 60 seconds with no deposit." },
        { icon: Package, title: "Move In Same Day", desc: "Recieve your secure gate code and start storing whenever you're ready." },
        { icon: CheckCircle, title: "Flexible Contracts", desc: "Upsize, downsize or cancel anytime. We work on your schedule." }
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-responsive-h2 font-black text-primary mb-12 tracking-tight text-center lg:text-left">How it works</h2>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Video Placeholder - Clean */}
                    <div className="relative aspect-video rounded-3xl bg-secondary flex items-center justify-center group cursor-pointer overflow-hidden">
                        <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                            <Play className="w-10 h-10 text-primary fill-current ml-1" />
                        </div>
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <p className="text-xs font-black uppercase tracking-[0.2em] mb-1">Watch Video</p>
                            <h4 className="text-xl font-bold">The Zebra Storage Experience</h4>
                        </div>
                    </div>

                    {/* Steps Grid - Clean */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col gap-4 border-2 border-primary/5 p-6 rounded-2xl hover:bg-slate-50 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-primary/5 flex items-center justify-center text-primary shadow-sm">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-primary mb-1">{step.title}</h4>
                                    <p className="text-primary/60 text-sm font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Strip - Clean */}
                <div className="mt-16 bg-slate-50 p-10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-8 border-2 border-primary/5">
                    <div>
                        <h3 className="text-2xl font-black text-primary mb-2">Ready to clear the clutter?</h3>
                        <p className="text-primary/60 font-medium italic">Join over 5,000 happy customers storing with Zebra.</p>
                    </div>
                    <button className="btn-navy px-16 py-5 text-xl">
                        Get Your Quote
                    </button>
                </div>
            </div>
        </section>
    );
}
