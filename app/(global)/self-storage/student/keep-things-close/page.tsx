import { Metadata } from 'next';
import StorageTypeHero from '@/components/self-storage/StorageTypeHero';
import ReasonIcons from '@/components/self-storage/ReasonIcons';
import StorageDetailSection from '@/components/self-storage/StorageDetailSection';
import StorageClosingCTA from '@/components/self-storage/StorageClosingCTA';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Keep Your Belongings Close | Student Storage Near Uni | Zebra',
    description: 'Convenient student storage locations right on your doorstep. Keep your things close to campus for easy access whenever you need them.',
};

export default function StudentKeepThingsClosePage() {
    const sections = [
        {
            title: "On your doorstep",
            description: "Why travel miles to get your stuff? Our storage facilities are located in key university cities, usually just a short drive or bus ride from campus. Keep your belongings local and accessible.",
            imageUrl: "https://images.unsplash.com/photo-1577086663218-615d18d4d73b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Grab what you need, when you need it",
            description: "Forgot your winter coat? Need that reference book for an assignment? With storage close by, you can pop in and grab what you need without making a day trip of it. Your stuff is an extension of your wardrobe, not hidden away in a remote vault.",
            imageUrl: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Save on transport",
            description: "No need to hire a van or pester a friend with a car for long journeys. Our central locations mean moving your stuff in is quick, cheap, and easy. Some students even move their stuff in using ride-hailing apps!",
            imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Safe and local",
            description: "Enjoy the peace of mind that comes with knowing your belongings are just down the road. Secure, monitored, and nearby—it's the perfect solution for students who want to keep an eye on their things.",
            imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-32">
            <StorageTypeHero
                title="Keep things close"
                description="Storage shouldn't mean 'out of sight, out of mind'. With Zebra, your belongings are just around the corner. Convenient, local storage that keeps your life flexible."
            />

            <div className="container mx-auto px-4 mb-20">
                <ReasonIcons />
            </div>

            {/* Location Search Area */}
            <div className="container mx-auto px-4 mb-48">
                <div className="max-w-3xl bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all">
                    <h3 className="text-2xl font-black text-primary mb-8">Find your nearest Zebra store</h3>
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
