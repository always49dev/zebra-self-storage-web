import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Personal Self Storage | Zebra Self Storage',
    description: 'Safe, secure, and flexible personal self storage solutions. Perfect for moving house, decluttering, or seasonal storage.',
};

export default function PersonalStoragePage() {
    const sections = [
        {
            title: "Moving house",
            description: "Make your move stress-free. Store your furniture and boxes with us while you transition between homes. We offer units of all sizes to fit the contents of any house.",
            imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Travelling",
            description: "Explore the world with peace of mind. Keep your valuables safe and secure in our climate-controlled units while you're away on your next adventure.",
            imageUrl: "https://images.unsplash.com/photo-1502446603971-d6dd81831521?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Storage during building work",
            description: "Protect your furniture from dust and damage during renovations. Clear out the room you're working on and keep everything clean in one of our nearby units.",
            imageUrl: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2062&auto=format&fit=crop"
        },
        {
            title: "Decluttering",
            description: "Reclaim your home. If you're not ready to part with your items but need more space, our small lockers and units are the perfect middle ground.",
            imageUrl: "https://images.unsplash.com/photo-1594404298423-5599bac4aef4?q=80&w=2080&auto=format&fit=crop"
        },
        {
            title: "Seasonal storage",
            description: "Swap out your summer gear for winter essentials. Store your skis, surfboards, garden furniture, and holiday decorations when they're not in use.",
            imageUrl: "https://images.unsplash.com/photo-1445308306294-bfc3f50a267d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "When downsizing",
            description: "Take your time with your transition. If you're moving to a smaller place, store the items you're not ready to let go of in a secure unit.",
            imageUrl: "https://images.unsplash.com/photo-1536412597336-ade7b523ecac?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "When there is a death in the family",
            description: "We handle your sensitive times with care. Store a loved one's belongings safely and securely while you take the time you need to make decisions.",
            imageUrl: "https://images.unsplash.com/photo-1528698854067-4397abc43a0f?q=80&w=2069&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Personal Self Storage"
                description="Secure, flexible personal storage solutions tailored to your life. Whether you're moving house, decluttering, or just need a little extra space, Zebra has the perfect unit for you."
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
                    <div className="flex flex-wrap gap-3">
                        {['Torquay', 'Paignton', 'Exeter', 'Plymouth', 'Bristol', 'Cardiff'].map((store) => (
                            <button key={store} className="px-8 py-3 rounded-full border-2 border-primary/5 text-sm font-black text-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer">
                                {store}
                            </button>
                        ))}
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
