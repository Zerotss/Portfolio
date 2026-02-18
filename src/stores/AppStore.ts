import { create } from 'zustand';

export type AppStateType = 'Landing' | 'TransitionDOWN' | 'Main';

interface AppState {
    currentState: AppStateType;
    setState: (newState: AppStateType) => void;
    isStarted: boolean;
    setStarted: (aux: boolean) => void;

}

export const useAppStore = create<AppState>((set) => ({
    currentState: 'Landing',
    setState: (newState) => set({ currentState: newState }),
    isStarted: false,
    setStarted: (aux) => set({ isStarted: aux }),

}));
