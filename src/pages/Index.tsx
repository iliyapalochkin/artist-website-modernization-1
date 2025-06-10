import HeroSection from "@/components/HeroSection";
import LatestReleases from "@/components/LatestReleases";
import Footer from "@/components/Footer";
import MusicCard from "@/components/MusicCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LatestReleases />
      <Footer />
    </div>
  );
};

export default Index;
