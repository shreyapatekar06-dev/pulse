import { useEffect, useState } from 'react';
import { Search, Music, User, LayoutList } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { AnimatePresence, motion } from 'framer-motion';

export default function CommandPalette() {
  const { isCommandPaletteOpen, setCommandPaletteOpen } = useUIStore();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandPaletteOpen(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4 sm:px-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setCommandPaletteOpen(false)} 
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl bg-surface-light border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10"
        >
          <div className="flex items-center px-4 py-4 border-b border-white/10">
            <Search className="w-5 h-5 text-zinc-400 mr-3" />
            <input
              type="text"
              autoFocus
              placeholder="Search for songs, artists, or playlists..."
              className="w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none text-lg"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="text-xs bg-white/10 text-zinc-400 px-2 py-1 rounded">ESC</span>
          </div>
          
          <div className="max-h-[60vh] overflow-y-auto p-2">
            <div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Suggestions
            </div>
            
            <button className="w-full flex items-center px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 group-hover:bg-primary/40 transition-colors">
                <Music className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-medium text-white">Blinding Lights</h4>
                <p className="text-xs text-zinc-400">Song • The Weeknd</p>
              </div>
            </button>

            <button className="w-full flex items-center px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-secondary/40 transition-colors">
                <User className="w-4 h-4 text-secondary" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-medium text-white">Dua Lipa</h4>
                <p className="text-xs text-zinc-400">Artist</p>
              </div>
            </button>
            
            <button className="w-full flex items-center px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4 group-hover:bg-emerald-500/40 transition-colors">
                <LayoutList className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-medium text-white">Late Night Drives</h4>
                <p className="text-xs text-zinc-400">Playlist</p>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
