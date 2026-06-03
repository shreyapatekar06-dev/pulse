import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { Play, Shield, Zap, Sparkles, Award, Star, Compass, ArrowRight } from 'lucide-react';

const floatingCovers = [
  'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1621360841013-c76831f12560?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=200',
];

const testimonials = [
  {
    name: 'Emily Watson',
    role: 'Music Producer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    comment: 'PULSE completely redefined how I discover new sounds. The audio quality and the UI responsiveness are unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Connor',
    role: 'Audiophile',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    comment: 'The synced lyrics page is a masterpiece. I love the dark neon theme, it fits my setup perfectly!',
    rating: 5,
  },
  {
    name: 'Liam Neeson',
    role: 'Casual Listener',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    comment: 'Best design of any streaming service. It looks futuristic and the recommendation algorithm actually works.',
    rating: 5,
  },
];

function CountUp({ to, duration = 2, suffix = '' }: { to: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = to;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans relative selection:bg-primary selection:text-white">
      {/* Background Glowing Blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-5000" />
      <div className="absolute bottom-20 right-1/4 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none animate-pulse duration-7000" />
      <div className="absolute top-1/2 left-2/3 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 h-20 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">PULSE</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/discover')}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-semibold transition-all"
          >
            Launch Player
          </button>
          <button 
            onClick={() => navigate('/discover')}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary via-purple-600 to-secondary text-sm font-semibold hover:opacity-90 shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all flex items-center gap-2 group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-xs font-semibold tracking-wide text-zinc-300">INTELLIGENT MUSIC DISCOVERY</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight">
            Feel the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-secondary animate-gradient bg-[length:200%_auto]">
              Rhythm of AI
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Welcome to the future of audio. Immerse yourself in hyper-personalized playlists, real-time synchronized animated lyrics, and a gorgeous glassmorphism soundscape built for audiophiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => navigate('/discover')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary via-purple-600 to-secondary text-lg font-bold shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 transition-transform flex items-center justify-center gap-3 group"
            >
              <Play className="w-5 h-5 fill-white text-white" />
              Listen Free Now
            </button>
            <button 
              onClick={() => navigate('/discover')}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Explore Discover
              <Compass className="w-5 h-5 text-zinc-300" />
            </button>
          </div>
        </motion.div>

        {/* Floating Covers Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative w-full max-w-[500px] h-[400px] hidden md:block"
        >
          <div className="absolute inset-0 grid grid-cols-3 gap-4 transform rotate-12 scale-95 hover:rotate-6 transition-transform duration-700">
            {floatingCovers.map((cover, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, i % 2 === 0 ? -15 : 15, 0],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 premium-shadow group cursor-pointer"
              >
                <img src={cover} alt="Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-3">
                  <span className="text-xs font-semibold">Track #{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-black/30 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
              <CountUp to={40} suffix="M+" />
            </h3>
            <p className="text-zinc-500 text-sm font-semibold tracking-wider uppercase">Active Listeners</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
              <CountUp to={120} suffix="M+" />
            </h3>
            <p className="text-zinc-500 text-sm font-semibold tracking-wider uppercase">Tracks Catalog</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
              <CountUp to={320} suffix="k+" />
            </h3>
            <p className="text-zinc-500 text-sm font-semibold tracking-wider uppercase">Independent Artists</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-secondary">
              <CountUp to={99.9} duration={1.5} suffix="%" />
            </h3>
            <p className="text-zinc-500 text-sm font-semibold tracking-wider uppercase">Uptime Reliability</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Why Audiophiles Choose PULSE</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Discover the state-of-the-art features making PULSE the fastest-growing music platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ultra HD Audio</h3>
            <p className="text-zinc-400">Stream lossless FLAC audio at up to 24-bit/192kHz. Hear every instrument as the artist intended.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl relative overflow-hidden group hover:border-pink-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 text-pink-500 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart AI Radio</h3>
            <p className="text-zinc-400">Our deep learning recommendation engine maps your preferences and introduces you to new favorites seamlessly.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl relative overflow-hidden group hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lyrics Sync & Visuals</h3>
            <p className="text-zinc-400">Watch animated lyrics slide across dynamic artwork backdrops in beautiful, high-fidelity synchronization.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">What Our Community Says</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Join millions of listeners enjoying their soundtracks on PULSE.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl flex flex-col justify-between hover:scale-[1.02] transition-transform">
                <div className="space-y-4">
                  <div className="flex gap-1 text-pink-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pink-500" />
                    ))}
                  </div>
                  <p className="text-zinc-300 italic text-sm md:text-base leading-relaxed">"{t.comment}"</p>
                </div>
                <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/5">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">{t.name}</h4>
                    <p className="text-zinc-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight">
            Ready to hear the difference?
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Start streaming PULSE today for free. No credit card required. Cancel anytime.
          </p>
          <button 
            onClick={() => navigate('/discover')}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-primary via-purple-600 to-secondary text-lg font-bold shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:scale-105 transition-transform"
          >
            Launch Web App
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-heading font-bold text-white tracking-wide">PULSE</span>
          </div>
          <p className="text-xs">&copy; 2026 PULSE Inc. All rights reserved. Designed with pure glassmorphism aesthetics.</p>
        </div>
      </footer>
    </div>
  );
}
