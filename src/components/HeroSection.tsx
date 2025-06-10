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

      {/* Artist Name and Social Links - moved to top */}
      <div className="relative z-10 pt-8 px-6">
        <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold font-montserrat bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              ИльяПалочкин
            </h1>
          </div>

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
        </div>
      </div>

      {/* About Artist - moved to very bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl relative z-10 px-6">
        <div className="text-center text-white space-y-4">
          <div className="space-y-3">
            <p className="text-xl font-semibold text-white">Кто я?</p>
            <p className="text-lg text-purple-200">Я молодой исполнитель</p>
            <p className="text-lg text-purple-200">
              И в своем блоге делюсь своими мыслями через свою честную музыку 🫀
            </p>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Уверен, что Ты можешь стать кем угодно, если постараешься.
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-4">
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
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-3"
              onClick={() =>
                window.open(
                  "https://www.donationalerts.com/r/iliapalochkin",
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
    </section>
  );
};

export default HeroSection;
