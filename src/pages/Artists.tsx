import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, UserCheck, UserPlus, Filter } from 'lucide-react';
import { mockArtists } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

const genres = ['All', 'Electronic', 'Indie', 'Pop', 'Soundtrack'];

export default function Artists() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [followedArtists, setFollowedArtists] = useState<string[]>([]);

  const toggleFollow = (e: React.MouseEvent, artistId: string) => {
    e.stopPropagation();
    setFollowedArtists((prev) =>
      prev.includes(artistId)
        ? prev.filter((id) => id !== artistId)
        : [...prev, artistId]
    );
  };

  // Filter based on name and a simulated genre filter matching bios
  const filteredArtists = mockArtists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(search.toLowerCase());
    
    let matchesGenre = true;
    if (selectedGenre !== 'All') {
      const bioLower = artist.bio.toLowerCase();
      if (selectedGenre === 'Electronic' && !bioLower.includes('electronic') && !bioLower.includes('synth-pop') && !bioLower.includes('dream-pop')) matchesGenre = false;
      if (selectedGenre === 'Indie' && !bioLower.includes('indie') && !bioLower.includes('french')) matchesGenre = false;
      if (selectedGenre === 'Pop' && !bioLower.includes('pop') && !bioLower.includes('singer-songwriter')) matchesGenre = false;
      if (selectedGenre === 'Soundtrack' && !bioLower.includes('soundtrack') && !bioLower.includes('score') && !bioLower.includes('film')) matchesGenre = false;
    }

    return matchesSearch && matchesGenre;
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
          <h1 className="text-3xl font-heading font-extrabold text-white">Artists</h1>
          <p className="text-sm text-zinc-400">Discover and follow your favorite creators.</p>
        </div>
        
        {/* Search */}
        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search artists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {/* Genre Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/5 pb-4">
        <Filter className="w-4 h-4 text-zinc-400 mr-2" />
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${
              selectedGenre === genre
                ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Artists Grid */}
      {filteredArtists.length === 0 ? (
        <div className="text-center py-20 bg-white/5 border border-white/5 rounded-3xl">
          <p className="text-zinc-500">No artists found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredArtists.map((artist) => {
            const isFollowing = followedArtists.includes(artist.id);
            return (
              <motion.div
                key={artist.id}
                onClick={() => navigate(`/artist/${artist.id}`)}
                whileHover={{ y: -6 }}
                className="group p-5 rounded-2xl bg-surface-light hover:bg-surface-hover transition-all border border-transparent hover:border-white/5 cursor-pointer flex flex-col items-center text-center"
              >
                <div className="relative aspect-square w-full rounded-full overflow-hidden premium-shadow mb-4">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-semibold bg-white text-black px-4 py-1.5 rounded-full shadow-lg">View Profile</span>
                  </div>
                </div>

                <h3 className="font-bold text-white text-base truncate w-full mb-1 group-hover:text-primary transition-colors">
                  {artist.name}
                </h3>
                <p className="text-xs text-zinc-500 mb-4">
                  {(artist.monthlyListeners / 1000000).toFixed(1)}M listeners
                </p>

                <button
                  onClick={(e) => toggleFollow(e, artist.id)}
                  className={`w-full py-2.5 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    isFollowing
                      ? 'bg-white/15 text-white border border-white/10 hover:bg-white/20'
                      : 'bg-primary text-white hover:bg-primary-hover shadow-[0_0_10px_rgba(139,92,246,0.3)] hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <UserCheck className="w-3.5 h-3.5" />
                      Following
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-3.5 h-3.5" />
                      Follow
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
