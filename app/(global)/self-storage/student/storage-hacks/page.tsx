import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Student Storage Hacks | Zebra Self Storage',
    description: 'Save money and maximize space with our student storage hacks. Learn how to share units, pack efficiently, and get the most out of your storage.',
};

export default function StudentStorageHacksPage() {
    const sections = [
        {
            title: "Share a unit and split the bill",
            description: "The biggest student hack? Group together with flatmates or friends. A larger unit split 3 or 4 ways is often much cheaper than everyone getting their own tiny locker. Coordinate your move-in and move-out days to make it even easier.",
            imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop"
        },
        {
            title: "Master the art of vertical packing",
            description: "You're paying for the volume, so use it! Stack your boxes all the way to the ceiling. Put heavy items like books at the bottom and lighter items on top. Our units are high, so use every inch of that vertical space.",
            imageUrl: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Use your suitcases as boxes",
            description: "Don't store empty suitcases – fill them up! Suitcases are perfect for heavy items like textbooks or off-season coats. If it's got wheels, it's even easier to move into your unit.",
            imageUrl: "https://images.unsplash.com/photo-1553531384-411a247ccd73?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Vacuum pack for the win",
            description: "Bulky bedding, pillows, and winter coats take up a huge amount of space. Vacuum packing them can reduce their volume by up to 75%. It keeps them clean, dry, and saves you money on unit size.",
            imageUrl: "https://images.unsplash.com/photo-1583900985737-6d04c51b6016?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Student storage hacks"
                description="Storage on a student budget? We've got you. Check out our top tips for splitting costs, maximizing space, and making your move as smooth (and cheap) as possible."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Ready to start hacking? Find a unit.</h3>
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
