import Icon from "@/components/ui/icon";

interface MusicCardProps {
  title: string;
  artist: string;
  albumCover?: string;
  musicUrl: string;
}

const MusicCard = ({ title, artist, albumCover, musicUrl }: MusicCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl max-w-md mx-auto border border-gray-800">
      <div className="flex items-center space-x-6">
        {/* Album Cover */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <Icon name="Music" size={32} className="text-white" />
          </div>
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-white mb-1 truncate">
            {title}
          </h3>
          <p className="text-gray-300 mb-4 truncate">{artist}</p>

          {/* Play Button */}
          <a
            href={musicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Icon name="Play" size={16} />
            <span>Слушать</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
