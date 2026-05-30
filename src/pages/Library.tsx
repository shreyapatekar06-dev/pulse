import React from 'react';
import { motion } from 'framer-motion';
import { mockPlaylists, mockAlbums } from '@/data/mockData';
import AlbumCard from '@/components/music/AlbumCard';
import { Heart, Clock, Download } from 'lucide-react';

export default function Library() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 md:p-8 pt-6 pb-32"
    >
      <h1 className="text-4xl font-heading font-bold text-white mb-8">Your Library</h1>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button className="px-5 py-1.5 rounded-full bg-white text-black font-medium whitespace-nowrap">Playlists</button>
        <button className="px-5 py-1.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors whitespace-nowrap">Artists</button>
        <button className="px-5 py-1.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors whitespace-nowrap">Albums</button>
        <button className="px-5 py-1.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors whitespace-nowrap">Podcasts</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Liked Songs Special Card */}
        <div className="group p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-800 hover:scale-105 transition-all cursor-pointer border border-white/10 premium-shadow col-span-2 sm:col-span-1 flex flex-col justify-end">
          <div className="mb-4">
            <Heart className="w-8 h-8 text-white fill-current" />
          </div>
          <h4 className="font-heading font-bold text-2xl text-white mb-1">Liked Songs</h4>
          <p className="text-sm text-white/80">142 liked songs</p>
        </div>

        {mockPlaylists.map(playlist => (
          <AlbumCard key={playlist.id} item={playlist} type="playlist" />
        ))}
        {mockAlbums.map(album => (
          <AlbumCard key={album.id} item={album} type="album" />
        ))}
      </div>
    </motion.div>
  );
}
