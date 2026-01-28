import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Self Storage After a Death in the Family | Zebra Self Storage',
    description: 'Compassionate storage solutions during bereavement. Keep cherished belongings safe while you take the time you need.',
};

export default function BereavementStoragePage() {
    const sections = [
        {
            title: "Take your time with decisions",
            description: "Dealing with a loved one's belongings is deeply personal and shouldn't be rushed. Store everything safely while you process your grief and make thoughtful decisions about what to keep, share, or donate.",
            imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
        },
        {
            title: "Preserve precious memories",
            description: "Keep furniture, photographs, books, and personal items that hold special meaning. Our secure, climate-controlled units ensure everything stays in perfect condition until you're ready to decide its future.",
            imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Manage estate belongings",
            description: "When clearing a property, you need somewhere safe to store belongings during probate. Keep everything organized and accessible for family members, executors, and solicitors throughout the estate process.",
            imageUrl: "https://images.unsplash.com/photo-1554224311-beee4ece8db7?q=80&w=2011&auto=format&fit=crop"
        },
        {
            title: "Share with family when ready",
            description: "Store items until family members are ready to collect them. Everyone grieves differently and at their own pace. Our flexible access means relatives can visit when the time feels right for them.",
            imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Self Storage after a death in the family"
                description="During this difficult time, Zebra provides a safe, respectful space for your loved one's belongings. Take all the time you need to make decisions – there's no pressure, just compassionate support."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find compassionate storage near you</h3>
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
