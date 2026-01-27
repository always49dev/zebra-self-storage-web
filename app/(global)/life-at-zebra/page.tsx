import { Metadata } from 'next';
import Link from 'next/link';
import LifeHero from '@/components/life-at-zebra/LifeHero';
import LifeReason from '@/components/life-at-zebra/LifeReason';

export const metadata: Metadata = {
    title: 'Life at Zebra | Zebra Self Storage',
    description: 'Discover what it is like to work at Zebra Self Storage. Our culture, our people, and why we do what we do.',
};

export default function LifeAtZebraPage() {
    return (
        <main className="min-h-screen bg-white pb-32">
            <LifeHero />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl space-y-32">
                    <LifeReason title="Reason" />
                    <LifeReason title="Reason" />
                    <LifeReason title="Reason" />
                </div>
            </div>

            <div className="mt-40 bg-white py-20 border-t border-primary/5 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-black text-primary mb-10">Get started</h2>
                    <Link href="/careers">
                        <button className="px-16 py-4 rounded-full bg-primary text-white font-black text-lg hover:bg-primary/95 transition-all shadow-xl shadow-primary/10">
                            See all roles
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
