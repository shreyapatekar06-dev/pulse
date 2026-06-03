import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { usePlayerStore } from '@/store/usePlayerStore';
import { mockLyrics } from '@/data/mockData';
import { Mic2, Music, Volume2, Play, Pause } from 'lucide-react';
import { cn } from '@/components/layout/Sidebar';

export default function Lyrics() {
  const { currentSong, isPlaying, progress, togglePlay } = usePlayerStore();
  const lyricContainerRef = useRef<HTMLDivElement>(null);

  const lines = currentSong ? mockLyrics[currentSong.id] || [] : [];

  // Find current line index based on elapsed seconds (progress)
  const currentLineIndex = lines.findIndex(
    (line, idx) => 
      progress >= line.time && 
      (idx === lines.length - 1 || progress < lines[idx + 1].time)
  );

  // Smoothly scroll the container to keep the active line centered
  useEffect(() => {
    if (lyricContainerRef.current && currentLineIndex !== -1) {
      const activeElement = lyricContainerRef.current.children[currentLineIndex] as HTMLElement;
      if (activeElement) {
        lyricContainerRef.current.scrollTo({
          top: activeElement.offsetTop - lyricContainerRef.current.clientHeight / 2 + activeElement.clientHeight / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [currentLineIndex]);

  if (!currentSong) {
    return (
      <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-center text-zinc-500 gap-4">
        <Mic2 className="w-16 h-16 animate-bounce text-zinc-700" />
        <p className="text-lg">Play a song to view its synchronized lyrics.</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[calc(100vh-80px)] w-full overflow-hidden relative flex flex-col md:flex-row pb-24"
    >
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-[80px] opacity-25 scale-105 pointer-events-none transition-all duration-1000"
        style={{ backgroundImage: `url(${currentSong.coverUrl})` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-none" />

      {/* Left panel: Album art display & mini controls */}
      <div className="flex-1 max-w-sm mx-auto md:mx-0 flex flex-col justify-center items-center p-8 z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden premium-shadow border border-white/10 mb-8"
        >
          <img src={currentSong.coverUrl} alt={currentSong.title} className="w-full h-full object-cover" />
        </motion.div>
        
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-bold text-white truncate max-w-[280px]">{currentSong.title}</h2>
          <p className="text-primary font-medium hover:underline cursor-pointer">{currentSong.artistName}</p>
        </div>

        <button 
          onClick={togglePlay}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-current" /> Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current translate-x-0.5" /> Play
            </>
          )}
        </button>
      </div>

      {/* Right panel: Synced Lyrics display */}
      <div className="flex-[2] h-full flex flex-col z-10 relative px-6 md:px-12 py-10">
        <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
          <Mic2 className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-white">Live Synchronized Lyrics</h3>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 gap-2">
            <Music className="w-8 h-8 text-zinc-700" />
            <p>Lyrics not available for this song.</p>
          </div>
        ) : (
          <div 
            ref={lyricContainerRef}
            className="flex-1 overflow-y-auto space-y-6 pb-48 scrollbar-thin scrollbar-thumb-white/10"
            style={{ scrollSnapType: 'y proximity' }}
          >
            {lines.map((line, idx) => {
              const isActive = idx === currentLineIndex;
              const isPast = idx < currentLineIndex;
              return (
                <motion.div
                  key={idx}
                  animate={{ 
                    opacity: isActive ? 1 : isPast ? 0.5 : 0.25,
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "text-xl md:text-3xl font-heading font-extrabold cursor-pointer transition-colors duration-300 leading-snug outline-none py-1 origin-left",
                    isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]" : "text-white hover:text-white/80"
                  )}
                  onClick={() => {
                    // Jump progress to line start time
                    usePlayerStore.setState({ progress: line.time });
                  }}
                >
                  {line.text}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
