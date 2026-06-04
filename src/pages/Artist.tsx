import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { getArtistById, mockSongs, mockAlbums } from '@/data/mockData';
import { Play, MoreHorizontal } from 'lucide-react';
import SongCard from '@/components/music/SongCard';
import AlbumCard from '@/components/music/AlbumCard';

export default function Artist() {
  const { id } = useParams();
  const artist = getArtistById(id || 'a1') || getArtistById('a1');

  if (!artist) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32 relative"
    >
      {/* Artist Banner */}
      <div className="relative h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${artist.imageUrl})`, backgroundPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-2 text-white/80">
            <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
            <span className="text-sm font-medium tracking-widest uppercase">Verified Artist</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 drop-shadow-lg">{artist.name}</h1>
          <p className="text-zinc-300 font-medium">{artist.monthlyListeners.toLocaleString()} monthly listeners</p>
        </div>
      </div>

      <div className="p-6 md:p-8 relative z-20">
        <div className="flex items-center gap-6 mb-12">
          <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </button>
          <button className="px-6 py-1.5 rounded-full border border-white/30 text-white font-medium hover:border-white transition-colors">
            Follow
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <MoreHorizontal className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Popular</h2>
            <div className="flex flex-col gap-1">
              {mockSongs.slice(0, 5).map((song, i) => (
                <SongCard key={song.id} song={song} index={i} />
              ))}
            </div>
          </div>
          
          <div className="lg:w-80 hidden lg:block">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">About</h2>
            <div className="group rounded-2xl overflow-hidden relative cursor-pointer">
              <img src={artist.imageUrl} alt={artist.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <p className="text-sm text-white line-clamp-3">{artist.bio}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-heading font-bold text-white mb-6">Albums</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {mockAlbums.map(album => (
              <AlbumCard key={album.id} item={album} type="album" />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
