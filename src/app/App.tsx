import { BackgroundDecoration } from "@/app/components/layout/BackgroundDecoration";
import { Footer } from "@/app/components/layout/Footer";
import { Navigation } from "@/app/components/navigation/Navigation";
import { ApproachSection } from "@/app/components/sections/ApproachSection";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { ServicesSection } from "@/app/components/sections/ServicesSection";
import { TechStackSection } from "@/app/components/sections/TechStackSection";
import { SenjaWidget } from "@/app/components/senja/SenjaWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      <BackgroundDecoration />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
      <SenjaWidget />
    </div>
  );
}
