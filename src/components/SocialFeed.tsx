import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const SocialFeed = () => {
  const posts = [
    {
      id: 1,
      platform: "TikTok",
      platformIcon: "Video",
      content: "Новый трек уже в работе! 🔥 Скоро будет что-то невероятное",
      timestamp: "2 часа назад",
      likes: "12.5K",
      comments: "284",
      videoId: "7285947017618689307",
      type: "video",
    },
    {
      id: 2,
      platform: "ВКонтакте",
      platformIcon: "Users",
      content:
        "Спасибо всем за поддержку последнего релиза! Midnight Vibes уже набрал более 2 миллионов прослушиваний. Это безумие! 🚀",
      timestamp: "1 день назад",
      likes: "8.9K",
      comments: "156",
      type: "text",
    },
    {
      id: 3,
      platform: "TikTok",
      platformIcon: "Video",
      content: "За кулисами студии. Показываю, как создается магия ✨",
      timestamp: "3 дня назад",
      likes: "25.1K",
      comments: "467",
      videoId: "7342856194726366511",
      type: "video",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-white mb-4">
            Социальные сети
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Следи за новостями и закулисьем в моих соцсетях
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop&crop=face" />
                      <AvatarFallback>DJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-white">DJ АРТИСТ</CardTitle>
                      <CardDescription className="flex items-center text-gray-400">
                        <Icon
                          name={post.platformIcon as any}
                          size={16}
                          className="mr-2"
                        />
                        {post.platform} • {post.timestamp}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`${
                      post.platform === "TikTok"
                        ? "bg-pink-500/20 text-pink-300"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {post.platform}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-lg">{post.content}</p>

                {post.type === "video" && post.videoId && (
                  <div className="rounded-lg overflow-hidden bg-black">
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${post.videoId}`}
                      width="100%"
                      height="400"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full rounded-lg"
                      title={`TikTok video ${post.id}`}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-6 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" size={18} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MessageCircle" size={18} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <Icon name="ExternalLink" size={16} />
                    Открыть пост
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center space-x-4">
            <Button className="bg-pink-600 hover:bg-pink-700">
              <Icon name="Video" size={20} />
              Подписаться в TikTok
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Users" size={20} />
              Подписаться ВКонтакте
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
