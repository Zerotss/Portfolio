import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}));

export default useMenuStore;