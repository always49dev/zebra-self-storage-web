import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage When Downsizing | Zebra Self Storage',
    description: 'Downsize without losing your memories. Secure storage for cherished belongings when moving to a smaller home.',
};

export default function DownsizingStoragePage() {
    const sections = [
        {
            title: "Keep what matters most",
            description: "Moving to a smaller home doesn't mean parting with everything. Store furniture, family heirlooms, and sentimental items that won't fit in your new space. You can always access them whenever you need.",
            imageUrl: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop"
        },
        {
            title: "Transition at your own pace",
            description: "Downsizing is a big change. Use storage to ease the transition – keep items you're unsure about and make decisions gradually. There's no rush to let go of everything at once.",
            imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Store for family members",
            description: "Keep furniture and belongings for children or grandchildren who might need them in the future. When they're ready for their first home, your stored items will be there waiting.",
            imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Retirement living made easier",
            description: "Moving to a retirement flat or bungalow? Store excess furniture, books, and collections that won't fit. Enjoy your new lifestyle without feeling like you've lost your independence or identity.",
            imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage when downsizing"
                description="Embrace your new chapter without leaving everything behind. Zebra provides secure, accessible storage so you can downsize your home while keeping the belongings that matter most to you."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find storage near your new home</h3>
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
