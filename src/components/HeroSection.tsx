import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-pink-600">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-pink-400 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-violet-400 rounded-full blur-md animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-montserrat bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                DJ АРТИСТ
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 font-light">
                Создаю музыку, которая зажигает сердца ✨
              </p>
            </div>

            <p className="text-lg text-purple-200 max-w-lg leading-relaxed">
              Современная электронная музыка с элементами хип-хопа и
              поп-культуры. Более 1М прослушиваний на всех платформах.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Artist Photo */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face"
                alt="DJ Артист"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 rounded-full p-3 shadow-lg animate-bounce">
                <Icon name="Music" size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
