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
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Library from '@/pages/Library';
import Artist from '@/pages/Artist';
import Album from '@/pages/Album';
import Playlist from '@/pages/Playlist';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    document.getElementById('main-scroll-area')?.scrollTo(0, 0);
  }, [location.pathname]);

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
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="/album/:id" element={<Album />} />
              <Route path="/playlist/:id" element={<Playlist />} />
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
