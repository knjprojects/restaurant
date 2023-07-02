
import { create } from 'zustand';
export type Order={

	orderId:string,
	itemId:string,
	price:number,
	description:string
}
type TempOrderState={
	tempOrder:Order[],
    addToTempOrder: (items:any)=> void;
	setInitialTempOrder: (order:	Order) => void;
	//setLoading: (bool: boolean) => void;
	//setError: (err: string) => void;
	//setUser: (user: User) => void;
}

export const useCartStore = create<TempOrderState>((set) => ({
	tempOrder:[],
	addToTempOrder: (items:any) => set((state:TempOrderState) => ({ tempOrder: [...state.tempOrder, items] })),
	setInitialTempOrder: (order:Order) => set(state => ({ tempOrder: [order] })),
}))