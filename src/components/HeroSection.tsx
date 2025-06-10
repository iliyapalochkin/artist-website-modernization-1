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
                      className={`p-3 rounded-full bg-white/10 backdrop-blur-sm text-white ${link.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
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

          {/* Description moved to bottom */}
          <div className="space-y-6 mt-16">
            <p className="text-xl lg:text-2xl text-purple-100 font-light">
              Создаю музыку, которая зажигает сердца ✨
            </p>

            <p className="text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Современная электронная музыка с элементами хип-хопа и
              поп-культуры. Более 1М прослушиваний на всех платформах.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-yellow-400 hover:bg-purple-700/50 font-bold"
                onClick={() =>
                  window.open(
                    "https://music.yandex.ru/artist/21863635",
                    "_blank",
                  )
                }
              >
                <Icon name="Music" size={20} />
                Слушать музыку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-yellow-400 hover:bg-purple-700/50 font-bold"
                onClick={() =>
                  window.open(
                    "https://music.yandex.ru/artist/21863635",
                    "_blank",
                  )
                }
              >
                <Icon name="Music" size={20} />
                Слушать музыку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
