import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const LatestReleases = () => {
  const releases = [
    {
      id: 1,
      title: "Лучший день",
      type: "Single",
      date: "2024",
      cover:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop",
      streams: "1.2M",
      isNew: true,
    },
    {
      id: 2,
      title: "Небо",
      type: "Single",
      date: "2024",
      cover:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      streams: "890K",
      isNew: true,
    },
    {
      id: 3,
      title: "Ветер перемен",
      type: "Single",
      date: "2023",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      streams: "2.1M",
      isNew: false,
    },
    {
      id: 4,
      title: "Дорога домой",
      type: "Album",
      date: "2023",
      cover:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      streams: "1.8M",
      isNew: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-white mb-4">
            Последние релизы
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Свежие треки и альбомы, которые покоряют чарты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release) => (
            <Card
              key={release.id}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={release.cover}
                    alt={release.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {release.isNew && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600">
                      NEW
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300"
                    >
                      {release.type}
                    </Badge>
                    <span className="text-sm text-gray-400">
                      {release.date}
                    </span>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {release.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    <Icon name="Headphones" size={16} className="inline mr-2" />
                    {release.streams} прослушиваний
                  </CardDescription>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Слушать на Яндекс.Музыке
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReleases;
