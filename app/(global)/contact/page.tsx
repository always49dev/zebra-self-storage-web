import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import SalesCard from '@/components/contact/SalesCard';
import LocationContactCard from '@/components/contact/LocationContactCard';
import GetStartedBanner from '@/components/shared/GetStartedBanner';

export const metadata: Metadata = {
    title: 'Contact Us | Zebra Self Storage',
    description: 'Get in touch with Zebra Self Storage. Contact our sales team or find a specific location.',
};

export default function ContactPage() {
    const locations = ["Location", "Location", "Location", "Location"];

    return (
        <main className="min-h-screen bg-white pb-20">
            <ContactHero />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl space-y-20">
                    <SalesCard />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                        {locations.map((loc, index) => (
                            <LocationContactCard key={index} title={loc} />
                        ))}
                    </div>

                    <div className="border-t border-primary/10 pt-20">
                        <LocationContactCard title="Head office" />
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <div className="container mx-auto px-4">
                    <GetStartedBanner />
                </div>
            </div>
        </main>
    );
}
