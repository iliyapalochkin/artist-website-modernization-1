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
      content: "Новый трек в работе 🎵 Показываю процесс создания бита",
      timestamp: "2 дня назад",
      likes: "8.5K",
      comments: "142",
      type: "video",
      videoId: "7234567890123456789",
      videoType: "tiktok",
    },
    {
      id: 2,
      platform: "TikTok",
      platformIcon: "Video",
      content: "За кулисами студии звукозаписи 🎤 Записываю новый материал",
      timestamp: "5 дней назад",
      likes: "12.3K",
      comments: "234",
      type: "video",
      videoId: "7345678901234567890",
      videoType: "tiktok",
    },
    {
      id: 3,
      platform: "TikTok",
      platformIcon: "Video",
      content: "Живое исполнение нового трека 🔥 Ваше мнение?",
      timestamp: "1 неделю назад",
      likes: "15.7K",
      comments: "298",
      type: "video",
      videoId: "7456789012345678901",
      videoType: "tiktok",
    },
    {
      id: 4,
      platform: "TikTok",
      platformIcon: "Video",
      content: "Показываю любимые VST плагины для создания музыки",
      timestamp: "2 недели назад",
      likes: "9.2K",
      comments: "156",
      type: "video",
      videoId: "7567890123456789012",
      videoType: "tiktok",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-montserrat text-white mb-4">
            Социальные сети
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Следи за новостями и закулисьем в моих соцсетях
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=50&h=50&fit=crop&crop=face" />
                      <AvatarFallback>IP</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-white">
                        iliapalochkin
                      </CardTitle>
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
                    {post.videoType === "youtube" ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${post.videoId}`}
                        width="100%"
                        height="315"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full rounded-lg aspect-video"
                        title={`YouTube video ${post.id}`}
                      />
                    ) : (
                      <iframe
                        src={`https://www.tiktok.com/embed/v2/${post.videoId}`}
                        width="100%"
                        height="300"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full rounded-lg h-[300px] md:h-[400px]"
                        title={`TikTok video ${post.id}`}
                      />
                    )}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-700 gap-3">
                  <div className="flex items-center space-x-4 md:space-x-6 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" size={18} />
                      <span className="text-sm md:text-base">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MessageCircle" size={18} />
                      <span className="text-sm md:text-base">
                        {post.comments}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white self-start sm:self-auto"
                  >
                    <Icon name="ExternalLink" size={16} />
                    <span className="ml-2">Открыть пост</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Button
              className="bg-pink-600 hover:bg-pink-700 w-full sm:w-auto"
              onClick={() =>
                window.open("https://www.tiktok.com/@iliapalochkin1", "_blank")
              }
            >
              <Icon name="Video" size={20} />
              <span className="ml-2">Подписаться в TikTok</span>
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/iliapalochkin1",
                  "_blank",
                )
              }
            >
              <Icon name="Instagram" size={20} />
              <span className="ml-2">Подписаться в Instagram</span>
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
              onClick={() =>
                window.open("https://vk.com/iliapalochkin1", "_blank")
              }
            >
              <Icon name="Users" size={20} />
              <span className="ml-2">Подписаться в VK</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
