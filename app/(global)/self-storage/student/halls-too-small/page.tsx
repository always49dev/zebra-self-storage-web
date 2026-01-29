import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage if Halls Too Small | Zebra Self Storage',
    description: 'Student accommodation cramped? Store what you don\'t need daily and reclaim your living space. Affordable storage near campus.',
};

export default function StudentHallsTooSmallPage() {
    const sections = [
        {
            title: "Reclaim your living space",
            description: "Student rooms are notoriously tiny. Store seasonal clothes, extra bedding, sports equipment, and anything you don't use every day. Transform your cramped room into a space you actually want to spend time in.",
            imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Rotate your wardrobe",
            description: "Keep winter coats and boots in storage during summer, then swap them for shorts and t-shirts when the cold arrives. Your tiny wardrobe will thank you.",
            imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Store sports and hobby equipment",
            description: "Gym bags, musical instruments, art supplies, camping gear – they all take up valuable space. Keep them in storage and grab them when you need them. Your room doesn't have to be a storage cupboard.",
            imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Keep sentimental items safe",
            description: "Brought too much from home? Store photos, books, and keepsakes that make you feel at home but don't fit in your tiny room. They'll be safe and you can visit them anytime.",
            imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage if Halls too small"
                description="Student accommodation doesn't have to feel like a prison cell. Zebra provides affordable storage near campus so you can keep what you need and store the rest. More space, less stress, better student life."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find storage near your halls</h3>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Enter your university or postcode"
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
