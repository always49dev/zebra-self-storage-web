import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Student Sports Equipment Storage | Zebra Self Storage',
    description: 'Secure storage for student sports gear. From surfboards and skis to bikes and hockey sticks. Accessible, affordable, and near campus.',
};

export default function StudentSportsEquipmentPage() {
    const sections = [
        {
            title: "Reclaim your room",
            description: "Student rooms are small enough without tripping over skis, surfboards, or hockey bags. Store your bulky sports gear with us and actually have floor space to walk on.",
            imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Seasonal gear",
            description: "Winter sports enthusiast? Summer surfer? Don't let off-season gear clutter your life. Keep your skis safe in summer and your surfboard secure in winter. Swap them over when the seasons change.",
            imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Secure and accessible",
            description: "Expensive equipment needs secure storage. Our units are monitored 24/7, so you can rest easy knowing your carbon fibre bike or custom board is safe. Plus, with locations near campus, grabbing your gear for a weekend trip is easy.",
            imageUrl: "https://images.unsplash.com/photo-1505250469679-253c737ef000?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Team storage",
            description: "Captain of a university sports team? Store all the team kits, balls, and training equipment in one central place. Split the cost between the team and stop filling up the captain's hallway.",
            imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage for Sports equipment"
                description="Your passion shouldn't cost you your living space. Secure, accessible storage for all your sports gear, from bikes and boards to team kits and training equipment."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find storage for your gear</h3>
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
