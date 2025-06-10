import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/iliapalochkin",
      color: "hover:text-blue-400",
    },
    {
      name: "ВКонтакте",
      icon: "Users",
      url: "https://vk.com/iliapalochkin",
      color: "hover:text-blue-600",
    },
    {
      name: "TikTok",
      icon: "Video",
      url: "https://www.tiktok.com/@iliapalochkin1?_t=ZT-8uJcjVvO2nO&_r=1",
      color: "hover:text-pink-400",
    },
    {
      name: "Instagram",
      icon: "Camera",
      url: "https://www.instagram.com/ilia.palochkin",
      color: "hover:text-purple-400",
    },
    {
      name: "Яндекс.Музыка",
      icon: "Music",
      url: "https://music.yandex.ru/artist/21863635",
      color: "hover:text-yellow-400",
    },
    {
      name: "YouTube",
      icon: "Play",
      url: "https://youtube.com/@IliaPalochkin",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&crop=face')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Social Links Header */}
      <div className="relative z-10 pt-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-white/10 backdrop-blur-sm text-white ${link.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
              >
                <Icon name={link.icon as any} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-montserrat bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                DJ АРТИСТ
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 font-light">
                Создаю музыку, которая зажигает сердца ✨
              </p>
            </div>

            <p className="text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Современная электронная музыка с элементами хип-хопа и
              поп-культуры. Более 1М прослушиваний на всех платформах.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-3"
              >
                <Icon name="Play" size={20} />
                Слушать музыку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-100 hover:bg-purple-700/50"
              >
                <Icon name="Heart" size={20} />
                Поддержать
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
