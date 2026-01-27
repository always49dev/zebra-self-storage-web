import React from 'react';

const CareersHero = () => {
    return (
        <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
                        Careers
                    </h1>
                    <div className="space-y-4 mb-10">
                        <div className="h-4 w-full bg-primary/10 rounded-full" />
                        <div className="h-4 w-[95%] bg-primary/10 rounded-full" />
                        <div className="h-4 w-[90%] bg-primary/10 rounded-full" />
                        <div className="h-4 w-[40%] bg-primary/10 rounded-full" />
                    </div>
                    <Link href="/life-at-zebra">
                        <button className="px-10 py-3 rounded-full border-2 border-primary text-primary font-black text-sm hover:bg-primary hover:text-white transition-all">
                            Life at Zebra
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CareersHero;
