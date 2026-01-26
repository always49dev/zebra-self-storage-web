"use client";

export default function InsuranceHero() {
    return (
        <section className="px-4 pt-16 pb-12 max-w-4xl mx-auto">
            <div className="space-y-2 mb-8 text-primary">
                <span className="text-xl italic font-black uppercase tracking-tight">StripeShield™</span>
                <h1 className="text-[2.75rem] font-bold leading-tight tracking-tight">
                    Self store insurance
                </h1>
            </div>

            <div className="space-y-6 text-slate-600 mb-10">
                <p className="text-lg leading-relaxed max-w-2xl">
                    Protecting your belongings is our priority. With StripeShield™, you get comprehensive cover tailored for self-storage, ensuring peace of mind throughout your storage journey.
                </p>
                <div className="h-1 w-20 bg-primary" />
            </div>

            <button className="btn-navy w-full md:w-auto px-12 py-4 text-lg shadow-xl shadow-primary/10">
                Get a Quote Now
            </button>
        </section>
    );
}
