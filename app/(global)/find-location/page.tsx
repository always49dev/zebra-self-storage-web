import LocationHeader from "@/components/find-location/LocationHeader";
import LocationMap from "@/components/find-location/LocationMap";
import LocationList from "@/components/find-location/LocationList";
import GetStartedBanner from '@/components/shared/GetStartedBanner';

export const metadata = {
    title: "Find a Location | Zebra Self Storage",
    description: "Search for Zebra Self Storage locations near you in Torquay, Paignton, Newton Abbot, and Exeter.",
};

export default function FindLocationPage() {
    return (
        <main className="min-h-screen bg-white">
            <LocationHeader />
            <LocationMap />
            <LocationList />
            <GetStartedBanner />
        </main>
    );
}
