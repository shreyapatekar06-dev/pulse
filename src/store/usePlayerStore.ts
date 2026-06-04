import { create } from 'zustand';
import { Song } from '../types';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  queue: Song[];
  queueIndex: number;
  isShuffled: boolean;
  repeatMode: 'none' | 'all' | 'one';
  
  // Actions
  setCurrentSong: (song: Song) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  setQueue: (songs: Song[]) => void;
  addToQueue: (song: Song) => void;
  nextSong: () => void;
  prevSong: () => void;
  toggleShuffle: () => void;
  cycleRepeatMode: () => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  isPlaying: false,
  volume: 0.8,
  progress: 0,
  queue: [],
  queueIndex: -1,
  isShuffled: false,
  repeatMode: 'none',

  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true, progress: 0 }),
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  togglePlay: () => set((state) => {
    if (!state.currentSong) return state;
    return { isPlaying: !state.isPlaying };
  }),
  setVolume: (volume) => set({ volume }),
  setProgress: (progress) => set({ progress }),
  setQueue: (songs) => set({ queue: songs, queueIndex: 0 }),
  addToQueue: (song) => set((state) => ({ queue: [...state.queue, song] })),
  
  nextSong: () => set((state) => {
    if (state.queue.length === 0) return state;
    
    let nextIndex = state.queueIndex + 1;
    if (nextIndex >= state.queue.length) {
      if (state.repeatMode === 'all') {
        nextIndex = 0;
      } else {
        return { isPlaying: false, progress: 0 };
      }
    }
    
    return {
      queueIndex: nextIndex,
      currentSong: state.queue[nextIndex],
      progress: 0,
      isPlaying: true
    };
  }),
  
  prevSong: () => set((state) => {
    if (state.queue.length === 0) return state;
    if (state.progress > 3) return { progress: 0 }; // Restart current song if played more than 3s
    
    let prevIndex = state.queueIndex - 1;
    if (prevIndex < 0) {
      if (state.repeatMode === 'all') {
        prevIndex = state.queue.length - 1;
      } else {
        prevIndex = 0;
      }
    }
    
    return {
      queueIndex: prevIndex,
      currentSong: state.queue[prevIndex],
      progress: 0,
      isPlaying: true
    };
  }),
  
  toggleShuffle: () => set((state) => ({ isShuffled: !state.isShuffled })),
  
  cycleRepeatMode: () => set((state) => {
    const modes: ('none' | 'all' | 'one')[] = ['none', 'all', 'one'];
    const nextIndex = (modes.indexOf(state.repeatMode) + 1) % modes.length;
    return { repeatMode: modes[nextIndex] };
  }),
}));
