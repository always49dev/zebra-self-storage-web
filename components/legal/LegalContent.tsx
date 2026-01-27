"use client";

interface LegalSection {
    title: string;
    content: string[];
}

interface LegalContentProps {
    sections: LegalSection[];
}

export default function LegalContent({ sections }: LegalContentProps) {
    return (
        <section className="px-4 pb-24 max-w-4xl mx-auto">
            <div className="space-y-16">
                {sections.map((section, index) => (
                    <div key={index} className="space-y-6">
                        <div className="flex items-start gap-6">
                            <span className="text-sm font-black text-primary/20 mt-1">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-primary tracking-tight">
                                    {section.title}
                                </h2>
                                <div className="space-y-4">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="text-slate-600 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
