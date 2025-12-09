import NavBar from "../../components/NavBar";
import BoardMembersSection from "./BoardMembersSection";
import InternsSection from "./InternsSection";
import PartnershipsSection from "./PartnershipsSection";
import AdvisorsSection from "./AdvisorsSection";
import HeroSection from "../../components/HeroSection";

const OurTeam = () => {
  return (
    <div className="w-screen min-h-screen bg-bg-primary overflow-x-hidden">
      <NavBar />
      <HeroSection
        title={"Our Team"}
        subtitle={"Meet the people behind the scenes."}
        image={"/team/TeamImage.png"}
      />
      <BoardMembersSection />
      <InternsSection />
      <PartnershipsSection />
      <AdvisorsSection />
    </div>
  );
};

export default OurTeam;
