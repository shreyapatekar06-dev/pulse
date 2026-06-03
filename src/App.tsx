import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import RightPanel from '@/components/layout/RightPanel';
import MusicPlayer from '@/components/layout/MusicPlayer';
import CommandPalette from '@/components/ui/CommandPalette';

// Pages
import Landing from '@/pages/Landing';
import Discover from '@/pages/Discover';
import Search from '@/pages/Search';
import Artists from '@/pages/Artists';
import Artist from '@/pages/Artist';
import Albums from '@/pages/Albums';
import Album from '@/pages/Album';
import Playlist from '@/pages/Playlist';
import Lyrics from '@/pages/Lyrics';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    document.getElementById('main-scroll-area')?.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLandingPage) {
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Main Layout */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <Navbar />
        
        <main 
          id="main-scroll-area"
          className="flex-1 overflow-y-auto overflow-x-hidden relative"
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/discover" element={<Discover />} />
              <Route path="/search" element={<Search />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/album/:id" element={<Album />} />
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="/lyrics" element={<Lyrics />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>

      <RightPanel />
      
      <MusicPlayer />
      <CommandPalette />
    </div>
  );
}

export default App;
