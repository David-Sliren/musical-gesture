import { create } from "zustand";

// Store global para manejar el estado de la música y eventos de gestos.
export const usePlayerStore = create((set, get) => ({
  player: null,
  currentTrack: null,
  isPlaying: false,
  playList: [],
  duration: 0,
  currentTime: 0,
  lastGesture: null, // Para futura integración de gestos (e.g., 'swipe-left', 'swipe-right')

  // Acciones
  playTrack: (track) => set({ currentTrack: track, isPlaying: true }),

  setPlayer: (player) => set({ player, duration: player.getDuration }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  pause: () =>
    set((state) => {
      state.player?.pauseVideo();
      return { isPlaying: false };
    }),
  play: () =>
    set((state) => {
      state.player.playVideo();
      return { isPlaying: true };
    }),
  previous: () =>
    set((state) => {
      state.player.previousVideo();
      return {};
    }),
  next: () =>
    set((state) => {
      state.player.nextVideo();
      return {};
    }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setGesture: (gesture) => set({ lastGesture: gesture }),
  clearGesture: () => set({ lastGesture: null }),

  viewplayer: () =>
    get().player ? console.log(get().player) : console.log("no"),
}));
