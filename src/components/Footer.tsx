import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
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
    <footer className="bg-black py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Logo */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DJ АРТИСТ
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Создаю музыку, которая зажигает сердца
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 md:space-x-6 overflow-x-auto pb-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`text-gray-400 ${link.color} transition-colors duration-300`}
                >
                  <Icon name={link.icon as any} size={24} />
                </Button>
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-gray-400 text-sm md:text-base">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Mail" size={18} />
                <span>djartist@music.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="MapPin" size={18} />
                <span>Москва, Россия</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto">
              <Icon name="Send" size={18} />
              <span className="ml-2">Связаться для коллабораций</span>
            </Button>
          </div>

          {/* Copyright */}
          <div className="pt-6 md:pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2024 DJ АРТИСТ. Все права защищены.
              <span className="mx-2">•</span>
              Сделано с ❤️ и музыкой
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
