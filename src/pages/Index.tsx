import HeroSection from "@/components/HeroSection";
import LatestReleases from "@/components/LatestReleases";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LatestReleases />

      {/* Yandex Music Widget */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block bg-gray-900 p-8 rounded-2xl shadow-2xl">
            <iframe
              frameBorder="0"
              allow="clipboard-write"
              className="rounded-lg mx-auto max-w-full"
              style={{
                border: "none",
                width: "min(614px, 100%)",
                height: "244px",
              }}
              width="614"
              height="244"
              src="https://music.yandex.ru/iframe/album/36234169/track/138216241"
              title="Yandex Music Player"
            >
              Слушайте{" "}
              <a href="https://music.yandex.ru/album/36234169/track/138216241">
                Всё сияет
              </a>{" "}
              —{" "}
              <a href="https://music.yandex.ru/artist/21863635">ИльяПалочкин</a>{" "}
              на Яндекс Музыке
            </iframe>
          </div>
        </div>
      </section>

      <SocialFeed />
      <Footer />
    </div>
  );
};

export default Index;
