import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { getAlbumById, mockSongs } from '@/data/mockData';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import SongCard from '@/components/music/SongCard';

export default function Album() {
  const { id } = useParams();
  const album = getAlbumById(id || 'al2') || getAlbumById('al2');

  if (!album) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32 relative"
    >
      <div 
        className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-primary/20 to-background z-0 pointer-events-none"
        style={{ backgroundImage: `url(${album.coverUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(100px)', opacity: 0.3 }}
      />

      <div className="relative z-10 p-6 md:p-8 pt-20">
        <div className="flex flex-col md:flex-row items-end gap-6 mb-8">
          <img 
            src={album.coverUrl} 
            alt={album.title} 
            className="w-48 h-48 md:w-60 md:h-60 rounded-xl shadow-2xl premium-shadow"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-white/80 uppercase tracking-wider mb-2">{album.type}</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 drop-shadow-md">{album.title}</h1>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="font-semibold text-white">{album.artistName}</span>
              <span>•</span>
              <span>{album.releaseYear}</span>
              <span>•</span>
              <span>1 song</span>
            </div>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6">
          <div className="flex items-center gap-6 mb-8">
            <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Heart className="w-8 h-8" />
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {mockSongs.filter(s => s.albumId === album.id).map((song, i) => (
              <SongCard key={song.id} song={song} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
