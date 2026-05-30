import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, Compass, Heart, History, Plus, Music2 } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Compass, label: 'Explore', href: '/explore' },
  { icon: Library, label: 'Library', href: '/library' },
];

const secondaryNavItems = [
  { icon: Heart, label: 'Liked Songs', href: '/liked' },
  { icon: History, label: 'Recently Played', href: '/history' },
];

export default function Sidebar() {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  if (!isSidebarOpen) return null;

  return (
    <aside className="w-64 h-full flex flex-col bg-black/40 backdrop-blur-3xl border-r border-white/5 z-20">
      <div className="p-6">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center premium-shadow group-hover:scale-105 transition-transform duration-300">
            <Music2 className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-wide text-gradient">Shrezz</span>
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
                    ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
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
          <h3 className="px-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Your Library</h3>
          <nav className="space-y-1">
            {secondaryNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300",
                    isActive 
                      ? "bg-white/10 text-white" 
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
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Playlists</h3>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <nav className="space-y-1">
            {['Late Night Drives', 'Top Hits 2026', 'Focus Flow', 'Workout Mix'].map((playlist, i) => (
              <NavLink
                key={i}
                to={`/playlist/p${i+1}`}
                className="block px-4 py-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all truncate text-sm"
              >
                {playlist}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
