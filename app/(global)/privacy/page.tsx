import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";
import GetStartedBanner from '@/components/shared/GetStartedBanner';

export const metadata = {
    title: "Privacy Policy | Zebra Self Storage",
    description: "Learn how Zebra Self Storage handles and protects your personal data.",
};

export default function PrivacyPage() {
    const sections = [
        {
            title: "Information We Collect",
            content: [
                "We collect information that you provide directly to us when you inquire about our services, create an account, or book a storage unit. This may include your name, email address, phone number, and billing information.",
                "We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, and operating system."
            ]
        },
        {
            title: "How We Use Your Information",
            content: [
                "The information we collect is used to provide, maintain, and improve our services, to process your transactions, and to communicate with you about your account and our services.",
                "We may also use your information to send you marketing communications that we believe may be of interest to you, provided you have opted in to receive them."
            ]
        },
        {
            title: "Data Protection & Security",
            content: [
                "We implement a variety of security measures to maintain the safety of your personal information. All sensitive information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our database.",
                "Access to your personal data is restricted to authorized personnel who have a need to know the information to perform their job duties."
            ]
        },
        {
            title: "Your Rights and Choices",
            content: [
                "You have the right to access, update, or delete the personal information we hold about you. You can do this by logging into your account or by contacting us directly.",
                "You may also opt out of receiving marketing communications from us at any time by following the unsubscribe instructions provided in the emails."
            ]
        }
    ];

    return (
        <main className="bg-white">
            <LegalHero title="Privacy policy" lastUpdated="January 26, 2026" />
            <LegalContent sections={sections} />
            <GetStartedBanner />
        </main>
    );
}
