import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage to Declutter Your Home | Zebra Self Storage',
    description: 'Reclaim your living space. Secure storage for items you want to keep but don\'t need every day. Create a calm, organized home.',
};

export default function DeclutteringStoragePage() {
    const sections = [
        {
            title: "Create breathing room",
            description: "Reclaim your living space without throwing everything away. Store seasonal items, sentimental belongings, and things you're not ready to part with. A clutter-free home is a calmer, more productive space.",
            imageUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "The middle ground solution",
            description: "Not ready to commit to a full clear-out? Self storage is the perfect compromise. Keep your belongings safe and accessible while you decide what you truly need. No pressure, no regrets.",
            imageUrl: "https://images.unsplash.com/photo-1594404298423-5599bac4aef4?q=80&w=2080&auto=format&fit=crop"
        },
        {
            title: "Rotate your possessions",
            description: "Store bulky items like sports equipment, hobby materials, or collections that you only use occasionally. Swap things in and out as your needs change throughout the year.",
            imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2087&auto=format&fit=crop"
        },
        {
            title: "Prepare for life changes",
            description: "Moving in with a partner? Welcoming a new baby? Store your excess furniture and belongings while you adjust to your new living situation. You can always retrieve items later if needed.",
            imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage to declutter your home"
                description="Transform your living space into a calm, organized sanctuary. Zebra provides the perfect solution for items you want to keep but don't need cluttering your daily life."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find a location near you</h3>
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
