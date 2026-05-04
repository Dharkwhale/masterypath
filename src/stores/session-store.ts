import { create } from "zustand";
import type { Session } from "@/types/learning";

interface SessionState {
  currentSession: Session | null;
  progressMarkers: string[];
  setCurrentSession: (session: Session) => void;
  markModuleComplete: (moduleId: string) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentSession: null,
  progressMarkers: [],

  setCurrentSession: (session) =>
    set({
      currentSession: session,
      progressMarkers: session.progressMarkers ?? [],
    }),

  markModuleComplete: (moduleId) =>
    set((s) => ({
      progressMarkers: s.progressMarkers.includes(moduleId)
        ? s.progressMarkers
        : [...s.progressMarkers, moduleId],
    })),

  clearSession: () => set({ currentSession: null, progressMarkers: [] }),
}));
