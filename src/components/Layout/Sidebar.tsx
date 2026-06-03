import React from 'react';
import { NavLink } from 'react-router-dom';
import { Compass, Search, User, Disc, Mic2, FolderHeart, Settings, Play, Plus, Zap } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: Compass, label: 'Discover', href: '/discover' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: User, label: 'Artists', href: '/artists' },
  { icon: Disc, label: 'Albums', href: '/albums' },
];

const secondaryNavItems = [
  { icon: Mic2, label: 'Lyrics Room', href: '/lyrics' },
  { icon: FolderHeart, label: 'My Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  if (!isSidebarOpen) return null;

  return (
    <aside className="w-64 h-full flex flex-col bg-black/40 backdrop-blur-3xl border-r border-white/5 z-20">
      <div className="p-6">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-wide text-gradient">PULSE</span>
        </NavLink>
      </div>

      <div className="flex-1 px-4 py-2 space-y-6 overflow-y-auto">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300",
                  isActive 
                    ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] border-l-2 border-primary" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div>
          <h3 className="px-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Your Space</h3>
          <nav className="space-y-1">
            {secondaryNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300",
                    isActive 
                      ? "bg-white/10 text-white border-l-2 border-primary" 
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <div className="flex items-center justify-between px-4 mb-3">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Featured Playlists</h3>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <nav className="space-y-1">
            {[
              { name: 'Chill Nights', id: 'p1' },
              { name: 'Midnight Drive', id: 'p2' },
              { name: 'Focus Mode', id: 'p3' },
              { name: 'Workout Energy', id: 'p4' },
              { name: 'Lo-Fi Dreams', id: 'p5' },
            ].map((playlist) => (
              <NavLink
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-2.5 rounded-xl transition-all truncate text-sm",
                    isActive 
                      ? "bg-primary/10 text-primary border-l-2 border-primary" 
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )
                }
              >
                {playlist.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
