"use client";

interface AboutSectionProps {
    title: string;
    imageUrl: string;
    paragraphs: string[];
    isReversed?: boolean;
}

export default function AboutSection({ title, imageUrl, paragraphs, isReversed = false }: AboutSectionProps) {
    return (
        <section className={`px-4 py-16 md:py-24 max-w-6xl mx-auto`}>
            <div className={`flex flex-col gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Image Container */}
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-[2rem] bg-slate-100 overflow-hidden shadow-sm">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-black text-primary tracking-tight">
                        {title}
                    </h2>
                    <div className="space-y-4">
                        {paragraphs.map((p, idx) => (
                            <p key={idx} className="text-slate-600 leading-relaxed">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
