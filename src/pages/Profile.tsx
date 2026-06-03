import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Flame, Music, Heart, ChevronRight, Share2, Settings } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { mockSongs, mockArtists, mockPlaylists } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

const statsData = [
  { day: 'Mon', minutes: 120 },
  { day: 'Tue', minutes: 80 },
  { day: 'Wed', minutes: 190 },
  { day: 'Thu', minutes: 140 },
  { day: 'Fri', minutes: 220 },
  { day: 'Sat', minutes: 310 },
  { day: 'Sun', minutes: 240 },
];

const badges = [
  { id: 'b1', name: 'Synth pioneer', icon: Flame, desc: 'Listened to 50+ hours of Synthwave', color: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
  { id: 'b2', name: 'Early adopter', icon: Award, desc: 'Joined PULSE during beta phase', color: 'text-primary bg-primary/10 border-primary/20' },
  { id: 'b3', name: 'Night rider', icon: Clock, desc: 'Listening after midnight on 10 nights', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
  { id: 'b4', name: 'Superfan', icon: Heart, desc: 'Top 0.5% listener of The Weeknd', color: 'text-pink-500 bg-pink-500/10 border-pink-500/20' },
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 md:p-8 pt-6 pb-32"
    >
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden h-48 md:h-64 mb-8 border border-white/5 premium-shadow">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-pink-500/20 to-secondary/30" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        
        {/* User Info overlay */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col sm:flex-row items-center gap-6">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" 
            alt="Alex Chen" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-background premium-shadow"
          />
          <div className="text-center sm:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <h1 className="text-3xl font-heading font-extrabold text-white">Alex Chen</h1>
              <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary">PRO</span>
            </div>
            <p className="text-sm text-zinc-400">Listener since March 2026 • 248 tracks loved</p>
            
            <div className="flex items-center gap-4 justify-center sm:justify-start text-xs pt-1">
              <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium transition-all">
                <Share2 className="w-3.5 h-3.5" /> Share Profile
              </button>
              <button onClick={() => navigate('/settings')} className="p-2 rounded-full bg-white/10 hover:bg-white/15 text-white transition-all">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of stats & graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Analytics Card */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Weekly Activity</h3>
              <p className="text-xs text-zinc-500">Listening duration in minutes</p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-xs text-zinc-500 font-medium">TOTAL TIME</p>
                <p className="text-lg font-extrabold text-white">20.6 hrs</p>
              </div>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={statsData}>
                <defs>
                  <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="minutes" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorMinutes)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Badges card */}
        <div className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl">
          <h3 className="text-xl font-bold text-white mb-6">Achievements</h3>
          <div className="space-y-4">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.id} className="flex gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors items-center">
                  <div className={`p-3 rounded-xl border flex items-center justify-center ${badge.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-sm">{badge.name}</h4>
                    <p className="text-xs text-zinc-400 truncate">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Favorite Artists & Playlists lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Favorite Artists</h3>
            <button onClick={() => navigate('/artists')} className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              Find more <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {mockArtists.slice(0, 3).map((artist) => (
              <div 
                key={artist.id} 
                onClick={() => navigate(`/artist/${artist.id}`)}
                className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <img src={artist.imageUrl} alt={artist.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                  <div>
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors text-sm">{artist.name}</h4>
                    <p className="text-xs text-zinc-400">{(artist.monthlyListeners / 1000000).toFixed(1)}M listeners</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Favorite Playlists</h3>
          </div>
          <div className="space-y-3">
            {mockPlaylists.slice(0, 3).map((p) => (
              <div 
                key={p.id} 
                onClick={() => navigate(`/playlist/${p.id}`)}
                className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <img src={p.coverUrl} alt={p.name} className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                  <div>
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors text-sm">{p.name}</h4>
                    <p className="text-xs text-zinc-400">{p.likes.toLocaleString()} likes</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
