import { User } from "firebase/auth";
import { create } from 'zustand';

type AuthState= {//we created our authstate based on firebase useAuth() return types
	isLoading: boolean;
	error: string;
	user: User;
	setLoading: (bool: boolean) => void;
	setError: (err: string) => void;
	setUser: (user: User) => void;
}
//our above proptype/interface declares a somewhat reducer like set functions
//
export const useAuthStore = create<AuthState>()(set => ({
	isLoading: false,
	error: '',
	user: {
		displayName:'nigga'
	} as User,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (err: string) => set(state => ({ ...state, error: err })),
	setUser: (user: User) => set(state => ({ ...state, user: user })),
}));

