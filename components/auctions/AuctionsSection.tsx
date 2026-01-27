import React from 'react';

interface AuctionsSectionProps {
    title: string;
}

const AuctionsSection: React.FC<AuctionsSectionProps> = ({ title }) => {
    return (
        <div className="space-y-12">
            <div className="aspect-[16/7] bg-primary/10 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary-light/30" />
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl font-black text-primary">{title}</h2>
                <div className="space-y-4">
                    <div className="h-4 w-full bg-primary/5 rounded-full" />
                    <div className="h-4 w-full bg-primary/5 rounded-full" />
                    <div className="h-4 w-full bg-primary/5 rounded-full" />
                    <div className="h-4 w-full bg-primary/5 rounded-full" />
                    <div className="h-4 w-[95%] bg-primary/5 rounded-full" />
                    <div className="h-3 w-[40%] bg-primary/5 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default AuctionsSection;
