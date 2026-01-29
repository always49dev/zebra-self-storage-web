import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search, GraduationCap, Calendar, Banknote } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Students Self Storage | Zebra Self Storage',
    description: 'Affordable student storage for term breaks, year abroad, and graduation. Flexible contracts, no hidden fees, and locations near universities.',
};

export default function StudentStoragePage() {
    const sections = [
        {
            title: "When moving between flats and student accommodation",
            description: "Store your belongings safely between tenancies. No need to haul everything home for the summer or cram it into a friend's spare room. Keep your stuff secure and ready for next term.",
            imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
        },
        {
            title: "Year too short?",
            description: "Going on placement, studying abroad, or taking a gap year? Store your uni essentials safely while you're away. Everything will be exactly where you left it when you return.",
            imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop"
        },
        {
            title: "Student storage hacks",
            description: "Share a unit with flatmates and split the cost. Store textbooks, winter clothes, sports equipment, and anything you don't need during term. More space in your room means more space to actually live.",
            imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Keep things close",
            description: "With locations near major universities, you can access your stuff whenever you need it. Forgot your winter coat? Need those textbooks? Pop by and grab them – it's that simple.",
            imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Sports equipment",
            description: "Skis, surfboards, bikes, hockey sticks – store your gear safely during off-season. No more leaving expensive equipment in dodgy student house sheds or cluttering up your tiny room.",
            imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Just started",
            description: "First year at uni? Store seasonal clothes, extra bedding, and things you brought from home but don't actually need. Student rooms are small – make the most of your space.",
            imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Students Self Storage"
                description="Affordable, flexible storage designed for student life. Whether you're between flats, heading home for summer, or studying abroad, Zebra keeps your belongings safe without breaking the bank."
            />

            {/* Student-specific benefits */}
            <div className="container mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                            <Banknote className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-black text-primary mb-3">Student discounts</h3>
                        <p className="text-primary/60 font-medium">Special rates for students. No hidden fees, just honest pricing.</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                            <Calendar className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-black text-primary mb-3">Flexible contracts</h3>
                        <p className="text-primary/60 font-medium">Short-term storage for summer breaks or long-term for your entire degree.</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                            <GraduationCap className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-black text-primary mb-3">Near universities</h3>
                        <p className="text-primary/60 font-medium">Convenient locations close to campus. Easy access when you need it.</p>
                    </div>
                </div>
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find student storage near you</h3>
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
