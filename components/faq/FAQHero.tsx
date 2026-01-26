"use client";

export default function FAQHero() {
    return (
        <section className="px-4 pt-16 pb-12 max-w-4xl mx-auto">
            <h1 className="text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-8">
                Frequently Asked <br className="hidden md:block" /> Questions
            </h1>

            <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                    Need help? We've put together some answers to the most common questions about Zebra Self Storage. If you can't find what you're looking for, feel free to contact us directly.
                </p>
                <div className="h-1 w-20 bg-primary" />
            </div>
        </section>
    );
}
