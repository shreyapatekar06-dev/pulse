import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronRight, Music, Play, User } from 'lucide-react';
import { mockSongs, mockPlaylists, mockAlbums, mockArtists } from '@/data/mockData';
import SongCard from '@/components/music/SongCard';
import AlbumCard from '@/components/music/AlbumCard';
import { usePlayerStore } from '@/store/usePlayerStore';
import { useNavigate } from 'react-router-dom';

const genres = [
  { name: 'Synthwave', color: 'from-purple-600 to-pink-600', icon: Sparkles },
  { name: 'Cyberpunk Ambient', color: 'from-blue-600 to-cyan-500', icon: Music },
  { name: 'Lo-Fi Chill', color: 'from-amber-500 to-orange-600', icon: Heart },
  { name: 'Future Bass', color: 'from-rose-600 to-red-500', icon: Play },
  { name: 'Deep Space', color: 'from-indigo-600 to-violet-600', icon: User },
];

export default function Discover() {
  const { setQueue } = usePlayerStore();
  const navigate = useNavigate();

  // Set initial queue
  useEffect(() => {
    setQueue(mockSongs);
  }, [setQueue]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 md:p-8 pt-6 pb-32"
    >
      {/* Dynamic greeting & search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-heading font-extrabold text-white flex items-center gap-2">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">PULSE</span>
          </h1>
          <p className="text-sm text-zinc-400">Discover fresh sounds powered by artificial intelligence.</p>
        </div>
      </div>

      {/* Featured Banner */}
      <section className="mb-12">
        <SongCard song={mockSongs[1]} featured />
      </section>

      {/* Genre Categories */}
      <section className="mb-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-white">Explore Genres</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {genres.map((genre) => (
            <div 
              key={genre.name}
              onClick={() => navigate('/search')}
              className={`h-24 rounded-2xl bg-gradient-to-br ${genre.color} p-4 relative overflow-hidden group cursor-pointer shadow-lg hover:scale-105 transition-all duration-300 border border-white/10`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <genre.icon className="w-5 h-5 text-white/80" />
                <span className="font-bold text-white text-sm tracking-wide">{genre.name}</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            </div>
          ))}
        </div>
      </section>

      {/* Trending Now & Recently Played side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">Trending Now</h2>
            <button onClick={() => navigate('/search')} className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              See all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockSongs.slice(0, 6).map((song, i) => (
              <SongCard key={song.id} song={song} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">Featured Artists</h2>
            <button onClick={() => navigate('/artists')} className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              All artists <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {mockArtists.slice(0, 4).map((artist) => (
              <div 
                key={artist.id} 
                onClick={() => navigate(`/artist/${artist.id}`)}
                className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer group"
              >
                <img src={artist.imageUrl} alt={artist.name} className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:scale-105 transition-transform" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white truncate group-hover:text-primary transition-colors text-sm">{artist.name}</h4>
                  <p className="text-xs text-zinc-500">{(artist.monthlyListeners / 1000000).toFixed(1)}M monthly listeners</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Playlists */}
      <section className="mb-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-white">Recommended Playlists</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mockPlaylists.map(playlist => (
            <AlbumCard key={playlist.id} item={playlist} type="playlist" />
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-white">New Releases</h2>
          <button onClick={() => navigate('/albums')} className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
            See all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mockAlbums.map(album => (
            <AlbumCard key={album.id} item={album} type="album" />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
