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

      {/* Music Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">🎵 Новый трек</h2>
          <MusicCard
            title="Всё сияет"
            artist="ИльяПалочкин"
            musicUrl="https://music.yandex.ru/album/36234169/track/138216241"
          />
        </div>
      </section>

      <SocialFeed />
      <Footer />
    </div>
  );
};

export default Index;
