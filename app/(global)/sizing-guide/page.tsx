import SizingHero from "@/components/sizing-guide/SizingHero";
import SizeCarousel from "@/components/sizing-guide/SizeCarousel";
import GetStartedBanner from '@/components/shared/GetStartedBanner';

export const metadata = {
    title: "Unit Sizing Guide | Zebra Self Storage",
    description: "Visualize and find the perfect storage unit size. Use our interactive guide to compare lockers, sheds, garages and more.",
};

export default function SizingGuidePage() {
    return (
        <main className="bg-white">
            <SizingHero />
            <SizeCarousel />
            <GetStartedBanner />
        </main>
    );
}
