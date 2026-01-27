"use client";

interface LegalHeroProps {
    title: string;
    lastUpdated: string;
}

export default function LegalHero({ title, lastUpdated }: LegalHeroProps) {
    return (
        <section className="px-4 pt-20 pb-12 max-w-4xl mx-auto">
            <h1 className="text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
                {title}
            </h1>
            <div className="flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                <span className="w-8 h-px bg-slate-200" />
                Last Updated: {lastUpdated}
            </div>
        </section>
    );
}
