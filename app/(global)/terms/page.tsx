import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";
import GetStartedBanner from '@/components/shared/GetStartedBanner';

export const metadata = {
    title: "Terms & Conditions | Zebra Self Storage",
    description: "Read the terms and conditions for using Zebra Self Storage services.",
};

export default function TermsPage() {
    const sections = [
        {
            title: "Acceptance of Terms",
            content: [
                "By accessing and using our storage services, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, you should not use our services.",
                "We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the services following any changes constitutes your acceptance of the new terms."
            ]
        },
        {
            title: "Storage Unit Use",
            content: [
                "The storage unit must be used only for the storage of lawful goods. You are prohibited from storing perishable, flammable, explosive, or illegal items within our facilities.",
                "You are responsible for maintaining the cleanliness of your unit and ensuring that it is properly secured at all times with a high-security padlock."
            ]
        },
        {
            title: "Payment and Fees",
            content: [
                "Storage fees are payable monthly in advance. Failure to pay fees on time may result in late charges and, ultimately, the restriction of access to your storage unit.",
                "We reserve the right to adjust storage fees with 30 days' prior notice to you."
            ]
        },
        {
            title: "Liability & Insurance",
            content: [
                "While we maintain high security standards, you are responsible for insuring the goods stored in your unit. Zebra Self Storage is not liable for loss or damage beyond our statutory obligations.",
                "Customers are required to provide proof of insurance or enroll in our StripeShield™ insurance program."
            ]
        }
    ];

    return (
        <main className="bg-white">
            <LegalHero title="Terms & conditions" lastUpdated="January 26, 2026" />
            <LegalContent sections={sections} />
            <GetStartedBanner />
        </main>
    );
}
