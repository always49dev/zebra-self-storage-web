"use client";

export default function AboutHero() {
    return (
        <section className="px-4 pt-16 pb-12 max-w-4xl mx-auto">
            <h1 className="text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-8">
                About Zebra Self Storage
            </h1>

            <div className="space-y-6 mb-10">
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                    We are dedicated to providing secure, flexible, and affordable storage solutions for everyone. From personal items to business inventory, our mission is to make storage simple and stress-free.
                </p>
                <div className="h-1 w-20 bg-primary" />
            </div>

            <button className="btn-navy w-full md:w-auto px-12 py-4 text-lg">
                Get a quote
            </button>
        </section>
    );
}
