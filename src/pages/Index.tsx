import HeroSection from "@/components/HeroSection";
import LatestReleases from "@/components/LatestReleases";
import AboutSection from "@/components/AboutSection";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LatestReleases />
      <AboutSection />
      <SocialFeed />
      <Footer />
    </div>
  );
};

export default Index;
