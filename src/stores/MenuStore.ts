import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
  isMobile: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  setIsMobile: (isMobile:boolean) => void;
}

const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  isMobile:false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
  setIsMobile: (isMobile:boolean) => set({ isMobile: isMobile }),
}));

export default useMenuStore;