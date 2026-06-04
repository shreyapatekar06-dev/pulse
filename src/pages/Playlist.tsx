import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { getPlaylistById, mockSongs } from '@/data/mockData';
import { Play, Heart, MoreHorizontal, Clock } from 'lucide-react';
import SongCard from '@/components/music/SongCard';
import { usePlayerStore } from '@/store/usePlayerStore';

export default function Playlist() {
  const { id } = useParams();
  const playlist = getPlaylistById(id || 'p1') || getPlaylistById('p1');
  const { setQueue, setCurrentSong } = usePlayerStore();

  if (!playlist) return null;

  // Use mockSongs as the playlist songs for demo purposes
  const playlistSongs = mockSongs;

  const handlePlayAll = () => {
    setQueue(playlistSongs);
    setCurrentSong(playlistSongs[0]);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32 relative"
    >
      {/* Dynamic Background */}
      <div 
        className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-primary/30 to-background z-0 pointer-events-none"
        style={{ backgroundImage: `url(${playlist.coverUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(100px)', opacity: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-6 p-6 md:p-8 pt-20">
          <img 
            src={playlist.coverUrl} 
            alt={playlist.name} 
            className="w-48 h-48 md:w-60 md:h-60 rounded-xl shadow-2xl premium-shadow"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-white/80 uppercase tracking-wider mb-2">Playlist</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 drop-shadow-md">{playlist.name}</h1>
            <p className="text-zinc-300 mb-4">{playlist.description}</p>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt={playlist.creatorName} className="w-6 h-6 rounded-full" />
              <span className="font-semibold text-white">{playlist.creatorName}</span>
              <span>•</span>
              <span>{playlist.likes.toLocaleString()} likes</span>
              <span>•</span>
              <span>{playlistSongs.length} songs</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-6 mb-8">
            <button 
              onClick={handlePlayAll}
              className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Heart className="w-8 h-8" />
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-8 h-8" />
            </button>
          </div>

          <div className="mb-4 grid grid-cols-[16px_minmax(0,1fr)_1fr_minmax(0,1fr)_48px] gap-4 px-4 text-sm font-medium text-zinc-400 uppercase tracking-wider border-b border-white/5 pb-2">
            <span>#</span>
            <span>Title</span>
            <span className="hidden md:block">Album</span>
            <span className="hidden lg:block text-right pr-12">Plays</span>
            <span className="text-right"><Clock className="w-4 h-4 inline" /></span>
          </div>

          <div className="flex flex-col gap-1">
            {playlistSongs.map((song, i) => (
              <SongCard key={song.id} song={song} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
