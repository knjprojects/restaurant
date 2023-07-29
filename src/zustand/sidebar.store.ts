import { User } from "firebase/auth";
import { create } from 'zustand';

type TabState= {//we created our authstate based on firebase useAuth() return types
	current:string;
    isCollapsed: boolean;
    setCollapse: (bool: boolean) => void;
	setCurrent: (curr: string) => void;
}
//our above proptype/interface declares a somewhat reducer like set functions
//
export const useTabStore = create<TabState>()(set => ({
    current: '/',
    isCollapsed:true,
	

    setCurrent: (curr: string) => set(state => ({ ...state, current: curr })),
    setCollapse:(bool:boolean)=>set(state=>({...state,isCollapsed:bool}))
}));

