import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { Song } from '@/types';
import { usePlayerStore } from '@/store/usePlayerStore';
import { cn } from '../layout/Sidebar';

interface SongCardProps {
  song: Song;
  index?: number;
  featured?: boolean;
}

export default function SongCard({ song, index, featured }: SongCardProps) {
  const { currentSong, isPlaying, setCurrentSong, togglePlay } = usePlayerStore();
  const isCurrentSong = currentSong?.id === song.id;

  const handlePlay = () => {
    if (isCurrentSong) {
      togglePlay();
    } else {
      setCurrentSong(song);
    }
  };

  if (featured) {
    return (
      <div className="group relative rounded-2xl overflow-hidden cursor-pointer premium-shadow w-full aspect-[2/1] sm:aspect-[3/1]">
        <img 
          src={song.coverUrl} 
          alt={song.title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <p className="text-primary font-medium text-sm mb-2 drop-shadow-md">FEATURED TRACK</p>
          <h3 className="text-3xl font-heading font-bold text-white mb-1 drop-shadow-lg">{song.title}</h3>
          <p className="text-zinc-300 drop-shadow-md">{song.artistName}</p>
          
          <button 
            onClick={handlePlay}
            className="absolute bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            {isCurrentSong && isPlaying ? <Play className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
      {index !== undefined && (
        <span className="w-6 text-center text-sm font-medium text-zinc-500 group-hover:hidden">
          {isCurrentSong && isPlaying ? (
            <div className="flex items-end justify-center gap-0.5 h-4">
              <div className="w-1 bg-primary h-full animate-[bounce_1s_infinite]" />
              <div className="w-1 bg-primary h-2/3 animate-[bounce_1s_infinite_100ms]" />
              <div className="w-1 bg-primary h-4/5 animate-[bounce_1s_infinite_200ms]" />
            </div>
          ) : (
            index + 1
          )}
        </span>
      )}
      
      <div className={cn("relative rounded-md overflow-hidden", index !== undefined ? "w-10 h-10 group-hover:block" : "w-12 h-12")}>
        <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" />
        <div 
          onClick={handlePlay}
          className={cn(
            "absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity",
            (isCurrentSong || (index === undefined)) ? "opacity-0 group-hover:opacity-100" : (index !== undefined ? "opacity-0 hidden group-hover:flex group-hover:opacity-100" : "")
          )}
        >
          {isCurrentSong && isPlaying ? <Play className="w-4 h-4 text-white fill-current" /> : <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className={cn("text-sm font-medium truncate", isCurrentSong ? "text-primary" : "text-white")}>{song.title}</h4>
        <p className="text-xs text-zinc-400 truncate">{song.artistName}</p>
      </div>
      
      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="text-zinc-400 hover:text-white transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
      
      <span className="text-sm text-zinc-500 w-12 text-right">
        {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}
      </span>
    </div>
  );
}
