import HeroSection from "@/components/HeroSection";
import LatestReleases from "@/components/LatestReleases";
import DonateButton from "@/components/DonateButton";
import AboutSection from "@/components/AboutSection";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LatestReleases />
      <DonateButton />
      <AboutSection />
      <SocialFeed />
      <Footer />
    </div>
  );
};

export default Index;
