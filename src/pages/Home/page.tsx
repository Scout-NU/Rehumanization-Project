import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroSection from "../Home/HeroSection";
import MissionSection from "../Home/MissionSection";
import OurApproachSection from "../Home/OurApproachSection";
import AboutUsCTASection from "../Home/AboutUsCTASection";
import ContactSection from "../Home/ContactSection";
import HomeFAQSection from "./HomeFAQSection";
import DonateCTASection from "./DonateCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <MissionSection />
      <OurApproachSection />
      <AboutUsCTASection />
      <ContactSection />
      <HomeFAQSection />
      <DonateCTASection />
      <Footer />
    </div>
  );
}
