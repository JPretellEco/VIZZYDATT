import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFloat } from "./components/layout/WhatsAppFloat";
import { Hero } from "./components/home/Hero";
import { StatsBar } from "./components/home/StatsBar";
import { ServicesGrid } from "./components/home/ServicesGrid";
import { TrainingSection } from "./components/home/TrainingSection";
import { WhyUs } from "./components/home/WhyUs";
import { ClientsCarousel } from "./components/home/ClientsCarousel";
import { CTASection } from "./components/home/CTASection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Hero />
        <StatsBar />
        <ServicesGrid />
        <TrainingSection />
        <WhyUs />
        <ClientsCarousel />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}