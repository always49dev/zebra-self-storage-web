import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage During Building Work & Renovations | Zebra Self Storage',
    description: 'Protect your furniture and belongings during renovations. Secure, dust-free storage while you transform your home.',
};

export default function BuildingWorkStoragePage() {
    const sections = [
        {
            title: "Protect from dust and damage",
            description: "Keep your furniture, carpets, and valuables safe from plaster dust, paint splashes, and accidental damage. Our clean, dry units provide the perfect environment while builders transform your space.",
            imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
        },
        {
            title: "Create space for tradespeople",
            description: "Give your builders, electricians, and plumbers the room they need to work efficiently. An empty room means faster completion times and better quality work, without you worrying about your belongings getting in the way.",
            imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Room-by-room renovations",
            description: "Renovating one room at a time? Store the contents of each room as you go. This phased approach makes large-scale renovations more manageable and less disruptive to your daily life.",
            imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Flexible storage periods",
            description: "Building projects rarely finish on time. Our rolling weekly and monthly contracts mean you're not locked in. Extend your storage as needed without penalties or complicated paperwork.",
            imageUrl: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2062&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage during building work and renovations"
                description="Transform your home without the stress. Zebra provides secure, clean storage for your furniture and belongings while you renovate, ensuring everything stays pristine until your project is complete."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find storage near your project</h3>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Enter your postcode"
                            className="w-full pl-14 pr-8 py-5 rounded-2xl border-2 border-primary/5 bg-primary/[0.02] focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-primary/30 text-lg font-bold"
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-48">
                    {sections.map((section, index) => (
                        <StorageDetailSection
                            key={index}
                            title={section.title}
                            description={section.description}
                            imageUrl={section.imageUrl}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>

            <StorageClosingCTA />
        </main>
    );
}
