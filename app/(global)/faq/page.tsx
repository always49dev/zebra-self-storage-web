import FAQHero from "@/components/faq/FAQHero";
import FAQAccordion from "@/components/faq/FAQAccordion";
import FAQGetStarted from "@/components/faq/FAQGetStarted";

export const metadata = {
    title: "Frequently Asked Questions | Zebra Self Storage",
    description: "Get answers to common questions about our self-storage services, security, pricing, and more.",
};

export default function FAQPage() {
    return (
        <main className="bg-white">
            <FAQHero />
            <FAQAccordion />
            <FAQGetStarted />
        </main>
    );
}
