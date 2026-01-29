import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage When Moving Between Halls and Student Accommodation | Zebra',
    description: 'Affordable student storage for term transitions. Bridge the gap between tenancies without hauling everything home.',
};

export default function StudentMovingBetweenHallsPage() {
    const sections = [
        {
            title: "Bridge the gap between tenancies",
            description: "Your old tenancy ends before your new one starts? Store everything safely in between. No need to move everything home for a few weeks, then drag it all back again. Keep it local and save yourself the hassle.",
            imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
        },
        {
            title: "End of first year storage",
            description: "Moving out of halls and into a student house? Store your stuff over summer instead of taking it all home. When September arrives, everything's already here waiting for you.",
            imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
        },
        {
            title: "Share with flatmates",
            description: "Split a storage unit with your housemates and divide the cost. Store shared items like kitchen equipment, cleaning supplies, and furniture between houses. It's cheaper and easier than everyone storing separately.",
            imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Keep it near campus",
            description: "Our locations near universities mean you can drop off and pick up whenever suits you. No long drives, no expensive courier services – just convenient, local storage.",
            imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage when moving between halls and student accommodation"
                description="Make moving between student houses stress-free. Zebra provides affordable, flexible storage for the awkward gaps between tenancies, so you don't have to haul everything home and back again."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find storage near your university</h3>
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
