import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  isRightPanelOpen: boolean;
  isCommandPaletteOpen: boolean;
  isLyricsOpen: boolean;
  isQueueOpen: boolean;
  
  toggleSidebar: () => void;
  toggleRightPanel: () => void;
  setCommandPaletteOpen: (isOpen: boolean) => void;
  toggleLyrics: () => void;
  toggleQueue: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  isRightPanelOpen: true,
  isCommandPaletteOpen: false,
  isLyricsOpen: false,
  isQueueOpen: false,

  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleRightPanel: () => set((state) => ({ isRightPanelOpen: !state.isRightPanelOpen })),
  setCommandPaletteOpen: (isOpen) => set({ isCommandPaletteOpen: isOpen }),
  toggleLyrics: () => set((state) => ({ isLyricsOpen: !state.isLyricsOpen, isQueueOpen: false })),
  toggleQueue: () => set((state) => ({ isQueueOpen: !state.isQueueOpen, isLyricsOpen: false })),
}));
