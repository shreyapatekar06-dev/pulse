import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ListFilter } from 'lucide-react';
import { mockAlbums } from '@/data/mockData';
import AlbumCard from '@/components/music/AlbumCard';

const categories = ['All', 'Album', 'EP', 'Single'];

export default function Albums() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAlbums = mockAlbums.filter((album) => {
    const matchesSearch = 
      album.title.toLowerCase().includes(search.toLowerCase()) ||
      album.artistName.toLowerCase().includes(search.toLowerCase());
      
    const matchesCategory = 
      selectedCategory === 'All' || album.type === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 md:p-8 pt-6 pb-32"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-heading font-extrabold text-white">Albums</h1>
          <p className="text-sm text-zinc-400">Browse albums, EPs, and singles.</p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search albums or artists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/5 pb-4">
        <ListFilter className="w-4 h-4 text-zinc-400 mr-2" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${
              selectedCategory === cat
                ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}s
          </button>
        ))}
      </div>

      {/* Albums Grid */}
      {filteredAlbums.length === 0 ? (
        <div className="text-center py-20 bg-white/5 border border-white/5 rounded-3xl">
          <p className="text-zinc-500">No releases found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredAlbums.map((album) => (
            <motion.div
              key={album.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <AlbumCard item={album} type="album" />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
