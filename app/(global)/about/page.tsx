import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import AboutGetStarted from "@/components/about/AboutGetStarted";

export const metadata = {
    title: "About Us | Zebra Self Storage",
    description: "Learn more about Zebra Self Storage, our mission, vision, and how we give back to the community.",
};

export default function AboutPage() {
    return (
        <main className="bg-white">
            <AboutHero />

            <div className="space-y-0">
                <AboutSection
                    title="Who we are"
                    imageUrl="https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/image002-8098f37d-1920w.jpg"
                    paragraphs={[
                        "Founded with a vision to redefine the storage industry, Zebra Self Storage is a family-owned business deeply rooted in the communities we serve.",
                        "Our team is passionate about providing exceptional service and maintaining the highest standards of security and cleanliness across all our facilities."
                    ]}
                />

                <AboutSection
                    title="Our vision"
                    imageUrl="https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2019-10-08-13-52-11-1920w.jpg"
                    paragraphs={[
                        "We aim to be the most trusted storage provider in the UK by combining state-of-the-art technology with a personal touch.",
                        "Our vision is to empower our customers by giving them the space they need to grow, thrive, and organize their lives."
                    ]}
                    isReversed
                />

                <AboutSection
                    title="Giving back"
                    imageUrl="https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2023-05-19-13-13-55-1920w.jpg"
                    paragraphs={[
                        "At Zebra, we believe in supporting the communities that support us. We regularly partner with local charities and organizations to provide storage space and volunteer support.",
                        "Our commitment to sustainability drives us to implement eco-friendly practices throughout our operations, from energy-efficient lighting to waste reduction programs."
                    ]}
                />
            </div>

            <AboutGetStarted />
        </main>
    );
}
