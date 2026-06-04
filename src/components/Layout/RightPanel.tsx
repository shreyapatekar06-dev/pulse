import { Users, UserPlus, Play } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { mockFriendActivity } from '@/data/mockData';

export default function RightPanel() {
  const isRightPanelOpen = useUIStore((state) => state.isRightPanelOpen);

  if (!isRightPanelOpen) return null;

  return (
    <aside className="w-72 h-full flex flex-col glass-panel z-20 border-l border-white/5">
      <div className="p-6 pb-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading font-semibold text-lg flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Friend Activity
          </h2>
          <button className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
            <UserPlus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 px-4 overflow-y-auto space-y-4">
        {mockFriendActivity.map((activity, i) => (
          <div key={i} className="group p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer flex gap-3">
            <div className="relative">
              <img 
                src={activity.userAvatar} 
                alt={activity.userName} 
                className="w-10 h-10 rounded-full object-cover border border-white/10"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-surface flex items-center justify-center">
                <Play className="w-2 h-2 text-white fill-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white truncate">{activity.userName}</p>
                <span className="text-xs text-zinc-500">{activity.timestamp}</span>
              </div>
              <p className="text-xs text-zinc-400 truncate mt-0.5">{activity.song.title}</p>
              <p className="text-xs text-zinc-500 truncate">{activity.song.artistName}</p>
            </div>
          </div>
        ))}
        
        <div className="p-4 mt-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 premium-shadow">
          <p className="text-sm text-zinc-300 text-center mb-4">Connect with more friends to see what they're listening to.</p>
          <button className="w-full py-2 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform text-sm">
            Find Friends
          </button>
        </div>
      </div>
    </aside>
  );
}
