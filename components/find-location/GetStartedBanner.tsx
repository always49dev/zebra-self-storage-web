"use client";

export default function GetStartedBanner() {
    return (
        <section className="px-4 py-24 bg-white text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-black text-primary mb-8 tracking-tighter">
                    Get started
                </h2>
                <div className="max-w-md mx-auto">
                    <button className="btn-navy w-full py-4 text-xl shadow-2xl shadow-primary/20">
                        Get a Personal Quote
                    </button>
                    <p className="mt-6 text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                        No credit card required
                    </p>
                </div>
            </div>
        </section>
    );
}
