import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage for Seasonal Storage | Zebra Self Storage',
    description: 'Store seasonal items safely and access them when you need them. Perfect for Christmas decorations, summer gear, winter clothing, and more.',
};

export default function SeasonalStoragePage() {
    const sections = [
        {
            title: "Christmas decorations",
            description: "Keep your festive decorations safe and organized year-round. No more cramming boxes into the loft or garage. Store your Christmas tree, lights, and ornaments in perfect condition, ready for next December.",
            imageUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Summer and winter wardrobes",
            description: "Rotate your clothing with the seasons. Store bulky winter coats, boots, and jumpers during summer, then swap them for shorts, sandals, and swimwear when the cold returns. Keep your wardrobe fresh and spacious all year.",
            imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Sports and outdoor equipment",
            description: "Skis, snowboards, camping gear, surfboards, and bikes – seasonal sports equipment takes up valuable space. Store what you're not using and access it when the season arrives. Everything stays in top condition.",
            imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Garden furniture and BBQs",
            description: "Protect your outdoor furniture, BBQ, and garden tools from harsh winter weather. Store them safely during the off-season and bring them out when the sun returns. No more weathered, rusty equipment.",
            imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage for seasonal storage"
                description="Make room for what matters right now. Zebra provides secure, accessible storage for seasonal items, so you can rotate your belongings throughout the year and keep your home clutter-free."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find seasonal storage near you</h3>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Enter your location"
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
