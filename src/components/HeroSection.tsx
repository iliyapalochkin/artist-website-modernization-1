import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
            "url('https://cdn.poehali.dev/files/f66a526a-4051-49fd-ae49-d820da040b77.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-6">
        <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
          {/* Artist Name */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold font-montserrat bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              ИльяПалочкин
            </h1>
          </div>

          {/* Social Links */}
          <TooltipProvider>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 ${link.color}`}
                    >
                      <Icon name={link.icon as any} size={24} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          {/* Updated description with content from AboutSection */}
          <div className="space-y-6 mt-16">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-white">
                Донаты в Яндекс Музыке
              </h2>
              <p className="text-xl text-purple-100">
                Поддерживайте любимых артистов
              </p>
              <p className="text-lg text-purple-200">
                На микроавтобус, чтобы поехать в тур
              </p>
            </div>

            {/* Who Am I Section */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold text-purple-200">
                Кто я?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">
                    Музыкант
                  </h3>
                  <p className="text-gray-200">
                    Создаю музыку в разных стилях, экспериментирую со звуком и
                    делюсь своим творчеством с миром.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://music.yandex.ru/artist/21863635?utm_source=web&utm_medium=copy_link",
                    "_blank",
                  )
                }
              >
                <Icon name="Play" size={20} />
                Слушать музыку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-yellow-400 hover:bg-purple-700/50 font-bold"
                onClick={() =>
                  window.open(
                    "https://tips.yandex.ru/guest/payment/9184210?wl=yandex_music",
                    "_blank",
                  )
                }
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
