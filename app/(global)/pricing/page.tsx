import { Metadata } from 'next';
import PricingHero from '@/components/pricing/PricingHero';
import PricingSection from '@/components/pricing/PricingSection';
import PricingTable from '@/components/pricing/PricingTable';
import GetStartedBanner from '@/components/shared/GetStartedBanner';

export const metadata: Metadata = {
    title: 'Pricing | Zebra Self Storage',
    description: 'How much does self storage cost? Learn about our pricing factors including size, location, duration, and insurance.',
};

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <PricingHero />

            <PricingSection
                title="Unit Size"
                description="The most obvious factor is the size of the storage unit you need. Naturally, a larger unit will cost more than a smaller one. We offer a wide range of sizes, from small lockers to large units that can hold the contents of a five-bedroom house. Use our Sizing Guide to find the perfect fit for your needs."
                imageSrc="https://images.unsplash.com/photo-1589710780350-121588632bbd?q=80&w=2070&auto=format&fit=crop"
                imageAlt="Storage unit sizes"
            />

            <PricingTable
                title="Average Pricing by Size"
                description="To give you an idea of what to expect, here are the average monthly costs for some of our most popular unit sizes. Please note these are indicative prices and may vary based on the specific location and current demand."
            />

            <PricingSection
                title="Location"
                description="Storage prices can vary significantly depending on the location of the facility. Facilities in city centers or areas with high demand may have higher rates compared to those in more suburban or rural locations."
                imageSrc="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop"
                imageAlt="Storage facility location"
                reverse
            />

            <PricingSection
                title="Duration of Stay"
                description="How long you plan to store your items can also affect the price. We offer flexible, month-to-month contracts, but you might find better rates if you commit to a longer-term stay. Keep an eye out for our special introductory offers for new customers!"
                imageSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
                imageAlt="Calendar and duration"
            />

            <PricingSection
                title="Insurance"
                description="For your peace of mind, all items stored with us must be insured. You can provide your own insurance policy, or you can take advantage of our comprehensive storage insurance plans. The cost of insurance will depend on the total value of the items you are storing."
                imageSrc="https://images.unsplash.com/photo-1450101499163-cdda61f8216d?q=80&w=2070&auto=format&fit=crop"
                imageAlt="Insurance documents"
                reverse
            />

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <GetStartedBanner />
                </div>
            </div>
        </main>
    );
}
