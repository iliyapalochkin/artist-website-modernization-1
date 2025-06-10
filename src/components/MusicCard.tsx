interface MusicCardProps {
  title: string;
  artist: string;
  musicUrl?: string;
}

const MusicCard = ({ title, artist }: MusicCardProps) => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center gap-6">
        {/* Music Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
          <svg
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>

        {/* Track Info */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-lg mb-4">{artist}</p>

          {/* Play Button */}
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Слушать
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
