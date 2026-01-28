import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage While Travelling | Zebra Self Storage',
    description: 'Secure storage for your belongings while you travel. Explore the world worry-free with Zebra Self Storage.',
};

export default function TravellingStoragePage() {
    const sections = [
        {
            title: "Gap year adventures",
            description: "Heading off on a gap year? Store your belongings safely with us while you explore the world. Our flexible contracts mean you can extend your storage as your plans evolve, without worrying about what's happening back home.",
            imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Working abroad",
            description: "Taking a contract overseas or trying out expat life? Keep your furniture, books, and personal items secure in the UK. If things don't work out, everything will be waiting for you when you return.",
            imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
        },
        {
            title: "Extended holidays",
            description: "Planning a long trip around Europe, Asia, or beyond? Don't pay rent on an empty flat. Store your possessions with us and travel light, knowing everything is safe, secure, and climate-controlled.",
            imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
        },
        {
            title: "Digital nomad lifestyle",
            description: "Living the digital nomad dream? Store your non-essential belongings while you work remotely from different locations. Access your unit whenever you're back in the UK to swap out seasonal items or refresh your travel wardrobe.",
            imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage while Travelling"
                description="Travel the world with complete peace of mind. Whether you're backpacking for months or working abroad, Zebra keeps your belongings safe and secure until you return."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find storage near you</h3>
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
