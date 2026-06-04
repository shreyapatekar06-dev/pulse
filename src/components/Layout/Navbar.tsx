import { Search, Bell, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUIStore } from '@/store/useUIStore';

export default function Navbar() {
  const navigate = useNavigate();
  const { toggleSidebar, toggleRightPanel, setCommandPaletteOpen } = useUIStore();

  return (
    <header className="h-20 w-full flex items-center justify-between px-6 sticky top-0 z-30 bg-background/60 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-white/10 transition-colors md:hidden">
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => navigate(-1)} 
            className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white/70" />
          </button>
          <button 
            onClick={() => navigate(1)} 
            className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white/70" />
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-8 relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-zinc-400 group-focus-within:text-white transition-colors" />
        </div>
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-12 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all premium-shadow"
          onClick={() => setCommandPaletteOpen(true)}
          readOnly
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <span className="text-xs text-zinc-500 border border-zinc-700 rounded px-1.5 py-0.5">Ctrl K</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
          <Bell className="w-5 h-5 text-zinc-300" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        </button>
        
        <button 
          onClick={toggleRightPanel}
          className="flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" 
            alt="User" 
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="text-sm font-medium hidden lg:block">Alex Chen</span>
        </button>
      </div>
    </header>
  );
}
