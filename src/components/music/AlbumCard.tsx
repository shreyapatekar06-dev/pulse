import React from 'react';
import { Play } from 'lucide-react';
import { Album, Playlist } from '@/types';
import { useNavigate } from 'react-router-dom';

interface AlbumCardProps {
  item: Album | Playlist;
  type: 'album' | 'playlist';
}

export default function AlbumCard({ item, type }: AlbumCardProps) {
  const navigate = useNavigate();
  const isPlaylist = type === 'playlist';

  const handleClick = () => {
    navigate(`/${type}/${item.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="group p-4 rounded-2xl bg-surface-light hover:bg-surface-hover transition-colors cursor-pointer border border-transparent hover:border-white/5"
    >
      <div className="relative aspect-square mb-4 rounded-xl overflow-hidden premium-shadow">
        <img 
          src={item.coverUrl} 
          alt={isPlaylist ? (item as Playlist).name : (item as Album).title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
          <button 
            className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 shadow-[0_4px_15px_rgba(139,92,246,0.5)]"
            onClick={(e) => {
              e.stopPropagation();
              // In a real app, this would play the album/playlist
            }}
          >
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </button>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-white truncate mb-1">
          {isPlaylist ? (item as Playlist).name : (item as Album).title}
        </h4>
        <p className="text-sm text-zinc-400 truncate">
          {isPlaylist 
            ? `By ${(item as Playlist).creatorName}` 
            : `${(item as Album).releaseYear} • ${(item as Album).artistName}`}
        </p>
      </div>
    </div>
  );
}
