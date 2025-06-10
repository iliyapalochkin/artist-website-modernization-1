import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const stats = [
    { icon: "Music", value: "50+", label: "Треков" },
    { icon: "Users", value: "100K+", label: "Слушателей" },
    { icon: "Award", value: "15", label: "Наград" },
    { icon: "Globe", value: "25", label: "Стран" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-white mb-6">
                О себе
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Привет! Я — молодой продюсер и DJ, который создает музыку на
                  стыке электроники, хип-хопа и поп-культуры. Мой путь в музыке
                  начался 5 лет назад с простого желания делиться эмоциями через
                  звук.
                </p>
                <p>
                  За это время я выпустил более 50 треков, которые набрали
                  миллионы прослушиваний на всех платформах. Моя музыка звучит в
                  клубах от Москвы до Токио, а каждый новый релиз — это история,
                  рассказанная через биты и мелодии.
                </p>
                <p>
                  Вдохновляюсь жизнью больших городов, неоновыми огнями и
                  энергией молодости. Верю, что музыка может изменить мир, и
                  стараюсь вкладывать душу в каждый трек.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon
                        name={stat.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                alt="Студия звукозаписи"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold">
                      Сейчас в студии
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">
                    Работаю над новым альбомом
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
