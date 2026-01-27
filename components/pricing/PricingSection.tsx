import React from 'react';
import Image from 'next/image';

interface PricingSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

const PricingSection: React.FC<PricingSectionProps> = ({
    title,
    description,
    imageSrc,
    imageAlt,
    reverse = false
}) => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="text-lg leading-relaxed">{description}</p>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
