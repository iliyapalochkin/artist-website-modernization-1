import HeroSection from "@/components/HeroSection";
import LatestReleases from "@/components/LatestReleases";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";
import MusicCard from "@/components/MusicCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LatestReleases />
      <SocialFeed />
      <Footer />
    </div>
  );
};

export default Index;
