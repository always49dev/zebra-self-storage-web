"use client";

import { Check, ShieldCheck, Lock, Eye, Bell } from "lucide-react";

export default function TrustSection() {
    const benefits = [
        "No deposit or hidden reservation fees",
        "Choice of over 20 different unit sizes",
        "Clean, dry, and individually lit rooms",
        "Short or long term flexible contracts",
        "Free use of trolleys and loading bays"
    ];

    const securityFeatures = [
        { icon: Lock, title: "Individual Alarms", desc: "Every unit is protected by its own alarm system." },
        { icon: Eye, title: "24/7 Monitored CCTV", desc: "Constant surveillance for maximum peace of mind." },
        { icon: Bell, title: "Fire Detection", desc: "Advanced systems ensuring your goods are safe." }
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Why Choose Zebra - Clean */}
                    <div>
                        <h2 className="text-responsive-h2 font-black text-primary mb-8 tracking-tight">Why choose Zebra?</h2>
                        <div className="space-y-6 mb-10">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center transition-transform">
                                        <Check className="w-5 h-5 stroke-[3]" />
                                    </div>
                                    <p className="text-lg font-bold text-primary/80 transition-colors">{benefit}</p>
                                </div>
                            ))}
                        </div>
                        <button className="btn-navy w-full sm:w-auto px-12 py-5 text-lg">
                            Read Our 5-Star Reviews
                        </button>
                    </div>

                    <div className="space-y-12">
                        {/* So Secure Box - Clean */}
                        <div className="border-4 border-primary/5 rounded-3xl p-8 sm:p-10 bg-slate-50 relative group overflow-hidden">
                            <h3 className="text-3xl font-black text-primary mb-8 flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-secondary" />
                                So secure!
                            </h3>
                            <div className="space-y-8">
                                {securityFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border border-primary/5">
                                            <feature.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-primary mb-1">{feature.title}</h4>
                                            <p className="text-primary/60 text-sm font-medium leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Accreditations - Clean */}
                        <div className="bg-primary p-10 rounded-3xl text-white">
                            <p className="text-center font-black uppercase tracking-[0.2em] text-xs mb-8 text-white/50">Proudly Accredited By</p>
                            <div className="flex flex-wrap justify-between items-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                <div className="text-2xl font-black italic tracking-tighter">SSA</div>
                                <div className="text-xl font-bold border-2 border-white px-3 py-1">CYBER SECURE</div>
                                <div className="text-lg font-black bg-white text-primary px-3 py-1 rounded">ISO 9001</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
