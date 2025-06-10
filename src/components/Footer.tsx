import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const socialLinks = [
    { name: "TikTok", icon: "Video", url: "#", color: "hover:text-pink-400" },
    {
      name: "ВКонтакте",
      icon: "Users",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Яндекс.Музыка",
      icon: "Music",
      url: "#",
      color: "hover:text-yellow-400",
    },
    {
      name: "Spotify",
      icon: "Headphones",
      url: "#",
      color: "hover:text-green-400",
    },
    { name: "YouTube", icon: "Play", url: "#", color: "hover:text-red-400" },
    {
      name: "Instagram",
      icon: "Camera",
      url: "#",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div>
            <h3 className="text-3xl font-bold font-montserrat bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DJ АРТИСТ
            </h3>
            <p className="text-gray-400 mt-2">
              Создаю музыку, которая зажигает сердца
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                className={`text-gray-400 ${link.color} transition-colors duration-300`}
              >
                <Icon name={link.icon as any} size={24} />
              </Button>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="flex justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={18} />
                <span>djartist@music.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={18} />
                <span>Москва, Россия</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Icon name="Send" size={18} />
              Связаться для коллабораций
            </Button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500">
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
