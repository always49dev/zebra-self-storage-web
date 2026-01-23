"use client";

import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

const storageServices = [
    {
        title: "Personal Storage",
        desc: "Moving home or decluttering? Our secure units keep your treasures safe for as long as you need.",
        price: "7.50",
        id: "personal"
    },
    {
        title: "Business Storage",
        desc: "Inventory, archives, or equipment storage. Scale your business space without the long-term overhead.",
        price: "15.00",
        id: "business"
    },
    {
        title: "Student Storage",
        desc: "Going home for the summer? Store your belongings safely and affordably near your campus.",
        price: "4.00",
        id: "student"
    },
    {
        title: "Vehicle Storage",
        desc: "Safe, dry, and gated storage for cars, bikes, and caravans with easy 24/7 access.",
        price: "25.00",
        id: "vehicle"
    }
];

export default function ServiceCards() {
    return (
        <section className="bg-white pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Special Offer Banner - Clean */}
                <div className="bg-primary text-white p-8 mb-4 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl group cursor-pointer hover:bg-primary/95 transition-all">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-secondary rounded-xl">
                            <Zap className="w-8 h-8 fill-current" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black italic tracking-tight">SPECIAL OFFER!</h3>
                            <p className="text-white/70 font-bold">Get 50% OFF your first 8 weeks of storage when you book online today.</p>
                        </div>
                    </div>
                    <button className="whitespace-nowrap bg-white text-primary px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                        Claim Offer
                    </button>
                </div>

                {/* Checkerboard Grid - Clean */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                    {/* Row 1 */}
                    <div className="aspect-square bg-secondary flex items-center justify-center p-12 overflow-hidden">
                        <ShieldCheck className="w-2/3 h-2/3 text-white/10 -rotate-12" />
                    </div>
                    <ServiceCard service={storageServices[0]} />

                    {/* Row 2 */}
                    <div className="order-last sm:order-none">
                        <ServiceCard service={storageServices[1]} />
                    </div>
                    <div className="aspect-square bg-secondary flex items-center justify-center p-12">
                        <ShieldCheck className="w-2/3 h-2/3 text-white/10 rotate-12" />
                    </div>

                    {/* Row 3 */}
                    <div className="aspect-square bg-secondary flex items-center justify-center p-12">
                        <ShieldCheck className="w-2/3 h-2/3 text-white/10 -rotate-6" />
                    </div>
                    <ServiceCard service={storageServices[2]} />

                    {/* Row 4 */}
                    <div className="order-last sm:order-none">
                        <ServiceCard service={storageServices[3]} />
                    </div>
                    <div className="aspect-square bg-secondary flex items-center justify-center p-12">
                        <ShieldCheck className="w-2/3 h-2/3 text-white/10 rotate-6" />
                    </div>
                </div>

                {/* StripeShield™ Clean */}
                <div className="mt-8 p-8 sm:p-12 border-2 border-primary/20 rounded-3xl bg-slate-50 relative group">
                    <h3 className="text-3xl font-black italic text-primary tracking-tighter mb-2">StripeShield™</h3>
                    <p className="text-lg font-bold text-primary mb-6">Premium Self Store Insurance</p>
                    <p className="text-primary/60 max-w-xl mb-10 font-medium leading-relaxed">
                        Don't leave your valuables to chance. Our bespoke insurance plans cover everything from fire and theft to accidental damage, giving you ultimate peace of mind.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <button className="btn-navy py-4 px-12 transition-colors">
                            Explore Coverage
                        </button>
                        <div className="flex items-baseline gap-1">
                            <span className="text-primary/40 text-xs font-black uppercase tracking-widest">Starting at</span>
                            <span className="text-3xl font-black text-primary">£1.50</span>
                            <span className="text-primary/40 text-sm font-bold">/week</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: typeof storageServices[0] }) {
    return (
        <div className="aspect-square bg-white border border-slate-100 p-8 sm:p-12 flex flex-col justify-between group cursor-pointer hover:bg-slate-50 transition-all">
            <div>
                <h4 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                    {service.title}
                </h4>
                <p className="text-primary/60 text-sm font-medium leading-relaxed max-w-xs">
                    {service.desc}
                </p>
            </div>
            <div>
                <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest">From</span>
                    <span className="text-3xl font-black text-primary">£{service.price}</span>
                    <span className="text-primary/30 text-xs font-bold">/week</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="h-10 w-32 border-2 border-primary rounded-full flex items-center justify-center text-xs font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all">
                        Book Now
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </div>
    );
}
