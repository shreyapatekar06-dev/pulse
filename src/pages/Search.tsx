import { motion } from 'framer-motion';
import { Search as SearchIcon } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';

const genres = [
  { name: 'Pop', color: 'from-pink-500 to-rose-500' },
  { name: 'Hip Hop', color: 'from-amber-500 to-orange-500' },
  { name: 'Rock', color: 'from-red-500 to-red-700' },
  { name: 'Electronic', color: 'from-blue-500 to-cyan-500' },
  { name: 'R&B', color: 'from-purple-500 to-fuchsia-500' },
  { name: 'Indie', color: 'from-emerald-500 to-teal-500' },
  { name: 'Classical', color: 'from-slate-500 to-slate-700' },
  { name: 'Jazz', color: 'from-yellow-500 to-amber-700' },
];

export default function Search() {
  const { setCommandPaletteOpen } = useUIStore();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 md:p-8 pt-6 pb-32"
    >
      <div className="md:hidden mb-8">
        <div 
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-zinc-400"
        >
          <SearchIcon className="w-5 h-5" />
          <span>What do you want to listen to?</span>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-heading font-bold text-white mb-6">Browse All</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {genres.map((genre) => (
            <div 
              key={genre.name}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${genre.color} p-4 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg`}
            >
              <h3 className="font-heading font-bold text-xl text-white drop-shadow-md">{genre.name}</h3>
              {/* Decorative element to simulate genre imagery */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl" />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
