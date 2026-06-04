import { useEffect } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, 
  Volume2, VolumeX, Mic2, ListMusic, Maximize2, Repeat1
} from 'lucide-react';
import { usePlayerStore } from '@/store/usePlayerStore';
import { useUIStore } from '@/store/useUIStore';
import { cn } from './Sidebar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function EqualizerVisualizer({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-end gap-[3px] h-6 px-1">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={isPlaying ? {
            height: [6, 20, 10, 18, 6],
          } : {
            height: 6
          }}
          transition={{
            duration: 0.8 + (i * 0.12),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[3px] bg-gradient-to-t from-primary to-secondary rounded-full"
        />
      ))}
    </div>
  );
}

export default function MusicPlayer() {
  const { 
    currentSong, isPlaying, togglePlay, progress,
    volume, setVolume, nextSong, prevSong,
    isShuffled, toggleShuffle, repeatMode, cycleRepeatMode
  } = usePlayerStore();
  
  const { toggleQueue } = useUIStore();
  const navigate = useNavigate();
  
  // Simulated progress
  useEffect(() => {
    let interval: number;
    if (isPlaying && currentSong) {
      interval = window.setInterval(() => {
        usePlayerStore.setState((state) => {
          if (state.progress >= (state.currentSong?.duration || 0)) {
            nextSong();
            return { progress: 0 };
          }
          return { progress: state.progress + 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong, nextSong]);

  if (!currentSong) return null;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = (progress / currentSong.duration) * 100;

  return (
    <div className="h-24 w-full bg-black/80 backdrop-blur-3xl border-t border-white/10 flex items-center justify-between px-6 z-40 relative">
      {/* Background glow based on cover color (simulated with primary) */}
      <div className="absolute inset-0 bg-primary/5 opacity-50 pointer-events-none"></div>

      {/* Left: Song Info */}
      <div className="flex items-center gap-4 w-1/3 min-w-0 z-10">
        <div className="relative group w-14 h-14 rounded-md overflow-hidden premium-shadow cursor-pointer">
          <img 
            src={currentSong.coverUrl} 
            alt={currentSong.title}
            className={cn("w-full h-full object-cover transition-transform duration-700", isPlaying && "scale-110")}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Maximize2 className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white truncate hover:underline cursor-pointer" onClick={() => navigate('/lyrics')}>{currentSong.title}</h4>
          <p className="text-xs text-zinc-400 truncate hover:underline cursor-pointer">{currentSong.artistName}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="text-primary hover:text-primary-light transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <EqualizerVisualizer isPlaying={isPlaying} />
        </div>
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center justify-center w-1/3 max-w-2xl px-4 z-10">
        <div className="flex items-center gap-6 mb-2">
          <button 
            onClick={toggleShuffle}
            className={cn("p-2 rounded-full hover:bg-white/10 transition-colors", isShuffled ? "text-primary" : "text-zinc-400 hover:text-white")}
          >
            <Shuffle className="w-4 h-4" />
          </button>
          <button 
            onClick={prevSong}
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <SkipBack className="w-5 h-5 fill-current" />
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current translate-x-0.5" />}
          </button>
          
          <button 
            onClick={nextSong}
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <SkipForward className="w-5 h-5 fill-current" />
          </button>
          <button 
            onClick={cycleRepeatMode}
            className={cn("p-2 rounded-full hover:bg-white/10 transition-colors", repeatMode !== 'none' ? "text-primary" : "text-zinc-400 hover:text-white")}
          >
            {repeatMode === 'one' ? <Repeat1 className="w-4 h-4" /> : <Repeat className="w-4 h-4" />}
          </button>
        </div>
        
        <div className="flex items-center gap-3 w-full">
          <span className="text-xs text-zinc-400 w-10 text-right">{formatTime(progress)}</span>
          <div className="flex-1 h-1.5 group flex items-center cursor-pointer">
            <div className="w-full h-1 bg-white/20 rounded-full relative overflow-hidden group-hover:h-1.5 transition-all">
              <div 
                className="absolute top-0 left-0 h-full bg-white group-hover:bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <span className="text-xs text-zinc-400 w-10">{formatTime(currentSong.duration)}</span>
        </div>
      </div>

      {/* Right: Extra Controls */}
      <div className="flex items-center justify-end gap-4 w-1/3 min-w-0 z-10">
        <button onClick={() => navigate('/lyrics')} className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
          <Mic2 className="w-4 h-4" />
        </button>
        <button onClick={toggleQueue} className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
          <ListMusic className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 group cursor-pointer w-32">
          <button onClick={() => setVolume(volume === 0 ? 0.8 : 0)} className="text-zinc-400 hover:text-white transition-colors">
            {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <div className="flex-1 h-1 group-hover:h-1.5 bg-white/20 rounded-full relative transition-all">
            <div 
              className="absolute top-0 left-0 h-full bg-white group-hover:bg-primary rounded-full"
              style={{ width: `${volume * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
