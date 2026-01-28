import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage While Moving Home | Zebra Self Storage',
    description: 'Safe, secure, and flexible self storage solutions for your home move. Stress-free furniture storage during transitions.',
};

export default function MovingHomeStoragePage() {
    const sections = [
        {
            title: "Decluttering before the move",
            description: "Sell your home faster by clearing out excess furniture and personal items. A tidy, spacious home is more appealing to potential buyers. Store your belongings safely with us while your house is on the market.",
            imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Between homes",
            description: "Caught in a chain or waiting for your new keys? Don't let moving dates cause stress. Our flexible rolling contracts mean you can store your entire household for as little or as long as you need.",
            imageUrl: "https://images.unsplash.com/photo-1600518464441-9154a4dba221?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Moving day stress relief",
            description: "Move at your own pace. By moving non-essential items into storage ahead of time, you can focus on the essentials on moving day. It makes the whole process smoother and more manageable.",
            imageUrl: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Storage during renovations",
            description: "If your new home needs work, keep your furniture safe from dust, paint, and plaster. Store your items in a clean, dry unit until the builders are finished and you're ready to move in.",
            imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage while moving home"
                description="Make your move seamless with Zebra. From decluttering your current home to storing furniture between moves, we provide the extra space and peace of mind you need during your transition."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Ready to find your unit?</h3>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Find a location near you"
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
