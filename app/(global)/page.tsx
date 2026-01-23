import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import ServiceCards from "./_components/ServiceCards";
import TrustSection from "./_components/TrustSection";
import HowItWorks from "./_components/HowItWorks";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServiceCards />
        <TrustSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
