import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { mockSongs, mockPlaylists, mockAlbums } from '@/data/mockData';
import SongCard from '@/components/music/SongCard';
import AlbumCard from '@/components/music/AlbumCard';
import { usePlayerStore } from '@/store/usePlayerStore';

export default function Home() {
  const { setQueue } = usePlayerStore();
  
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
      <section className="mb-12">
        <SongCard song={mockSongs[1]} featured />
      </section>

      <section className="mb-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-white">Trending Now</h2>
          <button className="text-sm text-zinc-400 hover:text-white transition-colors">See all</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          {mockSongs.slice(0, 6).map((song, i) => (
            <SongCard key={song.id} song={song} index={i} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-white">Featured Playlists</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mockPlaylists.map(playlist => (
            <AlbumCard key={playlist.id} item={playlist} type="playlist" />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-white">New Releases</h2>
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
