import { Metadata } from 'next';
import AuctionsHero from '@/components/auctions/AuctionsHero';
import AuctionsSection from '@/components/auctions/AuctionsSection';
import AuctionsForm from '@/components/auctions/AuctionsForm';

export const metadata: Metadata = {
    title: 'Storage Auctions | Zebra Self Storage',
    description: 'Learn about storage auctions at Zebra Self Storage. What they are, how they work, and how you can get involved.',
};

export default function StorageAuctionsPage() {
    return (
        <main className="min-h-screen bg-white pb-32">
            <AuctionsHero />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl space-y-32">
                    <AuctionsSection title="What are auctions" />
                    <AuctionsSection title="How they work" />
                    <AuctionsSection title="How you can get involved" />

                    <div className="pt-20">
                        <AuctionsForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
