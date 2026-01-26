import InsuranceHero from "@/components/insurance/InsuranceHero";
import InsuranceReasons from "@/components/insurance/InsuranceReasons";
import InsuranceSummary from "@/components/insurance/InsuranceSummary";
import InsuranceFeatures from "@/components/insurance/InsuranceFeatures";
import InsuranceGetStarted from "@/components/insurance/InsuranceGetStarted";

export const metadata = {
    title: "StripeShield™ Self Store Insurance | Zebra Self Storage",
    description: "Comprehensive and affordable self-storage insurance solutions. Protect your belongings with StripeShield™ while they're in storage.",
};

export default function InsurancePage() {
    return (
        <main className="bg-white">
            <InsuranceHero />
            <InsuranceReasons />
            <InsuranceSummary />
            <InsuranceFeatures />
            <InsuranceGetStarted />
        </main>
    );
}
