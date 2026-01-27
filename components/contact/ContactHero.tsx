import React from 'react';

const ContactHero = () => {
    return (
        <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
                        Contact us
                    </h1>
                    <div className="space-y-4">
                        <div className="h-4 w-full bg-primary/10 rounded-full" />
                        <div className="h-4 w-[95%] bg-primary/10 rounded-full" />
                        <div className="h-4 w-[90%] bg-primary/10 rounded-full" />
                        <div className="h-4 w-[40%] bg-primary/10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
