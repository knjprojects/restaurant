import { create } from 'zustand';

type MenuState= {//for selecting which categories to display on our restaurant menu
	menu: string;
    isViewing:boolean;
    label:string;
	setMenu: (menu: string) => void;
    setLabel: (menu: string) => void;
    setViewing: (isViewing: boolean) => void;
}

export const useMenuStore = create<MenuState>()(set => ({
	menu: 'all',
    isViewing:false,
    label:"Menu",
	setMenu: (menu: string) => set(state => ({ ...state, menu: menu })),
    setLabel: (label: string) => set(state => ({ ...state, label:label  })),
    setViewing: (inView: boolean) => set(state => ({ ...state, isViewing:inView })),
}));

