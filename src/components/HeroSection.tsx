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

      {/* Artist Name - at top */}
      <div className="relative z-10 pt-6 md:pt-8 px-4 md:px-6">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-montserrat bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            ИльяПалочкин
          </h1>
        </div>
      </div>

      {/* Social Links - moved higher */}
      <div className="relative z-10 pt-8 md:pt-12 px-4 md:px-6">
        <TooltipProvider>
          <div className="flex justify-center space-x-3 md:space-x-4 overflow-x-auto pb-2">
            {socialLinks.map((link) => (
              <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 md:p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 ${link.color} flex-shrink-0`}
                  >
                    <Icon
                      name={link.icon as any}
                      size={16}
                      className="md:w-6 md:h-6"
                    />
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

      {/* Spacer to push content to bottom */}
      <div className="flex-1"></div>

      {/* About Artist - at bottom on image background */}
      <div className="relative z-10 pb-6 md:pb-8 px-4 md:px-6">
        <div className="text-center text-white space-y-3 md:space-y-4 max-w-4xl mx-auto">
          <div className="space-y-2 md:space-y-3">
            <p className="text-lg md:text-xl font-semibold text-white">
              Кто я?
            </p>
            <p className="text-base md:text-lg text-purple-200">
              Я молодой исполнитель
            </p>
            <p className="text-base md:text-lg text-purple-200">
              И в своем блоге делюсь своими мыслями через свою честную музыку 🫀
            </p>
            <p className="text-base md:text-lg text-purple-200 max-w-2xl mx-auto px-4">
              Уверен, что Ты можешь стать кем угодно, если постараешься.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-6 md:px-8 py-3 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://music.yandex.ru/artist/21863635?utm_source=web&utm_medium=copy_link",
                  "_blank",
                )
              }
            >
              <Icon name="Play" size={20} />
              <span className="ml-2">Слушать музыку</span>
            </Button>
            <a
              href="https://www.donationalerts.com/r/djmusicdj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <Icon name="Heart" className="mr-2" size={20} />
              Поддержать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
