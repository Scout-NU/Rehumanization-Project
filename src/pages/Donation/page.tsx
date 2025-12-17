import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Donation from "./Donation";

export default function DonationPage() {
  return (
    <div className="min-h-screen">
        <NavBar />
        <Donation />
        <Footer />
    </div>
  );
}
